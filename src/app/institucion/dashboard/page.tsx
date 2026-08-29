import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard Institucional - PUNTOCLICK',
  description: 'Resumen de tu ecosistema de talento institucional hoy.',
};

export default function InstitucionalDashboardPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg py-md md:py-xl grid grid-cols-1 md:grid-cols-12 gap-md md:gap-xl">
      {/* Welcome Section */}
      <section className="col-span-1 md:col-span-12 flex flex-col md:flex-row md:items-end justify-between gap-md mb-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-[14px]">
                check_circle
              </span>
              ✓ INSTITUCIÓN VERIFICADA
            </span>
            <span className="text-on-surface-variant font-label-sm text-label-sm">
              ID: PC-INS-000127
            </span>
          </div>
          <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background">
            Hola, <span className="text-primary">Tech University</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Aquí tienes un resumen de tu ecosistema de talento hoy.
          </p>
        </div>
      </section>

      {/* Quick Stats Bento */}
      <section className="col-span-1 md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-md">
        <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between hover:shadow-lg transition-shadow border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container rounded-bl-full opacity-20 -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-2 mb-4 text-primary">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label-md text-label-md">
              Programas activos
            </span>
          </div>
          <span className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background">
            12
          </span>
        </div>

        <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between hover:shadow-lg transition-shadow border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-container rounded-bl-full opacity-20 -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-2 mb-4 text-secondary">
            <span className="material-symbols-outlined">work</span>
            <span className="font-label-md text-label-md">Oportunidades</span>
          </div>
          <span className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background">
            45
          </span>
        </div>

        <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between hover:shadow-lg transition-shadow border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary-container rounded-bl-full opacity-20 -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-2 mb-4 text-tertiary">
            <span className="material-symbols-outlined">campaign</span>
            <span className="font-label-md text-label-md">Convocatorias</span>
          </div>
          <span className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background">
            3
          </span>
        </div>

        <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between hover:shadow-lg transition-shadow border border-surface-container-high relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed-dim rounded-bl-full opacity-20 -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-2 mb-4 text-primary">
            <span className="material-symbols-outlined">groups</span>
            <span className="font-label-md text-label-md">
              Talento alcanzado
            </span>
          </div>
          <span className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background">
            1.2k
          </span>
        </div>
      </section>

      {/* Main Actions */}
      <section className="col-span-1 md:col-span-4 flex flex-col gap-sm md:gap-md">
        <h3 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-on-background mb-2">
          Acciones Rápidas
        </h3>
        <Link
          className="w-full bg-primary-container text-on-primary-container rounded-xl p-md flex items-center justify-between hover:bg-primary-fixed transition-colors shadow-sm active:scale-[0.98] duration-200"
          href="/institucion/programas/nuevo"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-on-primary-container text-primary-container rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">add</span>
            </div>
            <span className="font-label-md text-label-md font-bold">
              Crear Programa
            </span>
          </div>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>

        <Link
          className="w-full bg-surface-container-low border-2 border-primary-container text-on-background rounded-xl p-md flex items-center justify-between hover:bg-surface-container-high transition-colors shadow-sm active:scale-[0.98] duration-200"
          href="/institucion/convocatorias/nueva"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface-variant text-on-surface-variant rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <span className="font-label-md text-label-md font-bold">
              Nueva Convocatoria
            </span>
          </div>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>

        <div className="mt-4 p-md rounded-xl bg-surface-container-lowest border border-surface-variant shadow-sm relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-fixed rounded-full opacity-30 blur-2xl pointer-events-none"></div>
          <h4 className="font-label-md text-label-md text-on-surface-variant mb-2">
            Próximo evento
          </h4>
          <p className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md text-on-background">
            Feria de Empleo Tech 2024
          </p>
          <p className="font-label-sm text-label-sm text-secondary mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">
              calendar_today
            </span>{' '}
            15 Nov, 2024
          </p>
        </div>
      </section>

      {/* Market Needs Chart Preview */}
      <section className="col-span-1 md:col-span-8">
        <div className="bg-surface-container-low rounded-xl p-md h-full flex flex-col border border-surface-container-high relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-md text-headline-lg-mobile md:text-headline-md text-on-background">
                Mapa de Necesidades del Mercado
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Habilidades más demandadas por empresas en tu ecosistema.
              </p>
            </div>
            <button className="text-primary hover:bg-surface-container-high p-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="flex-grow flex flex-col justify-end gap-4 mt-4">
            {/* Bars */}
            <div className="flex items-center gap-4">
              <div className="w-24 font-label-sm text-label-sm text-on-surface-variant truncate">
                Data Analysis
              </div>
              <div className="flex-grow bg-surface-variant rounded-full h-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-primary rounded-full w-[85%] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                </div>
              </div>
              <div className="w-12 font-label-md text-label-md text-right">
                85%
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 font-label-sm text-label-sm text-on-surface-variant truncate">
                React / JS
              </div>
              <div className="flex-grow bg-surface-variant rounded-full h-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-secondary rounded-full w-[72%] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                </div>
              </div>
              <div className="w-12 font-label-md text-label-md text-right">
                72%
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-24 font-label-sm text-label-sm text-on-surface-variant truncate">
                UI/UX Design
              </div>
              <div className="flex-grow bg-surface-variant rounded-full h-4 overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-tertiary rounded-full w-[60%] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                </div>
              </div>
              <div className="w-12 font-label-md text-label-md text-right">
                60%
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
