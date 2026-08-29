// =============================================================================
// PUNTOCLICK — API: Get User Profile by ID
// GET /api/users/[id] — Public profile view
// GET /api/users/me — Authenticated user's own full profile
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/infrastructure/db/client';
import {
  users,
  talentProfiles,
  companyProfiles,
  institutionProfiles,
} from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '@/infrastructure/auth/session';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const isSelf = id === 'me';

    let targetId = id;

    if (isSelf) {
      const session = await getSession();
      if (!session) {
        return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
      }
      targetId = session.userId;
    }

    // Fetch base user
    const [user] = await db
      .select({
        id: users.id,
        email: users.email,
        role: users.role,
        status: users.status,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.id, targetId))
      .limit(1);

    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    // Fetch role-specific profile
    let profile = null;

    if (user.role === 'talento') {
      const [p] = await db
        .select()
        .from(talentProfiles)
        .where(eq(talentProfiles.userId, user.id))
        .limit(1);
      profile = p || null;
    } else if (user.role === 'empresa') {
      const [p] = await db
        .select()
        .from(companyProfiles)
        .where(eq(companyProfiles.userId, user.id))
        .limit(1);
      profile = p || null;
    } else if (user.role === 'institucion') {
      const [p] = await db
        .select()
        .from(institutionProfiles)
        .where(eq(institutionProfiles.userId, user.id))
        .limit(1);
      profile = p || null;
    }

    return NextResponse.json({
      success: true,
      user: {
        ...user,
        // Don't expose email in public profiles (unless self)
        email: isSelf ? user.email : undefined,
      },
      profile,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error interno';
    console.error('[User Profile API Error]:', error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
