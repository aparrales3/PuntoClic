import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo funciona (Empresas) - PUNTOCLICK',
  description: 'Empoderamos empresas conectando desafíos complejos con mentes expertas.',
};

export default function ComoFuncionaEmpresasPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-margin-mobile md:px-lg py-sm bg-background">
        <Link
          href="/como-funciona"
          className="p-2 text-primary hover:opacity-80 transition-opacity rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary uppercase tracking-wider">
          PUNTOCLICK
        </div>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-container-max mx-auto px-margin-mobile md:px-lg py-xl">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl items-center relative z-10">
          {/* Image */}
          <div className="order-2 md:order-1 relative flex justify-center w-full min-h-[300px]">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-ambient bg-surface-container-low border border-surface-container-highest p-4 flex flex-col justify-center">
              <div
                className="w-full h-48 md:h-64 bg-cover bg-center rounded-lg mb-4"
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

          {/* Text Side */}
          <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-left gap-md">
            <div className="space-y-sm">
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
                Empoderamos <span className="text-primary">Empresas</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto md:mx-0">
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
      </main>
    </div>
  );
}
