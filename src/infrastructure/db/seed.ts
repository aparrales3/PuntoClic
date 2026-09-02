// =============================================================================
// PUNTOCLICK — Database Seeder (Neon Postgres)
// Populates MVP test users, talent/company/institution profiles, opportunities & matches
// All locations are 100% Nicaraguan.
// =============================================================================

import { config } from 'dotenv';
config({ path: '.env.local' });

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import bcrypt from 'bcryptjs';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in .env.local');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

async function seed() {
  console.log('🌱 Starting PuntoClic MVP database seed on Neon Postgres...');

  const saltRounds = 12;

  // Passwords
  const hashTalento = await bcrypt.hash('Talento1@', saltRounds);
  const hashEmpresa = await bcrypt.hash('Empresa1@', saltRounds);
  const hashInstitucion = await bcrypt.hash('Nodo2026@', saltRounds);
  const hashAdmin = await bcrypt.hash('Admin2026@', saltRounds);

  // 1. Clean existing test data (if any)
  console.log('🧹 Cleaning existing tables...');
  try {
    await db.delete(schema.matches);
    await db.delete(schema.opportunities);
    await db.delete(schema.talentProfiles);
    await db.delete(schema.companyProfiles);
    await db.delete(schema.institutionProfiles);
    await db.delete(schema.users);
    console.log('✓ Cleaned existing records.');
  } catch (err) {
    console.log('⚠️ Cleanup notice:', (err as Error).message);
  }

  // 2. Insert Users
  console.log('👥 Inserting test users...');

  // Talento 1: Alejandro Martínez (Principal)
  const [uAlejandro] = await db
    .insert(schema.users)
    .values({
      email: 'alejandro@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 2: María José Silva
  const [uMaria] = await db
    .insert(schema.users)
    .values({
      email: 'maria.silva@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 3: Carlos Bendaña
  const [uCarlos] = await db
    .insert(schema.users)
    .values({
      email: 'carlos.bendana@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 4: Sofía Rostrán
  const [uSofia] = await db
    .insert(schema.users)
    .values({
      email: 'sofia.rostran@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 5: Gabriel Morales (Flutter / Móvil)
  const [uGabriel] = await db
    .insert(schema.users)
    .values({
      email: 'gabriel.morales@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 6: Valeria Chamorro (Data Science - Sin foto para probar plantilla genérica)
  const [uValeria] = await db
    .insert(schema.users)
    .values({
      email: 'valeria.chamorro@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 7: Kevin Toruño (QA Automation - Sin foto para probar plantilla genérica)
  const [uKevin] = await db
    .insert(schema.users)
    .values({
      email: 'kevin.toruno@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Talento 8: Lucía Gutiérrez (Diseño & Branding)
  const [uLucia] = await db
    .insert(schema.users)
    .values({
      email: 'lucia.gutierrez@talento.com',
      passwordHash: hashTalento,
      role: 'talento',
      status: 'active',
    })
    .returning();

  // Empresa 1: TechHive Nicaragua
  const [uTechHive] = await db
    .insert(schema.users)
    .values({
      email: 'techhive@empresa.com',
      passwordHash: hashEmpresa,
      role: 'empresa',
      status: 'active',
    })
    .returning();

  // Empresa 2: AgroTech del Norte
  const [uAgroTech] = await db
    .insert(schema.users)
    .values({
      email: 'agrotech@empresa.com',
      passwordHash: hashEmpresa,
      role: 'empresa',
      status: 'active',
    })
    .returning();

  // Empresa 3: FinTech Nica (Sin logo para probar plantilla genérica de empresa)
  const [uFinTech] = await db
    .insert(schema.users)
    .values({
      email: 'fintech@empresa.com',
      passwordHash: hashEmpresa,
      role: 'empresa',
      status: 'active',
    })
    .returning();

  // Empresa 4: NicaCloud Solutions
  const [uNicaCloud] = await db
    .insert(schema.users)
    .values({
      email: 'nicacloud@empresa.com',
      passwordHash: hashEmpresa,
      role: 'empresa',
      status: 'active',
    })
    .returning();

  // Institucion 1: Universidad Nacional de Ingeniería (UNI)
  const [uUNI] = await db
    .insert(schema.users)
    .values({
      email: 'rectoria@nodo.edu',
      passwordHash: hashInstitucion,
      role: 'institucion',
      status: 'active',
    })
    .returning();

  // Institucion 2: INATEC
  const [uINATEC] = await db
    .insert(schema.users)
    .values({
      email: 'contacto@inatec.edu.ni',
      passwordHash: hashInstitucion,
      role: 'institucion',
      status: 'active',
    })
    .returning();

  // Institucion 3: Universidad Americana (UAM - Sin logo para probar plantilla genérica de institución)
  const [uUAM] = await db
    .insert(schema.users)
    .values({
      email: 'innovacion@uam.edu.ni',
      passwordHash: hashInstitucion,
      role: 'institucion',
      status: 'active',
    })
    .returning();

  // Admin: Administrador Central
  const [uAdmin] = await db
    .insert(schema.users)
    .values({
      email: 'admin@puntoclick.com',
      passwordHash: hashAdmin,
      role: 'admin',
      status: 'active',
    })
    .returning();

  console.log('✓ Users inserted successfully.');

  // 3. Insert Talent Profiles
  console.log('🌟 Inserting talent profiles...');

  const [pAlejandro] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uAlejandro.id,
      firstName: 'Alejandro',
      lastName: 'Martínez',
      bio: 'Desarrollador Full Stack con 4 años de experiencia construyendo aplicaciones web con React, Next.js, Node.js y PostgreSQL. Apasionado por la arquitectura limpia y la transformación digital en Nicaragua.',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face&auto=format',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'REST APIs'],
      completionPct: 100,
      location: 'Managua, Nicaragua',
      contractTypes: ['tiempo_completo', 'freelance'],
      workModes: ['remoto', 'hibrido'],
      currentlyWorking: true,
      currentJobTitle: 'Desarrollador Full Stack Semi-Senior',
      educationLevel: 'Ingeniería en Computación (UNI)',
    })
    .returning();

  const [pMaria] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uMaria.id,
      firstName: 'María José',
      lastName: 'Silva',
      bio: 'Diseñadora de Producto y UI/UX enfocada en accesibilidad, Design Systems y diseño centrado en el usuario para aplicaciones móviles y SaaS.',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
      skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping', 'User Research', 'HTML/CSS'],
      completionPct: 95,
      location: 'León, Nicaragua',
      contractTypes: ['tiempo_completo', 'medio_tiempo'],
      workModes: ['remoto'],
      currentlyWorking: false,
      currentJobTitle: 'Product Designer Lead',
      educationLevel: 'Licenciatura en Diseño Gráfico (UNAN-León)',
    })
    .returning();

  const [pCarlos] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uCarlos.id,
      firstName: 'Carlos',
      lastName: 'Bendaña',
      bio: 'Ingeniero Cloud & DevOps con especialización en AWS, Docker, Kubernetes y pipelines CI/CD automatizados.',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'PostgreSQL', 'Python', 'Linux'],
      completionPct: 90,
      location: 'Granada, Nicaragua',
      contractTypes: ['tiempo_completo', 'freelance'],
      workModes: ['remoto', 'hibrido'],
      currentlyWorking: true,
      currentJobTitle: 'DevOps & Cloud Engineer',
      educationLevel: 'Ingeniería en Sistemas (UCA)',
    })
    .returning();

  const [pSofia] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uSofia.id,
      firstName: 'Sofía',
      lastName: 'Rostrán',
      bio: 'Especialista en Ciberseguridad y Auditoría de Sistemas de Información. Experiencia en protección de datos bajo Ley 787 y análisis de vulnerabilidades.',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format',
      skills: ['Cybersecurity', 'Ethical Hacking', 'ISO 27001', 'Network Security', 'Python', 'Ley 787'],
      completionPct: 92,
      location: 'Estelí, Nicaragua',
      contractTypes: ['tiempo_completo', 'consultoria'],
      workModes: ['hibrido', 'presencial'],
      currentlyWorking: true,
      currentJobTitle: 'Security Analyst',
      educationLevel: 'Ingeniería en Ciberseguridad (UNI-Norte)',
    })
    .returning();

  // Talento 5: Gabriel Morales (Móvil Flutter)
  const [pGabriel] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uGabriel.id,
      firstName: 'Gabriel',
      lastName: 'Morales',
      bio: 'Ingeniero de Software enfocado en desarrollo de aplicaciones móviles multiplataforma con Flutter, Dart e integración de APIs nativas para iOS y Android.',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format',
      skills: ['Flutter', 'Dart', 'Mobile Apps', 'Firebase', 'REST APIs', 'State Management', 'iOS', 'Android'],
      completionPct: 95,
      location: 'León, Nicaragua',
      contractTypes: ['tiempo_completo', 'freelance'],
      workModes: ['remoto', 'hibrido'],
      currentlyWorking: true,
      currentJobTitle: 'Desarrollador Móvil Flutter Senior',
      educationLevel: 'Ingeniería en Telemática (UNAN-León)',
    })
    .returning();

  // Talento 6: Valeria Chamorro (Data Science - Sin foto para plantilla genérica)
  const [pValeria] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uValeria.id,
      firstName: 'Valeria',
      lastName: 'Chamorro',
      bio: 'Científica de Datos y analista cuantitativa con experiencia en modelos predictivos, visualización de datos, SQL avanzado y Python.',
      photoUrl: null, // Prueba de plantilla genérica de avatar
      skills: ['Python', 'Data Science', 'Machine Learning', 'Pandas', 'PostgreSQL', 'Power BI', 'SQL'],
      completionPct: 88,
      location: 'Managua, Nicaragua',
      contractTypes: ['tiempo_completo', 'medio_tiempo'],
      workModes: ['remoto'],
      currentlyWorking: false,
      currentJobTitle: 'Científica de Datos & Analista BI',
      educationLevel: 'Licenciatura en Matemática Aplicada (UCA)',
    })
    .returning();

  // Talento 7: Kevin Toruño (QA Automation - Sin foto para plantilla genérica)
  const [pKevin] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uKevin.id,
      firstName: 'Kevin',
      lastName: 'Toruño',
      bio: 'Ingeniero de Calidad de Software con especialidad en automatización de pruebas end-to-end, testing de APIs y control de regresión continua.',
      photoUrl: null, // Prueba de plantilla genérica de avatar
      skills: ['QA Automation', 'Cypress', 'Playwright', 'Jest', 'Postman', 'CI/CD', 'TypeScript'],
      completionPct: 85,
      location: 'Matagalpa, Nicaragua',
      contractTypes: ['tiempo_completo', 'freelance'],
      workModes: ['remoto', 'hibrido'],
      currentlyWorking: true,
      currentJobTitle: 'QA Automation Engineer',
      educationLevel: 'Ingeniería en Sistemas (FAREM-Matagalpa)',
    })
    .returning();

  // Talento 8: Lucía Gutiérrez (Diseño & Branding)
  const [pLucia] = await db
    .insert(schema.talentProfiles)
    .values({
      userId: uLucia.id,
      firstName: 'Lucía',
      lastName: 'Gutiérrez',
      bio: 'Diseñadora Visual y estratega de marca digital. Especialista en identidad corporativa, ilustración vectorial y diseño web centrado en conversión.',
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format',
      skills: ['UI/UX', 'Figma', 'Branding', 'Ilustración', 'Adobe Creative Suite', 'HTML/CSS'],
      completionPct: 90,
      location: 'Masaya, Nicaragua',
      contractTypes: ['freelance', 'tiempo_completo'],
      workModes: ['remoto', 'hibrido'],
      currentlyWorking: false,
      currentJobTitle: 'Brand & Visual Designer',
      educationLevel: 'Licenciatura en Diseño y Comunicación Visual (UdeM)',
    })
    .returning();

  console.log('✓ Talent profiles created.');

  // 4. Insert Company Profiles
  console.log('🏢 Inserting company profiles...');

  const [cTechHive] = await db
    .insert(schema.companyProfiles)
    .values({
      userId: uTechHive.id,
      companyName: 'TechHive Nicaragua',
      legalName: 'TechHive Solutions S.A.',
      sector: 'Tecnología y Desarrollo de Software',
      description: 'Empresa líder en desarrollo de software a medida, aplicaciones web progresivas y transformación digital para empresas de Centroamérica.',
      logoUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop&auto=format',
      website: 'https://techhive.com.ni',
      painPoints: ['Escasez de desarrolladores React/TypeScript senior', 'Necesidad de Diseñadores UI/UX con experiencia en Design Systems', 'Ingenieros DevOps para migración a Kubernetes'],
      location: 'Managua, Nicaragua',
      employeeCount: '50-100',
      verified: true,
    })
    .returning();

  const [cAgroTech] = await db
    .insert(schema.companyProfiles)
    .values({
      userId: uAgroTech.id,
      companyName: 'AgroTech del Norte',
      legalName: 'AgroTecnología de Nicaragua S.A.',
      sector: 'Agroindustria & IoT',
      description: 'Pioneros en agricultura de precisión, sensores IoT para monitoreo de cultivos de café y tabaco, y automatización hídrica.',
      logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop&auto=format',
      website: 'https://agrotech.com.ni',
      painPoints: ['Ingenieros IoT con experiencia en telemetría', 'Desarrolladores Mobile para apps de campo offline-first', 'Científicos de Datos para análisis climatológico'],
      location: 'Matagalpa, Nicaragua',
      employeeCount: '20-50',
      verified: true,
    })
    .returning();

  const [cFinTech] = await db
    .insert(schema.companyProfiles)
    .values({
      userId: uFinTech.id,
      companyName: 'FinTech Nica',
      legalName: 'Servicios Financieros Digitales de Nicaragua S.A.',
      sector: 'Fintech & Medios de Pago',
      description: 'Plataforma de pagos digitales, pasarelas de cobro e inclusión financiera en Nicaragua.',
      logoUrl: null, // Sin logo para probar plantilla genérica de empresa
      website: 'https://fintechnica.ni',
      painPoints: ['Especialistas en ciberseguridad financiera', 'Ingenieros Backend con Node.js y PostgreSQL de alta concurrencia'],
      location: 'Managua, Nicaragua',
      employeeCount: '30-60',
      verified: true,
    })
    .returning();

  const [cNicaCloud] = await db
    .insert(schema.companyProfiles)
    .values({
      userId: uNicaCloud.id,
      companyName: 'NicaCloud Solutions',
      legalName: 'Soluciones Cloud de Nicaragua S.A.',
      sector: 'Infraestructura Cloud & DevOps',
      description: 'Consultoría e implementación de soluciones en la nube, arquitecturas serverless y modernización de infraestructuras críticas.',
      logoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&auto=format',
      website: 'https://nicacloud.com.ni',
      painPoints: ['Ingenieros DevOps y Cloud con AWS/Docker', 'Automatización de pipelines CI/CD'],
      location: 'Managua, Nicaragua',
      employeeCount: '15-30',
      verified: true,
    })
    .returning();

  console.log('✓ Company profiles created.');

  // 5. Insert Institution Profiles
  console.log('🎓 Inserting institution profiles...');

  await db
    .insert(schema.institutionProfiles)
    .values({
      userId: uUNI.id,
      institutionName: 'Universidad Nacional de Ingeniería (UNI)',
      type: 'universidad',
      description: 'Principal institución de educación superior en ingeniería, ciencia y tecnología de Nicaragua. Forjando el talento de ingeniería del país.',
      logoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=300&fit=crop&auto=format',
      website: 'https://uni.edu.ni',
      location: 'Managua, Nicaragua',
      verified: true,
    });

  await db
    .insert(schema.institutionProfiles)
    .values({
      userId: uINATEC.id,
      institutionName: 'Tecnológico Nacional (INATEC)',
      type: 'gobierno',
      description: 'Entidad rectora de la capacitación y educación técnica en Nicaragua con presencia en los 17 departamentos.',
      logoUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=300&fit=crop&auto=format',
      website: 'https://inatec.edu.ni',
      location: 'Managua, Nicaragua (Cobertura Nacional)',
      verified: true,
    });

  await db
    .insert(schema.institutionProfiles)
    .values({
      userId: uUAM.id,
      institutionName: 'Universidad Americana (UAM)',
      type: 'universidad',
      description: 'Institución líder en innovación académica, emprendimiento y desarrollo de competencias globales en Nicaragua.',
      logoUrl: null, // Sin logo para probar plantilla genérica de institución
      website: 'https://uam.edu.ni',
      location: 'Managua, Nicaragua',
      verified: true,
    });

  console.log('✓ Institution profiles created.');

  // 6. Insert Opportunities (Vacantes)
  console.log('💼 Inserting opportunities...');

  const [opFrontend] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cTechHive.id,
      title: 'Senior Frontend Engineer (React & Next.js)',
      description: 'Buscamos un Ingeniero Frontend apasionado para liderar la arquitectura de nuestras aplicaciones web de última generación.',
      problemStatement: 'Modernizar la plataforma de clientes e implementar Design Systems escalables.',
      requiredSkills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
      niceToHaveSkills: ['Figma', 'Node.js', 'GraphQL'],
      workModes: ['remoto', 'hibrido'],
      contractTypes: ['tiempo_completo'],
      location: 'Managua, Nicaragua',
      salaryMin: 1800,
      salaryMax: 2800,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  const [opUIUX] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cTechHive.id,
      title: 'Product Designer & UI/UX Specialist',
      description: 'Diseño de experiencias digitales innovadoras, prototipado avanzado y validación con usuarios nicaragüenses.',
      problemStatement: 'Rediseño integral de la experiencia de usuario y accesibilidad.',
      requiredSkills: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research'],
      niceToHaveSkills: ['HTML/CSS', 'Prototyping'],
      workModes: ['remoto'],
      contractTypes: ['tiempo_completo', 'freelance'],
      location: 'Managua, Nicaragua',
      salaryMin: 1400,
      salaryMax: 2200,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  const [opMobile] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cTechHive.id,
      title: 'Desarrollador Móvil Flutter & iOS/Android',
      description: 'Construcción y despliegue de aplicaciones móviles nativas y cross-platform con Flutter.',
      problemStatement: 'Crear la aplicación móvil insignia para servicios fintech en la región.',
      requiredSkills: ['Flutter', 'Dart', 'Mobile Apps', 'REST APIs'],
      niceToHaveSkills: ['Firebase', 'iOS', 'Android'],
      workModes: ['remoto', 'hibrido'],
      contractTypes: ['tiempo_completo'],
      location: 'Managua, Nicaragua',
      salaryMin: 1600,
      salaryMax: 2400,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  const [opIoT] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cAgroTech.id,
      title: 'Desarrollador IoT & Sistemas Embebidos',
      description: 'Integración de sensores agrícolas, conectividad LoRaWAN y visualización de telemetría en tiempo real.',
      problemStatement: 'Automatizar el monitoreo de humedad en plantaciones de café del norte.',
      requiredSkills: ['Python', 'Linux', 'Docker', 'IoT'],
      niceToHaveSkills: ['PostgreSQL', 'C++'],
      workModes: ['hibrido', 'presencial'],
      contractTypes: ['tiempo_completo'],
      location: 'Matagalpa, Nicaragua',
      salaryMin: 1500,
      salaryMax: 2400,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  const [opData] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cAgroTech.id,
      title: 'Analista de Datos & Machine Learning',
      description: 'Modelado predictivo de rendimientos agrícolas y análisis de telemetría de suelos.',
      problemStatement: 'Optimizar fertilización y consumo hídrico mediante modelos de machine learning.',
      requiredSkills: ['Python', 'Data Science', 'Machine Learning', 'SQL'],
      niceToHaveSkills: ['Pandas', 'Power BI'],
      workModes: ['remoto'],
      contractTypes: ['tiempo_completo'],
      location: 'Matagalpa, Nicaragua',
      salaryMin: 1500,
      salaryMax: 2300,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  const [opSecurity] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cFinTech.id,
      title: 'Oficial de Seguridad de la Información (Cybersecurity)',
      description: 'Garantizar el cumplimiento de normas de seguridad financiera, auditorías de vulnerabilidades y protección de datos.',
      problemStatement: 'Fortalecer la postura de ciberseguridad ante normativas bancarias y Ley 787.',
      requiredSkills: ['Cybersecurity', 'ISO 27001', 'Ley 787', 'Network Security'],
      niceToHaveSkills: ['Python', 'Ethical Hacking'],
      workModes: ['hibrido'],
      contractTypes: ['tiempo_completo'],
      location: 'Managua, Nicaragua',
      salaryMin: 2000,
      salaryMax: 3000,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  const [opCloud] = await db
    .insert(schema.opportunities)
    .values({
      companyId: cNicaCloud.id,
      title: 'Cloud Architect & DevOps Specialist',
      description: 'Diseño e implementación de infraestructuras escalables en AWS con Docker y orquestación con Kubernetes.',
      problemStatement: 'Migrar clientes bancarios y corporativos a arquitecturas microservicios seguras.',
      requiredSkills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      niceToHaveSkills: ['Python', 'Terraform', 'Linux'],
      workModes: ['remoto'],
      contractTypes: ['tiempo_completo'],
      location: 'Managua, Nicaragua',
      salaryMin: 2200,
      salaryMax: 3200,
      salaryCurrency: 'USD',
      status: 'active',
    })
    .returning();

  console.log('✓ Opportunities created.');

  // 7. Insert Matches
  console.log('🤝 Inserting match relations...');

  // Match 1: Alejandro <-> TechHive (Frontend) -> 95% Match
  await db.insert(schema.matches).values({
    talentId: pAlejandro.id,
    companyId: cTechHive.id,
    opportunityId: opFrontend.id,
    status: 'mutual',
    scoreTotal: 95,
    scoreBreakdown: {
      skillsScore: 96,
      workModeScore: 100,
      locationScore: 90,
      matchedSkills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    },
  });

  // Match 2: María José <-> TechHive (UI/UX) -> 92% Match
  await db.insert(schema.matches).values({
    talentId: pMaria.id,
    companyId: cTechHive.id,
    opportunityId: opUIUX.id,
    status: 'talent_interested',
    scoreTotal: 92,
    scoreBreakdown: {
      skillsScore: 95,
      workModeScore: 100,
      locationScore: 80,
      matchedSkills: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research'],
    },
  });

  // Match 3: Gabriel <-> TechHive (Mobile) -> 94% Match
  await db.insert(schema.matches).values({
    talentId: pGabriel.id,
    companyId: cTechHive.id,
    opportunityId: opMobile.id,
    status: 'company_interested',
    scoreTotal: 94,
    scoreBreakdown: {
      skillsScore: 95,
      workModeScore: 90,
      locationScore: 95,
      matchedSkills: ['Flutter', 'Dart', 'Mobile Apps', 'REST APIs'],
    },
  });

  // Match 4: Carlos <-> NicaCloud (Cloud/DevOps) -> 96% Match
  await db.insert(schema.matches).values({
    talentId: pCarlos.id,
    companyId: cNicaCloud.id,
    opportunityId: opCloud.id,
    status: 'mutual',
    scoreTotal: 96,
    scoreBreakdown: {
      skillsScore: 98,
      workModeScore: 95,
      locationScore: 95,
      matchedSkills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
  });

  // Match 5: Valeria <-> AgroTech (Data Science) -> 91% Match
  await db.insert(schema.matches).values({
    talentId: pValeria.id,
    companyId: cAgroTech.id,
    opportunityId: opData.id,
    status: 'company_interested',
    scoreTotal: 91,
    scoreBreakdown: {
      skillsScore: 92,
      workModeScore: 90,
      locationScore: 90,
      matchedSkills: ['Python', 'Data Science', 'Machine Learning', 'SQL'],
    },
  });

  // Match 6: Sofía <-> FinTech Nica (Security) -> 97% Match
  await db.insert(schema.matches).values({
    talentId: pSofia.id,
    companyId: cFinTech.id,
    opportunityId: opSecurity.id,
    status: 'mutual',
    scoreTotal: 97,
    scoreBreakdown: {
      skillsScore: 98,
      workModeScore: 95,
      locationScore: 98,
      matchedSkills: ['Cybersecurity', 'ISO 27001', 'Ley 787', 'Network Security'],
    },
  });

  console.log('✓ Matches created.');

  console.log('\n======================================================');
  console.log('🎉 PUNTOCLICK SEED COMPLETED SUCCESSFULLY ON NEON!');
  console.log('======================================================');
  console.log('Test Accounts:');
  console.log('1.  Talento (Foto):       alejandro@talento.com       / Talento1@');
  console.log('2.  Talento (Foto):       maria.silva@talento.com     / Talento1@');
  console.log('3.  Talento (Foto):       carlos.bendana@talento.com  / Talento1@');
  console.log('4.  Talento (Foto):       sofia.rostran@talento.com   / Talento1@');
  console.log('5.  Talento (Foto):       gabriel.morales@talento.com / Talento1@');
  console.log('6.  Talento (Plantilla):  valeria.chamorro@talento.com/ Talento1@');
  console.log('7.  Talento (Plantilla):  kevin.toruno@talento.com    / Talento1@');
  console.log('8.  Talento (Foto):       lucia.gutierrez@talento.com / Talento1@');
  console.log('9.  Empresa (Logo):       techhive@empresa.com        / Empresa1@');
  console.log('10. Empresa (Logo):       agrotech@empresa.com        / Empresa1@');
  console.log('11. Empresa (Plantilla):  fintech@empresa.com         / Empresa1@');
  console.log('12. Empresa (Logo):       nicacloud@empresa.com       / Empresa1@');
  console.log('13. Institución (Logo):   rectoria@nodo.edu           / Nodo2026@');
  console.log('14. Institución (Logo):   contacto@inatec.edu.ni      / Nodo2026@');
  console.log('15. Institución (Plant.): innovacion@uam.edu.ni       / Nodo2026@');
  console.log('16. Administrador:        admin@puntoclick.com        / Admin2026@');
  console.log('======================================================\n');
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  });
