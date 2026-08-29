'use client';

import { useRegistrationStore } from '@/store/registrationStore';
import { useState } from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export default function Step7Educacion({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { talentData, setTalentData } = useRegistrationStore();
  
  // Try to parse existing education or default to one empty item
  const [educationList, setEducationList] = useState<EducationItem[]>(() => {
    try {
      if (talentData.education) {
        const parsed = JSON.parse(talentData.education);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      // Ignore parse error
    }
    return [{ institution: '', degree: '', year: '' }];
  });

  const updateItem = (index: number, field: keyof EducationItem, value: string) => {
    const newList = [...educationList];
    newList[index][field] = value;
    setEducationList(newList);
  };

  const addItem = () => {
    setEducationList([...educationList, { institution: '', degree: '', year: '' }]);
  };

  const handleNext = () => {
    // Only save items that have at least some data
    const validItems = educationList.filter(item => item.institution || item.degree || item.year);
    setTalentData({ education: JSON.stringify(validItems) });
    onNext();
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary-container/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-tertiary-container/20 blur-[120px]"></div>
      </div>
      
      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-gutter-mobile py-xl md:py-16">
        {/* Bento-style Container */}
        <div className="w-full max-w-[600px] mx-auto flex flex-col gap-md">
          {/* Header Section */}
          <header className="text-center md:text-left mb-sm">
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-xs">Educación</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Cuéntanos sobre tu formación académica para destacar tu perfil.</p>
          </header>
          
          {/* Progress Bar */}
          <div className="w-full bg-surface-container-high rounded-full h-2.5 mb-md relative overflow-hidden">
            <div className="bg-primary h-2.5 rounded-full transition-all duration-700 ease-in-out" style={{ width: '70%' }}></div>
            <div className="absolute right-0 top-[-24px] text-label-sm font-label-sm text-on-surface-variant">70%</div>
          </div>
          
          {/* Form Card (Glassmorphism) */}
          <div className="bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 shadow-[0_8px_32px_rgba(32,27,18,0.08)] rounded-xl p-md md:p-lg relative">
            
            {educationList.map((item, index) => (
              <div key={index} className="education-block relative border-l-2 border-tertiary-container pl-sm pb-md mb-md">
                {/* Timeline Node */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary z-10"></div>
                
                <div className="flex flex-col gap-sm">
                  {/* Institution */}
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor={`institution_${index}`}>Institución Educativa</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">account_balance</span>
                      <input 
                        value={item.institution}
                        onChange={(e) => updateItem(index, 'institution', e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 pl-10" 
                        id={`institution_${index}`} 
                        placeholder="Ej. Universidad Nacional" 
                        type="text"
                      />
                    </div>
                  </div>
                  
                  {/* Degree */}
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor={`degree_${index}`}>Título / Carrera</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">school</span>
                      <input 
                        value={item.degree}
                        onChange={(e) => updateItem(index, 'degree', e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 pl-10" 
                        id={`degree_${index}`} 
                        placeholder="Ej. Ingeniería en Sistemas" 
                        type="text"
                      />
                    </div>
                  </div>
                  
                  {/* Graduation Year */}
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor={`year_${index}`}>Año de Graduación (o esperado)</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_month</span>
                      <input 
                        value={item.year}
                        onChange={(e) => updateItem(index, 'year', e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 pl-10" 
                        id={`year_${index}`} 
                        max="2100" 
                        min="1950" 
                        placeholder="Ej. 2024" 
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add More Button */}
            <button 
              onClick={addItem}
              className="mt-sm flex items-center gap-xs font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors group" 
              type="button"
            >
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>
              </div>
              Agregar otra educación
            </button>
          </div>
          
          {/* Action Buttons Navigation */}
          <div className="flex flex-col-reverse md:flex-row justify-between gap-sm mt-lg">
            <button 
              onClick={onBack}
              className="bg-transparent border-2 border-[#201b12] text-[#201b12] hover:bg-surface-container-low font-label-md text-label-md py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center w-full md:w-auto" 
              type="button"
            >
              <span className="material-symbols-outlined mr-2">arrow_back</span>
              Atrás
            </button>
            <button 
              onClick={handleNext}
              className="bg-[#f4be37] hover:bg-[#eab308] text-[#201b12] font-label-md text-label-md py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center w-full md:w-auto" 
              type="button"
            >
              Siguiente
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
