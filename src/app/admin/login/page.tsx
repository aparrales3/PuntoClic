import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acceso Administrativo - PUNTOCLICK ADMIN',
  description: 'Iniciar sesión en el panel de administración de PuntoClic.',
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-surface-container-low text-on-surface antialiased flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-body-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-6xl">
            hub
          </span>
        </div>
        <h2 className="mt-6 text-center font-headline-xl text-headline-xl text-on-surface">
          Acceso Administrativo
        </h2>
        <p className="mt-2 text-center font-body-md text-body-md text-on-surface-variant">
          PUNTOCLICK ADMIN
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-container-highest py-8 px-4 shadow-md rounded-xl sm:px-10 border border-surface-container-high relative overflow-hidden">
          <form action="/admin/dashboard" className="space-y-6">
            <div>
              <label className="block font-label-md text-label-md text-on-surface" htmlFor="username">
                Usuario / Correo Administrativo
              </label>
              <div className="mt-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  admin_panel_settings
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="admin@puntoclic.com"
                  className="w-full bg-surface border border-outline-variant rounded-lg pl-10 pr-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">
                Contraseña
              </label>
              <div className="mt-1 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  key
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-surface border border-outline-variant rounded-lg pl-10 pr-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all font-bold flex justify-center items-center gap-2"
            >
              Ingresar al Panel
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
