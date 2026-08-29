import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col md:flex-row">
      {/* TopAppBar (Mobile Only) */}
      <header className="md:hidden bg-background shadow-sm docked full-width top-0 flex justify-between items-center w-full px-margin-mobile py-base sticky z-40">
        <Link
          href="/admin/dashboard"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined">hub</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          PUNTOCLICK ADMIN
        </h1>
        <button className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full active:scale-95 duration-150">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Navigation Drawer (Desktop Only) */}
      <aside className="hidden md:flex flex-col p-md gap-base bg-surface-container-low shadow-xl h-screen w-80 rounded-r-xl sticky top-0 shrink-0">
        <div className="flex items-center gap-4 mb-xl">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg">
            PC
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">
              PUNTOCLICK Admin
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Bee-Hive Admin Panel
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <Link
            className="flex items-center gap-4 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg active:translate-x-1 duration-150"
            href="/admin/dashboard"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </Link>
          <Link
            className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:translate-x-1 duration-150"
            href="/admin/usuarios"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="font-label-md text-label-md">Usuarios</span>
          </Link>
          <Link
            className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:translate-x-1 duration-150"
            href="/admin/solicitudes-institucionales"
          >
            <span className="material-symbols-outlined">verified</span>
            <span className="font-label-md text-label-md">Solicitudes</span>
          </Link>
          <Link
            className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg active:translate-x-1 duration-150"
            href="/admin/empresas"
          >
            <span className="material-symbols-outlined">business</span>
            <span className="font-label-md text-label-md">Empresas</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-grow">{children}</div>
    </div>
  );
}
