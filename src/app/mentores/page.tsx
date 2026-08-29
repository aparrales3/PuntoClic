import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentores - PUNTOCLICK',
  description: 'Conoce a nuestros mentores y guías en la comunidad PuntoClic.',
};

export default function MentoresPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          MENTORES PUNTOCLICK
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-xl">
        {/* Mentor 1: Dayana Padilla */}
        <section className="bg-surface-container-lowest rounded-xl shadow-ambient border border-surface-container-high overflow-hidden flex flex-col md:flex-row relative">
          <div className="md:w-1/3 h-64 md:h-auto relative bg-gradient-to-br from-secondary-container to-secondary-fixed flex items-center justify-center">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-surface/20 border-4 border-surface/30 flex items-center justify-center font-bold text-5xl text-on-secondary-container mx-auto mb-2">
                DP
              </div>
              <p className="text-on-secondary-container font-label-md text-label-md font-bold md:hidden">
                Dayana Padilla
              </p>
            </div>
            <div className="absolute bottom-4 left-4 md:hidden">
              <p className="font-label-sm text-label-sm text-on-secondary-container/70">
                Licenciada en Marketing
              </p>
            </div>
          </div>

          <div className="p-md md:p-lg md:w-2/3 flex flex-col justify-between">
            <div>
              <div className="hidden md:block mb-sm">
                <h2 className="font-headline-xl text-headline-xl text-on-background mb-xs">
                  Dayana Padilla
                </h2>
                <span className="inline-block bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm">
                  Licenciada en Marketing
                </span>
              </div>
              <div className="space-y-sm mt-md md:mt-0">
                <div>
                  <h3 className="font-label-md text-label-md text-tertiary uppercase tracking-wider mb-xs">
                    Rol
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface">
                    Líder de Proyecto, Estratega de Marca y Marketing Creativo.
                  </p>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-tertiary uppercase tracking-wider mb-xs">
                    Especialidades
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-lg font-label-sm text-label-sm border border-outline-variant">
                      Identidad visual
                    </span>
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-lg font-label-sm text-label-sm border border-outline-variant">
                      Estrategia de Marca
                    </span>
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-lg font-label-sm text-label-sm border border-outline-variant">
                      Redacción general
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-lg flex flex-wrap gap-sm">
              <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-primary-fixed transition-colors shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Contactar
              </button>
              <Link
                href="/mentores/diagnostico"
                className="border-2 border-outline text-on-surface px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined">assignment</span>
                Ver Diagnóstico
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
