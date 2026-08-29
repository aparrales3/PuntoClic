'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState } from 'react';

export default function Step5Telefono({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  const [countryCode, setCountryCode] = useState('+505');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, ''); // Remove non-digits
    val = val.substring(0, 8); // Nicaragua phones are 8 digits
    
    let formattedValue = '';
    if (val.length > 0) {
      if (val.length <= 4) {
        formattedValue = val;
      } else {
        formattedValue = `${val.substring(0, 4)} ${val.substring(4)}`;
      }
    }
    
    setTalentData({ phone: formattedValue });
  };

  const handleNext = () => {
    if (talentData.phone && talentData.phone.length >= 8) {
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
          <p className="font-label-sm text-label-sm text-on-surface-variant text-right mt-xs">Paso 5 de 12</p>
        </header>

        {/* Content Area */}
        <div className="flex flex-col gap-md">
          <div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background mb-sm font-bold">
              ¿Cuál es tu número de teléfono?
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Lo usaremos para mantener tu cuenta segura y conectarte con la comunidad en Nicaragua y la región.
            </p>
          </div>

          {/* Phone Input Component */}
          <div className="mt-md relative flex flex-col gap-xs group">
            <label className="font-label-md text-label-md text-on-surface-variant font-bold" htmlFor="phone-input">
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
                  <option value="+505">🇳🇮 +505 (Nicaragua)</option>
                  <option value="+52">🇲🇽 +52 (México)</option>
                  <option value="+502">🇬🇹 +502 (Guatemala)</option>
                  <option value="+503">🇸🇻 +503 (El Salvador)</option>
                  <option value="+504">🇭🇳 +504 (Honduras)</option>
                  <option value="+506">🇨🇷 +506 (Costa Rica)</option>
                  <option value="+507">🇵🇦 +507 (Panamá)</option>
                  <option value="+1">🇺🇸 +1 (USA)</option>
                  <option value="+34">🇪🇸 +34 (España)</option>
                </select>
                <div className="flex items-center gap-xs px-sm pointer-events-none">
                  <span className="text-body-md font-body-md text-on-surface font-bold">
                    {countryCode === '+505' ? '🇳🇮 +505' : countryCode === '+52' ? '🇲🇽 +52' : countryCode === '+506' ? '🇨🇷 +506' : countryCode}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">expand_more</span>
                </div>
              </div>

              {/* Number Input */}
              <input 
                value={talentData.phone || ''}
                onChange={handlePhoneChange}
                autoComplete="tel-national" 
                className="w-full h-full bg-transparent px-md text-headline-md font-headline-md text-on-surface placeholder:text-outline-variant outline-none tracking-wider font-mono" 
                id="phone-input" 
                inputMode="tel" 
                placeholder="8888 8888" 
                type="tel"
              />
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">
              Ejemplo para Nicaragua: 8888 8888
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <footer className="w-full mt-auto pt-xl">
          <button 
            onClick={handleNext}
            disabled={!talentData.phone || talentData.phone.replace(/\s/g, '').length < 8}
            className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-base px-md rounded-xl shadow-ambient hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed h-[52px]"
          >
            <span>Continuar</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </footer>
      </main>
    </div>
  );
}
