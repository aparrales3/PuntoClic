import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estado de Solicitud Institucional - PUNTOCLICK',
  description: 'Consulta el progreso de la solicitud de registro institucional.',
};

export default function EstadoSolicitudPage() {
  return (
    <div className="bg-surface-bright text-on-surface antialiased min-h-screen flex flex-col font-body-md">
      {/* TopAppBar */}
      <header className="bg-surface shadow-sm flex justify-between items-center w-full px-margin-mobile md:px-lg h-16 max-w-container-max mx-auto">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">hub</span>
          <span className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary">
            PUNTOCLICK
          </span>
        </div>
        <span className="material-symbols-outlined text-primary cursor-pointer p-2 rounded-full hover:bg-surface-container">
          notifications
        </span>
      </header>

      <main className="flex-grow w-full px-margin-mobile md:px-lg py-lg md:py-xl max-w-container-max mx-auto pb-32">
        <div className="mb-lg text-center md:text-left">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-xs font-bold">
            Estado de Solicitud
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Consulta el progreso de tu registro institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Status Card (Approved State) */}
          <div className="md:col-span-8 bg-surface-container-low rounded-xl p-md md:p-lg shadow-ambient border border-surface-variant flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden">
            <div className="bg-secondary-container rounded-full p-sm mb-md inline-flex">
              <span className="material-symbols-outlined text-4xl text-secondary">
                verified
              </span>
            </div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-secondary mb-xs font-bold">
              ¡Solicitud Aprobada!
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-lg">
              Tu institución ha superado la revisión con éxito y ya forma parte oficial del ecosistema PuntoClic.
            </p>

            <div className="w-full bg-surface-bright border border-secondary-fixed-dim rounded-lg p-md mb-lg flex flex-col md:flex-row items-center justify-between gap-md relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary"></div>
              <div className="pl-2">
                <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                  ID Institucional Generado
                </span>
                <span className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface font-bold">
                  PC-INS-000001
                </span>
              </div>
            </div>

            <Link
              href="/institucion/dashboard"
              className="w-full md:w-auto bg-primary text-on-primary font-label-md text-label-md px-lg py-3 rounded-lg shadow-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2 font-bold"
            >
              Ir al Dashboard Institucional
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Process Timeline */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-md shadow-ambient border border-surface-variant">
            <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-md border-b border-surface-variant pb-2 font-bold">
              Historial de Proceso
            </h3>
            <div className="relative pl-6 space-y-6">
              <div className="relative">
                <div className="absolute -left-6 bg-secondary text-on-secondary rounded-full w-[24px] h-[24px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <h4 className="font-label-md text-label-md text-on-surface font-bold">
                  Solicitud Enviada
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  12 Oct 2024, 10:30 AM
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-6 bg-secondary text-on-secondary rounded-full w-[24px] h-[24px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <h4 className="font-label-md text-label-md text-on-surface font-bold">
                  En Revisión
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  14 Oct 2024, 09:15 AM
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-6 bg-secondary text-on-secondary rounded-full w-[24px] h-[24px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
                <h4 className="font-label-md text-label-md text-on-surface font-bold">
                  Aprobada
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  16 Oct 2024, 14:20 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
