// =============================================================================
// PUNTOCLICK — Domain: Match Entity
// El corazón de la plataforma: el algoritmo de matching
// =============================================================================

/** Estado del match */
export type MatchStatus =
  | 'pending'    // Sugerido por el sistema, ninguno ha respondido
  | 'talent_interested'   // El talento mostró interés
  | 'company_interested'  // La empresa mostró interés
  | 'mutual'     // Ambos están interesados — match confirmado
  | 'rejected'   // Uno de los dos rechazó
  | 'completed'; // Contratación o conexión exitosa

/** Puntuación detallada de un match */
export interface MatchScore {
  /** Score total 0-100 */
  total: number;
  /** Coincidencia de habilidades 0-100 */
  skillsScore: number;
  /** Compatibilidad de modalidad de trabajo 0-100 */
  workModeScore: number;
  /** Compatibilidad de ubicación 0-100 */
  locationScore: number;
  /** Habilidades que coinciden */
  matchedSkills: string[];
}

/** Un match entre un talento y una empresa */
export interface Match {
  id: string;
  talentId: string;
  companyId: string;
  opportunityId: string | null;
  status: MatchStatus;
  score: MatchScore;
  /** El talento puede ver el score de match con la empresa */
  talentSeenAt: Date | null;
  /** La empresa puede ver el candidato */
  companySeenAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/** Vista del match desde la perspectiva del talento */
export interface TalentMatchView extends Match {
  companyName: string;
  companySector: string;
  companyLogoUrl: string | null;
}

/** Vista del match desde la perspectiva de la empresa */
export interface CompanyMatchView extends Match {
  talentFirstName: string;
  talentLastName: string;
  talentPhotoUrl: string | null;
  talentSkills: string[];
}
