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

  // Empresa 3: FinTech Nica
  const [uFinTech] = await db
    .insert(schema.users)
    .values({
      email: 'fintech@empresa.com',
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
      painPoints: ['Escasez de desarrolladores React/TypeScript senior', 'Necesidad de Diseñadores UI/UX con experiencia en Design Systems'],
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
      painPoints: ['Ingenieros IoT con experiencia en telemetría', 'Desarrolladores Mobile para apps de campo offline-first'],
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
      logoUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=300&fit=crop&auto=format',
      website: 'https://fintechnica.ni',
      painPoints: ['Especialistas en ciberseguridad financiera', 'Ingenieros Backend con Node.js y PostgreSQL de alta concurrencia'],
      location: 'Managua, Nicaragua',
      employeeCount: '30-60',
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

  console.log('✓ Opportunities created.');

  // 7. Insert Matches
  console.log('🤝 Inserting match relations...');

  // Match 1: Alejandro <-> TechHive (Frontend Opportunity) -> 95% Match
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

  // Match 2: María José <-> TechHive (UI/UX Opportunity) -> 92% Match
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

  // Match 3: Carlos <-> AgroTech (IoT & Cloud Opportunity) -> 88% Match
  await db.insert(schema.matches).values({
    talentId: pCarlos.id,
    companyId: cAgroTech.id,
    opportunityId: opIoT.id,
    status: 'company_interested',
    scoreTotal: 88,
    scoreBreakdown: {
      skillsScore: 85,
      workModeScore: 90,
      locationScore: 90,
      matchedSkills: ['Python', 'Linux', 'Docker'],
    },
  });

  // Match 4: Sofía <-> FinTech Nica (Security Opportunity) -> 97% Match
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
  console.log('1. Talento:     alejandro@talento.com     / Talento1@');
  console.log('2. Talento:     maria.silva@talento.com   / Talento1@');
  console.log('3. Talento:     carlos.bendana@talento.com / Talento1@');
  console.log('4. Talento:     sofia.rostran@talento.com  / Talento1@');
  console.log('5. Empresa:     techhive@empresa.com      / Empresa1@');
  console.log('6. Empresa:     agrotech@empresa.com      / Empresa1@');
  console.log('7. Empresa:     fintech@empresa.com       / Empresa1@');
  console.log('8. Institución: rectoria@nodo.edu         / Nodo2026@');
  console.log('9. Institución: contacto@inatec.edu.ni    / Nodo2026@');
  console.log('10. Admin:      admin@puntoclick.com      / Admin2026@');
  console.log('======================================================\n');
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  });
