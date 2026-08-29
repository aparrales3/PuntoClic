'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import Link from 'next/link';

export default function Step1DatosPersonales({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-xl pb-xl px-gutter-mobile md:px-md bg-background font-body-md text-on-background">
      <header className="w-full max-w-[448px] mx-auto mb-xl flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-primary p-2 hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-150"
          type="button"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="font-headline-md text-headline-md-mobile font-bold text-primary">PUNTOCLICK</div>
        <div className="w-[40px]"></div> {/* Spacer to balance flex */}
      </header>
      
      <main className="w-full max-w-[448px] mx-auto">
        <div className="mb-lg">
          <div className="flex justify-between items-center mb-xs">
            <span className="font-label-md text-label-md text-on-surface-variant">Progreso del registro</span>
            <span className="font-label-md text-label-md text-primary font-bold">10%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: '10%' }}
            ></div>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-highest p-md md:p-lg mb-xl">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-sm">
            Datos personales
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
            Cuéntanos sobre ti para empezar a conectar.
          </p>
          
          <form className="flex flex-col gap-sm" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="first_name">
                Nombre
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-tertiary rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                id="first_name"
                name="first_name"
                placeholder="Ej. Juan"
                required
                type="text"
                value={talentData.firstName || ''}
                onChange={(e) => setTalentData({ firstName: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="last_name">
                Apellido
              </label>
              <input
                className="bg-surface-container-lowest border border-tertiary rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                id="last_name"
                name="last_name"
                placeholder="Ej. Pérez"
                required
                type="text"
                value={talentData.lastName || ''}
                onChange={(e) => setTalentData({ lastName: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="bg-surface-container-lowest border border-tertiary rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                id="email"
                name="email"
                placeholder="juan.perez@ejemplo.com"
                required
                type="email"
                value={talentData.email || ''}
                onChange={(e) => setTalentData({ email: e.target.value })}
              />
            </div>

            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>

        <div className="flex flex-col gap-sm">
          <button
            onClick={onNext}
            disabled={!talentData.firstName || !talentData.lastName || !talentData.email}
            className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-lg shadow-sm hover:opacity-90 transition-opacity active:scale-95 duration-150 flex justify-center items-center gap-xs disabled:opacity-50"
            type="button"
          >
            Siguiente
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-sm">
            Al continuar, aceptas nuestros{' '}
            <Link href="/terminos" className="text-primary underline hover:text-primary-fixed-dim transition-colors font-medium">
              Términos de servicio
            </Link>{' '}
            y nuestra{' '}
            <Link href="/privacidad" className="text-primary underline hover:text-primary-fixed-dim transition-colors font-medium">
              Política de Privacidad
            </Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
