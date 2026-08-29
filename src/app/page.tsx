import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'PUNTOCLICK - Conectamos talento, empresas e instituciones',
  description: 'Descubre un ecosistema donde profesionales y organizaciones colaboran para impulsar el crecimiento mutuo.',
};

export default function WelcomePage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      <main className="flex-grow flex flex-col md:flex-row relative overflow-hidden min-h-screen">
        {/* Decorative Ambient Blur */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

        {/* Content Canvas */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-margin-mobile md:p-xl z-10 relative py-16 md:py-0">
          {/* Brand Logo */}
          <div className="mb-lg flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
            <span className="font-headline-md text-headline-md text-primary tracking-wider font-bold uppercase">
              PUNTOCLICK
            </span>
          </div>

          {/* Hero Text */}
          <div className="max-w-[448px]">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-md font-bold leading-tight">
              Conectamos talento, empresas e instituciones.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Descubre un ecosistema donde profesionales y organizaciones colaboran para impulsar el crecimiento mutuo en un entorno moderno y eficiente.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-sm mb-lg">
              <div className="flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                +12,000 Talentos
              </div>
              <div className="flex items-center gap-1.5 bg-primary-container text-on-primary-container px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  business
                </span>
                +1,100 Empresas
              </div>
              <div className="flex items-center gap-1.5 bg-tertiary-container text-on-tertiary-container px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_balance
                </span>
                84 Instituciones
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-sm">
              <Link
                href="/auth/login"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded-xl shadow-sm hover:shadow-md hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-xs group font-bold"
              >
                <span>Iniciar Sesión</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                  login
                </span>
              </Link>

              <Link
                href="/como-funciona"
                className="w-full bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md rounded-xl hover:bg-surface-container-high transition-colors duration-200 flex items-center justify-center gap-xs font-bold"
              >
                <span className="material-symbols-outlined text-[20px]">help_outline</span>
                <span>Cómo funciona</span>
              </Link>
            </div>

            {/* Tertiary Link: Register */}
            <div className="mt-lg text-center">
              <span className="font-body-md text-body-md text-on-surface-variant">¿No tienes cuenta? </span>
              <Link
                href="/auth/register"
                className="font-label-md text-label-md text-primary hover:underline font-bold"
              >
                Regístrate aquí
              </Link>
            </div>

            {/* Legal Footer Links */}
            <div className="mt-6 pt-4 border-t border-surface-variant/40 flex items-center justify-center gap-4 text-label-sm text-on-surface-variant">
              <Link href="/terminos" className="hover:text-primary transition-colors underline">
                Términos y Condiciones
              </Link>
              <span>•</span>
              <Link href="/privacidad" className="hover:text-primary transition-colors underline">
                Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner — desktop right panel */}
        <div className="w-full md:w-1/2 relative min-h-[340px] md:min-h-full overflow-hidden">
          {/* Left-edge gradient for blending into content */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/5 to-transparent pointer-events-none" />
          <Image
            src="/images/welcome-hero.jpg"
            alt="Profesionales latinoamericanos colaborando en un moderno espacio de trabajo luminoso"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Bottom gradient for mobile overlap */}
          <div className="absolute bottom-0 inset-x-0 h-20 z-10 bg-gradient-to-t from-background to-transparent md:hidden pointer-events-none" />
        </div>
      </main>
    </div>
  );
}
