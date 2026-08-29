import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PUNTOCLICK — Conecta Talento con Oportunidades',
    template: '%s | PUNTOCLICK',
  },
  description:
    'PuntoClic conecta jóvenes talentos con empresas que tienen "dolores" reales. Sube tu portafolio vivo y conecta con oportunidades que se alinean con tus habilidades.',
  keywords: ['empleo', 'talento', 'matching', 'portafolio', 'oportunidades', 'puntoclick'],
  authors: [{ name: 'PuntoClic' }],
  openGraph: {
    title: 'PUNTOCLICK — Conecta Talento con Oportunidades',
    description: 'El ecosistema que conecta jóvenes talentosos con empresas que necesitan sus habilidades.',
    type: 'website',
    locale: 'es_419',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fff8f2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
