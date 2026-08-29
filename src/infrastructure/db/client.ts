// =============================================================================
// PUNTOCLICK — Infrastructure: Neon DB Client
// Wired to: Project proud-bar-71074973 / Org org-little-tooth-18398429
// Uses @neondatabase/serverless + Drizzle ORM
// =============================================================================

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// ---------------------------------------------------------------------------
// Validate that DATABASE_URL is configured
// ---------------------------------------------------------------------------
if (!process.env.DATABASE_URL) {
  throw new Error(
    '❌ DATABASE_URL is not set.\n' +
    'Run: npx neon@latest env pull  (after linking the project)\n' +
    'Or add it manually to .env.local from your Neon dashboard:\n' +
    'https://console.neon.tech/app/projects/proud-bar-71074973'
  );
}

// ---------------------------------------------------------------------------
// HTTP transport — for Next.js Server Components & Route Handlers
// (Neon serverless driver over HTTP, no WebSocket needed for queries)
// ---------------------------------------------------------------------------
const sql = neon(process.env.DATABASE_URL);

/**
 * Drizzle client — use this for all DB queries.
 *
 * Uses the POOLED connection (DATABASE_URL) by default.
 * For migrations, use DATABASE_URL_UNPOOLED via drizzle.config.ts
 */
export const db = drizzle(sql, { schema });

/** Re-export schema for convenience */
export { schema };

/** Type-safe table references */
export const {
  users,
  talentProfiles,
  companyProfiles,
  institutionProfiles,
  opportunities,
  matches,
} = schema;
