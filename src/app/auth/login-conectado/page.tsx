'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginConectadoPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState<'talento' | 'empresa' | 'institucion' | 'mentor' | 'admin'>('talento');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'talento') router.push('/talento/dashboard');
    else if (role === 'empresa') router.push('/empresa/dashboard');
    else if (role === 'institucion') router.push('/institucion/dashboard');
    else if (role === 'mentor') router.push('/mentores/diagnostico');
    else if (role === 'admin') router.push('/admin/dashboard');
  };

  const setDemoUser = (userRole: 'talento' | 'empresa' | 'institucion' | 'mentor' | 'admin') => {
    setRole(userRole);
    if (userRole === 'talento') {
      setEmail('alejandro@talento.com');
      setPassword('password123');
    } else if (userRole === 'empresa') {
      setEmail('contacto@techhive.io');
      setPassword('password123');
    } else if (userRole === 'institucion') {
      setEmail('rectoria@uninodo.edu');
      setPassword('password123');
    } else if (userRole === 'mentor') {
      setEmail('mentor@puntoclick.com');
      setPassword('password123');
    } else {
      setEmail('admin@puntoclick.com');
      setPassword('password123');
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center p-margin-mobile relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-container rounded-full blur-3xl opacity-30" />
      </div>

      {/* Login Container */}
      <main className="relative z-10 w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-ambient-md border border-surface-variant p-md md:p-lg flex flex-col gap-md">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-base relative">
          <Link
            className="absolute top-0 left-0 text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-sm p-1 rounded-full hover:bg-surface-container-low"
            href="/"
            aria-label="Volver a inicio"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>

          <span
            className="material-symbols-outlined text-primary text-5xl mb-xs"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            hub
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary font-bold">
            PUNTOCLICK
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Accede a tu cuenta profesional
          </p>
        </div>

        {/* Demo Quick Pickers */}
        <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/30">
          <p className="text-label-sm text-on-surface-variant text-center mb-2 font-medium">
            Demo Rápida (Elige un rol):
          </p>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            {(['talento', 'empresa', 'institucion'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setDemoUser(r)}
                className={`py-1 px-2 rounded-lg text-label-sm font-semibold transition-all capitalize ${
                  role === r
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-sm">
          {/* Email Field */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="email">
              Correo electrónico
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                mail
              </span>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full bg-surface-container-low border border-tertiary rounded-lg py-2.5 pl-10 pr-3 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                lock
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-surface-container-low border border-tertiary rounded-lg py-2.5 pl-10 pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between mt-xs mb-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-tertiary text-primary focus:ring-primary bg-surface-container-low cursor-pointer"
              />
              <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Recordarme
              </span>
            </label>
            <Link
              href="/auth/recuperar-contrasena"
              className="font-label-sm text-label-sm text-primary hover:text-primary-fixed-dim hover:underline transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-sm">
            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 rounded-lg hover:bg-inverse-primary hover:shadow-md transition-all active:scale-95 flex justify-center items-center gap-2 font-bold cursor-pointer"
            >
              INICIAR SESIÓN{' '}
              <span className="material-symbols-outlined text-sm">login</span>
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-surface-variant" />
              <span className="flex-shrink-0 mx-4 font-label-sm text-label-sm text-outline">o</span>
              <div className="flex-grow border-t border-surface-variant" />
            </div>

            <Link
              href="/auth/register"
              className="w-full bg-transparent border-2 border-outline text-on-surface font-label-md text-label-md py-3 rounded-lg hover:bg-surface-variant hover:border-primary transition-all active:scale-95 flex justify-center items-center font-semibold"
            >
              CREAR PERFIL
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
