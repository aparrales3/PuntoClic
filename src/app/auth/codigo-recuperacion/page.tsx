import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Código de recuperación - PUNTOCLICK',
  description: 'Ingresa el código de 6 dígitos enviado a tu correo electrónico.',
};

export default function CodigoRecuperacionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* TopAppBar */}
      <header className="bg-background flex justify-between items-center w-full px-margin-mobile py-sm z-50">
        <Link
          href="/auth/recuperar-contrasena"
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 flex items-center justify-center p-2 rounded-full"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="font-headline-md text-headline-md-mobile text-primary uppercase tracking-wider">
          PUNTOCLICK
        </div>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile md:px-xl py-xl w-full max-w-container-max mx-auto">
        <div className="bg-surface-container-low rounded-xl shadow-[0_4px_20px_rgba(32,27,18,0.15)] border border-surface-container w-full max-w-md p-md md:p-lg flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-sm text-on-secondary-container">
            <span className="material-symbols-outlined text-4xl">mark_email_read</span>
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm">
            Revisa tu correo
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
            Hemos enviado un código de recuperación de 6 dígitos. Por favor ingrésalo a continuación.
          </p>

          <form action="/auth/nueva-contrasena" className="w-full flex flex-col items-center">
            <div className="flex justify-center gap-2 mb-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <input
                  key={i}
                  aria-label={`Dígito ${i}`}
                  className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-tertiary bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container transition-all"
                  inputMode="numeric"
                  maxLength={1}
                  pattern="[0-9]*"
                  type="text"
                />
              ))}
            </div>

            <button
              className="w-full bg-primary text-on-primary font-label-md text-label-md rounded-lg py-3 px-6 shadow-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors outline-none"
              type="submit"
            >
              Verificar
            </button>
          </form>

          <div className="mt-lg">
            <p className="font-body-md text-body-md text-on-surface-variant">
              ¿No recibiste el código?{' '}
              <button
                type="button"
                className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors underline underline-offset-4"
              >
                Reenviar código
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
