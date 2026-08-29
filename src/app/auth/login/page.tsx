import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Iniciar sesión - PUNTOCLICK',
  description: 'Conéctate a tu cuenta de PuntoClic para continuar.',
};

export default function LoginPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-on-background">
      {/* TopAppBar (Transactional - Minimal Header) */}
      <header className="flex justify-between items-center w-full px-margin-mobile py-sm bg-background">
        <Link
          href="/"
          className="flex items-center justify-center p-2 text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100"
          aria-label="Volver a inicio"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary uppercase tracking-wider">
          PUNTOCLICK
        </div>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="flex-grow flex items-center justify-center p-margin-mobile">
        <div className="w-full max-w-[448px] bg-surface-container-low rounded-xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container-highest">
          <div className="text-center mb-xl">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm">
              Bienvenido de vuelta
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Conéctate para continuar.
            </p>
          </div>

          <form action="/api/auth/login" method="POST" className="space-y-md">
            <div className="space-y-xs">
              <label
                className="block font-label-md text-label-md text-on-surface"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-tertiary-fixed-dim rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                id="email"
                name="email"
                placeholder="tu@email.com"
                type="email"
                required
              />
            </div>

            <div className="space-y-xs">
              <label
                className="block font-label-md text-label-md text-on-surface"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-tertiary-fixed-dim rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                required
              />
            </div>

            <div className="flex justify-end">
              <Link
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors"
                href="/auth/recuperar-contrasena"
              >
                ¿Olvidé mi contraseña?
              </Link>
            </div>

            <button
              className="w-full bg-primary-container text-on-primary-container rounded-lg py-3 font-label-md text-label-md shadow-[0_4px_12px_rgba(244,190,55,0.2)] hover:bg-inverse-primary hover:shadow-[0_6px_16px_rgba(244,190,55,0.3)] transition-all active:scale-[0.98]"
              type="submit"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-lg">
            <div className="relative flex items-center mb-md">
              <div className="flex-grow border-t border-tertiary-fixed-dim"></div>
              <span className="flex-shrink-0 mx-4 text-on-surface-variant font-label-sm text-label-sm">
                o continuar con
              </span>
              <div className="flex-grow border-t border-tertiary-fixed-dim"></div>
            </div>

            <div className="flex flex-col space-y-sm">
              <button
                type="button"
                className="w-full flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined mr-2">login</span> Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined mr-2">work</span> LinkedIn
              </button>
            </div>
          </div>

          <div className="mt-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              ¿No tienes una cuenta?{' '}
              <Link
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors ml-1"
                href="/auth/register"
              >
                Crear cuenta
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

