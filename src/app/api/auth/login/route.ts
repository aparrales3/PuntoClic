// =============================================================================
// PUNTOCLICK — API: Login
// POST /api/auth/login
// Verifies email + bcrypt password hash, creates JWT session cookie
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/infrastructure/db/client';
import { users, talentProfiles, companyProfiles } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { createSession, setSessionCookie } from '@/infrastructure/auth/session';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Correo y contraseña son obligatorios' },
        { status: 400 }
      );
    }

    // Find user by email
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email.toLowerCase().trim()))
      .limit(1);

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciales incorrectas. Verifica tu correo y contraseña.' },
        { status: 401 }
      );
    }

    if (user.status === 'suspended') {
      return NextResponse.json(
        { error: 'Esta cuenta ha sido suspendida. Contacta al soporte.' },
        { status: 403 }
      );
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Credenciales incorrectas. Verifica tu correo y contraseña.' },
        { status: 401 }
      );
    }

    // Fetch profile name + photo
    let name = email.split('@')[0];
    let photoUrl: string | undefined;

    if (user.role === 'talento') {
      const [profile] = await db
        .select({ firstName: talentProfiles.firstName, lastName: talentProfiles.lastName, photoUrl: talentProfiles.photoUrl })
        .from(talentProfiles)
        .where(eq(talentProfiles.userId, user.id))
        .limit(1);
      if (profile) {
        name = `${profile.firstName} ${profile.lastName}`.trim() || name;
        photoUrl = profile.photoUrl || undefined;
      }
    } else if (user.role === 'empresa') {
      const [profile] = await db
        .select({ companyName: companyProfiles.companyName, logoUrl: companyProfiles.logoUrl })
        .from(companyProfiles)
        .where(eq(companyProfiles.userId, user.id))
        .limit(1);
      if (profile) {
        name = profile.companyName || name;
        photoUrl = profile.logoUrl || undefined;
      }
    }

    // Create session
    const token = await createSession({
      userId: user.id,
      email: user.email,
      role: user.role as 'talento' | 'empresa' | 'institucion' | 'admin',
      name,
      photoUrl,
    });

    await setSessionCookie(token);

    // Determine dashboard redirect
    const dashboardMap: Record<string, string> = {
      talento: '/talento/dashboard',
      empresa: '/empresa/dashboard',
      institucion: '/institucion/dashboard',
      admin: '/admin/dashboard',
    };

    return NextResponse.json({
      success: true,
      userId: user.id,
      email: user.email,
      role: user.role,
      name,
      photoUrl,
      redirectTo: dashboardMap[user.role] || '/talento/dashboard',
      message: 'Inicio de sesión exitoso',
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error interno del servidor';
    console.error('[Login API Error]:', error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// Logout
export async function DELETE() {
  const { destroySession } = await import('@/infrastructure/auth/session');
  await destroySession();
  return NextResponse.json({ success: true, message: 'Sesión cerrada' });
}
