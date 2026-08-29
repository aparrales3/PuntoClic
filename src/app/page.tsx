import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PUNTOCLICK - Conectamos talento, empresas e instituciones',
  description: 'Conectamos talento, empresas e instituciones.',
};

export default function WelcomePage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      {/* Linear/Transactional Page - Navigation Shell Suppressed */}
      <main className="flex-grow flex flex-col md:flex-row relative overflow-hidden">
        {/* Decorative Ambient Blur */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        {/* Content Canvas */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-margin-mobile md:p-xl z-10 relative">
          {/* Brand Logo (Discrete & Professional) */}
          <div className="mb-lg flex items-center gap-3">
            <img src="/logo.png" alt="PUNTOCLICK Logo" className="h-10 w-auto object-contain" />
            <span className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-wider font-bold">
              PUNTOCLICK
            </span>
          </div>

          {/* Hero Text */}
          <div className="max-w-[448px]">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-md font-bold">
              Conectamos talento, empresas e instituciones.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Descubre un ecosistema donde profesionales y organizaciones colaboran para impulsar el crecimiento mutuo en un entorno moderno y eficiente.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-sm">
              {/* Primary Button: Login */}
              <Link
                href="/auth/login"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded-lg shadow-sm hover:shadow-md hover:bg-surface-tint transition-all duration-200 flex items-center justify-center gap-xs group font-bold"
              >
                <span>Iniciar Sesión</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">login</span>
              </Link>

              {/* Secondary Button: Cómo funciona */}
              <Link
                href="/como-funciona"
                className="w-full bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md rounded-lg hover:bg-surface-container-high transition-colors duration-200 flex items-center justify-center gap-xs font-bold"
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
          </div>
        </div>

        {/* Hero Visual Banner (Desktop Side) */}
        <div className="w-full md:w-1/2 bg-surface-container-high relative min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLu0K1tZ0_N4L4gM1x7d397mO9uW_793nL2O3y0h8s6kZ34k1vN9k7l0')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/20 to-transparent"></div>
        </div>
      </main>
    </div>
  );
}
