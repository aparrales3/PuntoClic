import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bienvenida - PUNTOCLICK',
  description: 'Conectamos talento, empresas e instituciones en un ecosistema colaborativo moderno.',
};

export default function Bienvenida2Page() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      <main className="flex-grow flex flex-col md:flex-row relative overflow-hidden">
        {/* Decorative Ambient Blur */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

        {/* Content Canvas */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-margin-mobile md:p-xl z-10 relative max-w-2xl mx-auto md:mx-0">
          {/* Brand Logo */}
          <div className="mb-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              hub
            </span>
            <span className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-bold tracking-wider uppercase">
              PUNTOCLICK
            </span>
          </div>

          {/* Hero Text */}
          <div className="max-w-md">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-md font-bold leading-tight">
              Conectamos talento, empresas e instituciones.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Descubre un ecosistema donde profesionales y organizaciones colaboran para impulsar el crecimiento mutuo en un entorno moderno y eficiente.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-sm">
              <Link
                href="/auth/login"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-3.5 px-md rounded-lg shadow-sm hover:shadow-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 flex items-center justify-center gap-xs group font-semibold"
              >
                <span>Iniciar Sesión</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                  login
                </span>
              </Link>

              <Link
                href="/como-funciona"
                className="w-full bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md py-3.5 px-md rounded-lg hover:bg-surface-container-high transition-colors duration-200 flex items-center justify-center gap-xs font-semibold"
              >
                <span className="material-symbols-outlined text-[20px]">help_outline</span>
                <span>Cómo funciona</span>
              </Link>
            </div>

            {/* Tertiary Link: Register */}
            <div className="mt-lg text-center md:text-left">
              <span className="font-body-md text-body-md text-on-surface-variant">¿No tienes cuenta?</span>
              <Link
                href="/auth/register"
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim underline underline-offset-4 ml-2 transition-colors font-semibold"
              >
                Seleccionar tipo de usuario
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Visual Canvas (Hidden on small mobile, present on md+) */}
        <div className="hidden md:block md:w-1/2 relative min-h-[500px] h-screen">
          <div className="absolute inset-0 bg-surface-container-high p-md">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 via-surface-container-lowest to-secondary/10 shadow-lg border border-outline-variant/30 relative overflow-hidden flex items-center justify-center">
              {/* Graphic pattern with Bee-Hive hexagons */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#785a00_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="z-10 text-center p-8 max-w-sm">
                <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary-container mx-auto flex items-center justify-center shadow-ambient-md mb-6">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    handshake
                  </span>
                </div>
                <h3 className="font-headline-lg text-primary font-bold mb-2">
                  Ecosistema Vivo
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Match inteligente entre retos del mercado real y proyectos de talento verificado.
                </p>
              </div>

              {/* Decorative nodes */}
              <div className="absolute top-12 left-12 p-3 bg-surface rounded-xl shadow-ambient border border-surface-variant flex items-center gap-2 animate-pulse">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-label-sm font-semibold text-on-surface">Match 98% Activo</span>
              </div>

              <div className="absolute bottom-16 right-12 p-3 bg-surface rounded-xl shadow-ambient border border-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-label-sm font-semibold text-on-surface">Instituciones Validadas</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
