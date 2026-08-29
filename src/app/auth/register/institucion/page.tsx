import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solicitud de Registro Institucional - PUNTOCLICK',
  description: 'Formulario de registro para entidades gubernamentales e instituciones educativas.',
};

export default function SolicitudInstitucionalPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body-md">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface shadow-sm border-b border-surface-variant/50 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-lg h-16 max-w-container-max mx-auto">
          <Link
            href="/auth/register"
            className="p-2 -ml-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">hub</span>
            <span className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary tracking-tight">
              PUNTOCLICK
            </span>
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-20 px-margin-mobile md:px-md w-full max-w-3xl mx-auto flex flex-col relative z-10">
        <div className="mb-lg text-center md:text-left">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface mb-xs font-bold">
            Solicitud Institucional
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Complete el formulario para registrar su entidad o universidad en el ecosistema.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-ambient border border-surface-container p-md md:p-xl relative">
          <form action="/institucion/estado-solicitud" className="space-y-md">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-name">
                Nombre Oficial de la Institución
              </label>
              <input
                id="inst-name"
                type="text"
                required
                placeholder="Ej: Universidad Nacional Autónoma"
                className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-type">
                  Tipo de Entidad
                </label>
                <select
                  id="inst-type"
                  required
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                >
                  <option>Universidad Pública</option>
                  <option>Universidad Privada</option>
                  <option>Centro de Formación Técnica</option>
                  <option>Ministerio / Ente Gubernamental</option>
                  <option>ONG / Fundación Educativa</option>
                </select>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-id">
                  RUC / Identificador Legal
                </label>
                <input
                  id="inst-id"
                  type="text"
                  required
                  placeholder="Ej: J0310000012345"
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-email">
                Correo Electrónico Institucional (Dominio Oficial)
              </label>
              <input
                id="inst-email"
                type="email"
                required
                placeholder="contacto@institucion.edu.ni"
                className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="inst-contact">
                Nombre del Representante Autorizado
              </label>
              <input
                id="inst-contact"
                type="text"
                required
                placeholder="Nombre completo y cargo"
                className="w-full bg-surface border border-outline-variant rounded-lg p-3 font-body-md text-on-surface focus:border-primary focus:outline-none"
              />
            </div>

            <div className="pt-md">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg shadow-sm hover:opacity-90 transition-all font-bold flex justify-center items-center gap-2"
              >
                Enviar Solicitud de Registro
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
