// =============================================================================
// PUNTOCLICK — Neon Config
// Declares which Neon services the app uses
// =============================================================================

import { defineConfig } from '@neon/config/v1';

export default defineConfig({
  // Neon Auth provides managed Better Auth with users + sessions in Postgres
  auth: true,
});
