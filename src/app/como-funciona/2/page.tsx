import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Empoderamos Empresas - PUNTOCLICK',
  description: 'Conectamos los desafíos más complejos de tu negocio con mentes expertas.',
};

export default function ComoFuncionaEmpresasPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md relative overflow-hidden">
      {/* Ambient Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-secondary-container rounded-full mix-blend-multiply filter blur-[60px] opacity-30"></div>
      </div>

      <main className="w-full max-w-md md:max-w-4xl mx-auto px-margin-mobile py-md md:py-lg relative z-10 flex flex-col min-h-screen justify-between items-center">
        {/* Header */}
        <header className="w-full flex justify-between items-center py-sm mb-md">
          <Link
            href="/como-funciona"
            className="p-2 text-on-surface-variant hover:opacity-80 transition-opacity rounded-full flex items-center justify-center"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary uppercase tracking-wider font-bold">
            PUNTOCLICK
          </div>
          <Link
            href="/auth/register"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-bold"
          >
            Saltar
          </Link>
        </header>

        {/* Content Side by Side on Desktop */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl items-center my-auto">
          {/* Image */}
          <div className="relative flex justify-center w-full min-h-[260px] md:min-h-[320px]">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-ambient bg-surface-container-low border border-surface-container-highest p-4 flex flex-col justify-center">
              <div
                className="w-full h-48 md:h-60 bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCluNAbw7Vu1bYeF72099v7a5BdF06TfQhLgbcPu46_TXIS5P15cRGj_Se8c3LnUeHgoQXa9gGD-W8R3eXd8GcctvqsPlDmfBtZ5lOwVY8IqzW-M5iqzWt-c7NOXoxe6qDrpVHJF9k2tqj2GiVFas9ww94IRPmXQ8n8uf7tRGrjLpuRsheP7TF6_04hz18oMHwb9Xnhg859pvE3m4mMhibQHJeGHT-Ah3jFkD-UXrbHisd7-1jeQCV5')",
                }}
              ></div>
              <div className="flex items-center gap-3 bg-surface rounded-lg p-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">
                    Soluciones Expertas
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Adaptadas a tu escala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy & Features */}
          <div className="flex flex-col justify-center text-center md:text-left gap-md">
            <div className="space-y-sm">
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
                Empoderamos <span className="text-primary">Empresas</span>
              </h1>
              <p className="font-body-md md:font-body-lg text-body-md text-on-surface-variant max-w-lg mx-auto md:mx-0">
                Conectamos los desafíos más complejos de tu negocio con mentes expertas. Nuestro ecosistema de talento está diseñado para guiar, resolver y acelerar tu crecimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-sm">
              <div className="bg-surface-container-lowest border border-surface-container shadow-ambient rounded-xl p-4 flex flex-col gap-2 items-start">
                <span className="material-symbols-outlined text-secondary">
                  psychology
                </span>
                <h3 className="font-label-md text-label-md text-on-surface font-bold">
                  Conocimiento Estratégico
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant text-left">
                  Acceso directo a especialistas senior para resolver cuellos de botella.
                </p>
              </div>

              <div className="bg-surface-container-lowest border border-surface-container shadow-ambient rounded-xl p-4 flex flex-col gap-2 items-start">
                <span className="material-symbols-outlined text-secondary">
                  handshake
                </span>
                <h3 className="font-label-md text-label-md text-on-surface font-bold">
                  Acompañamiento Táctico
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant text-left">
                  Implementación guiada y soporte continuo en cada etapa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col items-center mt-auto pb-lg pt-md">
          {/* Pagination Dots */}
          <div className="flex gap-2 mb-md items-center">
            <Link
              href="/como-funciona"
              className="w-2.5 h-2.5 rounded-full bg-surface-container-highest transition-all duration-300 block hover:bg-primary/50"
              aria-label="Paso 1"
            ></Link>
            <Link
              href="/como-funciona/2"
              className="w-8 h-2 rounded-full bg-primary transition-all duration-300 block"
              aria-label="Paso 2"
            ></Link>
            <Link
              href="/como-funciona/3"
              className="w-2.5 h-2.5 rounded-full bg-surface-container-highest transition-all duration-300 block hover:bg-primary/50"
              aria-label="Paso 3"
            ></Link>
          </div>

          {/* Next Button */}
          <Link
            href="/como-funciona/3"
            className="w-full max-w-[300px] bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-md hover:bg-surface-tint hover:scale-[1.02] active:scale-95 transition-all duration-200 flex justify-center items-center gap-2 font-bold"
          >
            Siguiente
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
