// =============================================================================
// PUNTOCLICK — Session Management
// Uses JWT signed with BETTER_AUTH_SECRET stored in HTTP-only cookies
// =============================================================================

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const SESSION_COOKIE = 'puntoclick_session';
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days in seconds

function getJwtSecret(): Uint8Array {
  const secret = process.env.BETTER_AUTH_SECRET;
  if (!secret) throw new Error('BETTER_AUTH_SECRET is not set');
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  userId: string;
  email: string;
  role: 'talento' | 'empresa' | 'institucion' | 'admin';
  name?: string;
  photoUrl?: string;
}

/**
 * Create a signed JWT session and set it as an HTTP-only cookie
 */
export async function createSession(payload: SessionPayload): Promise<string> {
  const secret = getJwtSecret();
  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .setSubject(payload.userId)
    .sign(secret);

  return token;
}

/**
 * Set the session cookie (call from Route Handlers, not Server Components)
 */
export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION,
    path: '/',
  });
}

/**
 * Read and verify the session from cookies (Server Components / Route Handlers)
 */
export async function getSession(): Promise<SessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, getJwtSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

/**
 * Read and verify the session from a Next.js Request (Middleware)
 */
export async function getSessionFromRequest(
  req: NextRequest
): Promise<SessionPayload | null> {
  try {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, getJwtSecret());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

/**
 * Destroy the session cookie (logout)
 */
export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
