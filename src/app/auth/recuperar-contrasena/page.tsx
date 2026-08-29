'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RecuperarContrasenaPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Generate a 6-digit verification code
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();

      const res = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'recovery',
          to: email,
          name: email.split('@')[0],
          code: generatedCode,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'No se pudo enviar el correo.');
      }

      setSentSuccess(true);
      setTimeout(() => {
        router.push(`/auth/codigo-recuperacion?email=${encodeURIComponent(email)}`);
      }, 1500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al procesar solicitud';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Top Header */}
      <header className="w-full px-margin-mobile py-sm flex justify-between items-center bg-background fixed top-0 z-10 md:px-lg md:py-md">
        <Link
          href="/auth/login"
          className="p-2 rounded-full hover:bg-surface-container transition-colors text-primary flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md-mobile text-primary tracking-wider md:font-headline-md md:text-headline-md">
          PUNTOCLICK
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-margin-mobile py-xl md:px-0 pt-[80px]">
        <div className="w-full max-w-[480px] bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(32,27,18,0.15)] p-md md:p-lg border border-surface-container-high relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container rounded-full opacity-20 blur-2xl"></div>
          <div className="relative z-10 flex flex-col gap-sm">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-base text-secondary self-center">
              <span className="material-symbols-outlined text-[32px]">lock_reset</span>
            </div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-center md:font-headline-lg md:text-headline-lg font-bold">
              Recuperar Contraseña
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant text-center mb-md">
              Ingresa la dirección de correo electrónico asociada a tu cuenta. Te enviaremos un código para restablecer tu contraseña vía Resend.
            </p>

            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{error}</span>
              </div>
            )}

            {sentSuccess && (
              <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>¡Código enviado! Redirigiendo...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="email">
                  Correo electrónico
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                    mail
                  </span>
                  <input
                    className="w-full bg-surface-container-low border border-tertiary rounded-lg pl-10 pr-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    id="email"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button
                disabled={loading || sentSuccess}
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded-lg hover:bg-surface-tint hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2 shadow-sm mt-xs font-bold disabled:opacity-50 cursor-pointer"
                type="submit"
              >
                <span>{loading ? 'Enviando código...' : 'Enviar código con Resend'}</span>
                <span className="material-symbols-outlined text-[18px]">
                  {loading ? 'hourglass_top' : 'send'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

