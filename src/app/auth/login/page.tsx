'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeRole, setActiveRole] = useState<string>('talento');

  const handleDemoSelect = (role: string) => {
    setActiveRole(role);
    if (role === 'talento') {
      setEmail('alejandro@talento.com');
      setPassword('talento123');
    } else if (role === 'empresa') {
      setEmail('techhive@empresa.com');
      setPassword('empresa123');
    } else if (role === 'institucion') {
      setEmail('rectoria@nodo.edu');
      setPassword('institucion123');
    } else if (role === 'mentor') {
      setEmail('mentor@puntoclick.com');
      setPassword('mentor123');
    } else if (role === 'admin') {
      setEmail('admin@puntoclick.com');
      setPassword('admin123');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeRole === 'talento') router.push('/talento/dashboard');
    else if (activeRole === 'empresa') router.push('/empresa/dashboard');
    else if (activeRole === 'institucion') router.push('/institucion/dashboard');
    else if (activeRole === 'mentor') router.push('/mentores/diagnostico');
    else if (activeRole === 'admin') router.push('/admin/dashboard');
    else router.push('/talento/dashboard');
  };

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-md text-on-background">
      {/* TopAppBar (Transactional - Minimal Header) */}
      <header className="flex justify-between items-center w-full px-margin-mobile py-sm bg-background border-b border-surface-variant/30">
        <Link
          href="/"
          className="flex items-center justify-center p-2 text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 rounded-full hover:bg-surface-container"
          aria-label="Volver a inicio"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-bold uppercase tracking-wider">
          PUNTOCLICK
        </div>
        <Link
          href="/auth/login-conectado"
          className="text-label-sm font-semibold text-primary hover:underline px-2 py-1 bg-surface-container rounded-lg"
          title="Ver vista conectada alternativa"
        >
          Modo Conectado
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-margin-mobile py-8">
        <div className="w-full max-w-[448px] bg-surface-container-low rounded-2xl p-md md:p-lg shadow-[0_4px_20px_rgba(32,27,18,0.05)] border border-surface-container-highest">
          <div className="text-center mb-md">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm font-bold">
              Bienvenido de vuelta
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Conéctate para continuar en el ecosistema.
            </p>
          </div>

          {/* Demo Account Switcher (from login_puntoclick_2) */}
          <div className="mb-6 p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-label-sm font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">touch_app</span>
                Accesos Demo Rápidos:
              </span>
            </div>
            <div className="grid grid-cols-5 gap-1 text-center">
              {[
                { id: 'talento', label: 'Talento' },
                { id: 'empresa', label: 'Empresa' },
                { id: 'institucion', label: 'Institución' },
                { id: 'mentor', label: 'Mentor' },
                { id: 'admin', label: 'Admin' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleDemoSelect(item.id)}
                  className={`py-1 px-1 rounded-md text-[11px] font-bold transition-all truncate ${
                    activeRole === item.id
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-md">
            <div className="space-y-xs">
              <label
                className="block font-label-md text-label-md text-on-surface font-medium"
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-tertiary-fixed-dim rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                id="email"
                name="email"
                placeholder="tu@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-xs">
              <label
                className="block font-label-md text-label-md text-on-surface font-medium"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-tertiary-fixed-dim rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              <Link
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors"
                href="/auth/recuperar-contrasena"
              >
                ¿Olvidé mi contraseña?
              </Link>
            </div>

            <button
              className="w-full bg-primary text-on-primary rounded-lg py-3 font-label-md text-label-md shadow-[0_4px_12px_rgba(120,90,0,0.2)] hover:bg-primary-fixed hover:text-on-primary-fixed transition-all active:scale-[0.98] font-bold cursor-pointer flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Iniciar sesión</span>
              <span className="material-symbols-outlined text-sm">login</span>
            </button>
          </form>

          {/* Neon Auth Ecosystem Badge */}
          <div className="mb-4 flex items-center justify-center gap-1.5 py-1 px-3 bg-secondary-container/60 text-on-secondary-container rounded-full text-[11px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">encrypted</span>
            <span>Protegido por <strong>Neon Auth</strong> • PuntoClic</span>
          </div>

          <div className="mt-lg">
            <div className="relative flex items-center mb-md">
              <div className="flex-grow border-t border-tertiary-fixed-dim" />
              <span className="flex-shrink-0 mx-4 text-on-surface-variant font-label-sm text-label-sm">
                o continuar con Neon Auth
              </span>
              <div className="flex-grow border-t border-tertiary-fixed-dim" />
            </div>

            <div className="flex flex-col space-y-sm">
              <a
                href="https://ep-odd-haze-axvf0t5j.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth/sign-in/social?provider=google&callbackURL=http://localhost:3000/talento/dashboard"
                className="w-full flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined mr-2 text-primary">login</span> Continuar con Google (Neon Auth)
              </a>
              <a
                href="https://ep-odd-haze-axvf0t5j.neonauth.c-4.us-east-2.aws.neon.tech/neondb/auth/sign-in/social?provider=github&callbackURL=http://localhost:3000/talento/dashboard"
                className="w-full flex items-center justify-center bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 font-label-md text-label-md text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined mr-2 text-[#24292e]">code</span> Continuar con GitHub (Neon Auth)
              </a>
            </div>
          </div>

          <div className="mt-xl text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              ¿No tienes una cuenta?{' '}
              <Link
                className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim font-bold transition-colors ml-1"
                href="/auth/register"
              >
                Crear cuenta
              </Link>
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-center gap-3 text-label-sm text-on-surface-variant">
              <Link href="/terminos" className="hover:text-primary underline transition-colors">
                Términos
              </Link>
              <span>•</span>
              <Link href="/privacidad" className="hover:text-primary underline transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
