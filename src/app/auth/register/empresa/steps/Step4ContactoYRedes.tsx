'use client';

import React, { useState } from 'react';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step4ContactoYRedes({ onNext, onBack }: StepProps) {
  const [telefono, setTelefono] = useState('+505 ');
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
            <img src="/logo.png" alt="PUNTOCLICK Logo" className="h-8 w-auto object-contain" />
            <span className="font-headline-md text-primary tracking-wider uppercase font-bold">PUNTOCLICK</span>
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
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 font-bold">
              Canales de Contacto
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Establece cómo los candidatos y la plataforma se comunicarán con tu empresa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-md relative z-10">
            {/* Teléfono */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs font-bold" htmlFor="telefono">
                Teléfono empresarial (Nicaragua +505)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">call</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                  id="telefono" name="telefono" placeholder="+505 8888 8888" type="tel"
                  value={telefono} onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>

            {/* Correo */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs font-bold" htmlFor="correo">Correo empresarial</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">mail</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                  id="correo" name="correo" placeholder="contacto@tuempresa.com.ni" type="email"
                  value={correo} onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
            </div>

            {/* Sitio Web */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs font-bold" htmlFor="web">Sitio web oficial</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">language</span>
                </div>
                <input
                  className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                  id="web" name="web" placeholder="https://www.tuempresa.com.ni" type="url"
                  value={web} onChange={(e) => setWeb(e.target.value)}
                />
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-xs">
              <p className="font-label-md text-label-md text-on-surface-variant mb-md font-bold uppercase tracking-wider">
                Redes sociales <span className="font-normal text-outline normal-case tracking-normal">(Opcional)</span>
              </p>
              <div className="space-y-sm">
                {/* LinkedIn */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="linkedin">LinkedIn</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline">work</span>
                    </div>
                    <input
                      className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                      id="linkedin" name="linkedin" placeholder="https://linkedin.com/company/tuempresa" type="url"
                      value={linkedin} onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </div>
                </div>

                {/* Twitter / X */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="twitter">Twitter / X</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline">alternate_email</span>
                    </div>
                    <input
                      className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                      id="twitter" name="twitter" placeholder="https://twitter.com/tuempresa" type="url"
                      value={twitter} onChange={(e) => setTwitter(e.target.value)}
                    />
                  </div>
                </div>

                {/* Instagram */}
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="instagram">Instagram</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline">photo_camera</span>
                    </div>
                    <input
                      className="w-full pl-10 pr-3 py-3 bg-surface rounded-lg border border-tertiary focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md transition-colors"
                      id="instagram" name="instagram" placeholder="https://instagram.com/tuempresa" type="url"
                      value={instagram} onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-md flex justify-between items-center">
              <button type="button" onClick={onBack} className="px-6 py-3 rounded-lg border border-outline text-on-surface font-label-md font-bold hover:bg-surface-variant transition-colors">
                Anterior
              </button>
              <button type="submit" className="px-8 py-3 rounded-lg bg-primary text-on-primary font-label-md font-bold hover:opacity-90 transition-opacity shadow-md">
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
