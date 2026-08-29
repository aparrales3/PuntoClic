import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conectamos Talento - PUNTOCLICK',
  description: 'Unimos estudiantes ambiciosos con empresas y profesionales.',
};

export default function ComoFuncionaPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center font-body-md relative overflow-hidden">
      {/* Ambient Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-secondary-container rounded-full mix-blend-multiply filter blur-[60px] opacity-30"></div>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-md md:max-w-2xl mx-auto px-margin-mobile py-md md:py-lg relative z-10 flex flex-col min-h-screen md:min-h-0 justify-between items-center">
        {/* Header */}
        <header className="w-full flex justify-between items-center py-sm mb-md">
          <Link
            href="/"
            className="text-on-surface-variant hover:opacity-80 transition-opacity p-2 rounded-full flex items-center justify-center"
            aria-label="Volver"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <Link
            href="/auth/register"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-bold"
          >
            Saltar
          </Link>
        </header>

        {/* Illustration */}
        <div className="flex-grow flex flex-col items-center justify-center w-full mb-lg my-auto">
          <div className="w-full aspect-square max-w-[280px] md:max-w-[340px] rounded-[2rem] bg-surface-container-low shadow-ambient border border-surface-container flex items-center justify-center p-md relative overflow-hidden group">
            <img
              alt="Conectamos Talento Illustration"
              className="object-contain w-full h-full mix-blend-darken transition-transform duration-500 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkGATa43Fgpf9rR9sFklXlGK5HGz-3RoplRJzFjOA-FQXn5pvpUY7aLtuf6FU6r3oUptfv-7XIgUPv9HcHMlQv835Gos8rECW2FSCEyb2Vjy4oJ_xXBEgHOWVp_qa-VYCd5C3lN-ChhDvHgQmKbU8QXS7DAg1TOynOwtFyV4wb52meI5dwxTlUq3rS0HQi7raYjJQeNl4yrJwXdS1oBSrhHB0Qdl7b_fr8rGArzU5AkyJi-vFnILE8"
            />
            <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-primary-container"></div>
            <div className="absolute bottom-6 left-6 w-3.5 h-3.5 rounded-full bg-secondary-container"></div>
          </div>
        </div>

        {/* Typography */}
        <div className="text-center px-4 mb-lg">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-sm font-bold">
            Conectamos Talento
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[320px] md:max-w-md mx-auto">
            Descubre oportunidades únicas. Unimos estudiantes ambiciosos con empresas y profesionales que buscan innovación y talento fresco.
          </p>
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col items-center mt-auto pb-lg">
          {/* Pagination Dots */}
          <div className="flex gap-2 mb-md items-center">
            <Link
              href="/como-funciona"
              className="w-8 h-2 rounded-full bg-primary transition-all duration-300 block"
              aria-label="Paso 1"
            ></Link>
            <Link
              href="/como-funciona/2"
              className="w-2.5 h-2.5 rounded-full bg-surface-container-highest transition-all duration-300 block hover:bg-primary/50"
              aria-label="Paso 2"
            ></Link>
            <Link
              href="/como-funciona/3"
              className="w-2.5 h-2.5 rounded-full bg-surface-container-highest transition-all duration-300 block hover:bg-primary/50"
              aria-label="Paso 3"
            ></Link>
          </div>

          {/* Next Button */}
          <Link
            href="/como-funciona/2"
            className="w-full max-w-[300px] bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl shadow-md hover:bg-surface-tint hover:scale-[1.02] active:scale-95 transition-all duration-200 flex justify-center items-center gap-2 font-bold"
          >
            Siguiente
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
