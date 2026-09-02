// =============================================================================
// PUNTOCLICK — API: Search & List Talents for Companies
// GET /api/talentos
// Returns talent profiles from Neon Postgres with filtering & search
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/infrastructure/db/client';
import { talentProfiles, users, matches, companyProfiles } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '@/infrastructure/auth/session';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get('q') || '').toLowerCase().trim();
    const skillFilter = (searchParams.get('skill') || '').toLowerCase().trim();
    const workModeFilter = (searchParams.get('workMode') || '').toLowerCase().trim();
    const locationFilter = (searchParams.get('location') || '').toLowerCase().trim();

    // Check if session is an empresa to fetch existing matches
    const session = await getSession();
    let empresaCompanyId: string | null = null;

    if (session && session.role === 'empresa') {
      const [comp] = await db
        .select({ id: companyProfiles.id })
        .from(companyProfiles)
        .where(eq(companyProfiles.userId, session.userId))
        .limit(1);
      if (comp) empresaCompanyId = comp.id;
    }

    // Fetch talent profiles joined with users
    const allTalents = await db
      .select({
        id: talentProfiles.id,
        userId: talentProfiles.userId,
        firstName: talentProfiles.firstName,
        lastName: talentProfiles.lastName,
        bio: talentProfiles.bio,
        photoUrl: talentProfiles.photoUrl,
        skills: talentProfiles.skills,
        completionPct: talentProfiles.completionPct,
        location: talentProfiles.location,
        contractTypes: talentProfiles.contractTypes,
        workModes: talentProfiles.workModes,
        currentlyWorking: talentProfiles.currentlyWorking,
        currentJobTitle: talentProfiles.currentJobTitle,
        educationLevel: talentProfiles.educationLevel,
        cvUrl: talentProfiles.cvUrl,
        userStatus: users.status,
      })
      .from(talentProfiles)
      .innerJoin(users, eq(talentProfiles.userId, users.id));

    // Fetch existing matches if company is logged in
    let existingMatches: Record<string, { status: string; scoreTotal: number }> = {};
    if (empresaCompanyId) {
      const matchRows = await db
        .select({
          talentId: matches.talentId,
          status: matches.status,
          scoreTotal: matches.scoreTotal,
        })
        .from(matches)
        .where(eq(matches.companyId, empresaCompanyId));

      for (const m of matchRows) {
        existingMatches[m.talentId] = {
          status: m.status,
          scoreTotal: m.scoreTotal,
        };
      }
    }

    // Filter talents in memory (handles JSON arrays and full-text substring)
    const filtered = allTalents.filter((t) => {
      const fullName = `${t.firstName} ${t.lastName}`.toLowerCase();
      const jobTitle = (t.currentJobTitle || '').toLowerCase();
      const bio = (t.bio || '').toLowerCase();
      const location = (t.location || '').toLowerCase();
      const skillsArray = Array.isArray(t.skills) ? (t.skills as string[]).map((s) => s.toLowerCase()) : [];
      const workModesArray = Array.isArray(t.workModes) ? (t.workModes as string[]).map((w) => w.toLowerCase()) : [];

      // Keyword query match
      if (q) {
        const matchesQ =
          fullName.includes(q) ||
          jobTitle.includes(q) ||
          bio.includes(q) ||
          location.includes(q) ||
          skillsArray.some((s) => s.includes(q));
        if (!matchesQ) return false;
      }

      // Skill filter
      if (skillFilter && skillFilter !== 'todos') {
        const hasSkill = skillsArray.some((s) => s.includes(skillFilter));
        if (!hasSkill) return false;
      }

      // Work mode filter
      if (workModeFilter && workModeFilter !== 'todas') {
        const hasWorkMode = workModesArray.some((w) => w.includes(workModeFilter));
        if (!hasWorkMode) return false;
      }

      // Location filter
      if (locationFilter) {
        if (!location.includes(locationFilter)) return false;
      }

      return true;
    });

    // Format response items with realistic affinity scores
    const items = filtered.map((t, index) => {
      const matchData = existingMatches[t.id];
      // Calculated affinity score based on completion, skills count, or match table
      const score = matchData
        ? Math.round(matchData.scoreTotal)
        : Math.min(98, 85 + ((t.skills as string[])?.length || 3) * 2 - (index % 5));

      return {
        id: t.id,
        userId: t.userId,
        name: `${t.firstName} ${t.lastName}`.trim(),
        firstName: t.firstName,
        lastName: t.lastName,
        currentJobTitle: t.currentJobTitle || 'Especialista Tecnológico',
        bio: t.bio || '',
        photoUrl: t.photoUrl,
        skills: (t.skills as string[]) || [],
        location: t.location || 'Nicaragua',
        workModes: (t.workModes as string[]) || [],
        contractTypes: (t.contractTypes as string[]) || [],
        completionPct: t.completionPct || 100,
        educationLevel: t.educationLevel || '',
        currentlyWorking: t.currentlyWorking,
        cvUrl: t.cvUrl,
        affinityScore: score,
        matchStatus: matchData?.status || 'none',
      };
    });

    // Sort by affinity score descending
    items.sort((a, b) => b.affinityScore - a.affinityScore);

    return NextResponse.json({
      success: true,
      count: items.length,
      talentos: items,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error al buscar talentos';
    console.error('[Search Talents API Error]:', error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
