import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mapa y Directorio de Feria - PUNTOCLICK',
  description: 'Ubicación interactiva de stands, empresas participantes y zonas de la feria.',
};

export default function FeriaMapaPage() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-md">
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/feria"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          MAPA DE LA FERIA
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="max-w-container-max mx-auto p-margin-mobile md:p-lg space-y-lg">
        <div className="mb-md">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-xs">
            Directorio & Ubicaciones de Stands
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Encuentra a las empresas expositoras en el Centro de Convenciones Olof Palme.
          </p>
        </div>

        <div className="w-full h-96 bg-surface-container-high rounded-xl overflow-hidden border border-surface-variant shadow-ambient relative flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ToqnG__an52sRViW2aly2iJGo5iRLKEqCRd3mNVehjm_0Hg9tQvrw3E925fS8oAlCVSFDAjf7G_ZqDIcKSAEMGGPZYltnflxwSX_nYFaAcXxzMUnM9pim6CtQIu1ZuHpd1E6TO3B-BY63Mnr1ASpIIdp9pWaLJA90G4tidBgrOJyd1keqdL3J5A1eWKslftcdrphN09E5xmtIBsnij4Qoe3zknpVnVqnmmT6vNtducrBnWRxC1ic"
            alt="Mapa Olof Palme"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </main>
    </div>
  );
}
