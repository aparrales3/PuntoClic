// =============================================================================
// PUNTOCLICK — Domain: User Repository Interfaces
// Contratos que la infraestructura debe implementar
// =============================================================================

import type { User, TalentProfile, CompanyProfile, InstitutionProfile, UserRole } from '../entities/user';

/** Datos para crear un nuevo usuario */
export interface CreateUserInput {
  email: string;
  role: UserRole;
  passwordHash: string;
}

/** Datos para actualizar el perfil del talento */
export interface UpdateTalentProfileInput {
  firstName?: string;
  lastName?: string;
  bio?: string;
  photoUrl?: string;
  cvUrl?: string;
  skills?: string[];
  location?: string;
  contractTypes?: TalentProfile['contractTypes'];
  workModes?: TalentProfile['workModes'];
  currentlyWorking?: boolean;
  currentJobTitle?: string;
  educationLevel?: string;
}

/** Contrato del repositorio de usuarios */
export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(input: CreateUserInput): Promise<User>;
  updateStatus(id: string, status: User['status']): Promise<void>;
  countByRole(role: UserRole): Promise<number>;
}

/** Contrato del repositorio del talento */
export interface ITalentRepository {
  findByUserId(userId: string): Promise<TalentProfile | null>;
  create(userId: string, data: UpdateTalentProfileInput): Promise<TalentProfile>;
  update(userId: string, data: UpdateTalentProfileInput): Promise<TalentProfile>;
  updateCompletionPct(userId: string, pct: number): Promise<void>;
  /** Busca talentos por habilidades para el matching */
  findBySkills(skills: string[], limit?: number): Promise<TalentProfile[]>;
  count(): Promise<number>;
}

/** Contrato del repositorio de empresas */
export interface ICompanyRepository {
  findByUserId(userId: string): Promise<CompanyProfile | null>;
  create(userId: string, data: Partial<CompanyProfile>): Promise<CompanyProfile>;
  update(userId: string, data: Partial<CompanyProfile>): Promise<CompanyProfile>;
  count(): Promise<number>;
}

/** Contrato del repositorio de instituciones */
export interface IInstitutionRepository {
  findByUserId(userId: string): Promise<InstitutionProfile | null>;
  create(userId: string, data: Partial<InstitutionProfile>): Promise<InstitutionProfile>;
  update(userId: string, data: Partial<InstitutionProfile>): Promise<InstitutionProfile>;
  count(): Promise<number>;
}
