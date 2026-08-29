import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - PUNTOCLICK',
  description: 'Términos y condiciones de uso de la plataforma PuntoClic.',
};

export default function TerminosPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <header className="bg-background flex justify-between items-center w-full px-margin-mobile py-sm sticky top-0 z-10 shadow-sm">
        <Link
          href="/"
          className="text-primary hover:opacity-80 transition-opacity p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md-mobile text-primary uppercase tracking-wider text-center flex-1 pr-10">
          PUNTOCLICK
        </h1>
      </header>

      <main className="flex-1 px-margin-mobile md:px-lg py-md pb-[100px] max-w-container-max mx-auto w-full">
        <div className="mb-xl">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-sm">
            Términos y Condiciones
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Última actualización: 2024
          </p>
        </div>

        <div className="space-y-lg">
          <section className="bg-surface-container-low rounded-xl p-md md:p-lg border border-surface-dim shadow-ambient">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                verified_user
              </span>
              1. Aceptación de los Términos
            </h3>
            <p className="text-on-surface-variant mb-4">
              Al acceder y utilizar los servicios de PUNTOCLICK, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al servicio.
            </p>
          </section>

          <section className="bg-surface-container-low rounded-xl p-md md:p-lg border border-surface-dim shadow-ambient">
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                policy
              </span>
              2. Política de Uso
            </h3>
            <p className="text-on-surface-variant mb-4">
              Aceptas utilizar el servicio únicamente con fines lícitos y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso del servicio a otros usuarios.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
