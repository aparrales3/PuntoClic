import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cargando... - PUNTOCLICK',
  description: 'Conectando con el ecosistema de PuntoClic.',
};

export default function LoadingViewPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center font-body-md text-on-background m-0 p-0 overflow-hidden relative">
      <main className="relative flex flex-col items-center justify-center w-full h-full flex-1 px-margin-mobile z-10">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl z-0 pointer-events-none" />

        {/* Animated Loader */}
        <div className="relative w-20 h-20 mb-md flex items-center justify-center z-10">
          <div className="w-16 h-16 border-4 border-primary-container border-t-primary rounded-full animate-spin" />
          <div className="absolute w-6 h-6 bg-inverse-primary rounded-full animate-ping opacity-75" />
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center z-10 text-center">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold tracking-wider uppercase mb-sm">
            PUNTOCLICK
          </h1>
          <p className="font-label-md text-label-md text-on-surface-variant opacity-80">
            Conectando oportunidades...
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 font-label-sm text-label-sm text-primary underline opacity-80 hover:opacity-100 transition-opacity"
        >
          Volver al Inicio
        </Link>
      </main>
    </div>
  );
}
