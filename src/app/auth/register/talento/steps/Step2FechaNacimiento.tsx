'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState, useRef, useEffect } from 'react';

export default function Step2FechaNacimiento({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  
  // Parse initial date if it exists
  const initialDate = talentData.birthDate ? new Date(talentData.birthDate) : null;
  
  const [day, setDay] = useState(initialDate ? initialDate.getUTCDate().toString().padStart(2, '0') : '');
  const [month, setMonth] = useState(initialDate ? (initialDate.getUTCMonth() + 1).toString().padStart(2, '0') : '');
  const [year, setYear] = useState(initialDate ? initialDate.getUTCFullYear().toString() : '');

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 2);
    setDay(val);
    if (val.length === 2) monthRef.current?.focus();
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 2);
    setMonth(val);
    if (val.length === 2) yearRef.current?.focus();
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setYear(val);
  };

  const handleContinue = () => {
    if (day && month && year && year.length === 4) {
      // Format as YYYY-MM-DD
      const dateString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      setTalentData({ birthDate: dateString });
      onNext();
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full relative z-10 pt-4 md:pt-12 pb-32">
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-30 pointer-events-none md:rounded-3xl">
        <svg className="absolute -top-24 -right-24 w-96 h-96 text-surface-container-high" fill="currentColor" viewBox="0 0 100 100">
          <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25"></polygon>
        </svg>
        <svg className="absolute top-1/3 -left-12 w-48 h-48 text-surface-container" fill="currentColor" viewBox="0 0 100 100">
          <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25"></polygon>
        </svg>
      </div>
      
      <div className="md:bg-surface md:shadow-[0_4px_20px_rgba(0,0,0,0.03)] md:border md:border-surface-variant md:rounded-[2rem] md:p-10 flex-1 flex flex-col">
        <div className="text-center mb-10">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-3">Fecha de nacimiento</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[448px] mx-auto">Para unirte a la colmena, necesitamos confirmar tu edad. Esta información se mantendrá privada.</p>
        </div>
        
        <div className="flex gap-3 md:gap-5 mt-auto mb-auto justify-center max-w-[448px] mx-auto w-full">
          {/* Day */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface-variant text-center" htmlFor="day">Día</label>
            <input 
              ref={dayRef}
              value={day}
              onChange={handleDayChange}
              className="w-full bg-surface-bright md:bg-background border border-tertiary rounded-xl px-2 py-4 text-center font-headline-md text-headline-md-mobile text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container transition-all shadow-sm placeholder-outline-variant" 
              id="day" max="31" min="1" placeholder="DD" type="number" 
            />
          </div>
          {/* Month */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface-variant text-center" htmlFor="month">Mes</label>
            <input 
              ref={monthRef}
              value={month}
              onChange={handleMonthChange}
              className="w-full bg-surface-bright md:bg-background border border-tertiary rounded-xl px-2 py-4 text-center font-headline-md text-headline-md-mobile text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container transition-all shadow-sm placeholder-outline-variant" 
              id="month" max="12" min="1" placeholder="MM" type="number" 
            />
          </div>
          {/* Year */}
          <div className="flex-[1.5] flex flex-col gap-2">
            <label className="font-label-md text-label-md text-on-surface-variant text-center" htmlFor="year">Año</label>
            <input 
              ref={yearRef}
              value={year}
              onChange={handleYearChange}
              className="w-full bg-surface-bright md:bg-background border border-tertiary rounded-xl px-2 py-4 text-center font-headline-md text-headline-md-mobile text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container transition-all shadow-sm placeholder-outline-variant" 
              id="year" max={new Date().getFullYear()} min="1900" placeholder="AAAA" type="number" 
            />
          </div>
        </div>
      </div>
      
      {/* Action Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-background md:bg-transparent md:static md:w-auto px-gutter-mobile py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] md:pb-8 border-t border-surface-variant md:border-none z-20">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
          <button onClick={onBack} className="flex-1 py-4 px-6 rounded-xl border-2 border-outline text-on-surface font-label-md text-label-md flex items-center justify-center transition-all hover:bg-surface-variant active:scale-95 duration-150 focus:outline-none focus:ring-2 focus:ring-outline-variant">
            Atrás
          </button>
          <button 
            onClick={handleContinue}
            disabled={!day || !month || year.length !== 4}
            className="flex-[1.5] py-4 px-6 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center transition-all hover:brightness-105 active:scale-95 duration-150 shadow-[0_4px_12px_rgba(244,190,55,0.3)] focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </footer>
    </div>
  );
}
