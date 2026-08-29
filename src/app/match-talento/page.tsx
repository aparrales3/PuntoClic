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
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYqyoywSy1r4UXioPwLS-aXM7-C3FwOda9FoC0IUWZ_LCCaDtMXpBvuXkJ_AKFjG8B5BHlb8K4T8wfcyv5qf4gaw11IOiZ8Q7L9k64r7hrZ9Q4yBa90yTPrFeEIDmeHuEs95Zm0_s8CTwFeOs5kz78C1eEpt8o9kmkO0WfCO684NVf4HcCnmJYLjMrRIRhPIw67f3MMybRJt1Tk_KhDnMrEiWWt6lIEwov-DosPSbaFU4RpQAkdsz1"
                alt="Ana Martínez"
                className="w-16 h-16 rounded-full object-cover border-2 border-secondary-container"
              />
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
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVcSejuFdo5__-11rXb_0oEJ6PYq-7IVQw2iRe1AxJjguDB3pEKDwtvp2rndnCyslG3r90QfPJckZ9UpN2m_GhW_BE5lMN35pXox0fJNvQlB8B_V0PnPFS6y0TFokNNAov0jrhxg6yi_rsWnbJBAJ6mgfF-flEdD2hOTsyVGfcojvIPeMg8QEm8dHehd-tbi1GMCt-G_DziFPbassBJc1uJ3r39NkWbBhJdJVGpIETVlOO17kiz0WY"
                alt="Carlos Silva"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary-container"
              />
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
