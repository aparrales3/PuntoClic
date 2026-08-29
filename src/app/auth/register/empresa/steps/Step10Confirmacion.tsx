'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step10Confirmacion({ onNext, onBack }: StepProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; color: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    const colors = ['#f4be37', '#cae5e1', '#dae5dd'];
    const pieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 3,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background relative overflow-hidden">
      {/* Confetti */}
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute top-0 w-2 h-4 opacity-80 pointer-events-none"
          style={{
            left: `${piece.left}vw`,
            backgroundColor: piece.color,
            animationName: 'fall',
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            animationTimingFunction: 'ease-out',
            animationIterationCount: 'infinite',
          }}
        />
      ))}

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes pulse-icon {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .pulse-icon { animation: pulse-icon 2s infinite; }
      `}</style>

      <main className="w-full max-w-[500px] px-margin-mobile md:px-md z-10">
        {/* Brand */}
        <div className="text-center mb-md">
          <span className="font-headline-md text-headline-md text-primary uppercase tracking-wider">PUNTOCLICK</span>
        </div>

        {/* Success Card */}
        <div className="bg-surface-container-low rounded-xl shadow-[0px_4px_20px_rgba(32,27,18,0.05)] border border-surface-container-high p-lg flex flex-col items-center text-center relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-container rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tertiary-container rounded-full opacity-20 blur-2xl"></div>

          {/* Icon */}
          <div className="w-32 h-32 mb-md relative flex items-center justify-center pulse-icon">
            <div className="absolute inset-0 bg-primary-container rounded-full opacity-20"></div>
            <div className="absolute inset-4 bg-primary-container rounded-full opacity-40"></div>
            <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-sm">
            ¡Empresa Registrada!
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
            Tu perfil de empresa se ha creado correctamente. Estás listo para conectar con el mejor talento y expandir tu ecosistema profesional.
          </p>

          <Link
            href="/empresa/dashboard"
            className="w-full bg-primary-container text-on-primary-fixed hover:bg-primary-fixed-dim hover:opacity-90 transition-all duration-200 rounded-lg py-sm px-md font-label-md text-label-md flex items-center justify-center gap-2 shadow-[0px_2px_10px_rgba(32,27,18,0.1)] active:scale-95"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Ir al Dashboard
          </Link>

          <div className="mt-md">
            <p className="font-label-sm text-label-sm text-tertiary">
              Revisa tu correo electrónico para verificar tu cuenta.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
