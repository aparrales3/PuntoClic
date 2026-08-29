// =============================================================================
// PUNTOCLICK — API: Register User
// POST /api/auth/register
// Creates user in Neon Postgres + hashes password with bcryptjs
// Sends welcome email via Resend
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/infrastructure/db/client';
import { users, talentProfiles, companyProfiles, institutionProfiles } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { createSession, setSessionCookie } from '@/infrastructure/auth/session';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      email,
      password,
      role,
      // Talent fields
      firstName,
      lastName,
      bio,
      photoUrl,
      cvUrl,
      skills,
      location,
      contractTypes,
      workModes,
      currentlyWorking,
      currentJobTitle,
      educationLevel,
      // Company fields
      companyName,
      legalName,
      sector,
      description,
      logoUrl,
      website,
      painPoints,
      employeeCount,
      // Institution fields
      institutionName,
      institutionType,
    } = body;

    // Validate required fields
    if (!email || !password || !role) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios: email, contraseña y rol' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email.toLowerCase().trim()))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'Ya existe una cuenta con este correo electrónico' },
        { status: 409 }
      );
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user record
    const [newUser] = await db
      .insert(users)
      .values({
        email: email.toLowerCase().trim(),
        passwordHash,
        role,
        status: 'active',
      })
      .returning({ id: users.id, email: users.email, role: users.role });

    // Create role-specific profile
    if (role === 'talento') {
      await db.insert(talentProfiles).values({
        userId: newUser.id,
        firstName: firstName || '',
        lastName: lastName || '',
        bio: bio || null,
        photoUrl: photoUrl || null,
        cvUrl: cvUrl || null,
        skills: skills || [],
        location: location || null,
        contractTypes: contractTypes || [],
        workModes: workModes || [],
        currentlyWorking: currentlyWorking || false,
        currentJobTitle: currentJobTitle || null,
        educationLevel: educationLevel || null,
        completionPct: 100,
      });
    } else if (role === 'empresa') {
      await db.insert(companyProfiles).values({
        userId: newUser.id,
        companyName: companyName || '',
        legalName: legalName || null,
        sector: sector || '',
        description: description || null,
        logoUrl: logoUrl || null,
        website: website || null,
        painPoints: painPoints || [],
        location: location || null,
        employeeCount: employeeCount || null,
      });
    } else if (role === 'institucion') {
      await db.insert(institutionProfiles).values({
        userId: newUser.id,
        institutionName: institutionName || '',
        type: institutionType || 'otro',
        description: description || null,
        logoUrl: logoUrl || null,
        website: website || null,
        location: location || null,
      });
    }

    // Create session JWT
    const fullName = firstName
      ? `${firstName} ${lastName || ''}`.trim()
      : companyName || institutionName || email.split('@')[0];

    const token = await createSession({
      userId: newUser.id,
      email: newUser.email,
      role: newUser.role as 'talento' | 'empresa' | 'institucion' | 'admin',
      name: fullName,
      photoUrl: photoUrl || undefined,
    });

    await setSessionCookie(token);

    // Send welcome email via Resend (fire-and-forget)
    fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/email/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'welcome',
        to: email,
        name: fullName,
        role,
      }),
    }).catch((err) => console.error('[Welcome email failed]:', err));

    return NextResponse.json({
      success: true,
      userId: newUser.id,
      email: newUser.email,
      role: newUser.role,
      name: fullName,
      message: 'Cuenta creada exitosamente',
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error interno del servidor';
    console.error('[Register API Error]:', error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
