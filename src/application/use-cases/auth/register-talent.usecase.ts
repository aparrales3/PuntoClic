// =============================================================================
// PUNTOCLICK — Application: Register Talent Use Case
// =============================================================================

import type { IUserRepository, ITalentRepository } from '@/domain/repositories/user.repository';
import type { User, TalentProfile } from '@/domain/entities/user';

export interface RegisterTalentInput {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
}

export interface RegisterTalentOutput {
  user: User;
  profile: TalentProfile;
}

/**
 * Registra un nuevo talento en la plataforma.
 * Crea el usuario base + el perfil de talento vacío (completionPct = 0).
 */
export class RegisterTalentUseCase {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly talentRepo: ITalentRepository
  ) {}

  async execute(input: RegisterTalentInput): Promise<RegisterTalentOutput> {
    // Check if email already exists
    const existing = await this.userRepo.findByEmail(input.email);
    if (existing) {
      throw new Error('EMAIL_ALREADY_EXISTS');
    }

    // Create base user
    const user = await this.userRepo.create({
      email: input.email,
      passwordHash: input.passwordHash,
      role: 'talento',
    });

    // Create empty talent profile
    const profile = await this.talentRepo.create(user.id, {
      firstName: input.firstName,
      lastName: input.lastName,
    });

    return { user, profile };
  }
}
