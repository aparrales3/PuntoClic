import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recomendación y Match de Talento - PUNTOCLICK',
  description: 'Resultados del algoritmo de afinidad para empresas y proyectos.',
};

export default function MatchTalentoPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/empresa/dashboard"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          RECOMENDACIÓN DE TALENTO
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-xl">
        <div className="flex flex-col gap-sm">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-primary font-bold">
            Talentos Compatibles
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Resultados del diagnóstico de afinidad. Selecciona perfiles para iniciar una conexión directa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {/* Candidate 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-ambient border border-surface-variant flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
            <div className="flex items-start gap-md mb-md">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xl border-2 border-secondary-fixed shrink-0">
                AM
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md font-bold text-on-background">
                    Ana Martínez
                  </h3>
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">
                    95% Afinidad
                  </span>
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Diseñadora UX/UI & Prototipado
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-md">
              <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-lg text-xs font-medium">Figma</span>
              <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-lg text-xs font-medium">User Research</span>
              <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-lg text-xs font-medium">Design Systems</span>
            </div>

            <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg font-bold shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              Conectar / Hacer Match
            </button>
          </div>

          {/* Candidate 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-ambient border border-surface-variant flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
            <div className="flex items-start gap-md mb-md">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl border-2 border-primary-fixed-dim shrink-0">
                CS
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-headline-md font-bold text-on-background">
                    Carlos Silva
                  </h3>
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">
                    91% Afinidad
                  </span>
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Desarrollador Frontend React / Next.js
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-md">
              <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-lg text-xs font-medium">React</span>
              <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-lg text-xs font-medium">TypeScript</span>
              <span className="bg-surface-variant text-on-surface-variant px-2.5 py-1 rounded-lg text-xs font-medium">Tailwind CSS</span>
            </div>

            <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg font-bold shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              Conectar / Hacer Match
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
