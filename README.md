# PUNTOCLICK — Ecosistema Digital de Conexión de Talento, Empresas e Instituciones

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://punto-clic.vercel.app)

---

## 📌 Descripción del Proyecto

**PUNTOCLICK** es una plataforma web moderna e interactiva diseñada bajo la filosofía de diseño **Bee-Hive** (*Colmena Orgánica & Soft Minimalism*). Su propósito fundamental es unir estudiantes y talentos emergentes con empresas e instituciones académicas/gubernamentales para acelerar la innovación, la contratación directa y el mentoreo estratégico.

El frontend fue construido con **Next.js 16 (App Router)**, **TypeScript**, y **Tailwind CSS v4**, reflejando con un **100% de fidelidad responsiva** los diseños originales exportados en la carpeta `Diseño/`.

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología / Librería | Uso |
| :--- | :--- | :--- |
| **Framework Principal** | [Next.js 16 (Turbopack)](https://nextjs.org/) | App Router, SSR/SSG y arquitectura basada en Server Components |
| **Base de Datos Serverless** | [Neon Lakebase Postgres](https://neon.tech/) | Base de datos PostgreSQL serverless con pooling y Drizzle ORM |
| **Autenticación & Sesión** | [Neon Auth & Better Auth (JWT)](https://neon.tech/docs/guides/neon-auth) | Inicio de sesión seguro con JWT HTTP-only, OAuth y bcryptjs |
| **Almacenamiento Multimedia** | [Cloudinary](https://cloudinary.com/) | Carga, recorte inteligente centrado en rostros y optimización de fotos de perfil |
| **Servicio de Correos** | [Resend](https://resend.com/) | Envío de correos transaccionales (bienvenida y recuperación de contraseñas) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | Tipado estático y seguridad en componentes |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) | Sistema de diseño tokenizado mediante `@theme` en CSS puro |
| **Iconografía** | [Google Material Symbols Outlined](https://fonts.google.com/icons) | Iconos dinámicos en toda la interfaz |
| **Gestión de Estado** | [Zustand](https://github.com/pmndrs/zustand) | Manejo de formularios multi-paso de registro de talento y empresa |
| **Despliegue** | [Vercel](https://vercel.com/) | Integración continua y producción |

---

## 👥 Usuarios de Prueba en Neon Postgres (Credenciales Reales)

La plataforma cuenta con un sistema de inicio de sesión directo con selector rápido en [`/auth/login`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/login/page.tsx) respaldado por usuarios reales en la base de datos de **Neon Postgres**:

| Rol | Correo Electrónico | Contraseña | Perfil Sembrado en Neon | Dashboard / Módulo Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Talento (Principal)** | `alejandro@talento.com` | `Talento1@` | Alejandro Martínez (Full Stack - Managua) | [`/talento/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/talento/dashboard) |
| **Talento (UI/UX)** | `maria.silva@talento.com` | `Talento1@` | María José Silva (Product Designer - León) | [`/talento/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/talento/dashboard) |
| **Talento (DevOps)** | `carlos.bendana@talento.com` | `Talento1@` | Carlos Bendaña (Cloud Engineer - Granada) | [`/talento/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/talento/dashboard) |
| **Talento (Security)** | `sofia.rostran@talento.com` | `Talento1@` | Sofía Rostrán (Cybersecurity - Estelí) | [`/talento/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/talento/dashboard) |
| **Empresa (Tech)** | `techhive@empresa.com` | `Empresa1@` | TechHive Nicaragua S.A. (Software - Managua) | [`/empresa/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/empresa/dashboard) |
| **Empresa (IoT/Agro)** | `agrotech@empresa.com` | `Empresa1@` | AgroTech del Norte (IoT Agrícola - Matagalpa) | [`/empresa/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/empresa/dashboard) |
| **Empresa (FinTech)** | `fintech@empresa.com` | `Empresa1@` | FinTech Nica S.A. (Pagos Digitales - Managua) | [`/empresa/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/empresa/dashboard) |
| **Institución (UNI)** | `rectoria@nodo.edu` | `Nodo2026@` | Univ. Nacional de Ingeniería (Managua) | [`/institucion/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/dashboard) |
| **Institución (INATEC)** | `contacto@inatec.edu.ni` | `Nodo2026@` | Tecnológico Nacional INATEC (Nacional) | [`/institucion/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/dashboard) |
| **Administrador** | `admin@puntoclick.com` | `Admin2026@` | Administrador General del Ecosistema | [`/admin/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/admin/dashboard) |

> **Nota para resembrar la base de datos:** Ejecuta `npm run db:seed` para restaurar o actualizar todos los datos de prueba en Neon Postgres.

---

## 🇳🇮 Adaptación Territorial — Nicaragua

Todos los selectores geográficos, mapas y formularios de registro han sido configurados con la división político-administrativa de **Nicaragua**:
- **17 Departamentos y Regiones Autónomas**: Managua, León, Matagalpa, Estelí, Chinandega, Masaya, Granada, Rivas, Carazo, Jinotega, Nueva Segovia, Madriz, Boaco, Chontales, Río San Juan, RACCN y RACCS.
- **Ciudades y Municipios principales**: Managua, Ciudad Sandino, Tipitapa, León, Matagalpa, Estelí, Chinandega, Masaya, Granada, Rivas, Jinotepe, San Juan del Sur, Bluefields, Puerto Cabezas (Bilwi).
- **Marco Legal**: Cumplimiento con la **Ley N° 787** de Protección de Datos Personales de Nicaragua.

---

## 💻 Instrucciones de Instalación y Uso Local

### 1. Requisitos Previos
Asegúrate de contar con:
- **Node.js**: v18.17.0 o superior (se recomienda v20+)
- **npm**: v9.0.0 o superior

### 2. Clonar el Repositorio e Instalar Dependencias
```bash
# Clonar el proyecto
git clone https://github.com/aparrales3/PuntoClic.git

# Entrar al directorio de la aplicación
cd PuntoClic/app

# Instalar dependencias
npm install
```

### 3. Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:3000` para explorar la aplicación interactiva.

### 4. Compilación para Producción
Para verificar la compilación estática de las 43 rutas:
```bash
npm run build
npm run start
```

---

## 📁 Estructura del Proyecto

```text
app/
├── public/
│   └── images/              # Activos gráficos en HD (como-funciona-2.jpg, como-funciona-3.jpg)
├── src/
│   ├── app/                 # Next.js App Router (43 páginas estructuradas)
│   │   ├── admin/           # Panel administrativo (dashboard, usuarios, solicitudes, login)
│   │   ├── auth/            # Módulo de autenticación (login, registro, recuperación)
│   │   ├── como-funciona/   # Onboarding responsivo (pasos 1, 2 y 3)
│   │   ├── empresa/         # Dashboard y perfiles corporativos
│   │   ├── feria/           # Módulo de ferias, mapas interactivos y agenda
│   │   ├── institucion/     # Dashboard, programas y configuración institucional
│   │   ├── match-center/    # Algoritmo de conexiones y filtros de afinidad
│   │   ├── mentores/        # Directorio de mentores y diagnósticos
│   │   ├── talento/         # Dashboard y perfil de candidatos
│   │   ├── globals.css      # Sistema de diseño tokenizado en Tailwind v4 (@theme)
│   │   └── page.tsx         # Landing Page oficial (bienvenida_puntoclick_1)
│   └── store/
│       └── registrationStore.ts  # Estado global de registro multi-paso (Zustand)
├── next.config.ts           # Configuración de Next.js 16
├── package.json             # Dependencias del proyecto
└── README.md                # Documentación oficial del proyecto
```

---

## 🚀 Despliegue en Producción (Vercel)

El proyecto está configurado para desplegarse automáticamente en Vercel. La versión en producción está disponible en:
👉 **[https://punto-clic.vercel.app](https://punto-clic.vercel.app)**

---

## 📄 Licencia

Este proyecto fue desarrollado para el ecosistema **PUNTOCLICK**. Todos los derechos reservados.
