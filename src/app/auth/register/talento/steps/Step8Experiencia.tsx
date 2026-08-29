'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState } from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description?: string;
  tags?: string[];
}

export default function Step8Experiencia({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();

  const [viewMode, setViewMode] = useState<'form' | 'summary'>('form');

  const [experienceList, setExperienceList] = useState<ExperienceItem[]>(() => {
    try {
      if (talentData.experience) {
        const parsed = JSON.parse(talentData.experience);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Ignore parse error
    }
    return [
      {
        company: 'TechNova Solutions S.A.',
        role: 'Desarrollador Frontend Senior',
        startDate: '2021-01',
        endDate: '',
        isCurrentJob: true,
        description:
          'Liderazgo técnico en el desarrollo de la nueva plataforma bancaria. Implementación de arquitectura de micro-frontends y optimización de rendimiento.',
        tags: ['React', 'TypeScript', 'Liderazgo'],
      },
    ];
  });

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const updateItem = (index: number, field: keyof ExperienceItem, value: any) => {
    const newList = [...experienceList];
    newList[index] = { ...newList[index], [field]: value };
    if (field === 'isCurrentJob' && value) {
      newList[index].endDate = '';
    }
    setExperienceList(newList);
  };

  const addItem = () => {
    setExperienceList([
      ...experienceList,
      {
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        isCurrentJob: false,
        description: '',
        tags: [],
      },
    ]);
    setViewMode('form');
  };

  const handleNext = () => {
    const validItems = experienceList.filter((item) => item.company || item.role);
    setTalentData({ experience: JSON.stringify(validItems) });
    onNext();
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation for Onboarding */}
      <header className="fixed top-0 w-full z-50 bg-background shadow-sm border-b border-surface-variant/30">
        <div className="flex justify-between items-center px-gutter-mobile md:px-md h-16 w-full max-w-[1280px] mx-auto">
          <button
            onClick={onBack}
            className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant active:scale-95 duration-150 cursor-pointer"
            aria-label="Atrás"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="font-headline-md text-headline-md-mobile font-bold text-primary text-center">
            PUNTOCLICK
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'form' ? 'summary' : 'form')}
              className="text-label-sm font-semibold text-primary px-3 py-1 bg-surface-container rounded-lg hover:bg-surface-container-high transition-colors"
            >
              {viewMode === 'form' ? 'Ver Resumen' : 'Editar Formulario'}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-32 px-gutter-mobile md:px-md max-w-[640px] mx-auto w-full">
        {/* Progress Indicator (55% or 80%) */}
        <div className="mb-lg w-full">
          <div className="flex justify-between items-center mb-sm">
            <span className="font-label-md text-label-md text-on-surface-variant">
              {viewMode === 'summary' ? 'Paso 8 de 12 (Resumen)' : 'Progreso del registro'}
            </span>
            <span className="font-label-md text-label-md text-primary font-bold">80%</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: '80%' }}
            />
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-lg text-center md:text-left">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-xs font-bold text-on-surface">
            Experiencia Laboral
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {viewMode === 'summary'
              ? 'Revisa el resumen de tu trabajo actual o más reciente. Puedes añadir más experiencias si lo deseas.'
              : 'Cuéntanos sobre tu trayectoria profesional para conectar con las mejores oportunidades.'}
          </p>
        </div>

        {/* SUMMARY CARD VIEW (from registro_talento_trabajo_actual_anterior) */}
        {viewMode === 'summary' ? (
          <div className="space-y-md animate-fade-in">
            {experienceList.map((item, index) => (
              <div
                key={index}
                className="bg-surface-container-lowest rounded-2xl shadow-ambient border border-surface-variant p-md md:p-lg relative group transition-all duration-300 hover:shadow-ambient-md"
              >
                <div className="flex justify-between items-start mb-sm">
                  <div>
                    <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-md text-on-surface font-bold mb-xs">
                      {item.role || 'Puesto no especificado'}
                    </h2>
                    <p className="font-body-md text-body-md text-secondary font-semibold">
                      {item.company || 'Empresa'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingIndex(index);
                      setViewMode('form');
                    }}
                    aria-label="Editar experiencia"
                    className="text-tertiary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-low"
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-sm text-outline font-label-sm">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  <span>
                    {item.startDate || 'Inicio'} — {item.isCurrentJob ? 'Presente' : item.endDate || 'Fin'}
                  </span>
                </div>

                {item.description && (
                  <p className="font-body-md text-body-md text-on-surface-variant mt-sm">
                    {item.description}
                  </p>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-md">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-xl font-label-sm text-label-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Add More Button */}
            <button
              onClick={addItem}
              type="button"
              className="w-full py-md border-2 border-dashed border-outline-variant rounded-2xl text-primary font-label-md text-label-md flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low hover:border-primary transition-colors duration-200 cursor-pointer bg-surface"
            >
              <span className="material-symbols-outlined text-2xl">add_circle</span>
              <span>Añadir otra experiencia</span>
            </button>
          </div>
        ) : (
          /* FORM ENTRY VIEW (from registro_talento_experiencia_laboral) */
          <div className="bg-surface rounded-2xl shadow-ambient border border-surface-variant p-md md:p-lg mb-8 animate-fade-in">
            <div className="space-y-lg">
              {experienceList.map((item, index) => (
                <div
                  key={index}
                  className="space-y-lg border-b border-surface-variant pb-8 last:border-0 last:pb-0"
                >
                  {/* Company Field */}
                  <div className="space-y-base">
                    <label
                      className="block font-label-md text-label-md text-on-surface font-medium"
                      htmlFor={`company_${index}`}
                    >
                      Empresa
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">
                        apartment
                      </span>
                      <input
                        value={item.company}
                        onChange={(e) => updateItem(index, 'company', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-tertiary rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface"
                        id={`company_${index}`}
                        placeholder="Ej. Tech Solutions S.A."
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Role Field */}
                  <div className="space-y-base">
                    <label
                      className="block font-label-md text-label-md text-on-surface font-medium"
                      htmlFor={`role_${index}`}
                    >
                      Cargo / Rol
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">
                        work
                      </span>
                      <input
                        value={item.role}
                        onChange={(e) => updateItem(index, 'role', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-tertiary rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface"
                        id={`role_${index}`}
                        placeholder="Ej. Desarrollador Frontend"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Date Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-sm md:gap-md">
                    <div className="space-y-base">
                      <label
                        className="block font-label-md text-label-md text-on-surface font-medium"
                        htmlFor={`start_date_${index}`}
                      >
                        Fecha de inicio
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary">
                          calendar_month
                        </span>
                        <input
                          value={item.startDate}
                          onChange={(e) => updateItem(index, 'startDate', e.target.value)}
                          className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-tertiary rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface"
                          id={`start_date_${index}`}
                          type="month"
                        />
                      </div>
                    </div>
                    <div className="space-y-base">
                      <label
                        className="block font-label-md text-label-md text-on-surface font-medium"
                        htmlFor={`end_date_${index}`}
                      >
                        Fecha de fin
                      </label>
                      <div className="relative">
                        <span
                          className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-tertiary ${
                            item.isCurrentJob ? 'opacity-50' : ''
                          }`}
                        >
                          calendar_month
                        </span>
                        <input
                          value={item.endDate}
                          onChange={(e) => updateItem(index, 'endDate', e.target.value)}
                          disabled={item.isCurrentJob}
                          className={`w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-tertiary rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md text-on-surface ${
                            item.isCurrentJob ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          id={`end_date_${index}`}
                          type="month"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Job Checkbox */}
                  <div className="flex items-center space-x-sm pt-sm">
                    <input
                      checked={item.isCurrentJob}
                      onChange={(e) => updateItem(index, 'isCurrentJob', e.target.checked)}
                      className="w-5 h-5 rounded border-tertiary text-primary focus:ring-primary bg-surface-container-lowest cursor-pointer"
                      id={`current_job_${index}`}
                      type="checkbox"
                    />
                    <label
                      className="font-body-md text-body-md text-on-surface cursor-pointer select-none"
                      htmlFor={`current_job_${index}`}
                    >
                      Trabajo aquí actualmente
                    </label>
                  </div>
                </div>
              ))}

              {/* Add another experience button */}
              <div className="pt-sm border-t border-surface-variant flex justify-center mt-4">
                <button
                  onClick={addItem}
                  className="flex items-center space-x-2 text-primary hover:text-primary-fixed-dim transition-colors font-label-md text-label-md cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  <span>Añadir otra experiencia</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 p-4 pb-safe border-t border-surface-variant/40">
        <div className="max-w-[640px] mx-auto flex justify-between gap-md">
          <button
            onClick={onBack}
            className="flex-1 py-3 px-6 rounded-lg border-2 border-outline text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors active:scale-95 duration-150 font-semibold cursor-pointer"
          >
            Atrás
          </button>
          <button
            onClick={handleNext}
            className="flex-1 py-3 px-6 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:opacity-90 transition-opacity active:scale-95 duration-150 font-bold cursor-pointer shadow-sm"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
