import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso - PUNTOCLICK',
  description: 'Términos y condiciones legales que regulan el acceso, uso y responsabilidades en la plataforma PuntoClic en la República de Nicaragua.',
};

export default function TerminosPage() {
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
            href="/privacidad"
            className="text-label-sm font-semibold text-primary hover:underline px-3 py-1.5 bg-surface-container rounded-lg transition-colors"
          >
            Privacidad
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-margin-mobile md:px-lg py-xl pb-24 max-w-4xl mx-auto w-full">
        {/* Title Header */}
        <div className="mb-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold mb-3">
            <span className="material-symbols-outlined text-sm">gavel</span>
            Marco Legal y Normativo • Nicaragua
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-sm">
            Términos y Condiciones de Uso
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Última actualización: 28 de Agosto de 2026. Por favor lee atentamente estos términos antes de utilizar los servicios de PuntoClic.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-lg text-on-surface">
          {/* Section 1 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              1. Aceptación y Ámbito de Aplicación
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-3">
              El presente contrato de Términos y Condiciones regula el acceso y utilización de la plataforma digital <strong>PUNTOCLICK</strong> (en adelante, &quot;la Plataforma&quot;), desarrollada y operada para vincular a profesionales y estudiantes (&quot;Talentos&quot;), personas jurídicas y empleadores (&quot;Empresas&quot;), e instituciones de educación técnica y superior (&quot;Instituciones&quot;) en la República de Nicaragua.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Al registrarse, navegar o interactuar con cualquiera de las funciones de la Plataforma, el usuario declara haber leído, comprendido y aceptado en su totalidad estos Términos, así como nuestra <Link href="/privacidad" className="text-primary font-semibold underline">Política de Privacidad</Link>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
              2. Perfiles, Registro y Veracidad de la Información
            </h2>
            <div className="space-y-3 font-body-md text-on-surface-variant leading-relaxed">
              <p>
                <strong>2.1. Cuentas de Talento:</strong> El usuario garantiza que la información personal, cédula de identidad nicaragüense, formación académica y trayectoria laboral proporcionada en su perfil es verídica, actualizada y comprobable.
              </p>
              <p>
                <strong>2.2. Cuentas de Empresa:</strong> Las organizaciones deben contar con personería jurídica válida, Registro Único de Contribuyente (RUC) activo en Nicaragua y representación legal autorizada para ofertar vacantes o solicitar servicios profesionales.
              </p>
              <p>
                <strong>2.3. Cuentas Institucionales:</strong> Las universidades y centros de formación técnica certifican su acreditación ante los entes reguladores correspondientes de Nicaragua y se comprometen a validar oportunamente las competencias de sus egresados.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology_alt</span>
              3. Sistema de Match y Conexión de Oportunidades
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-3">
              PUNTOCLICK pone a disposición algoritmos y herramientas de afinidad (Match Center) con el objetivo de facilitar recomendaciones inteligentes entre las competencias de los candidatos y las demandas del mercado.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              PUNTOCLICK no garantiza la contratación efectiva ni asume obligaciones laborales directas derivadas de las conexiones establecidas, actuando exclusivamente como un canal tecnológico de intermediación y vinculación del ecosistema.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              4. Uso Aceptable y Prohibiciones
            </h2>
            <ul className="list-disc list-inside space-y-2 font-body-md text-on-surface-variant leading-relaxed">
              <li>Publicar información engañosa, ofertas de empleo fraudulentas o contrarias a la legislación laboral de Nicaragua.</li>
              <li>Intentar vulnerar la seguridad, extraer datos masivos (scraping no autorizado) o alterar el funcionamiento de los servidores de la plataforma.</li>
              <li>Suplantar la identidad de terceros o utilizar documentos de identificación falsos.</li>
              <li>Realizar actos de discriminación por motivos de género, raza, credo, condición social o discapacidad.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>copyright</span>
              5. Propiedad Intelectual y Confidencialidad
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Todos los derechos de propiedad intelectual sobre la marca <strong>PUNTOCLICK</strong>, diseño gráfico, software, arquitectura y contenidos pertenecen a sus respectivos titulares. Se prohíbe la reproducción total o parcial sin autorización previa y por escrito.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-container-highest shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary font-bold mb-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>balance</span>
              6. Legislación Aplicable y Jurisdicción
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Estos términos se rigen e interpretan de conformidad con las leyes de la República de Nicaragua. Para cualquier controversia legal que surja en relación con el uso de la Plataforma, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Managua, Nicaragua.
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
            <Link href="/privacidad" className="hover:text-primary transition-colors underline">
              Política de Privacidad
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

