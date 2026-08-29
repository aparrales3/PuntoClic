// =============================================================================
// PUNTOCLICK — Login Page
// Faithfully reproduced from login_puntoclick_1/code.html
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { TopAppBar } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'Accede a tu cuenta de PUNTOCLICK y conecta con oportunidades.',
};

export default function LoginPage() {
  return (
    <div className="bg-[--color-background] min-h-screen flex flex-col text-[--color-on-background]">
      <TopAppBar showBack />

      <main className="flex-grow flex items-center justify-center p-[--spacing-margin-mobile] pt-24">
        <div className="w-full max-w-md bg-[--color-surface-container-low] rounded-[--radius-xl] p-[--spacing-md] md:p-[--spacing-lg] shadow-ambient border border-[--color-surface-container-highest]">

          {/* Header */}
          <div className="text-center mb-[--spacing-xl]">
            <h1 className="text-headline-lg-mobile md:text-headline-lg text-[--color-on-surface] mb-[--spacing-sm]">
              Bienvenido de vuelta
            </h1>
            <p className="text-body-md text-[--color-on-surface-variant]">
              Conéctate para continuar.
            </p>
          </div>

          {/* Login Form */}
          <form action="/api/auth/login" method="POST" className="space-y-[--spacing-md]">
            {/* Email */}
            <div className="space-y-[--spacing-xs]">
              <label
                htmlFor="login-email"
                className="block text-label-md text-[--color-on-surface]"
              >
                Correo electrónico
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="tu@email.com"
                className="w-full bg-[--color-surface-container-lowest] border border-[--color-tertiary-fixed-dim] rounded-[--radius-lg] px-4 py-3 text-body-md text-[--color-on-surface] placeholder:text-[--color-on-surface-variant] focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-[--color-primary] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              />
            </div>

            {/* Password */}
            <div className="space-y-[--spacing-xs]">
              <label
                htmlFor="login-password"
                className="block text-label-md text-[--color-on-surface]"
              >
                Contraseña
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="w-full bg-[--color-surface-container-lowest] border border-[--color-tertiary-fixed-dim] rounded-[--radius-lg] px-4 py-3 text-body-md text-[--color-on-surface] placeholder:text-[--color-on-surface-variant] focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:border-[--color-primary] transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <Link
                href="/auth/forgot-password"
                className="text-label-md text-[--color-primary] hover:text-[--color-primary-fixed-dim] transition-colors"
              >
                ¿Olvidé mi contraseña?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[--color-primary-container] text-[--color-on-primary-container] rounded-[--radius-lg] py-3 text-label-md font-semibold shadow-[0_4px_12px_rgba(244,190,55,0.2)] hover:bg-[--color-primary-fixed-dim] hover:shadow-[0_6px_16px_rgba(244,190,55,0.3)] transition-all active:scale-[0.98]"
            >
              Iniciar sesión
            </button>
          </form>

          {/* Divider */}
          <div className="mt-[--spacing-lg]">
            <div className="relative flex items-center mb-[--spacing-md]">
              <div className="flex-grow border-t border-[--color-tertiary-fixed-dim]" />
              <span className="flex-shrink-0 mx-4 text-[--color-on-surface-variant] text-label-sm">
                o continuar con
              </span>
              <div className="flex-grow border-t border-[--color-tertiary-fixed-dim]" />
            </div>

            {/* OAuth buttons */}
            <div className="flex flex-col space-y-[--spacing-sm]">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-[--color-surface-container-lowest] border border-[--color-outline-variant] rounded-[--radius-lg] py-2.5 px-4 text-label-md text-[--color-on-surface] hover:bg-[--color-surface-container-highest] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined">login</span>
                Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-[--color-surface-container-lowest] border border-[--color-outline-variant] rounded-[--radius-lg] py-2.5 px-4 text-label-md text-[--color-on-surface] hover:bg-[--color-surface-container-highest] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined">work</span>
                LinkedIn
              </button>
            </div>
          </div>

          {/* Register link */}
          <div className="mt-[--spacing-xl] text-center">
            <p className="text-body-md text-[--color-on-surface-variant]">
              ¿No tienes una cuenta?{' '}
              <Link
                href="/auth/register"
                className="text-label-md text-[--color-primary] hover:text-[--color-primary-fixed-dim] transition-colors ml-1"
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
