'use client';

// =============================================================================
// PUNTOCLICK — Empresa Registration (10-step multi-step flow)
// =============================================================================

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import Step1Identidad from './steps/Step1Identidad';
import Step2LegalYSector from './steps/Step2LegalYSector';
import Step3Ubicacion from './steps/Step3Ubicacion';
import Step4ContactoYRedes from './steps/Step4ContactoYRedes';
import Step5PropositoYVision from './steps/Step5PropositoYVision';
import Step6CulturaYOferta from './steps/Step6CulturaYOferta';
import Step7Trayectoria from './steps/Step7Trayectoria';
import Step8MultimediaYSeguridad from './steps/Step8MultimediaYSeguridad';
import Step9Logo from './steps/Step9Logo';
import Step10Confirmacion from './steps/Step10Confirmacion';

const TOTAL_STEPS = 10;

function EmpresaRegistrationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = parseInt(searchParams.get('step') || '1', 10);

  const goToStep = (step: number) => {
    router.push(`/auth/register/empresa?step=${step}`);
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      goToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    } else {
      router.push('/auth/register');
    }
  };

  switch (currentStep) {
    case 1:
      return <Step1Identidad onNext={handleNext} onBack={handleBack} />;
    case 2:
      return <Step2LegalYSector onNext={handleNext} onBack={handleBack} />;
    case 3:
      return <Step3Ubicacion onNext={handleNext} onBack={handleBack} />;
    case 4:
      return <Step4ContactoYRedes onNext={handleNext} onBack={handleBack} />;
    case 5:
      return <Step5PropositoYVision onNext={handleNext} onBack={handleBack} />;
    case 6:
      return <Step6CulturaYOferta onNext={handleNext} onBack={handleBack} />;
    case 7:
      return <Step7Trayectoria onNext={handleNext} onBack={handleBack} />;
    case 8:
      return <Step8MultimediaYSeguridad onNext={handleNext} onBack={handleBack} />;
    case 9:
      return <Step9Logo onNext={handleNext} onBack={handleBack} />;
    case 10:
      return <Step10Confirmacion onNext={handleNext} onBack={handleBack} />;
    default:
      return <Step1Identidad onNext={handleNext} onBack={handleBack} />;
  }
}

export default function RegisterEmpresaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-md">
          <span className="material-symbols-outlined text-primary text-5xl animate-spin">progress_activity</span>
          <p className="font-body-md text-body-md text-on-surface-variant">Cargando...</p>
        </div>
      </div>
    }>
      <EmpresaRegistrationContent />
    </Suspense>
  );
}
