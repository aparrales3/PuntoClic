'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRegistrationStore } from '@/store/registrationStore';

export default function SeleccionarTipoEmpresaPage() {
  const router = useRouter();
  const { companyData, setCompanyData } = useRegistrationStore();
  const [selectedType, setSelectedType] = useState<string>(companyData.companyType || 'startup');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompanyData({ companyType: selectedType });
    router.push('/auth/register/empresa?step=1');
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky bg-surface-container shadow-xs z-40 border-b border-surface-variant/40">
        <div className="flex items-center justify-between px-margin-mobile md:px-xl py-sm w-full max-w-container-max mx-auto">
          <div className="flex items-center gap-sm">
            <span
              className="material-symbols-outlined text-primary text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
            <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary uppercase tracking-wider font-bold">
              PUNTOCLICK
            </h1>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
              1
            </span>
            <span className="w-8 border-t-2 border-outline-variant" />
            <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
              2
            </span>
            <span className="w-8 border-t-2 border-outline-variant" />
            <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-gutter-mobile py-xl w-full max-w-container-max mx-auto">
        <div className="w-full max-w-3xl text-center mb-12">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-xs font-bold">
            Registro Empresa
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Selecciona el perfil de tu organización para personalizar tu experiencia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
            {/* Option 1: Startup */}
            <label className="relative cursor-pointer group">
              <input
                className="sr-only"
                name="company_type"
                type="radio"
                value="startup"
                checked={selectedType === 'startup'}
                onChange={() => setSelectedType('startup')}
              />
              <div
                className={`h-full flex flex-col items-center p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 hover:-translate-y-1 ${
                  selectedType === 'startup'
                    ? 'border-primary shadow-ambient-md bg-surface-container-low ring-2 ring-primary'
                    : 'border-surface-dim shadow-ambient'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-md text-on-secondary-container group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                </div>
                <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-xs text-center font-bold">
                  Startup
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-center opacity-80">
                  Empresa emergente de base tecnológica o rápido crecimiento.
                </p>
                {selectedType === 'startup' && (
                  <div className="absolute top-4 right-4 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                )}
              </div>
            </label>

            {/* Option 2: Pyme */}
            <label className="relative cursor-pointer group">
              <input
                className="sr-only"
                name="company_type"
                type="radio"
                value="pyme"
                checked={selectedType === 'pyme'}
                onChange={() => setSelectedType('pyme')}
              />
              <div
                className={`h-full flex flex-col items-center p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 hover:-translate-y-1 ${
                  selectedType === 'pyme'
                    ? 'border-primary shadow-ambient-md bg-surface-container-low ring-2 ring-primary'
                    : 'border-surface-dim shadow-ambient'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-md text-on-primary-container group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl">storefront</span>
                </div>
                <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-xs text-center font-bold">
                  Pyme
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-center opacity-80">
                  Pequeña o mediana empresa consolidada en su sector.
                </p>
                {selectedType === 'pyme' && (
                  <div className="absolute top-4 right-4 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                )}
              </div>
            </label>

            {/* Option 3: Grande */}
            <label className="relative cursor-pointer group">
              <input
                className="sr-only"
                name="company_type"
                type="radio"
                value="grande"
                checked={selectedType === 'grande'}
                onChange={() => setSelectedType('grande')}
              />
              <div
                className={`h-full flex flex-col items-center p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 hover:-translate-y-1 ${
                  selectedType === 'grande'
                    ? 'border-primary shadow-ambient-md bg-surface-container-low ring-2 ring-primary'
                    : 'border-surface-dim shadow-ambient'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center mb-md text-on-tertiary-container group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors duration-300">
                  <span className="material-symbols-outlined text-4xl">corporate_fare</span>
                </div>
                <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-xs text-center font-bold">
                  Grande
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-center opacity-80">
                  Corporación o gran empresa con múltiples divisiones.
                </p>
                {selectedType === 'grande' && (
                  <div className="absolute top-4 right-4 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                )}
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-md">
            <Link
              href="/auth/register"
              className="w-full md:w-auto px-lg py-3 rounded-lg font-label-md text-label-md text-on-surface-variant border-2 border-outline-variant hover:bg-surface-variant/50 transition-colors duration-200 flex items-center justify-center gap-xs"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Atrás
            </Link>
            <button
              className="w-full md:w-auto px-lg py-3 rounded-lg font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors duration-200 shadow-sm flex items-center justify-center gap-xs font-bold cursor-pointer"
              type="submit"
            >
              Siguiente
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
