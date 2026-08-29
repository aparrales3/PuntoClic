import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Perfil Institucional - PUNTOCLICK',
  description: 'Información del Instituto Tecnológico y directorio de programas.',
};

export default function InstitucionPerfilPage() {
  return (
    <div className="bg-surface-bright text-on-surface antialiased min-h-screen pb-24 font-body-md">
      {/* TopAppBar */}
      <header className="sticky top-0 w-full z-50 bg-surface shadow-sm">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-lg h-16 max-w-container-max mx-auto">
          <Link
            href="/institucion/dashboard"
            className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container text-primary"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary">
            PUNTOCLICK INSTITUCIONAL
          </h1>
          <span className="material-symbols-outlined text-primary cursor-pointer p-2 rounded-full">
            notifications
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto md:px-lg">
        {/* Hero Banner */}
        <div className="relative w-full h-48 md:h-64 bg-surface-container-high md:rounded-b-xl overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9IkFiYPB-jkNRt7hOVF0JPrsa9n83nICPnvTMJ3Y23XGmOyANM7Ajw0qpy0UiSvWn9TSVFxyR0gt8qYLcwxpSoFRh1ZajQwEKBzdherIwvn16RxJJv-A0PJumLOix7e_bWjIUFM6tbnAvzJGRTHz3Tm26GD_3wJEna7x389melSm9V7Nsw_SLVyuXO6lvbP9wsgM4dNALW4HORtYJEBJiVcg0TZ8D8JygpPmbyhWTI3tfdH_Z_jx"
            alt="Campus Institucional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-bright/80 to-transparent"></div>
        </div>

        {/* Profile Header */}
        <div className="px-margin-mobile relative -mt-12 flex flex-col items-start pb-md">
          <div className="flex justify-between items-end w-full">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-surface-bright bg-surface-container-lowest overflow-hidden shadow-sm relative z-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3kfseZ0KYW5RUlRLK58Dlbsiuc0EV3ESr-Vk61BifKktEkzvTxIfBhwYJsKFnSveGbG8gblKJzqW3HlLnXSybraWEQUnVnemoX81F2ynJHkD9MJaOTHPMVvruzdfskwJx-ZV7mkhADhNHaNCmbHi4KTKh5UO_4WQvwVAra6U80swAvQKPgbrIfE1tKVY4eNLjA8DnE_4xGgehX7aixLRMj513yzE4pEmI92fP3jWBIOLYbYJgVVx"
                alt="Logo Institución"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="mb-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-all font-bold">
              <span className="material-symbols-outlined text-[20px]">edit</span>
              Editar Perfil
            </button>
          </div>

          <div className="mt-sm">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface font-bold">
              Instituto Tecnológico NODO
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Managua, Nicaragua
            </p>
          </div>

          <div className="flex gap-md mt-sm pt-sm border-t border-outline-variant/30 w-full">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-bold">12</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Programas</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary font-bold">450+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Talentos</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="px-margin-mobile flex flex-col gap-md md:grid md:grid-cols-12 pb-xl">
          <div className="flex flex-col gap-md md:col-span-8">
            <section className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant">
              <h3 className="font-headline-md text-headline-md-mobile text-on-surface mb-sm font-bold">
                Sobre la Institución
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Formamos parte del ecosistema de innovación impulsando el desarrollo de talento tecnológico. Nuestro enfoque se centra en crear conexiones reales entre el aprendizaje académico y las necesidades de la industria.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
