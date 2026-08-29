import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mapa de Necesidades del Mercado - PUNTOCLICK',
  description: 'Análisis de demanda laboral, habilidades emergentes y sectores en crecimiento.',
};

export default function MapaNecesidadesPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          MAPA DE NECESIDADES
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content Canvas */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-md py-md md:py-lg">
        {/* Header Section */}
        <div className="mb-lg">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-sm">
            Mapa de Necesidades del Mercado
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Análisis de demanda laboral, habilidades emergentes y sectores en crecimiento para la toma de decisiones estratégicas institucionales.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-md mb-xl flex flex-col md:flex-row gap-4 shadow-ambient">
          <div className="flex-1">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
              Región / Departamento
            </label>
            <select className="w-full bg-surface border border-tertiary-fixed-dim focus:border-primary rounded-lg py-2 px-3 font-body-md text-on-background outline-none">
              <option>Nacional</option>
              <option>Managua</option>
              <option>León</option>
              <option>Matagalpa</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">
              Sector Económico
            </label>
            <select className="w-full bg-surface border border-tertiary-fixed-dim focus:border-primary rounded-lg py-2 px-3 font-body-md text-on-background outline-none">
              <option>Todos los sectores</option>
              <option>Tecnología y Software</option>
              <option>Diseño y Marketing</option>
              <option>Energías Renovables</option>
            </select>
          </div>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Card 1: Habilidades Más Demandadas */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-md border border-surface-variant shadow-ambient">
            <h3 className="font-headline-md text-headline-md text-on-background mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">psychology</span>
              Habilidades Más Demandadas
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-label-md text-label-md mb-1">
                  <span>JavaScript / React / Next.js</span>
                  <span className="text-primary font-bold">88% Demanda</span>
                </div>
                <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[88%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-label-md text-label-md mb-1">
                  <span>Diseño UX/UI & Prototipado</span>
                  <span className="text-secondary font-bold">75% Demanda</span>
                </div>
                <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full w-[75%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-label-md text-label-md mb-1">
                  <span>Análisis de Datos & Ciencia de Datos</span>
                  <span className="text-tertiary font-bold">64% Demanda</span>
                </div>
                <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full w-[64%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Sectores Emergentes */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-md border border-surface-variant shadow-ambient flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
                Crecimiento Sectorial
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Sectores con mayor proyección de contratación en los próximos 12 meses.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-surface rounded-lg flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-background">Desarrollo Web & Móvil</span>
                <span className="text-secondary font-bold text-sm">+24%</span>
              </div>
              <div className="p-3 bg-surface rounded-lg flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-background">Inteligencia Artificial</span>
                <span className="text-secondary font-bold text-sm">+42%</span>
              </div>
              <div className="p-3 bg-surface rounded-lg flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-background">Marketing Digital</span>
                <span className="text-secondary font-bold text-sm">+18%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
