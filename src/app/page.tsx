// =============================================================================
// PUNTOCLICK — Splash Screen
// Pantalla de carga inicial — from splash_puntoclick_1/2 designs
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PUNTOCLICK',
  description: 'El ecosistema que conecta jóvenes talentos con oportunidades reales.',
};

export default function SplashPage() {
  return (
    <main className="bg-[--color-background] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated brand */}
      <div className="animate-fade-in flex flex-col items-center justify-center text-center px-[--spacing-margin-mobile]">
        {/* Hexagonal bee motif */}
        <div className="relative mb-[--spacing-lg]">
          {/* Decorative hex rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-[--radius-xl] bg-[--color-primary-container]/20 animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-[--radius-xl] bg-[--color-primary-container]/30" />
          </div>
          {/* Center icon */}
          <div className="relative z-10 w-20 h-20 rounded-[--radius-xl] bg-[--color-primary-container] flex items-center justify-center shadow-ambient-md mx-auto">
            <span
              className="material-symbols-outlined text-[--color-primary] text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-headline-xl-mobile md:text-headline-xl text-[--color-primary] tracking-wider uppercase mb-[--spacing-sm]">
          PUNTOCLICK
        </h1>

        {/* Tagline */}
        <p className="text-body-md text-[--color-on-surface-variant] max-w-xs">
          Conecta tu talento con oportunidades reales
        </p>

        {/* Bee yellow accent line — animated pulse */}
        <div className="w-16 h-1 bg-[--color-primary-container] rounded-full mt-[--spacing-md] animate-pulse" />

        {/* CTA Buttons */}
        <div className="mt-[--spacing-xl] flex flex-col gap-[--spacing-sm] w-full max-w-xs">
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-[--spacing-md] rounded-[--radius-lg] text-label-md bg-[--color-primary-container] text-[--color-on-primary-container] shadow-[0_4px_12px_rgba(244,190,55,0.3)] hover:bg-[--color-primary-fixed-dim] active:scale-[0.98] transition-all font-semibold"
          >
            <span className="material-symbols-outlined text-sm">person_add</span>
            Crear cuenta
          </Link>
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-[--spacing-md] rounded-[--radius-lg] text-label-md bg-[--color-surface-container-lowest] text-[--color-on-surface] border-2 border-[--color-outline] hover:bg-[--color-surface-variant] active:scale-[0.98] transition-all font-semibold"
          >
            <span className="material-symbols-outlined text-sm">login</span>
            Iniciar sesión
          </Link>
        </div>

        {/* Tagline footnote */}
        <p className="mt-[--spacing-lg] text-label-sm text-[--color-on-surface-variant]">
          Bee-Hive ecosystem · Talento + Empresa + Institución
        </p>
      </div>
    </main>
  );
}
