import type { Metadata } from 'next';
import Link from 'next/link';
import { LogoutButton } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Permisos de la Aplicación - PUNTOCLICK',
  description: 'Gestiona los permisos de notificaciones, cámara, ubicación y almacenamiento.',
};

export default function PermisosPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      <header className="flex justify-between items-center w-full px-margin-mobile py-sm bg-background sticky top-0 z-10 shadow-sm">
        <Link
          href="/"
          className="text-primary hover:opacity-80 transition-opacity p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md-mobile text-primary uppercase tracking-wider text-center flex-1 font-bold">
          PUNTOCLICK
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="px-margin-mobile pb-32 max-w-container-max mx-auto md:px-lg mt-md">
        <div className="mb-lg">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold mb-sm">
            Permisos de la Aplicación
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Para ofrecerte la mejor experiencia, PUNTOCLICK necesita ciertos permisos. Puedes modificarlos en cualquier momento.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          {/* Notifications */}
          <div className="bg-surface-container-low rounded-xl p-md shadow-ambient border border-outline-variant flex items-start gap-md">
            <div className="bg-primary-container text-on-primary-container p-sm rounded-full shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-xs">
                <h3 className="font-label-md text-label-md font-bold">Notificaciones</h3>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary cursor-pointer" />
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Recibe alertas, recordatorios y mensajes importantes de tus conexiones.
              </p>
            </div>
          </div>

          {/* Camera */}
          <div className="bg-surface-container-low rounded-xl p-md shadow-ambient border border-outline-variant flex items-start gap-md">
            <div className="bg-primary-container text-on-primary-container p-sm rounded-full shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined">camera_alt</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-xs">
                <h3 className="font-label-md text-label-md font-bold">Cámara</h3>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary cursor-pointer" />
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Permite capturar fotos de perfil y escanear pases QR para eventos.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-surface-container-low rounded-xl p-md shadow-ambient border border-outline-variant flex items-start gap-md">
            <div className="bg-primary-container text-on-primary-container p-sm rounded-full shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-xs">
                <h3 className="font-label-md text-label-md font-bold">Ubicación</h3>
                <input type="checkbox" className="w-5 h-5 accent-primary cursor-pointer" />
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Encuentra ferias, hubs y conexiones relevantes cerca de ti.
              </p>
            </div>
          </div>

          {/* Account & Session Management */}
          <div className="mt-lg p-md bg-surface-container-low rounded-xl border border-surface-container-high shadow-ambient">
            <h3 className="font-headline-sm text-on-surface font-bold mb-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_circle</span>
              Cuenta y Sesión
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
              Gestiona tu sesión activa en este dispositivo.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-sm pt-sm border-t border-surface-container-high">
              <span className="text-sm text-on-surface-variant">¿Deseas salir de tu cuenta?</span>
              <LogoutButton variant="button" label="Cerrar sesión" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
