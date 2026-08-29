'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Ubicacion({ onNext, onBack }: StepProps) {
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [municipality, setMunicipality] = useState('');

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
          <button onClick={onBack} aria-label="Cerrar" className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 duration-200" type="button">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile py-xl md:py-16">
        <div className="w-full max-w-[600px] flex flex-col gap-lg">
          <div className="flex flex-col gap-sm">
            <div className="flex justify-between items-end">
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Paso 3 de 10</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">30% Completado</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div className="bg-primary-container h-full rounded-full transition-all duration-500 ease-out" style={{ width: '30%' }}></div>
            </div>
          </div>

          <div className="flex flex-col gap-xs text-center md:text-left">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
                Ubicación
              </h1>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              ¿Dónde está ubicada tu empresa? Esto nos ayuda a conectarte con talento local.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-surface-container-highest rounded-xl p-md md:p-lg shadow-[0px_4px_20px_rgba(32,27,18,0.05)] border border-surface-dim flex flex-col gap-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

            {/* Dirección exacta */}
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="address">Dirección exacta</label>
              <input
                className="w-full bg-background border border-tertiary rounded-lg px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50"
                id="address"
                placeholder="Ej: Calle Principal 123, Edificio Centro"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Departamento + Municipio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="department">Departamento</label>
                <div className="relative">
                  <select
                    className="w-full bg-background border border-tertiary rounded-lg px-sm py-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface pr-10"
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <option value="" disabled>Seleccione...</option>
                    <option value="managua">Managua</option>
                    <option value="leon">León</option>
                    <option value="matagalpa">Matagalpa</option>
                    <option value="esteli">Estelí</option>
                    <option value="chinandega">Chinandega</option>
                    <option value="masaya">Masaya</option>
                    <option value="granada">Granada</option>
                    <option value="rivas">Rivas</option>
                    <option value="carazo">Carazo</option>
                    <option value="jinotega">Jinotega</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="municipality">Municipio</label>
                <div className="relative">
                  <select
                    className="w-full bg-background border border-tertiary rounded-lg px-sm py-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface pr-10"
                    id="municipality"
                    value={municipality}
                    onChange={(e) => setMunicipality(e.target.value)}
                  >
                    <option value="" disabled>Seleccione...</option>
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
                  </select>
                  <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-sm flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                Ubicación en el mapa
              </label>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-surface-dim relative bg-surface-variant/30 group">
                <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-high flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Vista de mapa</p>
                  </div>
                </div>
                <button className="absolute bottom-sm right-sm bg-background/90 backdrop-blur-sm border border-surface-dim rounded-lg px-sm py-xs font-label-sm text-label-sm text-on-surface flex items-center gap-1 shadow-sm hover:bg-background transition-colors" type="button">
                  <span className="material-symbols-outlined text-[16px]">my_location</span> Centrar
                </button>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Verifique que el pin coincida con la dirección proporcionada.</p>
            </div>

            {/* Actions */}
            <div className="mt-md pt-md border-t border-surface-variant flex justify-end gap-sm">
              <button
                type="button"
                onClick={onBack}
                className="px-md py-sm rounded-lg font-label-md text-label-md text-on-surface bg-transparent border-2 border-outline hover:bg-surface-variant/50 transition-colors"
              >
                Atrás
              </button>
              <button
                type="submit"
                className="px-md py-sm rounded-lg font-label-md text-label-md text-on-primary-fixed bg-primary-container hover:opacity-90 active:scale-95 transition-all shadow-[0px_4px_10px_rgba(244,190,55,0.2)] flex items-center gap-2"
              >
                Continuar
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
