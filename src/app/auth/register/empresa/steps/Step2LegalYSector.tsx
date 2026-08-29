'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2LegalYSector({ onNext, onBack }: StepProps) {
  const [ruc, setRuc] = useState('');
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [sector, setSector] = useState('');

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
          <button onClick={onBack} aria-label="Cerrar" className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 duration-200" type="button">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile py-xl md:py-16">
        <div className="w-full max-w-[600px] flex flex-col gap-lg">

          {/* Progress */}
          <div className="flex flex-col gap-sm">
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Paso 2 de 10</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">20% Completado</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full rounded-full transition-all duration-500 ease-out" style={{ width: '20%' }}></div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(32,27,18,0.15)] border border-surface-container-high overflow-hidden">
            <div className="bg-surface-container-low px-md md:px-lg py-md border-b border-surface-container-high">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-surface-variant rounded-full mb-md">
                <span className="material-symbols-outlined text-primary text-[24px]">gavel</span>
              </div>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm">
                Información Legal
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Por favor, completa los datos fiscales y legales de tu empresa para continuar con el registro en PUNTOCLICK.
              </p>
            </div>

            <div className="p-md md:p-lg">
              <form onSubmit={handleSubmit} className="space-y-lg">
                {/* RUC */}
                <div className="space-y-sm">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="ruc">Número de RUC</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">badge</span>
                    </span>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-tertiary rounded-lg bg-background text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 font-body-md text-body-md shadow-sm"
                      id="ruc"
                      name="ruc"
                      placeholder="Ej: 20123456789"
                      type="text"
                      value={ruc}
                      onChange={(e) => setRuc(e.target.value)}
                    />
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">El Registro Único de Contribuyentes debe tener 11 dígitos.</p>
                </div>

                {/* Tipo de Empresa */}
                <div className="space-y-sm">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="tipo_empresa">Tipo de Empresa</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">domain</span>
                    </span>
                    <select
                      className="block w-full pl-10 pr-10 py-3 border border-tertiary rounded-lg bg-background text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 font-body-md text-body-md shadow-sm appearance-none cursor-pointer"
                      id="tipo_empresa"
                      name="tipo_empresa"
                      value={tipoEmpresa}
                      onChange={(e) => setTipoEmpresa(e.target.value)}
                    >
                      <option value="" disabled>Selecciona el tipo de sociedad</option>
                      <option value="sa">Sociedad Anónima (S.A.)</option>
                      <option value="sac">Sociedad Anónima Cerrada (S.A.C.)</option>
                      <option value="srl">Sociedad de Responsabilidad Limitada (S.R.L.)</option>
                      <option value="eirl">Empresa Individual de Responsabilidad Limitada (E.I.R.L.)</option>
                      <option value="otro">Otro</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">arrow_drop_down</span>
                    </span>
                  </div>
                </div>

                {/* Sector Económico */}
                <div className="space-y-sm">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="sector">Sector Económico</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">category</span>
                    </span>
                    <select
                      className="block w-full pl-10 pr-10 py-3 border border-tertiary rounded-lg bg-background text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors duration-200 font-body-md text-body-md shadow-sm appearance-none cursor-pointer"
                      id="sector"
                      name="sector"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                    >
                      <option value="" disabled>Selecciona un sector</option>
                      <option value="tecnologia">Tecnología y Software</option>
                      <option value="educacion">Educación y Formación</option>
                      <option value="comercio">Comercio Minorista / Mayorista</option>
                      <option value="salud">Salud y Bienestar</option>
                      <option value="manufactura">Manufactura</option>
                      <option value="servicios">Servicios Profesionales</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">arrow_drop_down</span>
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-sm pt-md border-t border-surface-variant">
                  <button
                    type="button"
                    onClick={onBack}
                    className="w-full sm:w-auto px-lg py-3 border-2 border-on-surface text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors duration-200 order-2 sm:order-1 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    Atrás
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:flex-1 px-lg py-3 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:bg-primary-fixed-dim transition-colors duration-200 shadow-sm order-1 sm:order-2 flex items-center justify-center gap-2"
                  >
                    Continuar
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
