'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

const VALORES = ['Innovación', 'Integridad', 'Trabajo en Equipo', 'Transparencia', 'Orientación al Cliente', 'Diversidad'];

const BENEFICIOS = [
  { icon: 'home_work', title: 'Trabajo Remoto', desc: 'Opción de 100% remoto o híbrido.' },
  { icon: 'health_and_safety', title: 'Seguro Médico', desc: 'Cobertura médica privada extendida.' },
  { icon: 'school', title: 'Formación Continua', desc: 'Cursos y certificaciones pagadas.' },
  { icon: 'payments', title: 'Bonos de Desempeño', desc: 'Incentivos trimestrales por metas.' },
  { icon: 'child_care', title: 'Beneficios Familiares', desc: 'Licencias extendidas y apoyo familiar.' },
  { icon: 'fitness_center', title: 'Bienestar', desc: 'Acceso a gimnasio o subsidio wellness.' },
];

export default function Step6CulturaYOferta({ onNext, onBack }: StepProps) {
  const [cultura, setCultura] = useState('');
  const [valoresSeleccionados, setValoresSeleccionados] = useState<string[]>(['Integridad', 'Transparencia']);
  const [beneficiosSeleccionados, setBeneficiosSeleccionados] = useState<string[]>(['Trabajo Remoto', 'Formación Continua']);

  const toggleValor = (v: string) => {
    setValoresSeleccionados(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  };
  const toggleBeneficio = (b: string) => {
    setBeneficiosSeleccionados(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <header className="w-full sticky top-0 z-50 bg-surface-container-high shadow-sm shadow-[0px_4px_20px_rgba(32,27,18,0.05)]">
        <div className="flex items-center justify-between px-margin-mobile md:px-xl py-sm w-full max-w-[1280px] mx-auto">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-3xl">hub</span>
            <span className="font-headline-md text-primary uppercase tracking-wider">PUNTOCLICK</span>
          </div>
          <button onClick={onBack} className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 duration-200 p-2 rounded-full hover:bg-surface-variant" type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-md py-xl md:py-xl flex flex-col gap-xl">
        {/* Progress */}
        <div className="flex flex-col gap-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-tertiary">Paso 6 de 10</span>
            <span className="font-label-md text-label-md text-primary font-semibold">60% Completado</span>
          </div>
          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary-container rounded-full w-[60%] transition-all duration-500 ease-out"></div>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-sm">
            Cultura y Valor
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Comparte lo que hace única a tu empresa para atraer al talento adecuado que encaje con tu visión.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-xl">
          {/* Cultura Empresarial */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container p-md md:p-lg flex flex-col gap-md hover:border-outline-variant duration-300">
            <div className="flex items-center gap-sm border-b border-surface-variant pb-sm mb-xs">
              <span className="material-symbols-outlined text-primary text-2xl">diversity_3</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Cultura Empresarial</h2>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="cultura">Describe el ambiente de trabajo y filosofía</label>
              <textarea
                className="w-full bg-background border border-tertiary rounded-lg p-sm font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors placeholder:text-outline"
                id="cultura" placeholder="Ej. Fomentamos un ambiente colaborativo, flexible y orientado a resultados..." rows={4}
                value={cultura} onChange={(e) => setCultura(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface">Valores Fundamentales</label>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">Selecciona hasta 5 valores que definan a tu equipo.</p>
              <div className="flex flex-wrap gap-sm">
                {VALORES.map(v => {
                  const selected = valoresSeleccionados.includes(v);
                  return (
                    <button
                      key={v} type="button" onClick={() => toggleValor(v)}
                      className={`px-4 py-2 rounded-xl font-label-md text-label-md border transition-all ${selected ? 'bg-primary-container text-on-primary-container border-primary font-semibold shadow-sm' : 'bg-tertiary-container/30 text-on-tertiary-container border-transparent hover:border-tertiary'}`}
                    >
                      {v} {selected && <span className="material-symbols-outlined text-[14px] ml-1 align-middle">check</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Oferta / Beneficios */}
          <section className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container p-md md:p-lg flex flex-col gap-md hover:border-outline-variant duration-300">
            <div className="flex items-center gap-sm border-b border-surface-variant pb-sm mb-xs">
              <span className="material-symbols-outlined text-primary text-2xl">featured_seasonal_and_gifts</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Qué Ofrece (Beneficios)</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">Destaca los beneficios más atractivos para retener al mejor talento.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
              {BENEFICIOS.map(b => {
                const selected = beneficiosSeleccionados.includes(b.title);
                return (
                  <label key={b.title} className="relative cursor-pointer group">
                    <input
                      type="checkbox" className="peer sr-only"
                      checked={selected} onChange={() => toggleBeneficio(b.title)}
                    />
                    <div className={`p-sm rounded-xl border flex items-start gap-sm transition-all hover:border-outline ${selected ? 'border-primary bg-surface-container' : 'border-surface-variant bg-background'}`}>
                      <span className={`material-symbols-outlined mt-1 ${selected ? 'text-primary' : 'text-tertiary'}`}>{b.icon}</span>
                      <div>
                        <h4 className="font-label-md text-label-md text-on-surface font-semibold">{b.title}</h4>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">{b.desc}</p>
                      </div>
                      {selected && <span className="material-symbols-outlined text-primary absolute top-sm right-sm">check_circle</span>}
                    </div>
                  </label>
                );
              })}
            </div>
          </section>

          {/* Actions */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-md">
            <button
              type="button" onClick={onBack}
              className="w-full md:w-auto px-lg py-sm rounded-lg font-label-md text-label-md text-on-surface border-2 border-on-surface/20 hover:bg-surface-variant/50 transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Atrás
            </button>
            <button
              type="submit"
              className="w-full md:w-auto px-lg py-sm rounded-lg font-label-md text-label-md bg-primary-container text-on-primary-container hover:opacity-90 active:scale-95 shadow-sm flex items-center justify-center gap-2"
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
