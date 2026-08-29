import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Contraseña Cambiada! - PUNTOCLICK',
  description: 'Tu contraseña ha sido actualizada correctamente.',
};

export default function ContrasenaCambiadaPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center font-body-md text-body-md text-on-background px-margin-mobile">
      <main className="w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-xl text-center">
        {/* Success Icon */}
        <div className="relative w-48 h-48 flex items-center justify-center rounded-full bg-surface-container-low shadow-[0_4px_20px_rgba(32,27,18,0.15)] border border-outline-variant/30">
          <div className="absolute inset-0 rounded-full bg-primary-container opacity-20 animate-ping"></div>
          <div className="relative w-32 h-32 rounded-full bg-primary-container flex items-center justify-center shadow-lg border-2 border-primary">
            <span className="material-symbols-outlined text-6xl text-on-primary-container">
              check_circle
            </span>
          </div>
        </div>

        {/* Typography */}
        <div className="flex flex-col space-y-sm max-w-[280px] md:max-w-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary">
            ¡Éxito!
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tu contraseña ha sido actualizada correctamente. Ya puedes acceder a tu cuenta.
          </p>
        </div>

        {/* Action */}
        <div className="w-full mt-xl">
          <Link
            href="/auth/login"
            className="w-full py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-[0_4px_20px_rgba(120,90,0,0.2)] hover:bg-surface-tint hover:scale-[0.98] transition-all duration-200 active:scale-95 flex items-center justify-center"
          >
            Ir al Login
          </Link>
        </div>
      </main>
    </div>
  );
}
