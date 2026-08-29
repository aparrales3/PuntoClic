'use client';

import { useRouter } from 'next/navigation';

export default function Step12Confirmacion() {
  const router = useRouter();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Progress Bar: 100% */}
      <div className="fixed top-0 left-0 w-full h-2 bg-surface-container-highest z-50">
        <div className="h-full bg-primary w-full transition-all duration-1000 ease-out"></div>
      </div>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center p-gutter-mobile relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        {/* Success Card */}
        <div className="relative w-full max-w-md bg-surface-container-low rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-variant p-lg md:p-xl flex flex-col items-center text-center">
          {/* Checkmark Icon */}
          <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-md shadow-sm border-4 border-surface">
            <span className="material-symbols-outlined text-on-primary-container text-5xl">
              check
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-sm font-bold">
            ¡Cuenta creada con éxito!
          </h1>

          {/* Message */}
          <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
            Ahora vamos a completar tu perfil profesional.
          </p>

          {/* Action Button */}
          <div className="w-full">
            <button 
              onClick={() => router.push('/talento/dashboard')}
              className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 px-md rounded-lg shadow-sm hover:shadow-md hover:bg-primary hover:text-on-primary transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group font-bold"
            >
              Continuar
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
