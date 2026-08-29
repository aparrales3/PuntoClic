import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solicitudes Institucionales - Admin PUNTOCLICK',
  description: 'Revisión y aprobación de solicitudes de registro de instituciones.',
};

export default function SolicitudesInstitucionalesPage() {
  return (
    <main className="flex-1 p-margin-mobile md:p-lg space-y-lg max-w-container-max mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-md">
        <div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
            Verificación de Solicitudes Institucionales
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Revisa la documentación y aprueba o rechaza las nuevas solicitudes de instituciones educacionales o gubernamentales.
          </p>
        </div>
      </div>

      {/* Grid of Pending Requests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {/* Request Card 1 */}
        <div className="bg-surface-container-low rounded-xl p-md md:p-lg border border-surface-container-high shadow-ambient flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-sm">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Universidad
              </span>
              <span className="text-xs text-on-surface-variant">Hace 2 horas</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-background font-bold mb-xs">
              Universidad Nacional Agraria (UNA)
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Managua, Nicaragua &bull; RUC: J0310000012345
            </p>

            <div className="space-y-2 mb-md bg-surface p-sm rounded-lg border border-outline-variant text-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Contacto Principal:</span>
                <span className="font-semibold text-on-background">Dra. María Gutiérrez</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Correo Oficial:</span>
                <span className="font-semibold text-primary">contacto@una.edu.ni</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Documento Adjunto:</span>
                <span className="font-semibold text-secondary flex items-center gap-1 cursor-pointer">
                  <span className="material-symbols-outlined text-sm">description</span> Ver PDF
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-sm pt-sm border-t border-outline-variant">
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-label-md py-2.5 rounded-lg font-bold transition-all shadow-sm flex justify-center items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Aprobar
            </button>
            <button className="flex-1 bg-error hover:bg-red-700 text-white font-label-md text-label-md py-2.5 rounded-lg font-bold transition-all shadow-sm flex justify-center items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">cancel</span>
              Rechazar
            </button>
          </div>
        </div>

        {/* Request Card 2 */}
        <div className="bg-surface-container-low rounded-xl p-md md:p-lg border border-surface-container-high shadow-ambient flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-sm">
              <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Centro Tecnológico
              </span>
              <span className="text-xs text-on-surface-variant">Ayer</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-background font-bold mb-xs">
              INATEC Central
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Managua, Nicaragua &bull; RUC: J0310000099887
            </p>

            <div className="space-y-2 mb-md bg-surface p-sm rounded-lg border border-outline-variant text-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Contacto Principal:</span>
                <span className="font-semibold text-on-background">Ing. Roberto López</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Correo Oficial:</span>
                <span className="font-semibold text-primary">relaciones@technicaragua.edu.ni</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Documento Adjunto:</span>
                <span className="font-semibold text-secondary flex items-center gap-1 cursor-pointer">
                  <span className="material-symbols-outlined text-sm">description</span> Ver PDF
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-sm pt-sm border-t border-outline-variant">
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-label-md py-2.5 rounded-lg font-bold transition-all shadow-sm flex justify-center items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Aprobar
            </button>
            <button className="flex-1 bg-error hover:bg-red-700 text-white font-label-md text-label-md py-2.5 rounded-lg font-bold transition-all shadow-sm flex justify-center items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">cancel</span>
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
