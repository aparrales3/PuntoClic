// =============================================================================
// PUNTOCLICK — Infrastructure: User Repository Implementation (Neon/Drizzle)
// =============================================================================

import { eq, count } from 'drizzle-orm';
import { db, users, talentProfiles, companyProfiles } from '../db/client';
import type {
  IUserRepository,
  ITalentRepository,
  ICompanyRepository,
  CreateUserInput,
  UpdateTalentProfileInput,
} from '@/domain/repositories/user.repository';
import type { User, TalentProfile, CompanyProfile, UserRole } from '@/domain/entities/user';

// ---------------------------------------------------------------------------
// User Repository
// ---------------------------------------------------------------------------

export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return result[0] ? mapUserRow(result[0]) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email.toLowerCase()))
      .limit(1);
    return result[0] ? mapUserRow(result[0]) : null;
  }

  async create(input: CreateUserInput): Promise<User> {
    const result = await db
      .insert(users)
      .values({
        email: input.email.toLowerCase(),
        passwordHash: input.passwordHash,
        role: input.role,
        status: 'pending',
      })
      .returning();
    return mapUserRow(result[0]);
  }

  async updateStatus(id: string, status: User['status']): Promise<void> {
    await db
      .update(users)
      .set({ status, updatedAt: new Date() })
      .where(eq(users.id, id));
  }

  async countByRole(role: UserRole): Promise<number> {
    const result = await db
      .select({ count: count() })
      .from(users)
      .where(eq(users.role, role));
    return result[0]?.count ?? 0;
  }
}

// ---------------------------------------------------------------------------
// Talent Repository
// ---------------------------------------------------------------------------

export class TalentRepository implements ITalentRepository {
  async findByUserId(userId: string): Promise<TalentProfile | null> {
    const result = await db
      .select()
      .from(talentProfiles)
      .where(eq(talentProfiles.userId, userId))
      .limit(1);
    return result[0] ? mapTalentRow(result[0]) : null;
  }

  async create(userId: string, data: UpdateTalentProfileInput): Promise<TalentProfile> {
    const result = await db
      .insert(talentProfiles)
      .values({ userId, ...mapTalentInput(data) })
      .returning();
    return mapTalentRow(result[0]);
  }

  async update(userId: string, data: UpdateTalentProfileInput): Promise<TalentProfile> {
    const result = await db
      .update(talentProfiles)
      .set({ ...mapTalentInput(data), updatedAt: new Date() })
      .where(eq(talentProfiles.userId, userId))
      .returning();
    return mapTalentRow(result[0]);
  }

  async updateCompletionPct(userId: string, pct: number): Promise<void> {
    await db
      .update(talentProfiles)
      .set({ completionPct: Math.min(100, Math.max(0, pct)), updatedAt: new Date() })
      .where(eq(talentProfiles.userId, userId));
  }

  async findBySkills(skills: string[], limit = 20): Promise<TalentProfile[]> {
    // Simple query — in production this would use a vector similarity or GIN index
    const result = await db
      .select()
      .from(talentProfiles)
      .limit(limit);
    // Filter in JS for now — replace with SQL @> operator for production
    return result
      .filter((row) =>
        skills.some((skill) =>
          (row.skills as string[]).some((s) =>
            s.toLowerCase().includes(skill.toLowerCase())
          )
        )
      )
      .map(mapTalentRow);
  }

  async count(): Promise<number> {
    const result = await db.select({ count: count() }).from(talentProfiles);
    return result[0]?.count ?? 0;
  }
}

// ---------------------------------------------------------------------------
// Company Repository
// ---------------------------------------------------------------------------

export class CompanyRepository implements ICompanyRepository {
  async findByUserId(userId: string): Promise<CompanyProfile | null> {
    const result = await db
      .select()
      .from(companyProfiles)
      .where(eq(companyProfiles.userId, userId))
      .limit(1);
    return result[0] ? mapCompanyRow(result[0]) : null;
  }

