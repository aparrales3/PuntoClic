'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SplashScreenPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center overflow-hidden p-margin-mobile relative">
      {/* Decorative background glow */}
      <div className="absolute w-96 h-96 bg-primary-container/20 rounded-full blur-3xl -top-20 -right-20 pointer-events-none" />
      <div className="absolute w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl -bottom-20 -left-20 pointer-events-none" />

      {/* Splash Screen Content */}
      <div className="animate-fade-in flex flex-col items-center justify-center text-center z-10">
        <div className="w-16 h-16 rounded-full bg-primary-container/30 flex items-center justify-center text-primary mb-6 animate-bounce">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            hub
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-wider uppercase mb-sm">
          PUNTOCLICK
        </h1>
        
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-2 opacity-90">
          Ecosistema Digital de Conexión de Talento, Empresas e Instituciones
        </p>

        {/* Subtle Indicator */}
        <div className="w-20 h-1.5 bg-primary rounded-full mt-8 animate-pulse" />
        
        <Link
          href="/"
          className="mt-8 text-label-sm text-on-surface-variant hover:text-primary transition-colors underline"
        >
          Saltar introducción
        </Link>
      </div>
    </div>
  );
}
