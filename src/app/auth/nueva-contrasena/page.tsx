import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nueva contraseña - PUNTOCLICK',
  description: 'Crea tu nueva contraseña para acceder a tu cuenta.',
};

export default function NuevaContrasenaPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-margin-mobile font-body-md text-on-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background flex justify-between items-center w-full px-margin-mobile py-sm z-50">
        <Link
          href="/auth/codigo-recuperacion"
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-primary tracking-wider uppercase flex-1 text-center pr-8">
          PUNTOCLICK
        </h1>
      </header>

      <main className="w-full max-w-[480px] mt-xl">
        <div className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container-low">
          <div className="mb-lg text-center">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-sm">
              <span className="material-symbols-outlined text-primary text-[32px]">
                lock_reset
              </span>
            </div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-xs">
              Crear Nueva Contraseña
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tu nueva contraseña debe ser diferente a las contraseñas usadas anteriormente.
            </p>
          </div>

          <form action="/auth/contrasena-cambiada" className="space-y-md">
            <div>
              <label
                className="block font-label-md text-label-md text-on-background mb-xs"
                htmlFor="password"
              >
                Nueva Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  lock
                </span>
                <input
                  className="w-full bg-surface-container-lowest border border-tertiary-fixed-dim rounded-lg py-3 pl-10 pr-10 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="password"
                  placeholder="Ingresa la nueva contraseña"
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Password Strength */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Seguridad de la contraseña
                </span>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  Media
                </span>
              </div>
              <div className="flex gap-2 h-1.5">
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-surface-variant rounded-full"></div>
                <div className="flex-1 bg-surface-variant rounded-full"></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">
                Debe tener al menos 8 caracteres.
              </p>
            </div>

            <div>
              <label
                className="block font-label-md text-label-md text-on-background mb-xs"
                htmlFor="confirm-password"
              >
                Confirmar Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  lock
                </span>
                <input
                  className="w-full bg-surface-container-lowest border border-tertiary-fixed-dim rounded-lg py-3 pl-10 pr-10 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="confirm-password"
                  placeholder="Confirma la nueva contraseña"
                  type="password"
                  required
                />
              </div>
            </div>

            <button
              className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 px-4 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-sm border border-primary-fixed flex items-center justify-center gap-2 mt-lg"
              type="submit"
            >
              Actualizar contraseña
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
