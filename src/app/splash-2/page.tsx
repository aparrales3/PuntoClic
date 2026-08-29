'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Splash2ScreenPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/como-funciona');
    }, 2800);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center overflow-hidden p-margin-mobile relative">
      {/* Decorative background glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary-container/25 rounded-full blur-3xl top-1/4 -right-24 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-secondary-container/35 rounded-full blur-3xl bottom-10 -left-20 pointer-events-none" />

      {/* Splash Screen Content */}
      <div className="animate-fade-in-up flex flex-col items-center justify-center text-center z-10">
        <div className="w-20 h-20 rounded-2xl bg-surface-container-lowest shadow-ambient border border-outline-variant/30 flex items-center justify-center text-primary mb-6">
          <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            hub
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary tracking-wider uppercase mb-xs font-bold">
          PUNTOCLICK
        </h1>
        
        <p className="font-headline-md text-headline-md-mobile text-on-surface-variant max-w-md mt-1">
          La colmena que potencia tu futuro
        </p>

        {/* Pulse Bar */}
        <div className="w-24 h-1.5 bg-primary-container rounded-full mt-8 overflow-hidden relative">
          <div className="w-1/2 h-full bg-primary rounded-full animate-[shimmer_1.5s_infinite]" />
        </div>
        
        <div className="mt-8 flex gap-4">
          <Link
            href="/como-funciona"
            className="text-label-md text-primary font-semibold hover:underline"
          >
            Cómo Funciona →
          </Link>
        </div>
      </div>
    </div>
  );
}
