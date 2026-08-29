'use client';

// =============================================================================
// PUNTOCLICK — Multi-step Company Registration
// =============================================================================

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopAppBar, Button, Input, Chip } from '@/components/design-system';

const steps = [
  { id: 'identidad', title: 'Identidad y Sector' },
  { id: 'dolores', title: 'Dolores y Necesidades' },
  { id: 'cultura', title: 'Cultura y Ubicación' },
];

export default function RegisterEmpresaPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    sector: '',
    description: '',
    painPoints: [] as string[],
    location: '',
    employeeCount: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Submitting company data:', formData);
      router.push('/empresa/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/auth/register');
    }
  };

  return (
    <div className="bg-[--color-background] min-h-screen flex flex-col text-[--color-on-background]">
      <TopAppBar showBack onBackClick={handleBack} />
      <main className="flex-grow flex flex-col items-stretch justify-start px-[--spacing-gutter-mobile] md:px-[--spacing-md] pt-6 pb-12 w-full max-w-md mx-auto">
        
        {/* Progress Bar */}
        <div className="mb-[--spacing-lg]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-label-md text-[--color-on-surface-variant]">
              Progreso del registro
            </span>
            <span className="text-label-md text-[--color-primary] font-bold">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-[--color-surface-container-highest] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[--color-primary] transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-[--color-surface-container-low] rounded-[--radius-xl] p-[--spacing-md] md:p-[--spacing-lg] shadow-ambient border border-[--color-surface-container-highest] mb-[--spacing-xl]">
          
          {/* Step 1: Identity & Sector */}
          {currentStep === 0 && (
            <div className="space-y-[--spacing-md] animate-fade-in">
              <div>
                <h1 className="text-headline-lg-mobile md:text-headline-lg text-[--color-on-surface] mb-[--spacing-sm]">
                  Datos de la empresa
                </h1>
                <p className="text-body-md text-[--color-on-surface-variant]">
                  Ingresa la información básica de tu organización.
                </p>
              </div>
              <Input
                label="Nombre de la empresa"
                placeholder="Ej. TechCorp"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
              <div className="space-y-[--spacing-xs]">
                <label className="block text-label-md text-[--color-on-surface]">Sector</label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full bg-[--color-surface-container-lowest] border border-[--color-tertiary-fixed-dim] rounded-[--radius-lg] px-4 py-3 text-body-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                >
                  <option value="" disabled>Selecciona un sector</option>
                  <option value="tecnologia">Tecnología y Software</option>
                  <option value="marketing">Marketing y Publicidad</option>
                  <option value="diseno">Diseño y Creatividad</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="space-y-[--spacing-xs]">
                <label className="block text-label-md text-[--color-on-surface]">Descripción Breve</label>
                <textarea
                  placeholder="¿A qué se dedican y qué impacto buscan lograr?"
                  className="w-full bg-[--color-surface-container-lowest] border border-[--color-tertiary-fixed-dim] rounded-[--radius-lg] px-4 py-3 text-body-md min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step 2: Pain Points & Needs */}
          {currentStep === 1 && (
            <div className="space-y-[--spacing-md] animate-fade-in">
              <h2 className="text-headline-md text-[--color-on-surface] mb-[--spacing-sm]">
                Tus "Dolores" Actuales
              </h2>
              <p className="text-body-md text-[--color-on-surface-variant]">
                Selecciona los retos principales que la empresa necesita resolver. El sistema buscará el talento que alivie estos dolores.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  'Crecimiento de Ventas',
                  'Desarrollo de Producto',
                  'Transformación Digital',
                  'Gestión de Redes',
                  'Soporte Técnico',
                  'Análisis de Datos',
                  'Mejora de Procesos',
                ].map((pain) => {
                  const isSelected = formData.painPoints.includes(pain);
                  return (
                    <button
                      key={pain}
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          painPoints: isSelected 
                            ? formData.painPoints.filter(p => p !== pain)
                            : [...formData.painPoints, pain]
                        });
                      }}
                      className={`px-3 py-2 rounded-[--radius-md] text-label-md border transition-all ${
                        isSelected 
                          ? 'bg-[--color-error-container] text-[--color-on-error-container] border-[--color-error] shadow-sm' 
                          : 'bg-[--color-surface-container-lowest] border-[--color-outline-variant] text-[--color-on-surface] hover:border-[--color-error]/50'
                      }`}
                    >
                      {isSelected && <span className="material-symbols-outlined align-middle mr-1" style={{ fontSize: '16px' }}>warning</span>}
                      {pain}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 3: Culture & Location */}
          {currentStep === 2 && (
            <div className="space-y-[--spacing-md] animate-fade-in">
              <h2 className="text-headline-md text-[--color-on-surface] mb-[--spacing-sm]">
                Cultura y Ubicación
              </h2>
              <Input
                label="Sede / Ubicación Principal"
                placeholder="Ej. Ciudad de México"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              <div className="space-y-[--spacing-xs]">
                <label className="block text-label-md text-[--color-on-surface]">Tamaño del equipo</label>
                <select
                  value={formData.employeeCount}
                  onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                  className="w-full bg-[--color-surface-container-lowest] border border-[--color-tertiary-fixed-dim] rounded-[--radius-lg] px-4 py-3 text-body-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="1-10">1 a 10 empleados</option>
                  <option value="11-50">11 a 50 empleados</option>
                  <option value="51-200">51 a 200 empleados</option>
                  <option value="200+">Más de 200 empleados</option>
                </select>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-[--spacing-xl] pt-[--spacing-md] border-t border-[--color-surface-variant] flex justify-between gap-4">
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={handleBack}
            >
              {currentStep === 0 ? 'Cancelar' : 'Atrás'}
            </Button>
            <Button 
              variant="filled" 
              className="w-full" 
              onClick={handleNext}
            >
              {currentStep === steps.length - 1 ? 'Finalizar' : 'Continuar'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
