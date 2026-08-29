'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const STEP_TITLES = [
  { id: 0, title: 'Institución', icon: 'corporate_fare' },
  { id: 1, title: 'Representante', icon: 'person' },
  { id: 2, title: 'Ubicación', icon: 'location_on' },
  { id: 3, title: 'Propósito', icon: 'target' },
  { id: 4, title: 'Documentación', icon: 'folder_open' },
  { id: 5, title: 'Revisión', icon: 'fact_check' },
];

function SolicitudInstitucionalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get('tipo') || 'universidad';

  const [currentStep, setCurrentStep] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Institución
    name: '',
    dependency: 'Ministerio',
    institutionType: initialType === 'universidad' ? 'Universidad' : initialType === 'centro_tecnologico' ? 'Centro Tecnológico' : initialType === 'gobierno' ? 'Gobierno Nacional' : 'ONG / Fundación',
    taxId: '',
    // Step 2: Representante
    repName: '',
    repRole: '',
    repEmail: '',
    repPhone: '',
    // Step 3: Ubicación
    address: '',
    department: 'Managua',
    city: 'Managua',
    website: '',
    // Step 4: Propósito
    mainArea: 'Desarrollo Tecnológico',
    description: '',
    participationReason: '',
    // Step 5: Documentación
    fileName: 'resolucion_nombramiento_oficial.pdf',
    fileSize: '1.4 MB',
    fileUploaded: true,
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final submit
      router.push('/institucion/estado-solicitud');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/auth/register/institucion/tipo');
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 shadow-sm border-b border-surface-variant/50 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-lg h-16 max-w-container-max mx-auto">
          <button
            type="button"
            onClick={handleBack}
            className="p-2 -ml-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Volver atrás"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
            <span className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary tracking-tight">
              PUNTOCLICK
            </span>
          </div>
          <div className="w-10 h-10" />
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow pt-24 pb-20 px-gutter-mobile md:px-md w-full max-w-3xl mx-auto flex flex-col relative z-10">
        {/* Header */}
        <div className="mb-lg text-center md:text-left">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-xs font-bold">
            Solicitud Institucional
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Complete el formulario para registrar su entidad o universidad en el ecosistema.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="mb-lg px-2">
          <div className="flex items-center justify-between relative">
            {/* Connecting Line Background */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-surface-container z-0 rounded-full" />
            {/* Active Progress Line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-primary z-0 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
            {/* Step Nodes */}
            {STEP_TITLES.map((st) => {
              const isPassed = currentStep > st.id;
              const isCurrent = currentStep === st.id;

              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setCurrentStep(st.id)}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-label-sm font-label-sm transition-all shadow-xs ${
                      isCurrent
                        ? 'bg-primary-container text-on-primary-container border-2 border-primary font-bold scale-110'
                        : isPassed
                        ? 'bg-primary text-on-primary border-2 border-primary'
                        : 'bg-surface text-on-surface-variant border-2 border-outline-variant group-hover:border-primary-container'
                    }`}
                  >
                    {isPassed ? (
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    ) : (
                      st.id + 1
                    )}
                  </div>
                  <span
                    className={`text-[10px] md:text-xs font-medium hidden md:block ${
                      isCurrent
                        ? 'text-primary font-bold'
                        : isPassed
                        ? 'text-on-surface'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Card Container */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient border border-surface-container p-md md:p-xl relative">
          <form onSubmit={handleNext} className="space-y-md">
            {/* STEP 1: Datos de la Institución */}
            {currentStep === 0 && (
              <div className="space-y-md animate-fade-in">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-variant/40">
                  <span className="material-symbols-outlined text-primary text-2xl">corporate_fare</span>
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-on-surface">
                    Datos de la Institución
                  </h2>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-name">
                    Nombre Oficial de la Institución *
                  </label>
                  <input
                    id="inst-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Ej: Universidad Nacional Politécnica / Ministerio de Fomento"
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-dep">
                      Entidad / Dependencia *
                    </label>
                    <select
                      id="inst-dep"
                      value={formData.dependency}
                      onChange={(e) => updateField('dependency', e.target.value)}
                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    >
                      <option value="Ministerio">Ministerio</option>
                      <option value="Viceministerio">Viceministerio</option>
                      <option value="Rectoría / Decanato">Rectoría / Decanato</option>
                      <option value="Alcaldía / Municipalidad">Alcaldía / Municipalidad</option>
                      <option value="Instituto Autónomo">Instituto Autónomo</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-type">
                      Tipo de Institución *
                    </label>
                    <select
                      id="inst-type"
                      value={formData.institutionType}
                      onChange={(e) => updateField('institutionType', e.target.value)}
                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    >
                      <option value="Universidad">Universidad</option>
                      <option value="Centro Tecnológico">Centro Tecnológico</option>
                      <option value="Gobierno Nacional">Gobierno Nacional</option>
                      <option value="ONG / Fundación">ONG / Fundación</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="tax-id">
                    RUC / Identificador Legal *
                  </label>
                  <input
                    id="tax-id"
                    type="text"
                    required
                    value={formData.taxId}
                    onChange={(e) => updateField('taxId', e.target.value)}
                    placeholder="Ej: J0310000012345"
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Representante Legal */}
            {currentStep === 1 && (
              <div className="space-y-md animate-fade-in">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-variant/40">
                  <span className="material-symbols-outlined text-primary text-2xl">person</span>
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-on-surface">
                    Representante Legal
                  </h2>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="rep-name">
                    Nombre Completo *
                  </label>
                  <input
                    id="rep-name"
                    type="text"
                    required
                    value={formData.repName}
                    onChange={(e) => updateField('repName', e.target.value)}
                    placeholder="Ej: Dra. Elena Ramírez"
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="rep-role">
                    Cargo Institucional *
                  </label>
                  <input
                    id="rep-role"
                    type="text"
                    required
                    value={formData.repRole}
                    onChange={(e) => updateField('repRole', e.target.value)}
                    placeholder="Ej: Rectora / Director General / Ministro"
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="rep-email">
                      Correo Institucional *
                    </label>
                    <input
                      id="rep-email"
                      type="email"
                      required
                      value={formData.repEmail}
                      onChange={(e) => updateField('repEmail', e.target.value)}
                      placeholder="representante@institucion.edu.ni"
                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="rep-phone">
                      Teléfono de Contacto
                    </label>
                    <input
                      id="rep-phone"
                      type="tel"
                      value={formData.repPhone}
                      onChange={(e) => updateField('repPhone', e.target.value)}
                      placeholder="+505 2278 0000"
                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Ubicación y Contacto */}
            {currentStep === 2 && (
              <div className="space-y-md animate-fade-in">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-variant/40">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-on-surface">
                    Ubicación y Contacto
                  </h2>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="address">
                    Dirección Física Sede Principal *
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    placeholder="Km 4.5 Carretera a Masaya, Costado Este"
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="department">
                      Departamento / Región *
                    </label>
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(e) => updateField('department', e.target.value)}
                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    >
                      <option value="Managua">Managua</option>
                      <option value="León">León</option>
                      <option value="Matagalpa">Matagalpa</option>
                      <option value="Estelí">Estelí</option>
                      <option value="Chinandega">Chinandega</option>
                      <option value="Masaya">Masaya</option>
                      <option value="Granada">Granada</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="city">
                      Municipio / Ciudad *
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      placeholder="Managua"
                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="website">
                    Sitio Web Oficial
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-outline-variant bg-surface-container text-on-surface-variant text-body-md">
                      https://
                    </span>
                    <input
                      id="website"
                      type="text"
                      value={formData.website}
                      onChange={(e) => updateField('website', e.target.value)}
                      placeholder="www.institucion.edu.ni"
                      className="w-full bg-surface border border-outline-variant rounded-r-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Propósito de Participación */}
            {currentStep === 3 && (
              <div className="space-y-md animate-fade-in">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-variant/40">
                  <span className="material-symbols-outlined text-primary text-2xl">target</span>
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-on-surface">
                    Propósito de Participación
                  </h2>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="mainArea">
                    Área Principal de Trabajo *
                  </label>
                  <select
                    id="mainArea"
                    value={formData.mainArea}
                    onChange={(e) => updateField('mainArea', e.target.value)}
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  >
                    <option value="Desarrollo Tecnológico">Desarrollo Tecnológico e Innovación</option>
                    <option value="Educación y Cultura">Educación Superior y Cultura</option>
                    <option value="Desarrollo Económico">Fomento al Empleo y Desarrollo Económico</option>
                    <option value="Salud y Bienestar">Salud Pública e Investigación</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="description">
                    Breve Descripción Institucional *
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    required
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    placeholder="Describa brevemente la misión y alcance de su entidad..."
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="reason">
                    Motivo de Participación en la Red PuntoClic *
                  </label>
                  <textarea
                    id="reason"
                    rows={3}
                    required
                    value={formData.participationReason}
                    onChange={(e) => updateField('participationReason', e.target.value)}
                    placeholder="Ej: Vincular estudiantes a pasantías con empresas líderes y validar certificaciones..."
                    className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 5: Documentación de Respaldo */}
            {currentStep === 4 && (
              <div className="space-y-md animate-fade-in">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-variant/40">
                  <span className="material-symbols-outlined text-primary text-2xl">folder_open</span>
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-on-surface">
                    Documentación de Respaldo
                  </h2>
                </div>

                <p className="text-body-md text-on-surface-variant">
                  Cargue el documento oficial que acredite la representación legal (Resolución, Decreto, Nombramiento o Carta Aval).
                </p>

                {/* Upload Box */}
                <div className="border-2 border-dashed border-outline-variant hover:border-primary rounded-2xl p-8 text-center bg-surface transition-colors cursor-pointer flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">upload_file</span>
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-bold">
                      Arrastre y suelte su archivo aquí o haga clic para explorar
                    </p>
                    <p className="text-label-sm text-on-surface-variant mt-1">
                      Formatos admitidos: PDF, JPG, PNG (máx. 5MB)
                    </p>
                  </div>
                </div>

                {/* File preview item */}
                {formData.fileUploaded && (
                  <div className="p-4 bg-surface-container-low rounded-xl border border-surface-variant flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-2xl">description</span>
                      <div>
                        <p className="font-label-md text-label-md font-bold text-on-surface">
                          {formData.fileName}
                        </p>
                        <p className="text-label-sm text-on-surface-variant">
                          {formData.fileSize} • Carga completa
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                  </div>
                )}
              </div>
            )}

            {/* STEP 6: Revisión y Envío */}
            {currentStep === 5 && (
              <div className="space-y-md animate-fade-in">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-surface-variant/40">
                  <span className="material-symbols-outlined text-primary text-2xl">fact_check</span>
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-on-surface">
                    Revisión Final
                  </h2>
                </div>

                <p className="text-body-md text-on-surface-variant">
                  Verifique que los datos ingresados sean correctos antes de formalizar la solicitud de registro.
                </p>

                {/* Summary Cards */}
                <div className="space-y-3">
                  <div className="p-4 bg-surface rounded-xl border border-surface-variant">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-label-sm font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">corporate_fare</span>
                        Institución
                      </span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(0)}
                        className="text-label-sm text-primary hover:underline font-bold"
                      >
                        Editar
                      </button>
                    </div>
                    <p className="font-headline-md text-headline-md-mobile font-bold text-on-surface">
                      {formData.name || 'Universidad / Institución'}
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {formData.dependency} • {formData.institutionType} • RUC: {formData.taxId || 'Pendiente'}
                    </p>
                  </div>

                  <div className="p-4 bg-surface rounded-xl border border-surface-variant">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-label-sm font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">person</span>
                        Representante
                      </span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-label-sm text-primary hover:underline font-bold"
                      >
                        Editar
                      </button>
                    </div>
                    <p className="font-label-md text-label-md font-bold text-on-surface">
                      {formData.repName || 'Representante Autorizado'}
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {formData.repRole || 'Cargo'} • {formData.repEmail || 'correo@institucion.edu'}
                    </p>
                  </div>

                  <div className="p-4 bg-surface rounded-xl border border-surface-variant">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-label-sm font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        Sede y Contacto
                      </span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="text-label-sm text-primary hover:underline font-bold"
                      >
                        Editar
                      </button>
                    </div>
                    <p className="text-body-md text-on-surface">
                      {formData.address || 'Sede Principal'}, {formData.city}, {formData.department}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Footer Action Buttons */}
            <div className="pt-lg flex flex-col-reverse md:flex-row items-center justify-between gap-md border-t border-surface-variant/50">
              <button
                type="button"
                onClick={handleBack}
                className="w-full md:w-auto px-lg py-3 rounded-lg border-2 border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-xs font-semibold cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Atrás
              </button>

              <button
                type="submit"
                className="w-full md:w-auto px-xl py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-xs font-bold cursor-pointer"
              >
                <span>{currentStep === 5 ? 'Enviar Solicitud de Registro' : 'Continuar'}</span>
                <span className="material-symbols-outlined text-lg">
                  {currentStep === 5 ? 'send' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default function SolicitudInstitucionalPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-surface flex items-center justify-center">
          <div className="flex flex-col items-center gap-md">
            <span className="material-symbols-outlined text-primary text-5xl animate-spin">
              progress_activity
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">Cargando formulario...</p>
          </div>
        </div>
      }
    >
      <SolicitudInstitucionalContent />
    </Suspense>
  );
}
