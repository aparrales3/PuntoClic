// =============================================================================
// PUNTOCLICK — Domain: User Entity
// Clean domain types, zero framework dependencies
// =============================================================================

/** Los tres roles de usuario de la plataforma + admin */
export type UserRole = 'talento' | 'empresa' | 'institucion' | 'admin';

/** Estado de la cuenta */
export type AccountStatus = 'pending' | 'active' | 'suspended';

/** Entidad base de usuario */
export interface User {
  id: string;
  email: string;
  role: UserRole;
  status: AccountStatus;
  createdAt: Date;
  updatedAt: Date;
}

/** Tipo de contrato que busca el talento */
export type ContractType = 'tiempo_completo' | 'medio_tiempo' | 'freelance' | 'practicas';

/** Modalidad de trabajo */
export type WorkMode = 'presencial' | 'remoto' | 'hibrido';

/**
 * Perfil del talento — el "portafolio vivo"
 * Qué saben hacer los jóvenes, sus habilidades y experiencia
 */
export interface TalentProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  bio: string | null;
  photoUrl: string | null;
  cvUrl: string | null;
  skills: string[];
  /** Porcentaje de completitud del perfil 0-100 */
  completionPct: number;
  location: string | null;
  contractTypes: ContractType[];
  workModes: WorkMode[];
  currentlyWorking: boolean;
  currentJobTitle: string | null;
  educationLevel: string | null;
  createdAt: Date;
  updatedAt: Date;
}

/** Perfil de la empresa — sus "dolores" y necesidades */
export interface CompanyProfile {
  id: string;
  userId: string;
  companyName: string;
  legalName: string | null;
  sector: string;
  description: string | null;
  logoUrl: string | null;
  website: string | null;
  /** Los "dolores" de la empresa: problemas que necesitan resolver */
  painPoints: string[];
  location: string | null;
  employeeCount: string | null;
  /** Si ha pasado verificación */
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/** Perfil institucional (universidades, ONG, etc.) */
export interface InstitutionProfile {
  id: string;
  userId: string;
  institutionName: string;
  type: 'universidad' | 'ong' | 'gobierno' | 'otro';
  description: string | null;
  logoUrl: string | null;
  website: string | null;
  location: string | null;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
