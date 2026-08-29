// =============================================================================
// PUNTOCLICK — Infrastructure: Drizzle Schema → Neon DB
// Project: proud-bar-71074973 | Org: org-little-tooth-18398429
// =============================================================================

import {
  pgTable,
  text,
  timestamp,
  varchar,
  integer,
  boolean,
  real,
  jsonb,
  pgEnum,
  index,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const userRoleEnum = pgEnum('user_role', [
  'talento',
  'empresa',
  'institucion',
  'admin',
]);

export const accountStatusEnum = pgEnum('account_status', [
  'pending',
  'active',
  'suspended',
]);

export const matchStatusEnum = pgEnum('match_status', [
  'pending',
  'talent_interested',
  'company_interested',
  'mutual',
  'rejected',
  'completed',
]);

export const opportunityStatusEnum = pgEnum('opportunity_status', [
  'draft',
  'active',
  'paused',
  'closed',
]);

export const institutionTypeEnum = pgEnum('institution_type', [
  'universidad',
  'ong',
  'gobierno',
  'otro',
]);

// ---------------------------------------------------------------------------
// Users — tabla base
// ---------------------------------------------------------------------------

export const users = pgTable(
  'users',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    email: varchar('email', { length: 255 }).notNull(),
    passwordHash: text('password_hash').notNull(),
    role: userRoleEnum('role').notNull(),
    status: accountStatusEnum('status').notNull().default('pending'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('users_email_idx').on(t.email),
    index('users_role_idx').on(t.role),
  ]
);

// ---------------------------------------------------------------------------
// Talent Profiles — el "portafolio vivo"
// ---------------------------------------------------------------------------

export const talentProfiles = pgTable(
  'talent_profiles',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    firstName: varchar('first_name', { length: 100 }).notNull().default(''),
    lastName: varchar('last_name', { length: 100 }).notNull().default(''),
    bio: text('bio'),
    photoUrl: text('photo_url'),
    cvUrl: text('cv_url'),
    /** Array de habilidades: ["React", "TypeScript", "Figma"] */
    skills: jsonb('skills').$type<string[]>().notNull().default([]),
    completionPct: integer('completion_pct').notNull().default(0),
    location: varchar('location', { length: 200 }),
    /** ["tiempo_completo", "freelance"] */
    contractTypes: jsonb('contract_types').$type<string[]>().notNull().default([]),
    /** ["remoto", "hibrido"] */
    workModes: jsonb('work_modes').$type<string[]>().notNull().default([]),
    currentlyWorking: boolean('currently_working').notNull().default(false),
    currentJobTitle: varchar('current_job_title', { length: 200 }),
    educationLevel: varchar('education_level', { length: 100 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('talent_user_idx').on(t.userId),
    index('talent_skills_idx').on(t.skills),
  ]
);

// ---------------------------------------------------------------------------
// Company Profiles — sus "dolores" y necesidades
// ---------------------------------------------------------------------------

export const companyProfiles = pgTable(
  'company_profiles',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    companyName: varchar('company_name', { length: 200 }).notNull().default(''),
    legalName: varchar('legal_name', { length: 200 }),
    sector: varchar('sector', { length: 100 }).notNull().default(''),
    description: text('description'),
    logoUrl: text('logo_url'),
    website: varchar('website', { length: 500 }),
    /** Los "dolores": ["No tenemos quién maneje datos", "Nos falta UI/UX"] */
    painPoints: jsonb('pain_points').$type<string[]>().notNull().default([]),
    location: varchar('location', { length: 200 }),
    employeeCount: varchar('employee_count', { length: 50 }),
    verified: boolean('verified').notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => [uniqueIndex('company_user_idx').on(t.userId)]
);

// ---------------------------------------------------------------------------
// Institution Profiles
// ---------------------------------------------------------------------------

export const institutionProfiles = pgTable(
  'institution_profiles',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    institutionName: varchar('institution_name', { length: 200 }).notNull().default(''),
    type: institutionTypeEnum('type').notNull().default('otro'),
    description: text('description'),
    logoUrl: text('logo_url'),
    website: varchar('website', { length: 500 }),
    location: varchar('location', { length: 200 }),
    verified: boolean('verified').notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => [uniqueIndex('institution_user_idx').on(t.userId)]
);

// ---------------------------------------------------------------------------
// Opportunities — las vacantes publicadas por empresas
// ---------------------------------------------------------------------------

export const opportunities = pgTable(
  'opportunities',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    companyId: text('company_id')
      .notNull()
      .references(() => companyProfiles.id, { onDelete: 'cascade' }),
    title: varchar('title', { length: 200 }).notNull(),
    description: text('description').notNull().default(''),
    problemStatement: text('problem_statement'),
    requiredSkills: jsonb('required_skills').$type<string[]>().notNull().default([]),
    niceToHaveSkills: jsonb('nice_to_have_skills').$type<string[]>().notNull().default([]),
    workModes: jsonb('work_modes').$type<string[]>().notNull().default([]),
    contractTypes: jsonb('contract_types').$type<string[]>().notNull().default([]),
    location: varchar('location', { length: 200 }),
    salaryMin: integer('salary_min'),
    salaryMax: integer('salary_max'),
    salaryCurrency: varchar('salary_currency', { length: 10 }).notNull().default('USD'),
    status: opportunityStatusEnum('status').notNull().default('draft'),
    expiresAt: timestamp('expires_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => [
    index('opportunities_company_idx').on(t.companyId),
    index('opportunities_status_idx').on(t.status),
  ]
);

// ---------------------------------------------------------------------------
// Matches — el corazón del algoritmo de conexión
// ---------------------------------------------------------------------------

export const matches = pgTable(
  'matches',
  {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    talentId: text('talent_id')
      .notNull()
      .references(() => talentProfiles.id, { onDelete: 'cascade' }),
    companyId: text('company_id')
      .notNull()
      .references(() => companyProfiles.id, { onDelete: 'cascade' }),
    opportunityId: text('opportunity_id').references(() => opportunities.id, {
      onDelete: 'set null',
    }),
    status: matchStatusEnum('status').notNull().default('pending'),
    /** Score total 0-100 */
    scoreTotal: real('score_total').notNull().default(0),
    /** Desglose del score como JSON */
    scoreBreakdown: jsonb('score_breakdown').$type<{
      skillsScore: number;
      workModeScore: number;
      locationScore: number;
      matchedSkills: string[];
    }>().notNull().default({ skillsScore: 0, workModeScore: 0, locationScore: 0, matchedSkills: [] }),
    talentSeenAt: timestamp('talent_seen_at'),
    companySeenAt: timestamp('company_seen_at'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (t) => [
    index('matches_talent_idx').on(t.talentId),
    index('matches_company_idx').on(t.companyId),
    index('matches_status_idx').on(t.status),
    uniqueIndex('matches_talent_company_idx').on(t.talentId, t.companyId),
  ]
);

// ---------------------------------------------------------------------------
// Type exports for Drizzle inferred types
// ---------------------------------------------------------------------------

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertTalentProfile = typeof talentProfiles.$inferInsert;
export type SelectTalentProfile = typeof talentProfiles.$inferSelect;
export type InsertCompanyProfile = typeof companyProfiles.$inferInsert;
export type SelectCompanyProfile = typeof companyProfiles.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;
export type SelectMatch = typeof matches.$inferSelect;
export type InsertOpportunity = typeof opportunities.$inferInsert;
export type SelectOpportunity = typeof opportunities.$inferSelect;
