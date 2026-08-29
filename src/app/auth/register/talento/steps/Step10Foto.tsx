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
    <div className="bg-background min-h-screen flex flex-col font-sans text-on-background antialiased">
      {/* Top Progress Bar */}
      <header className="w-full fixed top-0 left-0 z-50 bg-background">
        <div className="h-2 w-full bg-surface-variant overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: '85%' }}></div>
        </div>
        <div className="flex items-center px-gutter-mobile py-sm max-w-[1280px] mx-auto w-full">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors active:scale-95 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="ml-2 font-label-md text-label-md text-on-surface-variant">Paso 10 de 11</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center px-gutter-mobile pt-24 pb-32 max-w-lg mx-auto w-full">
        {/* Contextual Headline */}
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-center mb-xl text-on-background font-bold">
          Sube tu foto de perfil
        </h1>

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
          className="mb-sm px-6 py-3 rounded-full bg-surface text-on-surface border border-outline shadow-sm font-label-md text-label-md transition-all hover:bg-surface-container active:scale-95"
        >
          {photoPreview ? 'Cambiar foto' : 'Subir foto'}
        </button>

        {/* Descriptive Text */}
        <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-[280px]">
          Una buena foto aumenta tus posibilidades de match.
        </p>
      </main>

      {/* Fixed Bottom Actions */}
      <footer className="fixed bottom-0 left-0 w-full bg-background border-t border-surface-variant px-gutter-mobile py-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between z-40">
        <button 
          onClick={onBack}
          className="px-4 py-3 text-on-surface-variant font-label-md text-label-md hover:text-on-background transition-colors active:scale-95"
        >
          Atrás
        </button>
        <button 
          onClick={onNext}
          className="px-8 py-3 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md shadow-sm flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95"
        >
          Siguiente
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
}
