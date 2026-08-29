import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Error de conexión - PUNTOCLICK',
  description: 'Ups, parece que no hay conexión a internet.',
};

export default function ErrorConexionPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-margin-mobile font-body-md text-center">
      <main className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        {/* Graphic */}
        <div className="relative mb-xl w-64 h-64 flex items-center justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-ambient border-4 border-background bg-surface-container-lowest">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAux1S4eI8qhEBTaQpBo31iCR6nG-Y3ueDK2SKmuhnjzpz-2fQwvzeQzsogAG4M0HsRPdm8Cv6NHm9CpLnR8qtrtDQ6Vx14y26qO91TCoe7iHqNN-m91YlllXLcmjHQhaVzQScQMGV9KMBK07Rg2XxDtkXwJLZGoPLQBlNBtBaeofukN94xGCParsSVi8BnIK7nuoOjIQaaFdv1Rw5tjxEZlljVmH5cufaSLYohTFcr8fhrbSFjwAqC"
              alt="Sin conexión"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 w-14 h-14 bg-error-container text-on-error-container rounded-full flex items-center justify-center shadow-lg border-[3px] border-background">
            <span className="material-symbols-outlined text-2xl">wifi_off</span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-sm mb-lg px-2">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background font-bold">
            Ups, parece que no hay conexión.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[280px] mx-auto">
            Revisa tu configuración de red para volver al ecosistema.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="bg-primary-container text-on-background font-label-md text-label-md px-8 py-4 rounded-lg shadow-sm hover:bg-inverse-primary transition-all flex items-center justify-center gap-3 font-bold"
        >
          <span className="material-symbols-outlined text-[20px]">refresh</span>
          Reintentar
        </Link>
      </main>
    </div>
  );
}
