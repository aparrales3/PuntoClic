'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

const EMPLOYEE_OPTIONS = [
  { value: '1-10', label: '1 - 10', sub: 'Microempresa', icon: 'person' },
  { value: '11-50', label: '11 - 50', sub: 'Pequeña', icon: 'group' },
  { value: '51-200', label: '51 - 200', sub: 'Mediana', icon: 'groups' },
  { value: '201+', label: '201+', sub: 'Grande', icon: 'corporate_fare' },
];

export default function Step7Trayectoria({ onNext, onBack }: StepProps) {
  const [anioFundacion, setAnioFundacion] = useState('');
  const [empleados, setEmpleados] = useState('');
  const [logros, setLogros] = useState('');
  const [presencia, setPresencia] = useState('');

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

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-md py-xl flex flex-col gap-xl">
        <div className="flex flex-col gap-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-tertiary">Paso 7 de 10</span>
            <span className="font-label-md text-label-md text-primary font-semibold">70% Completado</span>
          </div>
          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary-container rounded-full w-[70%] transition-all duration-500 ease-out"></div>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-sm">
            Trayectoria
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Cuéntanos la historia y el tamaño de tu empresa para conectar mejor con el talento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container flex flex-col gap-xl">
          {/* Año de Fundación */}
          <div className="space-y-sm">
            <label className="block font-label-md text-label-md text-on-surface" htmlFor="anio">Año de Fundación</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline-variant">calendar_month</span>
              </span>
              <input
                className="block w-full pl-10 pr-3 py-3 border border-tertiary rounded-lg bg-background text-on-surface focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-body-md text-body-md shadow-sm"
                id="anio" placeholder="Ej: 2015" type="number" min="1900" max="2026"
                value={anioFundacion} onChange={(e) => setAnioFundacion(e.target.value)}
              />
            </div>
          </div>

          {/* Número de colaboradores */}
          <div className="space-y-sm">
            <label className="block font-label-md text-label-md text-on-surface">Número de colaboradores</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              {EMPLOYEE_OPTIONS.map(opt => {
                const selected = empleados === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`relative flex items-center p-sm border rounded-lg cursor-pointer hover:bg-surface-variant/50 transition-colors group ${selected ? 'bg-primary-container/10 border-primary' : 'border-outline-variant'}`}
                  >
                    <input
                      className="sr-only" name="employees" type="radio" value={opt.value}
                      checked={selected} onChange={() => setEmpleados(opt.value)}
                    />
                    <div className="flex items-center gap-sm w-full">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selected ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface'}`}>
                        <span className="material-symbols-outlined">{opt.icon}</span>
                      </div>
                      <div>
                        <span className="block font-label-md text-label-md text-on-surface">{opt.label}</span>
                        <span className="block font-label-sm text-label-sm text-on-surface-variant">{opt.sub}</span>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Logros */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="logros">
              <span className="material-symbols-outlined text-tertiary text-[20px]">emoji_events</span>
              Principales Logros
            </label>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Menciona premios, certificaciones o hitos importantes.</p>
            <textarea
              className="w-full bg-background border border-tertiary rounded-lg p-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y placeholder:text-on-surface-variant/50"
              id="logros" placeholder="Ej: Premio Nacional de Innovación 2022, ISO 9001 certificada..." rows={3}
              value={logros} onChange={(e) => setLogros(e.target.value)}
            />
          </div>

          {/* Presencia */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="presencia">
              <span className="material-symbols-outlined text-tertiary text-[20px]">public</span>
              Presencia Geográfica
            </label>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">¿En qué países o regiones opera tu empresa?</p>
            <input
              className="w-full bg-background border border-tertiary rounded-lg px-4 py-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors placeholder:text-on-surface-variant/50"
              id="presencia" placeholder="Ej: Colombia, México, España" type="text"
              value={presencia} onChange={(e) => setPresencia(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="pt-md flex items-center justify-between gap-sm border-t border-outline-variant mt-xl">
            <button
              type="button" onClick={onBack}
              className="px-md py-sm rounded-lg font-label-md text-label-md text-on-surface bg-surface-variant hover:bg-outline-variant transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Atrás
            </button>
            <button
              type="submit"
              className="px-lg py-sm rounded-lg font-label-md text-label-md text-on-primary-container bg-primary-container hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
            >
              Continuar
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
