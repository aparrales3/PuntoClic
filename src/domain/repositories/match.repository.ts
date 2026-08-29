// =============================================================================
// PUNTOCLICK — Domain: Match Repository Interface
// =============================================================================

import type { Match, MatchStatus, TalentMatchView, CompanyMatchView } from '../entities/match';
import type { MatchScore } from '../entities/match';

export interface CreateMatchInput {
  talentId: string;
  companyId: string;
  opportunityId?: string;
  score: MatchScore;
}

/** Contrato del repositorio de matches */
export interface IMatchRepository {
  findById(id: string): Promise<Match | null>;

  /** Matches del talento (para su dashboard) */
  findByTalentId(
    talentId: string,
    options?: { status?: MatchStatus; limit?: number }
  ): Promise<TalentMatchView[]>;

  /** Matches de la empresa (para su dashboard) */
  findByCompanyId(
    companyId: string,
    options?: { status?: MatchStatus; limit?: number }
  ): Promise<CompanyMatchView[]>;

  create(input: CreateMatchInput): Promise<Match>;

  updateStatus(id: string, status: MatchStatus): Promise<void>;

  /** ¿Ya existe un match entre este talento y esta empresa? */
  exists(talentId: string, companyId: string): Promise<boolean>;

  /** Total de matches exitosos (mutual + completed) */
  countSuccessful(): Promise<number>;

  /** Total de todos los matches */
  count(): Promise<number>;
}
