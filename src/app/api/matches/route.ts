// =============================================================================
// PUNTOCLICK — API: Matches & Connections
// POST /api/matches — Connect company with talent
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/infrastructure/db/client';
import { matches, companyProfiles } from '@/infrastructure/db/schema';
import { eq, and } from 'drizzle-orm';
import { getSession } from '@/infrastructure/auth/session';

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'empresa') {
      return NextResponse.json(
        { error: 'Debes iniciar sesión como empresa para solicitar una conexión' },
        { status: 403 }
      );
    }

    const { talentId } = await req.json();
    if (!talentId) {
      return NextResponse.json({ error: 'Falta talentId' }, { status: 400 });
    }

    // Get company profile
    const [company] = await db
      .select({ id: companyProfiles.id, companyName: companyProfiles.companyName })
      .from(companyProfiles)
      .where(eq(companyProfiles.userId, session.userId))
      .limit(1);

    if (!company) {
      return NextResponse.json({ error: 'Perfil de empresa no encontrado' }, { status: 404 });
    }

    // Check if match already exists
    const [existing] = await db
      .select()
      .from(matches)
      .where(
        and(
          eq(matches.talentId, talentId),
          eq(matches.companyId, company.id)
        )
      )
      .limit(1);

    if (existing) {
      // Update status to company_interested
      await db
        .update(matches)
        .set({
          status: 'company_interested',
          companySeenAt: new Date(),
          updatedAt: new Date(),
        })
        .where(eq(matches.id, existing.id));

      return NextResponse.json({
        success: true,
        status: 'company_interested',
        message: '¡Interés enviado al talento exitosamente!',
      });
    }

    // Create new match record
    await db.insert(matches).values({
      talentId,
      companyId: company.id,
      status: 'company_interested',
      scoreTotal: 92,
      scoreBreakdown: {
        skillsScore: 90,
        workModeScore: 95,
        locationScore: 90,
        matchedSkills: ['Afinidad directa'],
      },
      companySeenAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      status: 'company_interested',
      message: '¡Conexión solicitada con éxito!',
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error al conectar';
    console.error('[Matches API Error]:', error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
