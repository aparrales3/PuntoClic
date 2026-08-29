'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useRef, useState } from 'react';

export default function Step9CV({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(talentData.cvUrl || null); // Just storing the name for UI purposes in this prototype

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      // In a real app we would upload the file and get a URL back, for now we just store a fake URL or file name
      setTalentData({ cvUrl: file.name });
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-gutter-mobile h-16 max-w-[1280px] mx-auto md:px-md z-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[28px]">api</span>
          <span className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed-dim">PUNTOCLICK</span>
        </div>
        <button onClick={onBack} className="text-on-surface-variant cursor-pointer p-2 hover:bg-surface-container rounded-full transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined">close</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col px-gutter-mobile py-lg max-w-[600px] mx-auto w-full md:px-0">
        {/* Progress Bar */}
        <div className="w-full mb-md">
          <div className="flex justify-between items-center mb-xs font-label-sm text-label-sm text-on-surface-variant">
            <span>Progreso del registro</span>
            <span>90%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{ width: '90%' }}></div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-xl text-center md:text-left">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-sm">Registro Talento</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Completa tu perfil para conectar con las mejores oportunidades.</p>
        </div>

        {/* File Upload Area */}
        <div 
          onClick={handleBoxClick}
          className={`bg-surface-container-low border ${fileName ? 'border-primary bg-primary-container/10' : 'border-surface-container-high'} rounded-xl p-md shadow-sm mb-xl flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary hover:bg-surface-container transition-colors group`}
        >
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-on-primary-container transition-colors">
              {fileName ? 'task' : 'cloud_upload'}
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md-mobile text-on-background mb-xs">
            {fileName ? 'Currículum cargado' : 'Sube tu currículum actualizado'}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md max-w-sm">
            {fileName ? fileName : 'Arrastra y suelta tu archivo aquí, o haz clic para buscar en tu dispositivo.'}
          </p>
          {!fileName && (
            <div className="flex flex-wrap justify-center gap-xs mb-md">
              <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded-xl font-label-sm text-label-sm">.PDF</span>
              <span className="px-sm py-1 bg-secondary-container text-on-secondary-container rounded-xl font-label-sm text-label-sm">.DOCX</span>
              <span className="px-sm py-1 bg-surface-container-high text-on-surface-variant rounded-xl font-label-sm text-label-sm">Máx 5MB</span>
            </div>
          )}
          <button 
            type="button" 
            className="bg-surface-container border border-outline text-on-surface font-label-md text-label-md px-md py-sm rounded-lg hover:bg-surface-variant transition-colors"
          >
            {fileName ? 'Cambiar Archivo' : 'Seleccionar Archivo'}
          </button>
          <input 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.docx" 
            className="hidden" 
            type="file"
          />
        </div>

        {/* Spacer to push buttons to bottom if needed */}
        <div className="flex-grow"></div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-lg pt-md border-t border-surface-container-high">
          <button 
            onClick={onBack}
            className="flex items-center gap-xs px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-background transition-colors font-label-md text-label-md"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Atrás
          </button>
          <button 
            onClick={handleNext}
            className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-lg shadow-sm hover:opacity-90 hover:shadow-md transition-all active:scale-95"
          >
            Siguiente
          </button>
        </div>
      </main>
    </div>
  );
}
