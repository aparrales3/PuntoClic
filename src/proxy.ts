// =============================================================================
// PUNTOCLICK — Next.js Proxy (formerly Middleware)
// Protects authenticated routes — redirects to login if no valid session.
// Prevents authenticated users from accessing login/register pages.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/infrastructure/auth/session';

// Routes that require authentication
const PROTECTED_PATTERNS = [
  /^\/talento\//,
  /^\/empresa\//,
  /^\/institucion\//,
  /^\/admin\//,
  /^\/configuracion\//,
  /^\/match-center/,
  /^\/match-talento/,
  /^\/mentores\/diagnostico/,
];

// Guest-only routes: authenticated users should NOT re-enter these
const GUEST_ONLY_PATTERNS = [
  /^\/auth\/login(\/.*)?$/,
  /^\/auth\/register(\/.*)?$/,
  /^\/auth\/login-conectado(\/.*)?$/,
  /^\/login(\/.*)?$/,
  /^\/admin\/login(\/.*)?$/,
];

// Role-based route restrictions
const ROLE_ROUTES: Record<string, RegExp[]> = {
  talento: [/^\/empresa\//, /^\/institucion\//, /^\/admin\//],
  empresa: [/^\/talento\//, /^\/institucion\//, /^\/admin\//],
  institucion: [/^\/talento\//, /^\/empresa\//, /^\/admin\//],
};

const DASHBOARD_MAP: Record<string, string> = {
  talento: '/talento/dashboard',
  empresa: '/empresa/dashboard',
  institucion: '/institucion/dashboard',
  admin: '/admin/dashboard',
};

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Check if user has an active session
  const session = await getSessionFromRequest(req);

  // 2. If authenticated user tries to access guest-only routes (login, register, etc.)
  const isGuestOnly = GUEST_ONLY_PATTERNS.some((p) => p.test(pathname));
  if (session && isGuestOnly) {
    const targetDashboard = DASHBOARD_MAP[session.role] || '/talento/dashboard';
    return NextResponse.redirect(new URL(targetDashboard, req.url));
  }

  // 3. Normalize /login to /auth/login for unauthenticated users
  if (!session && (pathname === '/login' || pathname === '/login/')) {
    const loginUrl = new URL('/auth/login', req.url);
    const fromParam = req.nextUrl.searchParams.get('from');
    if (fromParam) loginUrl.searchParams.set('from', fromParam);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Handle protected routes
  const isProtected = PROTECTED_PATTERNS.some((p) => p.test(pathname));
  if (isProtected) {
    // Exclude /admin/login from protected check so it can redirect cleanly
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    if (!session) {
      const loginUrl = new URL('/auth/login', req.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Check role-based restrictions
    const forbidden = ROLE_ROUTES[session.role]?.some((p) => p.test(pathname));
    if (forbidden) {
      return NextResponse.redirect(new URL(DASHBOARD_MAP[session.role] || '/', req.url));
    }

    // Inject session info into request headers for Server Components
    const res = NextResponse.next();
    res.headers.set('x-user-id', session.userId);
    res.headers.set('x-user-role', session.role);
    res.headers.set('x-user-email', session.email);
    if (session.name) res.headers.set('x-user-name', session.name);
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/talento/:path*',
    '/empresa/:path*',
    '/institucion/:path*',
    '/admin/:path*',
    '/configuracion/:path*',
    '/match-center/:path*',
    '/match-talento/:path*',
    '/mentores/diagnostico/:path*',
    '/auth/:path*',
    '/login',
    '/admin/login',
  ],
};
