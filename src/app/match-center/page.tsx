import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Match Center - PUNTOCLICK',
  description: 'Descubre tus conexiones ideales en el ecosistema PuntoClic.',
};

export default function MatchCenterPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-background shadow-sm flex justify-between items-center w-full px-margin-mobile py-base">
        <Link
          href="/"
          className="text-primary hover:bg-surface-container-high transition-colors p-2 rounded-full"
          aria-label="Volver a inicio"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          PUNTOCLICK MATCH CENTER
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      <main className="max-w-container-max mx-auto p-margin-mobile md:p-md lg:p-lg w-full flex-grow">
        {/* Header Section */}
        <div className="mb-xl text-center md:text-left">
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-2">
            Match Center
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Descubre tus conexiones ideales en el ecosistema.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-sm md:gap-md">
          {/* Empresa Card */}
          <div className="md:col-span-4 bg-surface rounded-xl shadow-ambient border border-surface-container p-md flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-24 bg-surface-container-high z-0"></div>
            <div className="z-10 relative mb-4">
              <img
                className="w-20 h-20 rounded-xl object-cover border-4 border-surface shadow-sm"
                alt="EcoTech Solutions Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD__AAjVtyr-I-PTs2rW21kayYUpUr9dTayr5MnMk6DKKheA6M1UKrqSuk-DSizLmKzjDRksaUNUWMq6zvhP8JPyf7K5In_JgI3D4hStXUCe1b7sBJenW_I_ErUnx5cXUj4XWUlDv6lduOMC9UG_jDvEfShtqcAWHqzGNY15ie4201-cHlgO06kaZQMaj44ZoyfbbvXnkMpNA0mXcr0XTXZBhYNGjPDiRrS30rrI1swfJvqX8LkY0_e"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background z-10">
              EcoTech Solutions
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 z-10">
              Startup de Energía Renovable
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4 z-10">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-xl font-label-sm text-label-sm">
                Sostenibilidad
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-xl font-label-sm text-label-sm">
                Innovación
              </span>
            </div>
            <button className="mt-auto w-full border-2 border-outline text-on-surface py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors z-10">
              Ver Perfil
            </button>
          </div>

          {/* Compatibilidad / Match Score */}
          <div className="md:col-span-4 bg-primary-container rounded-xl shadow-ambient p-md flex flex-col items-center justify-center text-center text-on-primary-container relative">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '16px 16px',
              }}
            ></div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2 relative z-10">
              Índice de Afinidad
            </h3>
            <div className="relative w-32 h-32 flex items-center justify-center mb-4 z-10">
              <svg
                className="w-full h-full transform -rotate-90 absolute inset-0"
                viewBox="0 0 100 100"
              >
                <circle
                  className="opacity-20"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-primary"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeDasharray="283"
                  strokeDashoffset="28.3"
                  strokeWidth="8"
                ></circle>
              </svg>
              <span className="font-headline-xl text-headline-xl font-bold">
                90%
              </span>
            </div>
            <p className="font-body-md text-body-md relative z-10">
              ¡Match Altamente Recomendado!
            </p>
          </div>

          {/* Talento Card */}
          <div className="md:col-span-4 bg-surface rounded-xl shadow-ambient border border-surface-container p-md flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-surface-container-high z-0"></div>
            <div className="z-10 relative mb-4">
              <img
                className="w-20 h-20 rounded-xl object-cover border-4 border-surface shadow-sm"
                alt="Carlos Mendes Avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ58fN-YcmOPDf-MpGQC5CT0KQPuuPr6LePi1xJbWNUezSv7Ir4A7FvlinZ-jtexVYv4uvqgeUj5aN3qn0ovZVPCFnrCu4wOz6_3pXSlxHX2yiWWOIAChRiW75qRq_GehmJY-GOOHpdRbEtQBITRkP3kIBqzmk3gCL_q1nd6Cx53xEFJ9eT0l_UTLpKGdj9naEMvOO-iN3vLk_yahmz3EGEe_lRc-l3NS8KMPAwyWw8qPylnLmotpg"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background z-10">
              Carlos Mendes
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 z-10">
              Desarrollador Full-Stack
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4 z-10">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-xl font-label-sm text-label-sm">
                React
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-xl font-label-sm text-label-sm">
                Node.js
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-xl font-label-sm text-label-sm">
                AWS
              </span>
            </div>
            <button className="mt-auto w-full border-2 border-outline text-on-surface py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors z-10">
              Ver Perfil
            </button>
          </div>

          {/* Problema & Mentor Row */}
          <div className="md:col-span-6 bg-surface rounded-xl shadow-ambient border border-surface-container p-md flex flex-col md:flex-row gap-md items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-error">
                  warning
                </span>
                <h4 className="font-headline-md text-headline-md text-on-background">
                  Desafío Actual
                </h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                Migración de infraestructura legada a arquitectura cloud nativa
                con tiempo de inactividad cero.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-error-container text-on-error-container px-2 py-1 rounded-md">
                  Alta Prioridad
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-surface-container-low rounded-xl shadow-ambient border border-surface-container p-md flex items-center gap-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary-container opacity-50 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <img
              className="w-16 h-16 rounded-full object-cover shadow-sm z-10"
              alt="Dra. Elena Rios Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN_kAbHeidHvSeDV-B8SEOAjSdSBgYTVb5iHIGFzJu3qMeKJJ3KC5njIBfCYXctyVISy0_Kj6iHpt-V0tUOQkDxRnE4v0VDR0My-0Kqv6cY0eIviHV0TW4RF35ZdDmg55GSvgtBTwHm0_hMk-g1JndOTEaCNUv8WeL2ljDFPslIxN4JEPOccq48GRkdcpnJTeAx-qYskPxs51pM6antF70o2yI8O5jj4jFN4iv1ncWWphCg8qQzEeS"
            />
            <div className="z-10 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-tertiary text-sm">
                  workspace_premium
                </span>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
                  Mentor Sugerido
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-background">
                Dra. Elena Rios
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Especialista en Cloud Architecture
              </p>
            </div>
            <button className="z-10 bg-surface-container text-on-surface p-2 rounded-full hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
