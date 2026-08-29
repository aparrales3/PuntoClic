import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard Empresa - PUNTOCLICK',
  description: 'Resumen de tu ecosistema hoy en PuntoClic.',
};

export default function EmpresaDashboardPage() {
  return (
    <main className="flex-1 max-w-container-max mx-auto px-margin-mobile flex flex-col gap-md pb-md">
      {/* Welcome Section */}
      <section className="mt-sm">
        <h2 className="font-headline-md text-headline-md text-on-background">
          Hola, Empresa
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Aquí está el resumen de tu ecosistema hoy.
        </p>
      </section>

      {/* Highlight: ¿Qué necesitas resolver? */}
      <section className="bg-primary-container rounded-xl p-md shadow-sm relative overflow-hidden">
        {/* Decorative Hexagon bg */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-[30%] rotate-12 blur-xl"></div>
        <div className="relative z-10">
          <h3 className="font-headline-md text-headline-md text-on-primary-container mb-sm">
            ¿Qué necesitas resolver?
          </h3>
          <p className="font-body-md text-body-md text-on-primary-container/80 mb-md">
            Conecta con el talento ideal para tus proyectos actuales.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm">
            <Link
              className="bg-surface text-primary font-label-md text-label-md py-sm px-md rounded-lg shadow-sm flex items-center justify-center gap-xs hover:bg-surface-container-lowest transition-colors active:scale-95 duration-150"
              href="/empresa/vacantes/nueva"
            >
              <span className="material-symbols-outlined text-[20px]">
                add_circle
              </span>
              Publicar Vacante
            </Link>
            <Link
              className="bg-transparent border-2 border-on-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs hover:bg-white/10 transition-colors active:scale-95 duration-150"
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
      <section className="grid grid-cols-2 gap-sm">
        {/* Vacantes Card */}
        <div className="bg-surface-container-low rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-variant flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Vacantes
            </span>
            <span className="material-symbols-outlined text-tertiary">
              work
            </span>
          </div>
          <div>
            <span className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">
              12
            </span>
            <p className="font-label-sm text-label-sm text-secondary">
              Activas
            </p>
          </div>
        </div>

        {/* Matches Card */}
        <div className="bg-surface-container-low rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-variant flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Matches
            </span>
            <span className="material-symbols-outlined text-primary">
              handshake
            </span>
          </div>
          <div>
            <span className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">
              48
            </span>
            <p className="font-label-sm text-label-sm text-secondary">
              Nuevos
            </p>
          </div>
        </div>

        {/* Problemas / Alertas (Span full width) */}
        <Link
          className="col-span-2 bg-error-container/30 rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-error-container flex items-start gap-sm"
          href="/empresa/vacantes"
        >
          <div className="bg-error-container text-on-error-container w-10 h-10 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined">warning</span>
          </div>
          <div>
            <h4 className="font-label-md text-label-md text-on-background mb-xs">
              Atención Requerida
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              2 vacantes expiran en menos de 48 horas. Revisa los candidatos pendientes.
            </p>
          </div>
        </Link>
      </section>

      {/* Talento Recomendado (Horizontal Scroll) */}
      <section className="mt-sm">
        <div className="flex items-center justify-between mb-sm">
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-background text-[20px]">
            Talento Recomendado
          </h3>
          <Link href="/empresa/candidatos" className="font-label-md text-label-md text-primary">
            Ver todos
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-sm hide-scrollbar pb-sm -mx-margin-mobile px-margin-mobile">
          {/* Talent Card 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-surface-variant min-w-[220px] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-sm border-2 border-secondary-container">
              <img
                className="w-full h-full object-cover"
                alt="Ana Martínez Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYqyoywSy1r4UXioPwLS-aXM7-C3FwOda9FoC0IUWZ_LCCaDtMXpBvuXkJ_AKFjG8B5BHlb8K4T8wfcyv5qf4gaw11IOiZ8Q7L9k64r7hrZ9Q4yBa90yTPrFeEIDmeHuEs95Zm0_s8CTwFeOs5kz78C1eEpt8o9kmkO0WfCO684NVf4HcCnmJYLjMrRIRhPIw67f3MMybRJt1Tk_KhDnMrEiWWt6lIEwov-DosPSbaFU4RpQAkdsz1"
              />
            </div>
            <h4 className="font-label-md text-label-md text-on-background">
              Ana Martínez
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm">
              UX/UI Designer
            </p>
            <div className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full">
              95% Match
            </div>
          </div>

          {/* Talent Card 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-surface-variant min-w-[220px] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-sm border-2 border-secondary-container">
              <img
                className="w-full h-full object-cover"
                alt="Carlos Ruiz Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMkjVdER1ANgMTGdlcdx0O0cc3nzZf1sopSstoLreYNI7BAvEUBh63POA634U5YKeOlzoz5YyFZjEoaeEf97znLaRTVqAMS-35tW4hu8_22rfoDEdbK1IUztSZRJqsqUAmvkpz4vjsD2SAB4M18Lh81XJyudxaO6B7Ct1nP69TOf_KTJIE1l8FkkSNA6EEjmEZ_sgBSvkmYFwOKIfbo0dBntZ7Jh_Bycvs8YLCqLyP-d39dhVnCvuS"
              />
            </div>
            <h4 className="font-label-md text-label-md text-on-background">
              Carlos Ruiz
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm">
              Frontend Dev
            </p>
            <div className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full">
              88% Match
            </div>
          </div>

          {/* Talent Card 3 */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-surface-variant min-w-[220px] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-sm border-2 border-secondary-container">
              <img
                className="w-full h-full object-cover"
                alt="Laura Gómez Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDioGgYOI032-HSIGmrT50khi3JNmhZzzlIRqWv39EXLRGXCMSHRzxtSvyxkGvzpA9J9SeW1n6dw2WHCXohDVKSuj3j-E5pdogwddtE-bbo_gGJcOA9l95KvyLbrQCkCh3PFxbMbol2NTOqRPKc_aUDe6J4cEFAdN3CGOrf6DH1LoB7s_jJ3NiC9N2AWS9aPiEgxVlVGkcx9j93FP34ka_wOBMkoRhfn4RefYFsGqTSbjyDbksHWH2q"
              />
            </div>
            <h4 className="font-label-md text-label-md text-on-background">
              Laura Gómez
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-sm">
              Marketing Manager
            </p>
            <div className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full">
              82% Match
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

