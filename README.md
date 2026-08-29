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
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) | Tipado estático y seguridad en componentes |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) | Sistema de diseño tokenizado mediante `@theme` en CSS puro |
| **Iconografía** | [Google Material Symbols Outlined](https://fonts.google.com/icons) | Iconos dinámicos en toda la interfaz |
| **Gestión de Estado** | [Zustand](https://github.com/pmndrs/zustand) | Manejo de formularios multi-paso de registro de talento y empresa |
| **Recursos Visuales** | Imágenes HD Locales | Activos optimizados guardados en `public/images/` para evitar cuellos de botella externos |
| **Despliegue** | [Vercel](https://vercel.com/) | Integración continua y producción estática |

---

## 📐 Sistema de Diseño (Bee-Hive Philosophy)

El sistema de colores y tipografía sigue la escala tokenizada `@theme` configurada en [`src/app/globals.css`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/globals.css):

- **Primary (Bee Yellow):** `#785a00` / `#f4be37` / `#ffdf9d`
- **Secondary (Celeste Pastel):** `#4a6360` / `#cae5e1`
- **Tertiary (Verde Grisáceo Organic):** `#56615a` / `#bec9c1`
- **Surface & Background (Warm Neutral/Cream):** `#fff8f2` / `#fdf2e3` / `#201b12`
- **Tipografía:** `Montserrat` para encabezados (`font-headline`) e `Inter` para cuerpos de texto (`font-sans`).

---

## 🗺️ Mapa Completo de Vistas Sincronizadas (43 Páginas)

Todas las vistas fueron mapeadas directamente desde las carpetas exportadas en `Diseño/` manteniendo su diseño y adaptabilidad responsiva:

### 1. Onboarding e Información General
| Vista en App | Ruta | Diseño HTML de Origen |
| :--- | :--- | :--- |
| Landing / Bienvenida 1 | [`/`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/page.tsx) | `bienvenida_puntoclick_1/code.html` |
| Cómo Funciona (Paso 1 - Talento) | [`/como-funciona`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/como-funciona/page.tsx) | `c_mo_funciona_p_gina_1/code.html` |
| Cómo Funciona (Paso 2 - Empresas) | [`/como-funciona/2`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/como-funciona/2/page.tsx) | `c_mo_funciona_p_gina_2/code.html` |
| Cómo Funciona (Paso 3 - Instituciones) | [`/como-funciona/3`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/como-funciona/3/page.tsx) | `c_mo_funciona_p_gina_3/code.html` |
| Pantalla de Carga (Loading Shell) | [`/loading-view`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/loading-view/page.tsx) | `pantalla_de_carga/code.html` |

### 2. Autenticación y Recuperación de Cuenta
| Vista en App | Ruta | Diseño HTML de Origen |
| :--- | :--- | :--- |
| Inicio de Sesión (Login) | [`/auth/login`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/login/page.tsx) | `login_puntoclick_1/code.html` |
| Recuperar Contraseña | [`/auth/recuperar-contrasena`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/recuperar-contrasena/page.tsx) | `recuperar_contrase_a/code.html` |
| Código de Recuperación (OTP) | [`/auth/codigo-recuperacion`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/codigo-recuperacion/page.tsx) | `c_digo_de_recuperaci_n/code.html` |
| Nueva Contraseña | [`/auth/nueva-contrasena`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/nueva-contrasena/page.tsx) | `nueva_contrase_a/code.html` |
| Contraseña Cambiada | [`/auth/contrasena-cambiada`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/contrasena-cambiada/page.tsx) | `contrase_a_cambiada/code.html` |

### 3. Flujos de Registro Multi-Paso
| Vista en App | Ruta | Descripción |
| :--- | :--- | :--- |
| Selección de Tipo de Usuario | [`/auth/register`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/register/page.tsx) | `seleccionar_tipo_de_usuario/code.html` |
| Registro de Talento (12 Pasos) | [`/auth/register/talento`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/register/talento/page.tsx) | `registro_talento_*` (Datos, fecha, cédula, género, teléfono, dirección, educación, experiencia, CV, foto, password, confirmación) |
| Registro de Empresa | [`/auth/register/empresa`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/register/empresa/page.tsx) | `registro_empresa_*` (Identidad, sector, ubicación, contacto, oferta, redes, logo, confirmación) |
| Registro Institucional | [`/auth/register/institucion`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/register/institucion/page.tsx) | `solicitud_de_registro_institucional/code.html` |

### 4. Dashboards y Módulos de Usuario
| Vista en App | Ruta | Diseño HTML de Origen |
| :--- | :--- | :--- |
| Dashboard Talento | [`/talento/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/talento/dashboard/page.tsx) | `dashboard_talento_puntoclick_conectado/code.html` |
| Dashboard Empresa | [`/empresa/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/empresa/dashboard/page.tsx) | `dashboard_empresa_puntoclick_conectado/code.html` |
| Perfil Empresa | [`/empresa/perfil`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/empresa/perfil/page.tsx) | `perfil_empresa_puntoclick/code.html` |
| Dashboard Institucional | [`/institucion/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/dashboard/page.tsx) | `dashboard_institucional_puntoclick_conectado/code.html` |
| Perfil e Información Institucional | [`/institucion/perfil`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/perfil/page.tsx) | `perfil_institucional_y_directorio/code.html` |
| Configuración Institucional | [`/institucion/configuracion`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/configuracion/page.tsx) | `configuraci_n_institucional_puntoclick/code.html` |
| Estado Solicitud Institución | [`/institucion/estado-solicitud`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/estado-solicitud/page.tsx) | `estado_de_solicitud_institucional/code.html` |
| Programas Institucionales | [`/institucion/programas`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/programas/page.tsx) | `gesti_n_de_programas_y_oportunidades/code.html` |

### 5. Panel Administrativo
| Vista en App | Ruta | Diseño HTML de Origen |
| :--- | :--- | :--- |
| Login Administrativo | [`/admin/login`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/admin/login/page.tsx) | `admin_login_puntoclick/code.html` |
| Dashboard Admin | [`/admin/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/admin/dashboard/page.tsx) | `admin_dashboard_puntoclick_conectado/code.html` |
| Gestión de Usuarios | [`/admin/usuarios`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/admin/usuarios/page.tsx) | `gesti_n_de_usuarios_puntoclick/code.html` |
| Solicitudes Institucionales | [`/admin/solicitudes-institucionales`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/admin/solicitudes-institucionales/page.tsx) | `solicitudes_institucionales_puntoclick/code.html` |

### 6. Módulos de Conexión, Feria y Mentores
| Vista en App | Ruta | Diseño HTML de Origen |
| :--- | :--- | :--- |
| Match Center | [`/match-center`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/match-center/page.tsx) | `match_center_puntoclick/code.html` |
| Recomendación de Talento | [`/match-talento`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/match-talento/page.tsx) | `recomendaci_n_y_match_de_talento/code.html` |
| Feria y Eventos | [`/feria`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/feria/page.tsx) | `feria_y_eventos_puntoclick/code.html` |
| Mapa de Feria | [`/feria/mapa`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/feria/mapa/page.tsx) | `mapa_y_directorio_de_feria/code.html` |
| Agenda de Feria | [`/feria/agenda`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/feria/agenda/page.tsx) | `agenda_e_identidad_puntoclick_feria/code.html` |
| Directorio de Mentores | [`/mentores`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/mentores/page.tsx) | `perfiles_de_mentores_puntoclick/code.html` |
| Diagnóstico Mentor | [`/mentores/diagnostico`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/mentores/diagnostico/page.tsx) | `gesti_n_de_diagn_stico_mentor/code.html` |
| Mapa de Necesidades del Mercado | [`/mapa-necesidades`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/mapa-necesidades/page.tsx) | `mapa_de_necesidades_del_mercado/code.html` |

### 7. Configuración, Transacciones y Legales
| Vista en App | Ruta | Diseño HTML de Origen |
| :--- | :--- | :--- |
| Permisos de la App | [`/configuracion/permisos`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/configuracion/permisos/page.tsx) | `permisos_de_la_aplicaci_n/code.html` |
| Éxito de Transacción | [`/exito`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/exito/page.tsx) | `pantalla_de_xito/code.html` |
| Error Genérico | [`/error-view`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/error-view/page.tsx) | `pantalla_de_error/code.html` |
| Error de Conexión | [`/error-conexion`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/error-conexion/page.tsx) | `error_de_conexi_n/code.html` |
| Términos y Condiciones | [`/terminos`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/terminos/page.tsx) | `t_rminos_y_condiciones/code.html` |
| Política de Privacidad | [`/privacidad`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/privacidad/page.tsx) | `pol_tica_de_privacidad/code.html` |

---

## 👥 Usuarios de Prueba (Credenciales Demo)

La plataforma cuenta con un sistema de inicio de sesión directo con selector rápido en [`/auth/login`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/auth/login/page.tsx) y credenciales preconfiguradas para explorar cada rol y sus dashboards:

| Rol | Correo Electrónico | Contraseña | Dashboard / Módulo Principal |
| :--- | :--- | :--- | :--- |
| **Talento** | `alejandro@talento.com` | `talento123` | [`/talento/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/talento/dashboard) (Métricas de perfil, vacantes, postulaciones) |
| **Empresa** | `techhive@empresa.com` | `empresa123` | [`/empresa/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/empresa/dashboard) (Gestión de vacantes, candidatos y perfil) |
| **Institución** | `rectoria@nodo.edu` | `institucion123` | [`/institucion/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/institucion/dashboard) (Programas, validaciones de egresados, mapa) |
| **Mentor** | `mentor@puntoclick.com` | `mentor123` | [`/mentores/diagnostico`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/mentores/diagnostico) (Diagnóstico de habilidades, sesiones) |
| **Administrador** | `admin@puntoclick.com` | `admin123` | [`/admin/dashboard`](file:///home/disa/Documentos/dev/PuntoClic/app/src/app/admin/dashboard) (Control de usuarios y aprobación de instituciones) |

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
