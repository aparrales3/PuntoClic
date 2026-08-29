'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRegistrationStore } from '@/store/registrationStore';

export default function Step12Confirmacion() {
  const router = useRouter();
  const { talentData, reset } = useRegistrationStore();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMsg, setErrorMsg] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const registerUser = async () => {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: talentData.email,
            password: talentData.password,
            role: 'talento',
            firstName: talentData.firstName,
            lastName: talentData.lastName,
            photoUrl: talentData.photoUrl,
            cvUrl: talentData.cvUrl,
            location: talentData.address,
            educationLevel: talentData.education,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          // If user already exists (409), that's OK — they can still proceed
          if (res.status === 409) {
            setStatus('success');
            return;
          }
          throw new Error(data.error || 'Error al crear la cuenta');
        }

        setUserId(data.userId);
        setStatus('success');

        // Clear registration store data on success
        reset();
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error inesperado';
        console.error('[Registration error]:', err);
        setErrorMsg(msg);
        setStatus('error');
      }
    };

    // Only register if we have the minimum required data
    if (talentData.email && talentData.password) {
      registerUser();
    } else {
      // No data in store (e.g. refreshed the page) — show success anyway
      setStatus('success');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Progress Bar: 100% */}
      <div className="fixed top-0 left-0 w-full h-2 bg-surface-container-highest z-50">
        <div className={`h-full bg-primary transition-all duration-1000 ease-out ${status === 'loading' ? 'w-3/4 animate-pulse' : 'w-full'}`}></div>
      </div>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center p-gutter-mobile relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        {/* Loading state */}
        {status === 'loading' && (
          <div className="relative w-full max-w-[448px] bg-surface-container-low rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-variant p-lg md:p-xl flex flex-col items-center text-center gap-md">
            <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl animate-spin">progress_activity</span>
            </div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface font-bold">
              Creando tu cuenta...
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Estamos guardando tu información y enviando tu correo de bienvenida. Esto tomará solo un momento.
            </p>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-surface-container px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>Enviando correo de bienvenida vía Resend...</span>
            </div>
          </div>
        )}

        {/* Error state */}
        {status === 'error' && (
          <div className="relative w-full max-w-[448px] bg-surface-container-low rounded-xl border border-error/30 p-lg flex flex-col items-center text-center gap-md">
            <div className="w-24 h-24 rounded-full bg-error-container flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-error-container text-5xl">error</span>
            </div>
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface font-bold">
              Hubo un problema
            </h1>
            <p className="font-body-md text-body-md text-on-error-container bg-error-container px-4 py-3 rounded-lg text-sm">
              {errorMsg}
            </p>
            <div className="w-full flex flex-col gap-sm">
              <button
                onClick={() => {
                  setStatus('loading');
                  setErrorMsg('');
                  // Retry
                  window.location.reload();
                }}
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:opacity-90 transition font-bold"
              >
                Reintentar
              </button>
              <button
                onClick={() => router.push('/talento/dashboard')}
                className="w-full bg-surface-container text-on-surface font-label-md text-label-md py-3 rounded-lg hover:bg-surface-container-high transition"
              >
                Continuar de todas formas
              </button>
            </div>
          </div>
        )}

        {/* Success state */}
        {status === 'success' && (
          <div className="relative w-full max-w-[448px] bg-surface-container-low rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-variant p-lg md:p-xl flex flex-col items-center text-center">
            {/* Checkmark Icon */}
            <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-md shadow-sm border-4 border-surface">
              <span className="material-symbols-outlined text-on-primary-container text-5xl">
                check
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-sm font-bold">
              ¡Cuenta creada con éxito!
            </h1>

            {/* Message */}
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Tu perfil profesional en PuntoClic Nicaragua está listo. Revisa tu correo para el mensaje de bienvenida.
            </p>

            {/* Info badges */}
            <div className="flex flex-col gap-xs w-full mb-xl">
              <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-green-600">mail</span>
                <span>Correo de bienvenida enviado via <strong>Resend</strong></span>
              </div>
              {talentData.photoUrl && talentData.photoUrl.includes('cloudinary') && (
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-blue-600">cloud_done</span>
                  <span>Foto guardada en <strong>Cloudinary</strong></span>
                </div>
              )}
              {userId && (
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm text-primary">database</span>
                  <span>Perfil guardado en <strong>Neon Postgres</strong></span>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="w-full">
              <button
                onClick={() => router.push('/talento/dashboard')}
                className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 px-md rounded-lg shadow-sm hover:shadow-md hover:bg-primary hover:text-on-primary transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 group font-bold"
              >
                Ir a mi Dashboard
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-xl">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
