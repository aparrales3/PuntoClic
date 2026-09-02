// =============================================================================
// PUNTOCLICK — API: Current User Session
// GET /api/auth/me
// Returns current authenticated session or 401
// =============================================================================

import { NextResponse } from 'next/server';
import { getSession } from '@/infrastructure/auth/session';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      user: session,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error al verificar sesión';
    return NextResponse.json({ authenticated: false, error: msg }, { status: 500 });
  }
}
