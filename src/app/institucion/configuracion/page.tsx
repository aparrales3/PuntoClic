import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Configuración Institucional - PUNTOCLICK',
  description: 'Ajustes del perfil institucional, notificaciones y credenciales.',
};

export default function InstitucionConfiguracionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/institucion/dashboard"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          CONFIGURACIÓN INSTITUCIONAL
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-lg">
        <div className="mb-md">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-xs">
            Ajustes de la Institución
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Administra los datos de tu entidad, correos de contacto y preferencias.
          </p>
        </div>

        <div className="bg-surface-container-low rounded-xl p-md md:p-lg border border-surface-container-high shadow-ambient space-y-md">
          <div>
            <label className="block font-label-md text-label-md text-on-surface font-bold mb-xs" htmlFor="pref-email">
              Correo Electrónico Notificaciones
            </label>
            <input
              id="pref-email"
              type="email"
              defaultValue="notificaciones@universidad.edu.ni"
              className="w-full max-w-lg bg-surface border border-outline-variant rounded-lg p-3 text-sm text-on-surface focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block font-label-md text-label-md text-on-surface font-bold mb-xs" htmlFor="pref-phone">
              Teléfono de Contacto
            </label>
            <input
              id="pref-phone"
              type="text"
              defaultValue="+505 2277-0000"
              className="w-full max-w-lg bg-surface border border-outline-variant rounded-lg p-3 text-sm text-on-surface focus:outline-none focus:border-primary"
            />
          </div>

          <div className="pt-md">
            <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg font-bold shadow-sm hover:opacity-90 transition-all">
              Guardar Cambios
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
