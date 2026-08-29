'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step4Genero({ onNext, onBack }: StepProps) {
  const [selectedGender, setSelectedGender] = useState<string>('Masculino');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md bg-background text-on-background w-full">
      {/* Top Header */}
      <header className="w-full px-margin-mobile py-sm flex items-center justify-between z-50 bg-background sticky top-0">
        <button
          onClick={onBack}
          aria-label="Atrás"
          className="p-2 text-on-surface hover:bg-surface-container-highest rounded-full transition-colors flex items-center justify-center h-12 w-12"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <span className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary">
          PUNTOCLICK
        </span>
        <div className="w-12"></div>
      </header>

      <main className="flex-grow flex flex-col px-margin-mobile max-w-[448px] mx-auto w-full pt-md pb-xl">
        {/* Progress Bar */}
        <div className="mb-lg">
          <div className="flex justify-between items-center mb-xs">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Progreso
            </span>
            <span className="font-label-md text-label-md text-primary font-bold">
              36%
            </span>
          </div>
          <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: '36%' }}
            ></div>
          </div>
        </div>

        {/* Content Canvas */}
        <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
          <div className="flex flex-col gap-lg">
            <div className="text-center">
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-sm">
                ¿Con qué género te identificas?
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Esta información nos ayuda a personalizar tu experiencia. Puedes preferir no decirlo.
              </p>
            </div>

            <fieldset className="grid gap-sm">
              <legend className="sr-only">Selecciona tu género</legend>
              {['Masculino', 'Femenino', 'Otro', 'Prefiero no decirlo'].map((gender) => (
                <div key={gender} className="relative">
                  <input
                    className="peer sr-only"
                    id={`gender-${gender}`}
                    name="gender"
                    type="radio"
                    value={gender}
                    checked={selectedGender === gender}
                    onChange={() => setSelectedGender(gender)}
                  />
                  <label
                    className={`flex items-center justify-between p-md border rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors w-full text-left bg-surface shadow-sm ${
                      selectedGender === gender
                        ? 'border-primary bg-primary-container/10'
                        : 'border-outline-variant'
                    }`}
                    htmlFor={`gender-${gender}`}
                  >
                    <span className="font-label-md text-label-md text-on-surface">
                      {gender}
                    </span>
                    {selectedGender === gender && (
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </fieldset>
          </div>

          <div className="mt-xl flex flex-col gap-sm sm:flex-row-reverse sm:justify-between w-full">
            <button
              type="submit"
              className="w-full sm:w-auto px-lg py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold shadow-sm hover:bg-primary-fixed hover:text-on-primary-fixed active:scale-95 transition-all text-center"
            >
              Siguiente
            </button>
            <button
              type="button"
              onClick={onBack}
              className="hidden sm:block w-full sm:w-auto px-lg py-md border-2 border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container-low active:scale-95 transition-all text-center"
            >
              Atrás
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
