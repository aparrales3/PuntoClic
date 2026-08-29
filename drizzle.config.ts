// =============================================================================
// PUNTOCLICK — Drizzle Kit Config (for migrations)
// Uses DIRECT (unpooled) connection — required for schema migrations
// =============================================================================

import { config } from 'dotenv';
config({ path: '.env.local' });

import type { Config } from 'drizzle-kit';

export default {
  schema: './src/infrastructure/db/schema.ts',
  out: './src/infrastructure/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // For migrations we always use the DIRECT (non-pooled) connection
    url: process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
