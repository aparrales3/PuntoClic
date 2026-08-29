'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step1Identidad({ onNext, onBack }: StepProps) {
  const [nombreComercial, setNombreComercial] = useState('');
  const [razonSocial, setRazonSocial] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      {/* Header */}
      <header className="w-full sticky top-0 z-50 bg-surface-container-high shadow-sm">
        <div className="flex items-center justify-between px-margin-mobile md:px-xl py-sm w-full max-w-[1280px] mx-auto">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            <span className="font-headline-md text-primary uppercase tracking-wider font-bold">PUNTOCLICK</span>
          </div>
          <button
            onClick={onBack}
            aria-label="Cerrar registro"
            className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 duration-200"
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile py-xl md:py-16">
        <div className="w-full max-w-[600px] flex flex-col gap-lg">

          {/* Progress Indicator */}
          <div className="flex flex-col gap-sm">
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Paso 1 de 10</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">10% Completado</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full rounded-full transition-all duration-500 ease-out" style={{ width: '10%' }}></div>
            </div>
          </div>

          {/* Context Header */}
          <div className="flex flex-col gap-xs text-center md:text-left">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
              Identidad Corporativa
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Por favor, indícanos cómo se conoce a tu empresa públicamente y legalmente. Esta información nos ayudará a configurar tu perfil en la colmena.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(32,27,18,0.15)] border border-surface-container-high p-md md:p-lg flex flex-col gap-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-md" id="identityForm">

              {/* Nombre Comercial */}
              <div className="flex flex-col gap-xs group">
                <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="nombreComercial">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">storefront</span>
                  Nombre Comercial
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-background border border-tertiary text-on-background rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-on-surface-variant/50"
                    id="nombreComercial"
                    name="nombreComercial"
                    placeholder="Ej: PuntoClick"
                    required
                    type="text"
                    value={nombreComercial}
                    onChange={(e) => setNombreComercial(e.target.value)}
                  />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">El nombre con el que tus clientes te conocen.</span>
              </div>

              {/* Razón Social */}
              <div className="flex flex-col gap-xs group">
                <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="razonSocial">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">account_balance</span>
                  Razón Social
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-background border border-tertiary text-on-background rounded-lg px-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-on-surface-variant/50"
                    id="razonSocial"
                    name="razonSocial"
                    placeholder="Ej: PuntoClick S.A. de C.V."
                    required
                    type="text"
                    value={razonSocial}
                    onChange={(e) => setRazonSocial(e.target.value)}
                  />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">El nombre legal registrado ante las autoridades fiscales.</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-md mt-sm">
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full md:w-auto px-6 py-3 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-150 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  Atrás
                </button>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg shadow-sm hover:shadow-md hover:bg-primary-fixed-dim transition-all active:scale-95 duration-150 flex items-center justify-center gap-2 group border-2 border-transparent focus:border-primary"
                >
                  Siguiente
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
