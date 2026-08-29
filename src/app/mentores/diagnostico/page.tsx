import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Diagnóstico Mentor - PUNTOCLICK',
  description: 'Resumen de solicitudes y diagnósticos de empresas asignadas.',
};

export default function DiagnosticoMentorPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      {/* TopHeader */}
      <header className="bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base sticky top-0 z-40">
        <Link
          href="/mentores"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          DIAGNÓSTICO MENTOR
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-xl">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-md">
          <div>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-xs">
              Dashboard Mentor
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Resumen de solicitudes y diagnósticos de empresas.
            </p>
          </div>
          <div className="flex gap-sm">
            <button className="bg-surface-container text-on-surface px-md py-sm rounded-lg font-label-md text-label-md border border-outline-variant flex items-center gap-xs hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                filter_list
              </span>{' '}
              Filtrar
            </button>
            <button className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs hover:opacity-90 transition-opacity shadow-sm">
              <span className="material-symbols-outlined text-[18px]">add</span>{' '}
              Nuevo Diagnóstico
            </button>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
          <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between shadow-ambient border border-surface-container-high relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary-container rounded-full opacity-20"></div>
            <span className="material-symbols-outlined text-primary mb-sm text-[28px]">
              assignment_ind
            </span>
            <div>
              <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                12
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Empresas Asignadas
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between shadow-ambient border border-surface-container-high relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary-container rounded-full opacity-20"></div>
            <span className="material-symbols-outlined text-secondary mb-sm text-[28px]">
              pending_actions
            </span>
            <div>
              <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                5
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Diagnósticos Pendientes
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between shadow-ambient border border-surface-container-high relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-tertiary-container rounded-full opacity-20"></div>
            <span className="material-symbols-outlined text-tertiary mb-sm text-[28px]">
              task_alt
            </span>
            <div>
              <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                28
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Completados
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between shadow-ambient border border-surface-container-high relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary-fixed-dim rounded-full opacity-20"></div>
            <span className="material-symbols-outlined text-primary mb-sm text-[28px]">
              star
            </span>
            <div>
              <p className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                4.9
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Valoración Media
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
