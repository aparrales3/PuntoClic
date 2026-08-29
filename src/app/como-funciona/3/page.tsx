import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo funciona (Instituciones) - PUNTOCLICK',
  description: 'Fortalecemos instituciones conectando tu organización con el mercado real.',
};

export default function ComoFuncionaInstitucionesPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-margin-mobile md:px-lg py-sm bg-background">
        <Link
          href="/como-funciona/2"
          className="p-2 text-primary hover:opacity-80 transition-opacity rounded-full flex items-center justify-center"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary uppercase tracking-wider">
          PUNTOCLICK
        </div>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-margin-mobile md:px-lg pt-8 pb-md">
        <div className="w-full max-w-md md:max-w-3xl mx-auto flex flex-col items-center flex-grow justify-center relative">
          <div className="relative w-full aspect-square md:aspect-video max-h-[400px] mb-8 rounded-xl overflow-hidden shadow-ambient border border-surface-container-low">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxWVvqMIpgtZE6AjXxO2Lc6maHZsQIWKkFCzhZvV-7LQrOvcnkJYmEtf5AKIqM4jc3v-HVxP_6YkH8jrcx1FbEJv8qKYb54o_IieWDbnX4fOIS-g0GgBw3nS_MZkSQ4jOmhKrDwujzOKv33Nao4QKLvSUsY17E249Wv0rgm3-26YjE88lH0rw3ZfyZ3FQ5vRRh8Ao0dEJKpWhZdMhtRHS2y98Er8FZSxrxzI79D6hqtT0SQMjfOt4z')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
          </div>

          <div className="text-center mb-10 w-full max-w-lg">
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-4 font-bold">
              Fortalecemos Instituciones
            </h2>
            <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant">
              Conectamos tu organización con el mercado real. Accede a talento verificado, herramientas de gestión y datos clave para impulsar tu crecimiento en el ecosistema.
            </p>
          </div>

          <div className="w-full mt-auto flex flex-col items-center gap-6">
            <Link
              href="/auth/register"
              className="w-full md:w-auto min-w-[280px] bg-primary text-on-primary font-label-md text-label-md py-4 px-8 rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 font-bold"
            >
              Seleccionar tipo de usuario
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
