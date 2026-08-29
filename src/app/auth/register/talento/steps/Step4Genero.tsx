'use client';

import { useRegistrationStore } from '@/store/registrationStore';

export default function Step4Genero({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();

  const options = ['Masculino', 'Femenino', 'Otro', 'Prefiero no decirlo'];

  return (
    <div className="min-h-screen flex flex-col font-body-md bg-background text-on-background">
      {/* Top Navigation */}
      <header className="w-full max-w-[448px] mx-auto px-gutter-mobile py-sm flex items-center justify-between z-50 bg-background sticky top-0">
        <button 
          onClick={onBack}
          aria-label="Atrás" 
          className="p-2 text-on-surface hover:bg-surface-container-highest rounded-full transition-colors flex items-center justify-center h-12 w-12"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <span className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary">PUNTOCLICK</span>
        <div className="w-12"></div> {/* Spacer for balance */}
      </header>
      
      <main className="flex-grow flex flex-col px-gutter-mobile max-w-[512px] mx-auto w-full pt-md pb-xl">
        {/* Progress Bar */}
        <div className="mb-lg">
          <div className="flex justify-between items-center mb-xs">
            <span className="font-label-md text-label-md text-on-surface-variant">Progreso</span>
            <span className="font-label-md text-label-md text-primary font-bold">40%</span>
          </div>
          <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '40%' }}></div>
          </div>
        </div>

        {/* Content Canvas */}
        <div className="flex-grow flex flex-col justify-center gap-lg">
          <div className="text-center">
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-sm">
              ¿Con qué género te identificas?
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Esta información nos ayuda a personalizar tu experiencia. Puedes preferir no decirlo.
            </p>
          </div>
          
          {/* Selection Options Grid */}
          <fieldset aria-labelledby="gender-group-label" className="grid gap-sm" role="radiogroup">
            <legend className="sr-only" id="gender-group-label">Selecciona tu género</legend>
            {options.map((option) => (
              <div className="relative" key={option}>
                <input 
                  className="peer sr-only" 
                  id={`gender-${option}`} 
                  name="gender" 
                  type="radio" 
                  value={option}
                  checked={talentData.gender === option}
                  onChange={() => setTalentData({ gender: option })}
                />
                <label 
                  className={`flex items-center justify-between p-md border rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors w-full text-left bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                    ${talentData.gender === option 
                      ? 'border-primary bg-primary-container text-on-primary-container' 
                      : 'border-outline-variant text-on-surface'
                    }`} 
                  htmlFor={`gender-${option}`}
                >
                  <span className="font-label-md text-label-md">{option}</span>
                  <span className={`material-symbols-outlined transition-opacity ${talentData.gender === option ? 'opacity-100 text-on-primary-container' : 'opacity-0 text-on-surface-variant'}`}>
                    check_circle
                  </span>
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        {/* Action Area */}
        <div className="mt-xl flex flex-col gap-sm sm:flex-row-reverse sm:justify-between w-full">
          <button 
            onClick={onNext}
            disabled={!talentData.gender}
            className="w-full sm:w-auto px-lg py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold shadow-[0_4px_12px_rgba(120,90,0,0.15)] hover:shadow-[0_6px_16px_rgba(120,90,0,0.2)] active:scale-95 transition-all text-center disabled:opacity-50"
          >
            Siguiente
          </button>
          <button 
            onClick={onBack}
            className="hidden sm:block w-full sm:w-auto px-lg py-md border-2 border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container-low active:scale-95 transition-all text-center"
          >
            Atrás
          </button>
        </div>
      </main>
    </div>
  );
}
