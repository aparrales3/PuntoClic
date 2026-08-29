import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fortalecemos Instituciones - PUNTOCLICK',
  description: 'Conectamos tu organización con el mercado real.',
};

export default function ComoFuncionaInstitucionesPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md relative overflow-x-hidden">
      {/* Ambient Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-secondary-container rounded-full mix-blend-multiply filter blur-[60px] opacity-30"></div>
      </div>

      <main className="w-full max-w-[540px] md:max-w-[720px] mx-auto px-6 py-8 relative z-10 flex flex-col min-h-screen justify-between items-center text-center">
        {/* Header */}
        <header className="w-full flex justify-between items-center py-2 mb-6">
          <Link
            href="/como-funciona/2"
            className="p-2 text-on-surface-variant hover:opacity-80 transition-opacity rounded-full flex items-center justify-center"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <div className="font-headline-md text-headline-md text-primary uppercase tracking-wider font-bold">
            PUNTOCLICK
          </div>
          <Link
            href="/auth/register"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-bold"
          >
            Saltar
          </Link>
        </header>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center my-auto w-full">
          <div className="relative w-full max-w-md aspect-square md:aspect-video max-h-[320px] mb-6 rounded-xl overflow-hidden shadow-ambient border border-surface-container-low">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxWVvqMIpgtZE6AjXxO2Lc6maHZsQIWKkFCzhZvV-7LQrOvcnkJYmEtf5AKIqM4jc3v-HVxP_6YkH8jrcx1FbEJv8qKYb54o_IieWDbnX4fOIS-g0GgBw3nS_MZkSQ4jOmhKrDwujzOKv33Nao4QKLvSUsY17E249Wv0rgm3-26YjE88lH0rw3ZfyZ3FQ5vRRh8Ao0dEJKpWhZdMhtRHS2y98Er8FZSxrxzI79D6hqtT0SQMjfOt4z')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
          </div>

          <div className="text-center mb-6 w-full max-w-[500px]">
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-3 font-bold">
              Fortalecemos Instituciones
            </h2>
            <p className="font-body-md md:font-body-lg text-body-md text-on-surface-variant leading-relaxed">
              Conectamos tu organización con el mercado real. Accede a talento verificado, herramientas de gestión y datos clave para impulsar tu crecimiento en el ecosistema.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col items-center mt-auto pb-4">
          <div className="flex gap-2 mb-6 items-center">
            <Link
              href="/como-funciona"
              className="w-2.5 h-2.5 rounded-full bg-surface-container-highest transition-all duration-300 block hover:bg-primary/50"
              aria-label="Paso 1"
            ></Link>
            <Link
              href="/como-funciona/2"
              className="w-2.5 h-2.5 rounded-full bg-surface-container-highest transition-all duration-300 block hover:bg-primary/50"
              aria-label="Paso 2"
            ></Link>
            <Link
              href="/como-funciona/3"
              className="w-8 h-2 rounded-full bg-primary transition-all duration-300 block"
              aria-label="Paso 3"
            ></Link>
          </div>

          <Link
            href="/auth/register"
            className="w-full max-w-[300px] bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-md hover:bg-surface-tint hover:scale-[1.02] active:scale-95 transition-all duration-200 flex justify-center items-center gap-2 font-bold"
          >
            Seleccionar tipo de usuario
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
