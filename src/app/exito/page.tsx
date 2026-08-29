import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Operación Exitosa! - PUNTOCLICK',
  description: 'Tu transacción u operación ha sido procesada correctamente.',
};

export default function ExitoPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-on-background antialiased">
      <header className="flex justify-between items-center w-full px-margin-mobile py-sm bg-background shadow-sm">
        <Link
          href="/"
          className="text-primary hover:opacity-80 transition-opacity p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md-mobile text-primary uppercase tracking-wider font-bold">
          PUNTOCLICK
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="flex-grow flex items-center justify-center p-margin-mobile md:p-md relative overflow-hidden">
        <div className="bg-surface-container-low rounded-xl shadow-ambient border border-surface-container p-xl w-full max-w-[480px] flex flex-col items-center text-center relative z-10">
          <div className="w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center mb-md shadow-md">
            <span className="material-symbols-outlined text-secondary text-[48px]">
              check_circle
            </span>
          </div>

          <h2 className="font-headline-xl-mobile md:font-headline-xl text-on-surface mb-sm font-bold">
            ¡Operación exitosa!
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-xl max-w-sm">
            Tu transacción ha sido procesada correctamente. Hemos enviado una confirmación a tu correo electrónico.
          </p>

          <Link
            href="/"
            className="w-full bg-primary text-on-primary font-label-md py-4 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200 font-bold"
          >
            Continuar
          </Link>
        </div>
      </main>
    </div>
  );
}
