'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Step1DatosPersonales from './steps/Step1DatosPersonales';
import Step2FechaNacimiento from './steps/Step2FechaNacimiento';
import Step3Cedula from './steps/Step3Cedula';
import Step4Genero from './steps/Step4Genero';
import Step5Telefono from './steps/Step5Telefono';
import Step6Direccion from './steps/Step6Direccion';
import Step7Educacion from './steps/Step7Educacion';
import Step8Experiencia from './steps/Step8Experiencia';
import Step9CV from './steps/Step9CV';
import Step10Foto from './steps/Step10Foto';
import Step11Password from './steps/Step11Password';
import Step12Confirmacion from './steps/Step12Confirmacion';

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
    case 3:
      return <Step3Cedula onNext={handleNext} onBack={handleBack} />;
    case 4:
      return <Step4Genero onNext={handleNext} onBack={handleBack} />;
    case 5:
      return <Step5Telefono onNext={handleNext} onBack={handleBack} />;
    case 6:
      return <Step6Direccion onNext={handleNext} onBack={handleBack} />;
    case 7:
      return <Step7Educacion onNext={handleNext} onBack={handleBack} />;
    case 8:
      return <Step8Experiencia onNext={handleNext} onBack={handleBack} />;
    case 9:
      return <Step9CV onNext={handleNext} onBack={handleBack} />;
    case 10:
      return <Step10Foto onNext={handleNext} onBack={handleBack} />;
    case 11:
      return <Step11Password onNext={handleNext} onBack={handleBack} />;
    case 12:
      return <Step12Confirmacion />;
    default:
      return <Step1DatosPersonales onNext={handleNext} onBack={handleBack} />;
  }
}

export default function TalentRegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background w-full max-w-[448px]" />}>
      <TalentRegistrationContent />
    </Suspense>
  );
}
