'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState, useRef } from 'react';

export default function Step10Foto({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  const [photoPreview, setPhotoPreview] = useState<string | null>(talentData.photoUrl || null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Solo se permiten imágenes JPG, PNG o WebP');
      return;
    }

    // Validate file size (5 MB max)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('La imagen no puede superar los 5 MB');
      return;
    }

    // Show local preview immediately for fast feedback
    const localUrl = URL.createObjectURL(file);
    setPhotoPreview(localUrl);
    setUploadError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', talentData.email || `temp_${Date.now()}`);
      formData.append('role', 'talento');
      formData.append('type', 'profile');

      const res = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Error al subir la imagen');
      }

      // Replace blob URL with Cloudinary CDN URL
      setPhotoPreview(data.url);
      setTalentData({ photoUrl: data.url });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al subir imagen';
      setUploadError(msg);
      // Keep local preview even if upload failed
      setTalentData({ photoUrl: localUrl });
    } finally {
      setUploading(false);
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

        {/* Photo Upload */}
        <div
          onClick={!uploading ? triggerUpload : undefined}
          className={`relative w-48 h-48 rounded-full bg-surface-container-lowest border-2 border-dashed border-outline-variant flex flex-col items-center justify-center mb-md transition-colors group shadow-[0_8px_32px_rgba(32,27,18,0.08)] overflow-hidden ${
            uploading ? 'cursor-wait opacity-80' : 'cursor-pointer hover:bg-surface-container-low'
          }`}
        >
          {photoPreview ? (
            <img src={photoPreview} alt="Vista previa" className="w-full h-full object-cover" />
          ) : (
            <div className="w-20 h-20 rounded-full bg-secondary-container flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-on-secondary-container">add_a_photo</span>
            </div>
          )}

          {/* Upload overlay spinner */}
          {uploading && (
            <div className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl animate-spin">progress_activity</span>
              <span className="text-xs font-semibold text-primary">Subiendo...</span>
            </div>
          )}
        </div>

        {/* Cloudinary badge */}
        {talentData.photoUrl && talentData.photoUrl.includes('cloudinary') && (
          <div className="mb-sm flex items-center gap-1 text-[11px] text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">
            <span className="material-symbols-outlined text-[12px] text-green-600">cloud_done</span>
            <span>Guardada en la nube (Cloudinary)</span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
          disabled={uploading}
        />

        {uploadError && (
          <div className="mb-md w-full max-w-sm p-3 bg-error-container text-on-error-container text-sm rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-base">error</span>
            <span>{uploadError}</span>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={!uploading ? triggerUpload : undefined}
          type="button"
          disabled={uploading}
          className="mb-sm px-6 py-2.5 rounded-full bg-surface text-on-surface border border-outline shadow-sm font-label-md text-label-md transition-all hover:bg-surface-container active:scale-95 cursor-pointer font-medium disabled:opacity-60"
        >
          {uploading ? 'Subiendo a Cloudinary...' : photoPreview ? 'Cambiar foto' : 'Subir foto'}
        </button>

        <p className="text-center text-[12px] text-on-surface-variant mb-lg">
          JPG, PNG o WebP · Máx. 5 MB · Se optimiza automáticamente
        </p>

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
            disabled={uploading}
            className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-lg shadow-sm hover:opacity-90 hover:shadow-md transition-all active:scale-95 font-bold cursor-pointer disabled:opacity-60"
          >
            Siguiente
          </button>
        </div>
      </main>
    </div>
  );
}
