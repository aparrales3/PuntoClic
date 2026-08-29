'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step4ContactoYRedes({ onNext, onBack }: StepProps) {
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [web, setWeb] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md antialiased">
      <header className="w-full sticky top-0 z-50 bg-surface-container shadow-[0px_4px_20px_rgba(32,27,18,0.05)]">
        <div className="flex items-center justify-between px-margin-mobile md:px-xl py-sm w-full max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            <span className="font-headline-md text-primary tracking-wider uppercase">PUNTOCLICK</span>
          </div>
          <button onClick={onBack} aria-label="Cerrar" className="text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 duration-200">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start py-xl px-margin-mobile md:px-xl w-full max-w-[1280px] mx-auto">
        <div className="w-full max-w-2xl mb-xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-between relative mb-xl">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-outline-variant -z-10"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[37%] h-[2px] bg-primary -z-10"></div>
            {[1,2,3,4].map((step) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md shadow-sm ${step <= 4 ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-surface-variant'} ${step === 4 ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-md' : ''}`}>
                  {step < 4 ? <span className="material-symbols-outlined text-[18px]">check</span> : step}
                </div>
                {step === 4 && <span className="font-label-sm text-label-sm text-primary absolute -bottom-6 whitespace-nowrap">Contacto Digital</span>}
              </div>
            ))}
            {[5,6,7].map((step) => (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md bg-surface-variant text-on-surface-variant shadow-sm">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-2xl bg-surface-container-highest rounded-xl p-md md:p-xl shadow-[0px_4px_20px_rgba(32,27,18,0.05)] border border-surface-variant relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-lg relative z-10">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
              Canales de Contacto
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Establece cómo los candidatos y la plataforma se comunicarán con tu empresa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-md relative z-10">
            {/* Teléfono */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="telefono">Teléfono</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">call</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                  id="telefono" name="telefono" placeholder="+1 (555) 000-0000" type="tel"
                  value={telefono} onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>

            {/* Correo */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="correo">Correo empresarial</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">mail</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                  id="correo" name="correo" placeholder="contacto@tuempresa.com" type="email"
                  value={correo} onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
            </div>

            {/* Sitio Web */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="web">Sitio web</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">language</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                  id="web" name="web" placeholder="https://www.tuempresa.com" type="url"
                  value={web} onChange={(e) => setWeb(e.target.value)}
                />
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-sm border-t border-outline-variant mt-sm">
              <label className="block font-label-md text-label-md text-on-surface mb-sm">Redes sociales (Opcional)</label>
              <div className="space-y-sm">
                <div className="flex items-center gap-sm bg-surface rounded-lg border border-outline-variant p-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                  <div className="w-10 h-10 rounded-md bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container">work</span>
                  </div>
                  <input className="flex-grow bg-transparent border-none focus:ring-0 text-on-surface font-body-md" placeholder="URL de LinkedIn" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                </div>
                <div className="flex items-center gap-sm bg-surface rounded-lg border border-outline-variant p-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                  <div className="w-10 h-10 rounded-md bg-surface-container-high flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface">alternate_email</span>
                  </div>
                  <input className="flex-grow bg-transparent border-none focus:ring-0 text-on-surface font-body-md" placeholder="URL de Twitter / X" type="url" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                </div>
                <div className="flex items-center gap-sm bg-surface rounded-lg border border-outline-variant p-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors">
                  <div className="w-10 h-10 rounded-md bg-tertiary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-tertiary-container">photo_camera</span>
                  </div>
                  <input className="flex-grow bg-transparent border-none focus:ring-0 text-on-surface font-body-md" placeholder="URL de Instagram" type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-sm pt-md mt-md border-t border-outline-variant">
              <button
                type="button" onClick={onBack}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-on-surface text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Atrás
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Siguiente
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
