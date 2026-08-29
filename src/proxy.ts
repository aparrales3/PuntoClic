// =============================================================================
// PUNTOCLICK — Next.js Proxy (formerly Middleware)
// Protects authenticated routes — redirects to login if no valid session
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

// Role-based route restrictions
const ROLE_ROUTES: Record<string, RegExp[]> = {
  talento: [/^\/empresa\//, /^\/institucion\//, /^\/admin\//],
  empresa: [/^\/talento\//, /^\/institucion\//, /^\/admin\//],
  institucion: [/^\/talento\//, /^\/empresa\//, /^\/admin\//],
};

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PATTERNS.some((p) => p.test(pathname));
  if (!isProtected) return NextResponse.next();

  const session = await getSessionFromRequest(req);

  if (!session) {
    const loginUrl = new URL('/auth/login', req.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Check role-based restrictions
  const forbidden = ROLE_ROUTES[session.role]?.some((p) => p.test(pathname));
  if (forbidden) {
    const dashboardMap: Record<string, string> = {
      talento: '/talento/dashboard',
      empresa: '/empresa/dashboard',
      institucion: '/institucion/dashboard',
      admin: '/admin/dashboard',
    };
    return NextResponse.redirect(new URL(dashboardMap[session.role] || '/', req.url));
  }

  // Inject session info into request headers for Server Components
  const res = NextResponse.next();
  res.headers.set('x-user-id', session.userId);
  res.headers.set('x-user-role', session.role);
  res.headers.set('x-user-email', session.email);
  if (session.name) res.headers.set('x-user-name', session.name);

  return res;
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
  ],
};
