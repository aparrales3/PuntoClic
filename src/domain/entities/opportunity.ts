// =============================================================================
// PUNTOCLICK — Domain: Opportunity Entity
// Las oportunidades que publican las empresas
// =============================================================================

import type { WorkMode, ContractType } from './user';

/** Estado de la oportunidad */
export type OpportunityStatus = 'draft' | 'active' | 'paused' | 'closed';

/**
 * Una oportunidad de trabajo publicada por una empresa.
 * Nace de los "dolores" de la empresa — qué problema necesitan resolver.
 */
export interface Opportunity {
  id: string;
  companyId: string;
  title: string;
  description: string;
  /** El "dolor" específico que esta posición viene a resolver */
  problemStatement: string | null;
  requiredSkills: string[];
  niceToHaveSkills: string[];
  workModes: WorkMode[];
  contractTypes: ContractType[];
  location: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  salaryCurrency: string;
  status: OpportunityStatus;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

/** Vista de oportunidad con datos de la empresa para el talento */
export interface OpportunityWithCompany extends Opportunity {
  companyName: string;
  companySector: string;
  companyLogoUrl: string | null;
  /** Score de compatibilidad del talento actual con esta oportunidad */
  matchScore?: number;
}
