import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gestión de Usuarios - Admin PUNTOCLICK',
  description: 'Administración de usuarios, roles y permisos en la plataforma PuntoClic.',
};

export default function AdminUsuariosPage() {
  return (
    <main className="flex-1 p-margin-mobile md:p-lg space-y-lg max-w-container-max mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-md">
        <div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
            Gestión de Usuarios
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Administra los usuarios registrados, sus roles y estados en el ecosistema.
          </p>
        </div>
        <div className="flex gap-sm">
          <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2.5 rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Crear Usuario
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-container-low p-md rounded-xl border border-surface-container-high shadow-ambient flex flex-col md:flex-row gap-md items-center justify-between">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar por nombre, email o rol..."
            className="w-full bg-surface border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex gap-sm w-full md:w-auto">
          <select className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none">
            <option>Todos los Roles</option>
            <option>Talento</option>
            <option>Empresa</option>
            <option>Institución</option>
          </select>
          <select className="bg-surface border border-outline-variant rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none">
            <option>Todos los Estados</option>
            <option>Activo</option>
            <option>Pendiente</option>
            <option>Inactivo</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-ambient overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container-high text-on-surface-variant font-label-md text-label-md">
                <th className="p-4">Usuario</th>
                <th className="p-4">Rol</th>
                <th className="p-4">Estado</th>
                <th className="p-4">Fecha de Registro</th>
                <th className="p-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high text-sm">
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                    DP
                  </div>
                  <div>
                    <p className="font-bold text-on-background">Dayana Padilla</p>
                    <p className="text-xs text-on-surface-variant">dayana@ejemplo.com</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full text-xs font-semibold">
                    Talento
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-xs font-semibold">
                    Activo
                  </span>
                </td>
                <td className="p-4 text-on-surface-variant">15 Oct 2024</td>
                <td className="p-4 text-right space-x-2">
                  <button className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-primary" title="Editar">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-error" title="Eliminar">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">
                    TH
                  </div>
                  <div>
                    <p className="font-bold text-on-background">TechHive Solutions</p>
                    <p className="text-xs text-on-surface-variant">contacto@techhive.com</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-2.5 py-1 rounded-full text-xs font-semibold">
                    Empresa
                  </span>
                </td>
                <td className="p-4">
                  <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-xs font-semibold">
                    Activo
                  </span>
                </td>
                <td className="p-4 text-on-surface-variant">10 Oct 2024</td>
                <td className="p-4 text-right space-x-2">
                  <button className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-primary" title="Editar">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-error" title="Eliminar">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
