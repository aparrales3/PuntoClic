import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Panel Administrativo - PUNTOCLICK',
  description: 'Resumen del ecosistema y métricas clave.',
};

export default function AdminDashboardPage() {
  return (
    <main className="flex-grow p-margin-mobile md:p-lg lg:p-xl max-w-container-max mx-auto w-full pb-32 md:pb-lg">
      <header className="mb-xl hidden md:flex justify-between items-end">
        <div>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-2">
            Panel Administrativo
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Resumen del ecosistema y métricas clave.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container text-on-surface-variant px-6 py-3 rounded-lg font-label-md text-label-md border-2 border-outline-variant hover:bg-surface-container-high transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">download</span>
            Exportar Reporte
          </button>
        </div>
      </header>

      {/* Bento Grid: Key Metrics & Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
        {/* Metric Card 1: Usuarios Totales */}
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-container-high col-span-1 lg:col-span-2 flex flex-col justify-between hover:shadow-ambient-md transition-all relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  groups
                </span>
                Usuarios Totales
              </h3>
              <span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full font-label-sm text-label-sm">
                +12% este mes
              </span>
            </div>
            <p className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-4">
              24,592
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                Talentos (65%)
              </span>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%]"></div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                Empresas (25%)
              </span>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[25%]"></div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">
                Instituciones (10%)
              </span>
              <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Card 2: Matches */}
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary-container rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">
              handshake
            </span>
            Matches Exitosos
          </h3>
          <p className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-2">
            1,204
          </p>
          <p className="font-label-sm text-label-sm text-tertiary">
            Promedio 40/día
          </p>
          <div className="mt-4 flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-surface-container-lowest flex items-center justify-center text-on-primary-container font-label-sm text-label-sm">
              JD
            </div>
            <div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-surface-container-lowest flex items-center justify-center text-on-secondary-container font-label-sm text-label-sm">
              AC
            </div>
            <div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-surface-container-lowest flex items-center justify-center text-on-tertiary-container font-label-sm text-label-sm">
              MR
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface-container-lowest flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm">
              +
            </div>
          </div>
        </div>

        {/* Quick Actions Column */}
        <div className="flex flex-col gap-sm">
          <Link
            className="bg-primary text-on-primary font-label-md text-label-md rounded-lg py-3 px-4 flex items-center justify-between hover:bg-on-primary-fixed-variant transition-colors shadow-sm"
            href="/admin/solicitudes-institucionales"
          >
            Verificar Instituciones
            <span className="material-symbols-outlined">verified</span>
          </Link>
          <Link
            className="bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md rounded-lg py-3 px-4 flex items-center justify-between hover:bg-secondary-fixed-dim transition-colors shadow-sm"
            href="/admin/mentores"
          >
            Gestionar Mentores
            <span className="material-symbols-outlined">manage_accounts</span>
          </Link>
          <Link
            className="bg-surface-container-lowest text-primary font-label-md text-label-md rounded-lg py-3 px-4 flex items-center justify-between border-2 border-primary-container hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
            href="/feria"
          >
            Crear Nueva Feria
            <span className="material-symbols-outlined">add_circle</span>
          </Link>
        </div>
      </section>

      {/* Detailed Modules Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Active Opportunities List */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-container-high">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-md text-headline-md text-on-background">
              Oportunidades Activas
            </h2>
            <Link
              className="font-label-md text-label-md text-primary hover:underline"
              href="/admin/oportunidades"
            >
              Ver todas
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {/* Job Item 1 */}
            <div className="flex flex-col md:flex-row justify-between md:items-center p-4 bg-surface rounded-lg border border-surface-container hover:border-primary-container transition-colors group cursor-pointer">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                    Desarrollador Frontend Jr.
                  </h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    TechCorp Inc. • Remoto
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-xl font-label-sm text-label-sm">
                  45 Postulantes
                </span>
                <span className="material-symbols-outlined text-tertiary">
                  chevron_right
                </span>
              </div>
            </div>

            {/* Job Item 2 */}
            <div className="flex flex-col md:flex-row justify-between md:items-center p-4 bg-surface rounded-lg border border-surface-container hover:border-primary-container transition-colors group cursor-pointer">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">palette</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-on-background group-hover:text-primary transition-colors">
                    UI/UX Product Designer
                  </h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Studio Creative • Híbrido
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-xl font-label-sm text-label-sm">
                  28 Postulantes
                </span>
                <span className="material-symbols-outlined text-tertiary">
                  chevron_right
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Chart Card */}
        <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-container-high flex flex-col items-center justify-center text-center">
          <h3 className="font-headline-md text-headline-md text-on-background mb-6 w-full text-left">
            Distribución
          </h3>
          <div className="relative w-48 h-48 rounded-full flex items-center justify-center mb-6 bg-gradient-to-tr from-primary via-secondary to-tertiary p-1">
            <div className="w-36 h-36 bg-surface-container-lowest rounded-full shadow-inner flex flex-col items-center justify-center">
              <span className="font-headline-md text-headline-md text-on-background">
                100%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Total
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
