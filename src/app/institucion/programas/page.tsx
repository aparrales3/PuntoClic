import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Programas y Oportunidades - PUNTOCLICK',
  description: 'Publicación y gestión de programas académicos, becas y convocatorias.',
};

export default function ProgramasInstitucionalesPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      {/* Header */}
      <header className="bg-surface shadow-sm flex justify-between items-center w-full px-margin-mobile py-base sticky top-0 z-40">
        <Link
          href="/institucion/dashboard"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          PROGRAMAS & OPORTUNIDADES
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-md">
          <div>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-xs">
              Gestión de Programas
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Crea y administra diplomados, convocatorias de innovación y ofertas académicas.
            </p>
          </div>
          <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2.5 rounded-lg shadow-sm hover:opacity-90 transition-all font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Nuevo Programa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Card 1 */}
          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-ambient flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-xs">
                <span className="bg-primary-container text-on-primary-container text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                  Diplomado
                </span>
                <span className="text-xs text-on-surface-variant">Activo</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background font-bold mb-sm">
                Desarrollo Fullstack & Cloud
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Programa intensivo de 6 meses orientado a tecnologías web modernas.
              </p>
            </div>
            <div className="pt-sm border-t border-outline-variant flex justify-between items-center text-xs text-on-surface-variant">
              <span>120 Estudiantes Inscritos</span>
              <button className="text-primary font-bold hover:underline flex items-center gap-1">
                Ver postulantes <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-ambient flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-xs">
                <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                  Convocatoria
                </span>
                <span className="text-xs text-on-surface-variant">Abierta</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background font-bold mb-sm">
                Fondo de Innovación Verde 2024
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                Financiamiento para startups universitarias enfocadas en tecnología ambiental.
              </p>
            </div>
            <div className="pt-sm border-t border-outline-variant flex justify-between items-center text-xs text-on-surface-variant">
              <span>45 Proyectos Recibidos</span>
              <button className="text-primary font-bold hover:underline flex items-center gap-1">
                Ver proyectos <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
