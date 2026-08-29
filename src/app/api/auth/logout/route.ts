// =============================================================================
// PUNTOCLICK — API: Logout
// POST & GET /api/auth/logout
// Clears session cookie and redirects or returns JSON
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { destroySession } from '@/infrastructure/auth/session';

export async function POST() {
  try {
    await destroySession();
    return NextResponse.json({
      success: true,
      message: 'Sesión cerrada exitosamente',
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error al cerrar sesión';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await destroySession();
    const loginUrl = new URL('/auth/login', req.url);
    return NextResponse.redirect(loginUrl);
  } catch {
    const loginUrl = new URL('/auth/login', req.url);
    return NextResponse.redirect(loginUrl);
  }
}
