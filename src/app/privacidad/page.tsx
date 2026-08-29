import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos - PUNTOCLICK',
  description: 'Política de privacidad, tratamiento y protección de datos personales de PuntoClic conforme a la legislación de Nicaragua.',
};

export default function PrivacidadPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Header */}
      <header className="bg-surface-container-high border-b border-surface-variant/40 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-margin-mobile md:px-xl py-sm">
          <Link
            href="/"
            className="text-primary hover:bg-surface-container-low transition-all p-2 rounded-full flex items-center justify-center active:scale-95"
            aria-label="Volver al inicio"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            <span className="font-headline-md text-primary font-bold uppercase tracking-wider">
              PUNTOCLICK
            </span>
          </div>
          <Link
            href="/terminos"
            className="text-label-sm font-semibold text-primary hover:underline px-3 py-1.5 bg-surface-container rounded-lg transition-colors"
          >
            Términos
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-margin-mobile md:px-lg py-xl pb-24 max-w-4xl mx-auto w-full">
        {/* Title Header */}
        <div className="mb-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold mb-3">
            <span className="material-symbols-outlined text-sm">shield</span>
            Ley N° 787 de Protección de Datos Personales • Nicaragua
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-sm">
            Política de Privacidad y Tratamiento de Datos
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            En PUNTOCLICK garantizamos la transparencia, confidencialidad y máxima seguridad en el tratamiento de tus datos personales e institucionales.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-lg text-on-surface">
          {/* Section 1 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
              1. Información que Recopilamos
            </h2>
            <div className="space-y-2 font-body-md text-on-surface-variant leading-relaxed">
              <p>• <strong>Datos de Talento:</strong> Nombres, apellidos, número de cédula nicaragüense, teléfono, correo electrónico, departamento/municipio de residencia, trayectoria académica, experiencia laboral y hoja de vida (CV).</p>
              <p>• <strong>Datos de Empresa:</strong> Razón social, RUC, dirección fiscal, información de representantes legales, descripción del sector y ofertas laborales.</p>
              <p>• <strong>Datos de Instituciones:</strong> Acreditación, facultades, enlaces de validación y datos de contacto de coordinadores y decanaturas.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>settings_suggest</span>
              2. Finalidad del Tratamiento de Datos
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-3">
              Los datos proporcionados son tratados con el propósito exclusivo de:
            </p>
            <ul className="list-disc list-inside space-y-2 font-body-md text-on-surface-variant leading-relaxed">
              <li>Calcular índices de afinidad y matching entre candidatos y puestos disponibles.</li>
              <li>Permitir a las empresas contactar postulantes calificados para procesos de selección.</li>
              <li>Generar estadísticas anónimas sobre el mercado laboral para las instituciones aliadas.</li>
              <li>Notificar sobre eventos, ferias de empleo y sesiones de mentoría.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              3. Seguridad y Confidencialidad
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Implementamos protocolos de cifrado SSL/TLS de extremo a extremo, hashing seguro de contraseñas y controles de acceso basados en roles (RBAC) para salvaguardar tu información contra accesos no autorizados, pérdida o alteración.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>person_check</span>
              4. Derechos de Acceso, Rectificación y Supresión
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Conforme a la legislación vigente de Nicaragua, cualquier usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, actualización o eliminación definitiva de sus datos personales a través de la configuración de su perfil o escribiendo a <span className="text-primary font-semibold">privacidad@puntoclick.ni</span>.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-xl pt-lg border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md text-center font-bold hover:opacity-90 transition-opacity"
          >
            Entendido y Volver
          </Link>
          <div className="flex gap-4 text-label-sm text-on-surface-variant">
            <Link href="/terminos" className="hover:text-primary transition-colors underline">
              Términos y Condiciones
            </Link>
            <span>•</span>
            <Link href="/como-funciona" className="hover:text-primary transition-colors underline">
              Cómo Funciona
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

