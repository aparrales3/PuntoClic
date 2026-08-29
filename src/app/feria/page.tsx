import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Feria y Eventos - PUNTOCLICK',
  description: 'Conecta con los líderes de la industria en la Feria PuntoClic.',
};

export default function FeriaPage() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full"
          aria-label="Volver a inicio"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          PUNTOCLICK FERIA & EVENTOS
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg py-md md:py-xl flex flex-col gap-xl">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-lg items-center">
          <div className="flex-1 flex flex-col gap-md">
            <div className="flex items-center gap-2">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md">
                Evento Principal
              </span>
              <span className="text-tertiary font-label-md text-label-md flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  calendar_month
                </span>{' '}
                Oct 15 - 17, 2024
              </span>
            </div>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary">
              Feria PuntoClick 2024
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Conecta con los líderes de la industria, descubre nuevas
              oportunidades y potencia tu futuro profesional en el ecosistema
              PuntoClic.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm mt-sm">
              <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 duration-150 flex justify-center items-center gap-2">
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>{' '}
                Registro Feria
              </button>
              <button className="border-2 border-outline text-on-surface font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-container-high transition-all active:scale-95 duration-150 flex justify-center items-center gap-2">
                <span className="material-symbols-outlined">info</span> Información General
              </button>
            </div>
          </div>

          <div className="flex-1 w-full rounded-xl overflow-hidden shadow-lg border border-surface-variant h-64 md:h-96 relative">
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVcSejuFdo5__-11rXb_0oEJ6PYq-7IVQw2iRe1AxJjguDB3pEKDwtvp2rndnCyslG3r90QfPJckZ9UpN2m_GhW_BE5lMN35pXox0fJNvQlB8B_V0PnPFS6y0TFokNNAov0jrhxg6yi_rsWnbJBAJ6mgfF-flEdD2hOTsyVGfcojvIPeMg8QEm8dHehd-tbi1GMCt-G_DziFPbassBJc1uJ3r39NkWbBhJdJVGpIETVlOO17kiz0WY')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </section>

        {/* Próximas ferias (Bento Grid) */}
        <section className="flex flex-col gap-md">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
            Próximas Ferias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Detalle Feria Card (Featured) */}
            <article className="col-span-1 md:col-span-2 bg-surface-container-low rounded-xl p-md border border-surface-variant shadow-ambient flex flex-col justify-between group hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-primary-container text-on-primary-container text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  Destacado
                </span>
              </div>
              <div className="flex flex-col gap-sm relative z-10 w-2/3">
                <h3 className="font-headline-md text-headline-md text-on-background group-hover:text-primary transition-colors">
                  Cumbre de Innovación Tecnológica
                </h3>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{' '}
                  Olof Palme
                  <span className="material-symbols-outlined text-[16px] ml-2">
                    schedule
                  </span>{' '}
                  09:00 AM
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 line-clamp-2">
                  Explora las últimas tendencias en IA, desarrollo sostenible y
                  metodologías ágiles con speakers internacionales.
                </p>
              </div>
              <div className="mt-md flex justify-end relative z-10">
                <button className="text-primary font-label-md text-label-md flex items-center gap-1 hover:underline">
                  Ver detalle{' '}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>

            {/* Smaller Cards */}
            <article className="bg-surface-container-low rounded-xl p-md border border-surface-variant shadow-ambient flex flex-col gap-sm hover:border-primary transition-colors">
              <h4 className="font-headline-md text-headline-md text-on-background text-lg leading-tight">
                Feria de Emprendimiento Universitario
              </h4>
              <div className="flex flex-col gap-1 text-on-surface-variant font-label-sm text-label-sm mt-auto pt-4 border-t border-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_today
                  </span>{' '}
                  Nov 12, 2024
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    location_city
                  </span>{' '}
                  Crowne Plaza
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Access & Scanner Tools */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-lg bg-surface-container rounded-xl p-md md:p-lg border border-outline-variant">
          {/* User Flow: QR */}
          <div className="flex flex-col gap-md">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-2xl">
                qr_code_scanner
              </span>
              <h3 className="font-headline-md text-headline-md">Tu Acceso</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Accede rápidamente al evento con tu código QR personal. Asegúrate
              de tenerlo listo en la entrada.
            </p>
            <div className="bg-surface rounded-xl p-md shadow-sm border border-surface-variant flex flex-col items-center justify-center gap-4 mt-sm relative overflow-hidden">
              <div className="w-48 h-48 bg-white border border-surface-variant rounded-lg p-2 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-outline-variant text-[120px] font-light">
                  qr_code_2
                </span>
              </div>
              <p className="font-label-md text-label-md text-primary font-bold tracking-widest uppercase">
                ID: 9X2-A4B
              </p>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 rounded-lg shadow-sm hover:shadow-md transition-all mt-2">
              Mostrar QR de Acceso
            </button>
          </div>

          {/* Staff Check-in */}
          <div className="flex flex-col gap-md pt-lg md:pt-0 border-t md:border-t-0 md:border-l border-surface-variant md:pl-lg">
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined text-2xl">
                how_to_reg
              </span>
              <h3 className="font-headline-md text-headline-md">
                Staff Check-in
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Herramienta para el personal del evento. Escanea los códigos QR
              para registrar la asistencia.
            </p>
            <div className="bg-secondary-fixed rounded-xl p-md shadow-sm border border-secondary-fixed-dim flex flex-col items-center justify-center gap-4 mt-sm relative">
              <div className="w-full aspect-video bg-black/10 rounded-lg border-2 border-dashed border-secondary flex flex-col items-center justify-center text-secondary relative overflow-hidden">
                <span className="material-symbols-outlined text-4xl animate-pulse">
                  document_scanner
                </span>
                <span className="font-label-sm text-label-sm mt-2">
                  Cámara activa
                </span>
              </div>
            </div>
            <button className="w-full border-2 border-secondary text-secondary font-label-md text-label-md py-3 rounded-lg hover:bg-secondary hover:text-on-secondary transition-all mt-2 flex justify-center items-center gap-2">
              <span className="material-symbols-outlined">add_circle</span>{' '}
              Check-in Manual
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
