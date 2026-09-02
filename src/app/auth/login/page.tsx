'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const DEMO_ACCOUNTS = [
  { role: 'talento', email: 'alejandro@talento.com', password: 'Talento1@', label: 'Talento', icon: 'person' },
  { role: 'empresa', email: 'techhive@empresa.com', password: 'Empresa1@', label: 'Empresa', icon: 'business' },
  { role: 'institucion', email: 'rectoria@nodo.edu', password: 'Nodo2026@', label: 'Institución', icon: 'school' },
  { role: 'admin', email: 'admin@puntoclick.com', password: 'Admin2026@', label: 'Admin', icon: 'admin_panel_settings' },
];

const DASHBOARD_MAP: Record<string, string> = {
  talento: '/talento/dashboard',
  empresa: '/empresa/dashboard',
  institucion: '/institucion/dashboard',
  admin: '/admin/dashboard',
};

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromParam = searchParams.get('from');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeRole, setActiveRole] = useState<string>('talento');
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState('');

  // If already logged in, redirect away from login page immediately
  useEffect(() => {
    async function checkCurrentSession() {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.user) {
            const destination =
              fromParam && fromParam.startsWith('/') && !fromParam.startsWith('/auth/login')
                ? fromParam
                : DASHBOARD_MAP[data.user.role] || '/talento/dashboard';
            router.replace(destination);
            return;
          }
        }
      } catch (err) {
        console.debug('[Session check]:', err);
      } finally {
        setCheckingSession(false);
      }
    }
    checkCurrentSession();
  }, [router, fromParam]);

  const handleDemoSelect = (role: string) => {
    const demo = DEMO_ACCOUNTS.find((d) => d.role === role);
    if (demo) {
      setActiveRole(role);
      setEmail(demo.email);
      setPassword(demo.password);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const cleanEmail = email.trim().toLowerCase();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Credenciales incorrectas. Verifica tu correo y contraseña.');
        setLoading(false);
        return;
      }

      // Successful login redirect
      const destination =
        fromParam && fromParam.startsWith('/') && !fromParam.startsWith('/auth/login')
          ? fromParam
          : data.redirectTo || DASHBOARD_MAP[data.role] || '/talento/dashboard';

      router.replace(destination);
    } catch {
      setError('Error de conexión con el servidor. Intenta de nuevo.');
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center font-body-md text-on-background">
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
          <p className="text-on-surface-variant font-medium text-sm">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  const neonAuthUrl =
    process.env.NEXT_PUBLIC_NEON_AUTH_URL ||
    'https://ep-misty-union-ax8la5ah.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth';
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-on-background">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-margin-mobile py-sm bg-background border-b border-surface-variant/30">
        <Link
          href="/"
          className="flex items-center justify-center p-2 text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 rounded-full hover:bg-surface-container"
          aria-label="Volver al inicio"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            hub
          </span>
          <span className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-bold uppercase tracking-wider">
            PUNTOCLICK
          </span>
        </Link>
        <div className="flex items-center">
          <Link
            href="/auth/register"
            className="text-label-sm font-semibold text-primary hover:bg-primary-container/20 px-3 py-1.5 rounded-lg transition-colors"
          >
            Crear cuenta
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-margin-mobile py-8">
        <div className="w-full max-w-[448px] bg-surface-container-low rounded-2xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container-highest">
          <div className="text-center mb-md">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm font-bold">
              Bienvenido de vuelta
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Inicia sesión en tu cuenta de PuntoClic
            </p>
          </div>

          {/* Quick Demo Account Selector */}
          <div className="mb-md">
            <div className="flex items-center justify-between mb-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Acceso rápido (Cuentas de prueba)
              </span>
              <span className="text-[11px] text-primary font-medium">Autocompletar</span>
            </div>
            <div className="grid grid-cols-4 gap-xs">
              {DEMO_ACCOUNTS.map((demo) => (
                <button
                  key={demo.role}
                  onClick={() => handleDemoSelect(demo.role)}
                  type="button"
                  className={`flex flex-col items-center gap-1 p-sm rounded-xl border text-center transition-all cursor-pointer ${
                    activeRole === demo.role
                      ? 'bg-primary-container border-primary text-on-primary-container shadow-sm'
                      : 'bg-surface-container-lowest border-surface-container-high text-on-surface-variant hover:bg-surface-container'
                  }`}
                  title={`Seleccionar cuenta de ${demo.label}`}
                >
                  <span className="material-symbols-outlined text-[20px]">{demo.icon}</span>
                  <span className="font-label-sm text-label-sm text-[11px] leading-tight font-semibold">
                    {demo.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-md p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center gap-2 animate-shake">
              <span className="material-symbols-outlined text-base text-red-600">error</span>
              <span className="font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="email">
                Correo electrónico
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">
                  mail
                </span>
                <input
                  autoComplete="email"
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="email"
                  name="email"
                  placeholder="nombre@ejemplo.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">
                  lock
                </span>
                <input
                  autoComplete="current-password"
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-10 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="password"
                  name="password"
                  placeholder="Tu contraseña"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors p-1 rounded-full cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-end -mt-sm">
              <Link
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors"
                href="/auth/recuperar-contrasena"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              disabled={loading}
              className="w-full bg-primary text-on-primary rounded-lg py-3 font-label-md text-label-md shadow-[0_4px_12px_rgba(120,90,0,0.2)] hover:bg-primary-fixed hover:text-on-primary-fixed transition-all active:scale-[0.98] font-bold cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                  <span>Iniciando sesión...</span>
                </>
              ) : (
                <>
                  <span>Iniciar sesión</span>
                  <span className="material-symbols-outlined text-sm">login</span>
                </>
              )}
            </button>
          </form>

          {/* Social Auth Section */}
          <div className="mt-lg">
            <div className="mb-md flex items-center justify-center gap-1.5 py-1.5 px-3 bg-secondary-container/60 text-on-secondary-container rounded-full text-[11px] font-semibold mx-auto w-fit">
              <span className="material-symbols-outlined text-[14px]">encrypted</span>
              <span>Autenticación segura · PuntoClic</span>
            </div>

            <div className="relative flex items-center mb-md">
              <div className="flex-grow border-t border-tertiary-fixed-dim" />
              <span className="flex-shrink-0 mx-4 text-on-surface-variant font-label-sm text-label-sm">
                o continuar con
              </span>
              <div className="flex-grow border-t border-tertiary-fixed-dim" />
            </div>

            <div className="flex flex-col space-y-sm">
              <a
                href={`${neonAuthUrl}/sign-in/social?provider=google&callbackURL=${encodeURIComponent(appUrl + '/talento/dashboard')}`}
                className="w-full flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm cursor-pointer gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuar con Google
              </a>
              <a
                href={`${neonAuthUrl}/sign-in/social?provider=github&callbackURL=${encodeURIComponent(appUrl + '/talento/dashboard')}`}
                className="w-full flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm cursor-pointer gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Continuar con GitHub
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              ¿No tienes una cuenta?{' '}
              <Link
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim font-bold transition-colors ml-1"
                href="/auth/register"
              >
                Crear cuenta
              </Link>
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-center gap-3 text-label-sm text-on-surface-variant">
              <Link href="/terminos" className="hover:text-primary underline transition-colors">
                Términos
              </Link>
              <span>•</span>
              <Link href="/privacidad" className="hover:text-primary underline transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-background min-h-screen flex items-center justify-center">
          <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
