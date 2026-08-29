// =============================================================================
// PUNTOCLICK — Application: Match Calculator Use Case
// Algoritmo central de matching talento ↔ empresa
// =============================================================================

import type { TalentProfile } from '@/domain/entities/user';
import type { CompanyProfile } from '@/domain/entities/user';
import type { Opportunity } from '@/domain/entities/opportunity';
import type { MatchScore } from '@/domain/entities/match';

export interface CalculateMatchInput {
  talent: TalentProfile;
  company: CompanyProfile;
  opportunity?: Opportunity;
}

/**
 * Calcula el score de match entre un talento y una empresa/oportunidad.
 *
 * Algoritmo:
 * - 50% habilidades coincidentes
 * - 30% modalidad de trabajo compatible
 * - 20% ubicación compatible
 */
export function calculateMatch(input: CalculateMatchInput): MatchScore {
  const { talent, company, opportunity } = input;

  // Habilidades requeridas: de la oportunidad o de los pain points de la empresa
  const targetSkills = opportunity
    ? opportunity.requiredSkills
    : company.painPoints;

  // 1. Score de habilidades (50%)
  const { skillsScore, matchedSkills } = calculateSkillsScore(
    talent.skills,
    targetSkills
  );

  // 2. Score de modalidad de trabajo (30%)
  const workModeScore = calculateWorkModeScore(
    talent.workModes,
    opportunity ? opportunity.workModes : []
  );

  // 3. Score de ubicación (20%)
  const locationScore = calculateLocationScore(
    talent.location,
    opportunity ? opportunity.location : company.location
  );

  // Score total ponderado
  const total = Math.round(
    skillsScore * 0.5 + workModeScore * 0.3 + locationScore * 0.2
  );

  return { total, skillsScore, workModeScore, locationScore, matchedSkills };
}

function calculateSkillsScore(
  talentSkills: string[],
  targetSkills: string[]
): { skillsScore: number; matchedSkills: string[] } {
  if (targetSkills.length === 0) return { skillsScore: 50, matchedSkills: [] };

  const normalizedTalent = talentSkills.map((s) => s.toLowerCase());
  const normalizedTarget = targetSkills.map((s) => s.toLowerCase());

  const matchedSkills = talentSkills.filter((skill) =>
    normalizedTarget.some(
      (t) => t.includes(skill.toLowerCase()) || skill.toLowerCase().includes(t)
    )
  );

  const skillsScore = Math.round(
    (matchedSkills.length / normalizedTarget.length) * 100
  );

  return { skillsScore: Math.min(100, skillsScore), matchedSkills };
}

function calculateWorkModeScore(
  talentModes: string[],
  opportunityModes: string[]
): number {
  if (opportunityModes.length === 0) return 80; // Sin restricción = buena compatibilidad
  const hasOverlap = talentModes.some((m) => opportunityModes.includes(m));
  return hasOverlap ? 100 : 0;
}

function calculateLocationScore(
  talentLocation: string | null,
  targetLocation: string | null
): number {
  if (!talentLocation || !targetLocation) return 70; // Sin datos = neutral
  const t = talentLocation.toLowerCase();
  const c = targetLocation.toLowerCase();
  if (t === c) return 100;
  if (t.includes(c) || c.includes(t)) return 80;
  // Simplificación: mismo país/región
  return 50;
}
