'use client';

import { useRegistrationStore } from '@/store/registrationStore';

export default function Step3Cedula({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen w-full flex flex-col items-center justify-center p-gutter-mobile">
      {/* Top Navigation */}
      <header className="w-full max-w-container-max mx-auto py-sm px-gutter-mobile absolute top-0 left-0 flex justify-center">
        <h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed-dim">PUNTOCLICK</h1>
      </header>

      {/* Main Content Container */}
      <main className="w-full max-w-[448px] mx-auto mt-xl">
        {/* Progress Bar */}
        <div className="mb-lg w-full">
          <div className="flex justify-between items-center mb-xs">
            <span className="font-label-md text-label-md text-on-surface-variant">Paso 3 de 6</span>
            <span className="font-label-md text-label-md text-on-surface-variant">30%</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2">
            <div className="bg-primary-container h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="bg-surface rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-high p-md md:p-lg w-full flex flex-col gap-md">
          <div className="text-center mb-sm">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-xs">Identificación</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Ingresa tu número de cédula para continuar con el registro.</p>
          </div>

          <form className="flex flex-col gap-xs relative" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <label className="font-label-md text-label-md text-on-surface" htmlFor="cedula">Número de Cédula</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 transform -translate-y-1/2 text-on-surface-variant pointer-events-none">
                badge
              </span>
              <input
                className="w-full bg-surface-container-lowest border border-tertiary rounded-lg pl-xl pr-sm py-sm font-body-md text-body-md text-on-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                id="cedula"
                name="cedula"
                placeholder="Ej: 1234567890"
                required
                type="text"
                value={talentData.idNumber || ''}
                onChange={(e) => setTalentData({ idNumber: e.target.value })}
              />
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Tu información está segura y encriptada.</p>
            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-lg w-full flex justify-between gap-md">
          <button 
            onClick={onBack}
            className="flex-1 py-sm px-md rounded-lg border-2 border-outline text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors flex items-center justify-center gap-xs"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Atrás
          </button>
          <button 
            onClick={onNext}
            disabled={!talentData.idNumber}
            className="flex-1 py-sm px-md rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-xs disabled:opacity-50"
          >
            Siguiente
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </main>

      {/* Decorative elements representing the 'Bee-Hive' / Connection points concept */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-primary-container rounded-full opacity-10 blur-2xl -z-10"></div>
      <div className="fixed bottom-20 left-10 w-40 h-40 bg-secondary-container rounded-full opacity-20 blur-3xl -z-10"></div>
    </div>
  );
}
