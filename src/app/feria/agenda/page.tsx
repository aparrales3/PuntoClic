import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agenda de la Feria - PUNTOCLICK',
  description: 'Cronograma de ponencias, talleres y actividades principales de la Feria PuntoClic.',
};

export default function FeriaAgendaPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/feria"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          AGENDA DE ACTIVIDADES
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-lg">
        <div className="mb-md">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-xs">
            Cronograma del Evento
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Planifica tu asistencia a las charlas principales y sesiones de networking.
          </p>
        </div>

        <div className="space-y-md">
          {/* Activity 1 */}
          <div className="bg-surface-container-low p-md rounded-xl border border-surface-container-high shadow-ambient flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-xl bg-primary-container text-on-primary-container flex flex-col items-center justify-center font-bold">
                <span className="text-sm">15 OCT</span>
                <span className="text-xs">09:00 AM</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background font-bold">
                  Inauguración & Keynote: Inteligencia Artificial en el Empleo
                </h3>
                <p className="text-sm text-on-surface-variant">Auditorio Principal &bull; Speaker: Dra. Helena Vance</p>
              </div>
            </div>
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold self-start md:self-auto">
              Keynote
            </span>
          </div>

          {/* Activity 2 */}
          <div className="bg-surface-container-low p-md rounded-xl border border-surface-container-high shadow-ambient flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-xl bg-tertiary-container text-on-tertiary-container flex flex-col items-center justify-center font-bold">
                <span className="text-sm">15 OCT</span>
                <span className="text-xs">11:30 AM</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-background font-bold">
                  Taller: Cómo destacar tu portafolio ante reclutadores tech
                </h3>
                <p className="text-sm text-on-surface-variant">Sala B &bull; Facilita: Equipo de Talento PuntoClic</p>
              </div>
            </div>
            <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold self-start md:self-auto">
              Taller Práctico
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
