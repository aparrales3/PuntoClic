'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Step1DatosPersonales from './steps/Step1DatosPersonales';
import Step2FechaNacimiento from './steps/Step2FechaNacimiento';

function TalentRegistrationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = parseInt(searchParams.get('step') || '1', 10);
  
  const handleNext = () => {
    router.push(`?step=${step + 1}`);
  };

  const handleBack = () => {
    if (step > 1) {
      router.push(`?step=${step - 1}`);
    } else {
      router.push('/auth/register');
    }
  };

  switch (step) {
    case 1:
      return <Step1DatosPersonales onNext={handleNext} onBack={handleBack} />;
    case 2:
      return <Step2FechaNacimiento onNext={handleNext} onBack={handleBack} />;
    // TODO: Add other steps here
    default:
      return <Step1DatosPersonales onNext={handleNext} onBack={handleBack} />;
  }
}

export default function TalentRegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <TalentRegistrationContent />
    </Suspense>
  );
}
