'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step8MultimediaYSeguridad({ onNext, onBack }: StepProps) {
  const [fotos, setFotos] = useState<string[]>([]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map(f => URL.createObjectURL(f));
      setFotos(prev => [...prev, ...urls]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
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
          <button onClick={onBack} className="text-on-surface-variant hover:opacity-80 p-2 rounded-full hover:bg-surface-variant transition-opacity" type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-md py-xl flex flex-col gap-xl">
        <div className="flex flex-col gap-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-tertiary">Paso 8 de 10</span>
            <span className="font-label-md text-label-md text-primary font-semibold">80% Completado</span>
          </div>
          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary-container rounded-full w-[80%] transition-all duration-500 ease-out"></div>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-sm">
            Multimedia y Seguridad
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Agrega fotos de tu empresa y configura la seguridad de tu cuenta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-xl">
          {/* Multimedia Section */}
          <section className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container flex flex-col gap-md">
            <div className="flex items-center gap-sm border-b border-surface-variant pb-sm">
              <span className="material-symbols-outlined text-primary text-2xl">photo_library</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Fotos del Espacio</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">Sube imágenes de tu oficina, equipo o eventos para humanizar tu perfil.</p>

            {/* Upload Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
              {fotos.slice(0, 3).map((url, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden border border-surface-variant">
                  <img src={url} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <label className="aspect-square rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-surface-container/50 transition-all group">
                <input type="file" accept="image/*" multiple className="sr-only" onChange={handleFileChange} />
                <span className="material-symbols-outlined text-outline-variant text-3xl group-hover:text-primary transition-colors">add_photo_alternate</span>
                <span className="font-label-sm text-label-sm text-outline group-hover:text-primary mt-1 z-10">Subir foto</span>
              </label>
            </div>
          </section>

          {/* Security Section */}
          <section className="bg-surface-container-lowest rounded-xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container flex flex-col gap-md">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">lock</span>
              Seguridad
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">Crea una contraseña segura para tu cuenta.</p>
            <div className="space-y-md">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="password">Crear contraseña</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">key</span>
                  <input
                    className="w-full pl-10 pr-12 py-3 bg-surface-container-lowest border border-tertiary rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    id="password" name="password" placeholder="••••••••"
                    type={showPass ? 'text' : 'password'}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary">
                    <span className="material-symbols-outlined">{showPass ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="confirm_password">Confirmar contraseña</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">verified</span>
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-tertiary rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    id="confirm_password" name="confirm_password" placeholder="••••••••"
                    type={showPass ? 'text' : 'password'}
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="pt-lg flex flex-col md:flex-row gap-sm md:justify-between items-center border-t border-surface-variant">
            <button
              type="button" onClick={onBack}
              className="w-full md:w-auto px-6 py-3 rounded-lg border-2 border-on-surface text-on-surface font-label-md text-label-md hover:bg-surface-variant/50 transition-colors flex items-center justify-center gap-2 order-2 md:order-1"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Atrás
            </button>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-primary-container text-on-primary-fixed rounded-lg font-label-md text-label-md shadow-[0px_4px_10px_rgba(32,27,18,0.1)] hover:shadow-[0px_6px_15px_rgba(32,27,18,0.15)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 order-1 md:order-2 group"
            >
              Siguiente
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
