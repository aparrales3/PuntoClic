'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState } from 'react';

export default function Step6Direccion({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  
  // We'll manage them locally and store in address, or just manage locally
  // In a real app we'd probably add department and city to the store
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [specificAddress, setSpecificAddress] = useState(talentData.address || '');

  const handleNext = () => {
    // Save to store
    setTalentData({ address: `${department}, ${city}, ${specificAddress}` });
    onNext();
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background dark:bg-background shadow-sm flex justify-between items-center px-gutter-mobile h-16 max-w-[1280px] mx-auto left-0 right-0">
        <button 
          onClick={onBack}
          className="text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low transition-colors active:scale-95 duration-150 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
          PUNTOCLICK
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full">
          {/* Spacer */}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mt-16 px-gutter-mobile md:px-md max-w-[600px] w-full mx-auto py-lg flex flex-col relative">
        {/* Progress Indicator */}
        <div className="mb-lg w-full">
          <div className="flex justify-between items-end mb-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Paso 6 de 8</span>
            <span className="font-label-md text-label-md text-primary">60%</span>
          </div>
          <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-700 ease-out relative overflow-hidden" style={{ width: '60%' }}>
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-xl">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-xs">
            Dirección
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Cuéntanos dónde te encuentras para conectarte con las mejores oportunidades de la colmena local.
          </p>
        </div>

        {/* Form Elements */}
        <form className="flex flex-col gap-md flex-1" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          {/* Departamento Field */}
          <div className="flex flex-col gap-xs group">
            <label className="font-label-sm text-label-sm text-on-surface-variant ml-1 group-focus-within:text-primary transition-colors" htmlFor="departamento">
              Departamento
            </label>
            <div className="relative">
              <select 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="w-full bg-surface-container-lowest border border-outline focus:border-primary text-on-surface rounded-lg px-4 py-4 font-body-md text-body-md outline-none transition-all shadow-sm focus:shadow-[0_0_0_2px_rgba(120,90,0,0.2)] cursor-pointer appearance-none" 
                id="departamento"
              >
                <option disabled value="">Selecciona tu departamento</option>
                <option value="managua">Managua</option>
                <option value="leon">León</option>
                <option value="matagalpa">Matagalpa</option>
                <option value="esteli">Estelí</option>
                <option value="chinandega">Chinandega</option>
                <option value="masaya">Masaya</option>
                <option value="granada">Granada</option>
                <option value="rivas">Rivas</option>
                <option value="carazo">Carazo</option>
                <option value="nueva_segovia">Nueva Segovia</option>
                <option value="madriz">Madriz</option>
                <option value="jinotega">Jinotega</option>
                <option value="boaco">Boaco</option>
                <option value="chontales">Chontales</option>
                <option value="rio_san_juan">Río San Juan</option>
                <option value="racn">RACCN (Caribe Norte)</option>
                <option value="racs">RACCS (Caribe Sur)</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none group-focus-within:text-primary transition-colors">
                expand_more
              </span>
            </div>
          </div>

          {/* Ciudad Field */}
          <div className="flex flex-col gap-xs group">
            <label className="font-label-sm text-label-sm text-on-surface-variant ml-1 group-focus-within:text-primary transition-colors" htmlFor="ciudad">
              Municipio / Ciudad
            </label>
            <div className="relative">
              <select 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full bg-surface-container-lowest border border-outline focus:border-primary text-on-surface rounded-lg px-4 py-4 font-body-md text-body-md outline-none transition-all shadow-sm focus:shadow-[0_0_0_2px_rgba(120,90,0,0.2)] cursor-pointer appearance-none" 
                id="ciudad"
              >
                <option disabled value="">Selecciona tu municipio</option>
                <option value="managua">Managua</option>
                <option value="ciudad_sandino">Ciudad Sandino</option>
                <option value="tipitapa">Tipitapa</option>
                <option value="leon">León</option>
                <option value="matagalpa">Matagalpa</option>
                <option value="esteli">Estelí</option>
                <option value="chinandega">Chinandega</option>
                <option value="masaya">Masaya</option>
                <option value="granada">Granada</option>
                <option value="rivas">Rivas</option>
                <option value="jinotepe">Jinotepe</option>
                <option value="san_juan_del_sur">San Juan del Sur</option>
                <option value="bluefields">Bluefields</option>
                <option value="puerto_cabezas">Puerto Cabezas / Bilwi</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none group-focus-within:text-primary transition-colors">
                expand_more
              </span>
            </div>
          </div>

          {/* Dirección Específica Field */}
          <div className="flex flex-col gap-xs group">
            <label className="font-label-sm text-label-sm text-on-surface-variant ml-1 group-focus-within:text-primary transition-colors" htmlFor="direccion">
              Dirección específica
            </label>
            <div className="relative">
              <input 
                value={specificAddress}
                onChange={(e) => setSpecificAddress(e.target.value)}
                required
                className="w-full bg-surface-container-lowest border border-outline focus:border-primary text-on-surface rounded-lg px-4 py-4 font-body-md text-body-md outline-none transition-all shadow-sm focus:shadow-[0_0_0_2px_rgba(120,90,0,0.2)] placeholder:text-outline/50" 
                id="direccion" 
                placeholder="Ej: Calle 123 # 45 - 67, Apto 801" 
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                home_pin
              </span>
            </div>
          </div>

          <button type="submit" className="hidden">Submit</button>

          {/* Spacer to push actions to bottom if screen is tall */}
          <div className="flex-1 min-h-[40px]"></div>

          {/* Actions Row */}
          <div className="flex gap-sm items-center pt-md pb-md">
            <button 
              onClick={onBack}
              className="w-1/3 py-4 px-4 rounded-lg border-2 border-outline text-on-surface font-label-md text-label-md text-center hover:bg-surface-variant hover:border-on-surface transition-all active:scale-95 flex items-center justify-center" 
              type="button"
            >
              Atrás
            </button>
            <button 
              onClick={handleNext}
              disabled={!department || !city || !specificAddress}
              className="w-2/3 py-4 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md text-center hover:opacity-90 shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50" 
              type="button"
            >
              Siguiente
              <span className="material-symbols-outlined text-on-primary text-[20px]">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
