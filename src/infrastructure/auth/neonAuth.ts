// =============================================================================
// PUNTOCLICK — Neon Auth Client & Authentication Utilities
// Project: PuntoClic (proud-bar-71074973)
// Provider: Neon Managed Better Auth (us-east-2)
// Auth Base URL: https://ep-odd-haze-axvf0t5j.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth
// =============================================================================

export const NEON_AUTH_CONFIG = {
  baseUrl:
    process.env.NEXT_PUBLIC_NEON_AUTH_URL ||
    process.env.NEON_AUTH_BASE_URL ||
    'https://ep-odd-haze-axvf0t5j.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth',
  jwksUrl:
    process.env.NEON_AUTH_JWKS_URL ||
    'https://ep-odd-haze-axvf0t5j.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth/.well-known/jwks.json',
  projectName: 'PuntoClic',
};

export interface NeonAuthUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
  emailVerified?: boolean;
  role?: string;
}

export interface SignInCredentials {
  email: string;
  password?: string;
  provider?: 'google' | 'github' | 'linkedin';
}

/**
 * Sign in via Neon Auth (Email & Password)
 */
export async function signInWithNeonAuth(email: string, password?: string) {
  try {
    const res = await fetch(`${NEON_AUTH_CONFIG.baseUrl}/sign-in/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    const data = await res.json();
    return { ok: res.ok, data, status: res.status };
  } catch (error) {
    console.error('[Neon Auth Sign-In Error]:', error);
    return { ok: false, error: error instanceof Error ? error.message : 'Error al conectar con Neon Auth' };
  }
}

/**
 * Initiate Social OAuth with Neon Auth
 */
export function getNeonAuthOAuthUrl(provider: 'google' | 'github' | 'linkedin', callbackUrl?: string) {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
  const targetRedirect = callbackUrl || `${currentOrigin}/talento/dashboard`;
  return `${NEON_AUTH_CONFIG.baseUrl}/sign-in/social?provider=${provider}&callbackURL=${encodeURIComponent(targetRedirect)}`;
}