  async create(userId: string, data: Partial<CompanyProfile>): Promise<CompanyProfile> {
    const result = await db
      .insert(companyProfiles)
      .values({ userId, ...mapCompanyInput(data) })
      .returning();
    return mapCompanyRow(result[0]);
  }

  async update(userId: string, data: Partial<CompanyProfile>): Promise<CompanyProfile> {
    const result = await db
      .update(companyProfiles)
      .set({ ...mapCompanyInput(data), updatedAt: new Date() })
      .where(eq(companyProfiles.userId, userId))
      .returning();
    return mapCompanyRow(result[0]);
  }

  async count(): Promise<number> {
    const result = await db.select({ count: count() }).from(companyProfiles);
    return result[0]?.count ?? 0;
  }
}

// ---------------------------------------------------------------------------
// Row mappers (DB row → Domain entity)
// ---------------------------------------------------------------------------

function mapUserRow(row: typeof users.$inferSelect): User {
  return {
    id: row.id,
    email: row.email,
    role: row.role,
    status: row.status,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

function mapTalentRow(row: typeof talentProfiles.$inferSelect): TalentProfile {
  return {
    id: row.id,
    userId: row.userId,
    firstName: row.firstName,
    lastName: row.lastName,
    bio: row.bio,
    photoUrl: row.photoUrl,
    cvUrl: row.cvUrl,
    skills: (row.skills as string[]) ?? [],
    completionPct: row.completionPct,
    location: row.location,
    contractTypes: (row.contractTypes as TalentProfile['contractTypes']) ?? [],
    workModes: (row.workModes as TalentProfile['workModes']) ?? [],
    currentlyWorking: row.currentlyWorking,
    currentJobTitle: row.currentJobTitle,
    educationLevel: row.educationLevel,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

function mapCompanyRow(row: typeof companyProfiles.$inferSelect): CompanyProfile {
  return {
    id: row.id,
    userId: row.userId,
    companyName: row.companyName,
    legalName: row.legalName,
    sector: row.sector,
    description: row.description,
    logoUrl: row.logoUrl,
    website: row.website,
    painPoints: (row.painPoints as string[]) ?? [],
    location: row.location,
    employeeCount: row.employeeCount,
    verified: row.verified,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

// ---------------------------------------------------------------------------
// Input mappers (Domain input → DB insert/update)
// ---------------------------------------------------------------------------

function mapTalentInput(data: UpdateTalentProfileInput) {
  return {
    ...(data.firstName !== undefined && { firstName: data.firstName }),
    ...(data.lastName !== undefined && { lastName: data.lastName }),
    ...(data.bio !== undefined && { bio: data.bio }),
    ...(data.photoUrl !== undefined && { photoUrl: data.photoUrl }),
    ...(data.cvUrl !== undefined && { cvUrl: data.cvUrl }),
    ...(data.skills !== undefined && { skills: data.skills }),
    ...(data.location !== undefined && { location: data.location }),
    ...(data.contractTypes !== undefined && { contractTypes: data.contractTypes }),
    ...(data.workModes !== undefined && { workModes: data.workModes }),
    ...(data.currentlyWorking !== undefined && { currentlyWorking: data.currentlyWorking }),
    ...(data.currentJobTitle !== undefined && { currentJobTitle: data.currentJobTitle }),
    ...(data.educationLevel !== undefined && { educationLevel: data.educationLevel }),
  };
}

function mapCompanyInput(data: Partial<CompanyProfile>) {
  return {
    ...(data.companyName !== undefined && { companyName: data.companyName }),
    ...(data.legalName !== undefined && { legalName: data.legalName }),
    ...(data.sector !== undefined && { sector: data.sector }),
    ...(data.description !== undefined && { description: data.description }),
    ...(data.logoUrl !== undefined && { logoUrl: data.logoUrl }),
    ...(data.website !== undefined && { website: data.website }),
    ...(data.painPoints !== undefined && { painPoints: data.painPoints }),
    ...(data.location !== undefined && { location: data.location }),
    ...(data.employeeCount !== undefined && { employeeCount: data.employeeCount }),
  };
}
