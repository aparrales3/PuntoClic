'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SeleccionarTipoInstitucionPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>('universidad');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/auth/register/institucion?tipo=${encodeURIComponent(selectedType)}`);
  };

  return (
    <div className="bg-background min-h-screen font-body-md text-on-background flex flex-col items-center py-xl px-margin-mobile selection:bg-primary-container selection:text-on-primary-container">
      {/* Header Section */}
      <header className="w-full max-w-container-max mx-auto mb-xl flex flex-col items-center text-center">
        <div className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary mb-md flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            hub
          </span>
          PUNTOCLICK
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <div className="w-2.5 h-2.5 rounded-full bg-surface-variant" />
        </div>

        <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-base text-on-surface font-bold">
          Selecciona tu Perfil Institucional
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Elige el tipo de entidad que representas para personalizar tu experiencia en la plataforma.
        </p>
      </header>

      {/* Main Content Form */}
      <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col h-full flex-grow">
          {/* Bento Grid Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-xl">
            {/* Option 1: Universidad */}
            <label className="cursor-pointer relative block group">
              <input
                className="peer sr-only"
                name="institution_type"
                type="radio"
                value="universidad"
                checked={selectedType === 'universidad'}
                onChange={() => setSelectedType('universidad')}
              />
              <div
                className={`p-md md:p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 h-full flex flex-col items-start gap-sm shadow-sm group-hover:-translate-y-1 ${
                  selectedType === 'universidad'
                    ? 'border-primary ring-2 ring-primary bg-surface-container-low shadow-ambient-md'
                    : 'border-outline-variant hover:border-primary-container'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    selectedType === 'universidad'
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    school
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md-mobile mb-xs text-on-surface font-bold">
                    Universidad
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Instituciones de educación superior y centros académicos.
                  </p>
                </div>
              </div>
            </label>

            {/* Option 2: Centro Tecnológico */}
            <label className="cursor-pointer relative block group">
              <input
                className="peer sr-only"
                name="institution_type"
                type="radio"
                value="centro_tecnologico"
                checked={selectedType === 'centro_tecnologico'}
                onChange={() => setSelectedType('centro_tecnologico')}
              />
              <div
                className={`p-md md:p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 h-full flex flex-col items-start gap-sm shadow-sm group-hover:-translate-y-1 ${
                  selectedType === 'centro_tecnologico'
                    ? 'border-primary ring-2 ring-primary bg-surface-container-low shadow-ambient-md'
                    : 'border-outline-variant hover:border-primary-container'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    selectedType === 'centro_tecnologico'
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    science
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md-mobile mb-xs text-on-surface font-bold">
                    Centro Tecnológico
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Entidades dedicadas a la investigación aplicada y desarrollo (I+D).
                  </p>
                </div>
              </div>
            </label>

            {/* Option 3: Ministerio / Entidad Gubernamental */}
            <label className="cursor-pointer relative block group">
              <input
                className="peer sr-only"
                name="institution_type"
                type="radio"
                value="gobierno"
                checked={selectedType === 'gobierno'}
                onChange={() => setSelectedType('gobierno')}
              />
              <div
                className={`p-md md:p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 h-full flex flex-col items-start gap-sm shadow-sm group-hover:-translate-y-1 ${
                  selectedType === 'gobierno'
                    ? 'border-primary ring-2 ring-primary bg-surface-container-low shadow-ambient-md'
                    : 'border-outline-variant hover:border-primary-container'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    selectedType === 'gobierno'
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    account_balance
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md-mobile mb-xs text-on-surface font-bold">
                    Ministerio / Entidad Gub.
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Organismos públicos y dependencias del estado.
                  </p>
                </div>
              </div>
            </label>

            {/* Option 4: ONG / Fundación */}
            <label className="cursor-pointer relative block group">
              <input
                className="peer sr-only"
                name="institution_type"
                type="radio"
                value="ong"
                checked={selectedType === 'ong'}
                onChange={() => setSelectedType('ong')}
              />
              <div
                className={`p-md md:p-lg rounded-2xl bg-surface-container-lowest border transition-all duration-300 h-full flex flex-col items-start gap-sm shadow-sm group-hover:-translate-y-1 ${
                  selectedType === 'ong'
                    ? 'border-primary ring-2 ring-primary bg-surface-container-low shadow-ambient-md'
                    : 'border-outline-variant hover:border-primary-container'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    selectedType === 'ong'
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    volunteer_activism
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md-mobile mb-xs text-on-surface font-bold">
                    ONG / Fundación
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Organizaciones no gubernamentales y entidades sin fines de lucro.
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-col-reverse md:flex-row items-center justify-between gap-md pt-lg border-t border-surface-variant">
            <Link
              href="/auth/register"
              className="w-full md:w-auto px-lg py-3 rounded-lg border-2 border-outline text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md flex items-center justify-center gap-xs"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Atrás
            </Link>
            <button
              className="w-full md:w-auto px-lg py-3 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary shadow-sm hover:shadow transition-all font-label-md text-label-md flex items-center justify-center gap-xs font-bold cursor-pointer"
              type="submit"
            >
              Continuar
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
