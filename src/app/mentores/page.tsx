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
          <div className="md:w-1/3 h-64 md:h-auto relative">
            <img
              className="w-full h-full object-cover"
              alt="Dayana Padilla"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc4eYiTl9UpKhvr0FrvoQsTjuFN_mNupFJsXuIOzeQcWzTBu4SeBHrhXcz9fGRU6vHXbQUCWuLDn3ycjia6EE6mFq_OKczSuHkUE6sBMH7dqu_okaA6hE2iE5-0rE-KfXq1ETe3e8SSMZ56yTNlelizdZ9TdDhqCSaXDV4CCBdf-tdDoT87iG20mQdrbBfrnRZR20F8PZ-5sAB7tzArWeaBOAhvK2yV9E7JofQN-vACF51968UKwwD"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            <div className="absolute bottom-4 left-4 md:hidden">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white drop-shadow-md">
                Dayana Padilla
              </h2>
              <p className="font-label-sm text-label-sm text-primary-fixed">
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
