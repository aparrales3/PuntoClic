'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step9Logo({ onNext, onBack }: StepProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <header className="w-full sticky top-0 z-50 bg-surface-container-high shadow-sm">
        <div className="flex items-center justify-between px-margin-mobile md:px-xl py-sm w-full max-w-[1280px] mx-auto">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            <span className="font-headline-md text-primary uppercase tracking-wider font-bold">PUNTOCLICK</span>
          </div>
          <button onClick={onBack} className="text-on-surface-variant hover:opacity-80 p-2 rounded-full hover:bg-surface-variant transition-opacity" type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center gap-xl px-margin-mobile py-xl md:py-16">
        <div className="w-full max-w-[600px] flex flex-col gap-lg">
          {/* Progress */}
          <div className="flex flex-col gap-sm">
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Paso 9 de 10</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">90% Completado</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full rounded-full transition-all duration-500 ease-out" style={{ width: '90%' }}></div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center md:text-left">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm">
              Logo de la Empresa
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sube el logo oficial de tu empresa. Será la imagen principal de tu perfil en la plataforma.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
            {/* Upload Area */}
            <label className="cursor-pointer group">
              <input type="file" accept=".png,.svg,.jpg,.jpeg" className="sr-only" onChange={handleFileChange} />
              <div className="w-full min-h-[240px] rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-lowest hover:border-primary hover:bg-surface-container/60 transition-all flex flex-col items-center justify-center gap-md p-lg">
                {logoPreview ? (
                  <img src={logoPreview} alt="Logo preview" className="max-h-40 max-w-full object-contain rounded-lg" />
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container/30 transition-colors">
                      <span className="material-symbols-outlined text-[40px] text-outline group-hover:text-primary transition-colors">upload_file</span>
                    </div>
                    <div className="text-center">
                      <p className="font-headline-md text-headline-md text-on-surface">Arrastra tu logo aquí</p>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-md">o haz clic para explorar tus archivos</p>
                      <button type="button" className="bg-surface text-on-surface border border-outline-variant px-md py-sm rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center gap-sm mx-auto pointer-events-none">
                        <span className="material-symbols-outlined text-[18px]">image</span>
                        Subir Logo
                      </button>
                      <p className="font-label-sm text-label-sm text-outline mt-md">Formatos permitidos: PNG, SVG, JPG. (Máx 5MB)</p>
                    </div>
                  </>
                )}
              </div>
            </label>

            {/* Preview placeholder */}
            {!logoPreview && (
              <div className="w-full flex flex-col sm:flex-row items-center gap-md p-md bg-surface-bright rounded-lg border border-surface-variant border-dashed opacity-60">
                <div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-outline">corporate_fare</span>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Aún no has subido un logo.</p>
                  <p className="font-label-sm text-[10px] text-outline">Se mostrará una vista previa aquí.</p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-md mt-xl">
              <button
                type="button" onClick={onBack}
                className="w-full sm:w-auto px-lg py-sm rounded-lg font-label-md text-label-md text-on-surface-variant border border-outline-variant hover:bg-surface-variant transition-colors flex items-center justify-center gap-sm"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Atrás
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-lg py-sm rounded-lg font-label-md text-label-md bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim transition-colors shadow-sm flex items-center justify-center gap-sm"
              >
                Continuar
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
