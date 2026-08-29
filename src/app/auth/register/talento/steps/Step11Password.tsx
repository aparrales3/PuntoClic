'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState } from 'react';

export default function Step11Password({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  const [password, setPassword] = useState(talentData.password || '');
  const [confirmPassword, setConfirmPassword] = useState(talentData.password || '');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Password checks
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const calculateStrength = () => {
    let score = 0;
    if (hasMinLength) score++;
    if (hasUppercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    return score;
  };

  const strength = calculateStrength();

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasMinLength || !hasUppercase || !hasNumber || !hasSpecial) {
      setErrorMsg('Por favor cumple con todos los requisitos de seguridad');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Las contraseñas no coinciden');
      return;
    }
    setTalentData({ password });
    onNext();
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-background shadow-sm">
        <div className="flex justify-between items-center px-gutter-mobile h-16 w-full max-w-[1280px] mx-auto">
          <button 
            onClick={onBack}
            className="text-primary hover:bg-surface-container-low transition-colors active:scale-95 duration-150 p-2 rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="font-headline-md text-headline-md-mobile font-bold text-primary">PUNTOCLICK</span>
          <div className="w-10"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-32 px-gutter-mobile max-w-xl mx-auto w-full flex flex-col">
        {/* Progress Bar */}
        <div className="mb-lg w-full">
          <div className="flex justify-between items-center mb-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Progreso del registro</span>
            <span className="font-label-sm text-label-sm font-semibold text-primary">95%</span>
          </div>
          <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: '95%' }}></div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-lg text-center">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-sm font-bold">
            Crear contraseña
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Protege tu cuenta con una contraseña segura y fácil de recordar.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleFinish} className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-variant p-md md:p-lg flex flex-col gap-md">
          {errorMsg && (
            <div className="p-3 bg-error-container text-on-error-container rounded-lg text-sm">
              {errorMsg}
            </div>
          )}

          {/* Password Field */}
          <div className="flex flex-col gap-xs relative">
            <label className="font-label-md text-label-md text-on-background" htmlFor="password">Contraseña</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
              <input 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrorMsg(''); }}
                required
                className="w-full bg-surface border border-tertiary rounded-lg pl-10 pr-10 py-3 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                id="password" 
                placeholder="Ingresa tu contraseña" 
                type={showPassword ? "text" : "password"}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined">{showPassword ? 'visibility' : 'visibility_off'}</span>
              </button>
            </div>

            {/* Password Strength */}
            <div className="mt-sm flex flex-col gap-2">
              <div className="flex gap-1 h-1 w-full rounded-full overflow-hidden bg-surface-variant">
                <div className={`h-full w-1/4 transition-colors ${strength >= 1 ? (strength === 1 ? 'bg-error' : strength <= 3 ? 'bg-primary-container' : 'bg-green-600') : 'bg-surface-variant'}`}></div>
                <div className={`h-full w-1/4 transition-colors ${strength >= 2 ? (strength <= 3 ? 'bg-primary-container' : 'bg-green-600') : 'bg-surface-variant'}`}></div>
                <div className={`h-full w-1/4 transition-colors ${strength >= 3 ? (strength <= 3 ? 'bg-primary-container' : 'bg-green-600') : 'bg-surface-variant'}`}></div>
                <div className={`h-full w-1/4 transition-colors ${strength === 4 ? 'bg-green-600' : 'bg-surface-variant'}`}></div>
              </div>
              <span className={`font-label-sm text-label-sm ${strength <= 1 ? 'text-error' : strength <= 3 ? 'text-primary' : 'text-green-600'}`}>
                {strength <= 1 ? 'Contraseña débil' : strength <= 3 ? 'Contraseña media' : 'Contraseña fuerte'}
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col gap-xs relative">
            <label className="font-label-md text-label-md text-on-background" htmlFor="confirm-password">Confirmar Contraseña</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock_reset</span>
              <input 
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); setErrorMsg(''); }}
                required
                className="w-full bg-surface border border-tertiary rounded-lg pl-10 pr-10 py-3 font-body-md text-body-md text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                id="confirm-password" 
                placeholder="Repite tu contraseña" 
                type="password"
              />
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-surface-container-low rounded-lg p-sm mt-sm border border-surface-variant">
            <h4 className="font-label-md text-label-md text-on-background mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">info</span>
              Tu contraseña debe contener:
            </h4>
            <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 text-sm">
              <li className={`flex items-center gap-2 ${hasMinLength ? 'text-primary font-medium' : 'text-error'}`}>
                <span className="material-symbols-outlined text-sm">{hasMinLength ? 'check_circle' : 'cancel'}</span>
                Al menos 8 caracteres
              </li>
              <li className={`flex items-center gap-2 ${hasUppercase ? 'text-primary font-medium' : 'text-error'}`}>
                <span className="material-symbols-outlined text-sm">{hasUppercase ? 'check_circle' : 'cancel'}</span>
                Al menos una letra mayúscula
              </li>
              <li className={`flex items-center gap-2 ${hasNumber ? 'text-primary font-medium' : 'text-error'}`}>
                <span className="material-symbols-outlined text-sm">{hasNumber ? 'check_circle' : 'cancel'}</span>
                Al menos un número
              </li>
              <li className={`flex items-center gap-2 ${hasSpecial ? 'text-primary font-medium' : 'text-error'}`}>
                <span className="material-symbols-outlined text-sm">{hasSpecial ? 'check_circle' : 'cancel'}</span>
                Al menos un carácter especial (!@#$%^&*)
              </li>
            </ul>
          </div>

          <div className="mt-auto pt-lg pb-md">
            <button 
              type="submit"
              className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-lg shadow-sm hover:opacity-90 transition-opacity flex justify-center items-center gap-2 active:scale-95 duration-150 font-bold"
            >
              Finalizar registro
              <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
