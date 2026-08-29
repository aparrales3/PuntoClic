'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState, useRef } from 'react';

export default function Step10Foto({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  const [photoPreview, setPhotoPreview] = useState<string | null>(talentData.photoUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPhotoPreview(url);
      setTalentData({ photoUrl: url });
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-background shadow-sm border-b border-surface-variant/30">
        <div className="flex justify-between items-center px-gutter-mobile md:px-md h-16 w-full max-w-[1280px] mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant active:scale-95 duration-150 cursor-pointer"
            aria-label="Atrás"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="font-headline-md text-headline-md-mobile font-bold text-primary text-center">
            PUNTOCLICK
          </div>
          <div className="w-10"></div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-32 px-gutter-mobile md:px-md max-w-[600px] mx-auto w-full flex flex-col items-center justify-center">
        {/* Progress Bar (Matching other steps) */}
        <div className="mb-lg w-full">
          <div className="flex justify-between items-center mb-sm font-label-sm text-label-sm text-on-surface-variant">
            <span className="uppercase tracking-wider">Paso 10 de 11</span>
            <span className="font-bold text-primary">90%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '90%' }}></div>
          </div>
        </div>

        {/* Contextual Headline */}
        <div className="mb-xl text-center md:text-left w-full">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-sm font-bold">
            Foto de Perfil
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Una buena foto aumenta tus posibilidades de match y genera mayor confianza con las organizaciones.
          </p>
        </div>

        {/* Photo Upload Placeholder */}
        <div 
          onClick={triggerUpload}
          className="relative w-48 h-48 rounded-full bg-surface-container-lowest border-2 border-dashed border-outline-variant flex flex-col items-center justify-center mb-md cursor-pointer hover:bg-surface-container-low transition-colors group shadow-[0_8px_32px_rgba(32,27,18,0.08)] overflow-hidden"
        >
          {photoPreview ? (
            <img src={photoPreview} alt="Vista previa" className="w-full h-full object-cover" />
          ) : (
            <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-on-secondary-container">add_a_photo</span>
            </div>
          )}
        </div>

        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          className="hidden" 
        />

        {/* Action Button */}
        <button 
          onClick={triggerUpload}
          type="button"
          className="mb-sm px-6 py-2.5 rounded-full bg-surface text-on-surface border border-outline shadow-sm font-label-md text-label-md transition-all hover:bg-surface-container active:scale-95 cursor-pointer font-medium"
        >
          {photoPreview ? 'Cambiar foto' : 'Subir foto'}
        </button>

        {/* Navigation Buttons */}
        <div className="w-full flex justify-between items-center mt-xl pt-md border-t border-surface-container-high gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-xs px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-background transition-colors font-label-md text-label-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Atrás
          </button>
          <button 
            onClick={onNext}
            className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-lg shadow-sm hover:opacity-90 hover:shadow-md transition-all active:scale-95 font-bold cursor-pointer"
          >
            Siguiente
          </button>
        </div>
      </main>
    </div>
  );
}
