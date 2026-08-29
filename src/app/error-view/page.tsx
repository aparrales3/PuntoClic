import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Error - PUNTOCLICK',
  description: 'Algo salió mal. No pudimos procesar tu solicitud.',
};

export default function ErrorViewPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-margin-mobile font-body-md text-center">
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-md">
        <div className="w-20 h-20 rounded-full bg-error-container text-error flex items-center justify-center mb-sm">
          <span className="material-symbols-outlined text-4xl">error</span>
        </div>
        <div className="flex flex-col gap-sm items-center">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold">
            Algo salió mal
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
            No pudimos procesar tu solicitud en este momento. Por favor, verifica tu conexión e inténtalo de nuevo.
          </p>
        </div>

        <div className="w-full bg-surface-container-low rounded-lg p-sm mt-sm border border-outline-variant text-left">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Código de error: <span className="font-mono">ERR_500_INTERNAL</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-sm mt-md">
          <Link
            href="/"
            className="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm flex items-center justify-center gap-base font-bold"
          >
            <span className="material-symbols-outlined text-[20px]">refresh</span>
            Reintentar
          </Link>
          <Link
            href="/"
            className="w-full bg-transparent text-primary py-sm px-md rounded-lg font-label-md text-label-md border-2 border-primary hover:bg-surface-container transition-colors flex items-center justify-center gap-base font-bold"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Volver
          </Link>
        </div>
      </main>
    </div>
  );
}
