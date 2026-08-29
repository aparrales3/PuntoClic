import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard Empresa - PUNTOCLICK',
  description: 'Resumen de tu ecosistema hoy en PuntoClic.',
};

export default function EmpresaDashboardPage() {
  return (
    <main className="flex-1 max-w-container-max mx-auto px-margin-mobile md:px-lg flex flex-col gap-md pb-md">
      {/* Welcome Section */}
      <section className="mt-sm">
        <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-xs">
          Hola, Empresa
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Aquí está el resumen de tu ecosistema hoy.
        </p>
      </section>

      {/* Highlight: ¿Qué necesitas resolver? */}
      <section className="bg-primary-container rounded-xl p-md md:p-lg shadow-ambient relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-[30%] rotate-12 blur-xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-primary-container font-bold mb-xs">
              ¿Qué necesitas resolver?
            </h3>
            <p className="font-body-md text-body-md text-on-primary-container/80">
              Conecta con el talento ideal para tus proyectos actuales.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm shrink-0">
            <Link
              className="bg-surface text-primary font-label-md text-label-md py-sm px-md rounded-lg shadow-sm flex items-center justify-center gap-xs hover:bg-surface-container-lowest transition-colors active:scale-95 duration-150 font-bold"
              href="/empresa/vacantes/nueva"
            >
              <span className="material-symbols-outlined text-[20px]">
                add_circle
              </span>
              Publicar Vacante
            </Link>
            <Link
              className="bg-transparent border-2 border-on-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs hover:bg-white/10 transition-colors active:scale-95 duration-150 font-bold"
              href="/empresa/buscar-talento"
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
              Buscar Talento
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid: Resumen & Estadísticas */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-md">
        {/* Vacantes Card */}
        <div className="col-span-1 bg-surface-container-low rounded-xl p-md shadow-ambient border border-surface-variant flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">
              Vacantes
            </span>
            <span className="material-symbols-outlined text-tertiary">
              work
            </span>
          </div>
          <div>
            <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
              12
            </span>
            <p className="font-label-sm text-label-sm text-secondary font-semibold">
              Activas
            </p>
          </div>
        </div>

        {/* Matches Card */}
        <div className="col-span-1 bg-surface-container-low rounded-xl p-md shadow-ambient border border-surface-variant flex flex-col justify-between h-36 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">
              Matches
            </span>
            <span className="material-symbols-outlined text-primary">
              handshake
            </span>
          </div>
          <div>
            <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
              48
            </span>
            <p className="font-label-sm text-label-sm text-secondary font-semibold">
              Nuevos
            </p>
          </div>
        </div>

        {/* Alertas (Span full width en mobile, 2 cols en desktop) */}
        <Link
          className="col-span-2 bg-error-container/30 rounded-xl p-md shadow-ambient border border-error-container flex items-center gap-sm hover:bg-error-container/40 transition-colors"
          href="/empresa/vacantes"
        >
          <div className="bg-error-container text-on-error-container w-10 h-10 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">warning</span>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-background font-bold mb-xs">
              Atención Requerida
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              2 vacantes expiran en menos de 48 horas. Revisa los candidatos pendientes.
            </p>
          </div>
        </Link>
      </section>

      {/* Talento Recomendado Grid */}
      <section className="mt-sm">
        <div className="flex items-center justify-between mb-sm">
          <h3 className="font-headline-md text-headline-md text-on-background font-bold">
            Talento Recomendado
          </h3>
          <Link href="/match-center" className="font-label-md text-label-md text-primary font-bold hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
          {/* Talent Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-sm border-2 border-secondary-container">
              <img
                className="w-full h-full object-cover"
                alt="Ana Martínez Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYqyoywSy1r4UXioPwLS-aXM7-C3FwOda9FoC0IUWZ_LCCaDtMXpBvuXkJ_AKFjG8B5BHlb8K4T8wfcyv5qf4gaw11IOiZ8Q7L9k64r7hrZ9Q4yBa90yTPrFeEIDmeHuEs95Zm0_s8CTwFeOs5kz78C1eEpt8o9kmkO0WfCO684NVf4HcCnmJYLjMrRIRhPIw67f3MMybRJt1Tk_KhDnMrEiWWt6lIEwov-DosPSbaFU4RpQAkdsz1"
              />
            </div>
            <h4 className="font-label-md text-label-md text-on-background font-bold">
              Ana Martínez
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm">
              UX/UI Designer
            </p>
            <div className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full font-bold">
              95% Match
            </div>
          </div>

          {/* Talent Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-sm border-2 border-primary-container">
              <img
                className="w-full h-full object-cover"
                alt="Carlos Silva Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVcSejuFdo5__-11rXb_0oEJ6PYq-7IVQw2iRe1AxJjguDB3pEKDwtvp2rndnCyslG3r90QfPJckZ9UpN2m_GhW_BE5lMN35pXox0fJNvQlB8B_V0PnPFS6y0TFokNNAov0jrhxg6yi_rsWnbJBAJ6mgfF-flEdD2hOTsyVGfcojvIPeMg8QEm8dHehd-tbi1GMCt-G_DziFPbassBJc1uJ3r39NkWbBhJdJVGpIETVlOO17kiz0WY"
              />
            </div>
            <h4 className="font-label-md text-label-md text-on-background font-bold">
              Carlos Silva
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm">
              Desarrollador Frontend
            </p>
            <div className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full font-bold">
              91% Match
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
