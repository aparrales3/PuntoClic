'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState } from 'react';

export default function Step5Telefono({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  const [countryCode, setCountryCode] = useState('+52');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, ''); // Remove non-digits
    val = val.substring(0, 10);
    
    let formattedValue = '';
    if (val.length > 0) {
      if (val.length <= 3) {
        formattedValue = val;
      } else if (val.length <= 6) {
        formattedValue = `${val.substring(0, 3)} ${val.substring(3)}`;
      } else {
        formattedValue = `${val.substring(0, 3)} ${val.substring(3, 6)} ${val.substring(6)}`;
      }
    }
    
    setTalentData({ phone: formattedValue });
  };

  const handleNext = () => {
    // In a real app, combine countryCode + phone, or keep them separate.
    // For now we just require a 10 digit number (12 chars with spaces)
    if (talentData.phone && talentData.phone.length >= 12) {
      onNext();
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <main className="flex-grow flex flex-col w-full max-w-[512px] mx-auto px-gutter-mobile pt-lg pb-xl relative">
        {/* Header & Progress Area */}
        <header className="w-full flex flex-col gap-sm mb-xl">
          {/* Back Action */}
          <button 
            onClick={onBack}
            aria-label="Atrás" 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden mt-sm">
            <div className="h-full bg-primary-container rounded-full transition-all duration-500 ease-out" style={{ width: '50%' }}></div>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-right mt-xs">Paso 5 de 8</p>
        </header>

        {/* Content Area */}
        <div className="flex flex-col gap-md">
          <div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background mb-sm">
              ¿Cuál es tu número?
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Lo usaremos para mantener tu cuenta segura y conectarte con la comunidad.
            </p>
          </div>

          {/* Phone Input Component */}
          <div className="mt-md relative flex flex-col gap-xs group">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="phone-input">
              Teléfono móvil
            </label>
            <div className="flex items-stretch bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(32,27,18,0.05)] transition-colors duration-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary h-[56px]">
              
              {/* Country Code Selector */}
              <div className="relative flex items-center bg-surface-variant border-r border-outline-variant transition-colors group-focus-within:border-primary cursor-pointer hover:bg-surface-dim">
                <select 
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none" 
                  id="country-code"
                >
                  <option value="+52">🇲🇽 +52</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+34">🇪🇸 +34</option>
                  <option value="+57">🇨🇴 +57</option>
                </select>
                <div className="flex items-center gap-xs px-sm pointer-events-none">
                  <span className="text-body-md font-body-md text-on-surface">
                    {countryCode === '+52' ? '🇲🇽 +52' : countryCode === '+1' ? '🇺🇸 +1' : countryCode === '+34' ? '🇪🇸 +34' : '🇨🇴 +57'}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">expand_more</span>
                </div>
              </div>

              {/* Number Input */}
              <input 
                value={talentData.phone || ''}
                onChange={handlePhoneChange}
                autoComplete="tel-national" 
                className="flex-grow bg-transparent border-none px-4 text-body-lg font-body-lg text-on-background placeholder:text-outline focus:ring-0 w-full focus:outline-none" 
                id="phone-input" 
                placeholder="000 000 0000" 
                type="tel"
              />
            </div>
            <p className="font-label-sm text-label-sm text-outline mt-xs pl-1">Te enviaremos un código por SMS.</p>
          </div>
        </div>

        {/* Spacer to push buttons to bottom */}
        <div className="flex-grow"></div>

        {/* Bottom Actions */}
        <footer className="mt-xl pt-lg flex flex-col gap-sm">
          <button 
            onClick={handleNext}
            disabled={!talentData.phone || talentData.phone.length < 12}
            className="w-full h-[56px] flex items-center justify-center bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md shadow-[0_4px_20px_rgba(32,27,18,0.05)] hover:bg-primary-fixed-dim transition-all active:scale-[0.98] disabled:opacity-50"
          >
            Siguiente
          </button>
          <button 
            onClick={onBack}
            className="w-full h-[56px] flex items-center justify-center bg-transparent text-on-surface-variant rounded-lg font-label-md text-label-md border-2 border-transparent hover:border-outline-variant transition-all"
          >
            Atrás
          </button>
        </footer>
      </main>
    </div>
  );
}
