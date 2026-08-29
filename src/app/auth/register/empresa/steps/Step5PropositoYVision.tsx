'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step5PropositoYVision({ onNext, onBack }: StepProps) {
  const [descripcion, setDescripcion] = useState('');
  const [historia, setHistoria] = useState('');
  const [mision, setMision] = useState('');
  const [vision, setVision] = useState('');

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
          <button onClick={onBack} aria-label="Cerrar" className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 p-2 rounded-full hover:bg-surface-variant" type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-full bg-primary" style={{ width: '80%', height: '3px' }}></div>
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-md py-lg md:py-xl flex flex-col gap-xl">
        <section className="flex flex-col gap-sm text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background">
            Propósito y Visión
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Cuéntanos sobre la esencia de tu empresa. Esta información ayudará a conectar mejor con candidatos que compartan tus valores.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="flex flex-col gap-lg bg-surface-container-low p-md md:p-lg rounded-xl shadow-[0px_4px_20px_rgba(32,27,18,0.05)] border border-outline-variant/30">
          {/* Descripción */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="descripcion">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '20px' }}>description</span>
              Descripción Breve de la Empresa
            </label>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-1">Un resumen rápido de lo que hace tu empresa y qué la hace especial.</p>
            <textarea
              className="w-full bg-background border border-outline-variant text-on-background rounded-lg p-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md resize-y placeholder:text-on-surface-variant/50 transition-colors"
              id="descripcion" name="descripcion" placeholder="Ej: Somos una startup tecnológica enfocada en..." rows={3}
              value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          {/* Historia */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="historia">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '20px' }}>history_edu</span>
              Historia
            </label>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-1">¿Cómo y por qué comenzó la empresa?</p>
            <textarea
              className="w-full bg-background border border-outline-variant text-on-background rounded-lg p-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md resize-y placeholder:text-on-surface-variant/50 transition-colors"
              id="historia" name="historia" placeholder="Nuestra historia comenzó en..." rows={5}
              value={historia} onChange={(e) => setHistoria(e.target.value)}
            />
          </div>

          {/* Misión & Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="mision">
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '20px' }}>flag</span>
                Misión
              </label>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-1">El objetivo principal de tu empresa hoy.</p>
              <textarea
                className="w-full bg-background border border-outline-variant text-on-background rounded-lg p-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md resize-y placeholder:text-on-surface-variant/50 transition-colors"
                id="mision" name="mision" placeholder="Nuestra misión es facilitar..." rows={4}
                value={mision} onChange={(e) => setMision(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface flex items-center gap-2" htmlFor="vision">
                <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '20px' }}>visibility</span>
                Visión
              </label>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-1">Hacia dónde se dirige la empresa en el futuro.</p>
              <textarea
                className="w-full bg-background border border-outline-variant text-on-background rounded-lg p-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md resize-y placeholder:text-on-surface-variant/50 transition-colors"
                id="vision" name="vision" placeholder="Ser los líderes indiscutibles en..." rows={4}
                value={vision} onChange={(e) => setVision(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-md mt-sm pt-md border-t border-outline-variant/30">
            <button
              type="button" onClick={onBack}
              className="w-full md:w-auto px-lg py-sm rounded-lg font-label-md text-label-md text-on-surface border-2 border-on-surface/20 hover:bg-surface-variant/50 transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Paso Anterior
            </button>
            <button
              type="submit"
              className="w-full md:w-auto px-lg py-sm rounded-lg font-label-md text-label-md bg-primary-container text-on-primary-container hover:opacity-90 transition-opacity active:scale-95 shadow-sm flex items-center justify-center gap-2"
            >
              Guardar y Continuar
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
