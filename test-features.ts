import { spawn, ChildProcess } from 'child_process';

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTests() {
  console.log('🚀 Starting Next.js test server on port 3005...');
  const server: ChildProcess = spawn('npx', ['next', 'start', '-p', '3005'], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: '3005' },
    stdio: 'pipe',
  });

  server.stdout?.on('data', (d) => {
    // console.log(`[server] ${d}`);
  });
  server.stderr?.on('data', (d) => {
    // console.error(`[server err] ${d}`);
  });

  // Wait for server to boot
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch('http://localhost:3005/api/talentos');
      if (res.status === 200) {
        ready = true;
        break;
      }
    } catch {
      await wait(500);
    }
  }

  if (!ready) {
    console.error('❌ Server failed to start on port 3005');
    server.kill();
    process.exit(1);
  }

  console.log('✓ Server ready! Running test suite...\n');

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, desc: string) {
    if (condition) {
      console.log(`  ✓ PASS: ${desc}`);
      passed++;
    } else {
      console.error(`  ✗ FAIL: ${desc}`);
      failed++;
    }
  }

  try {
    // 1. Test GET /api/talentos
    console.log('1. Testing /api/talentos API...');
    const resTalents = await fetch('http://localhost:3005/api/talentos');
    const dataTalents = await resTalents.json();
    assert(resTalents.status === 200, 'GET /api/talentos returns status 200');
    assert(dataTalents.count >= 8, `Returns 8+ talents (got ${dataTalents.count})`);

    const hasNullPhoto = dataTalents.talentos.some((t: any) => t.photoUrl === null);
    assert(hasNullPhoto, 'Contains talents with photoUrl === null for generic template testing');

    // 2. Test search with q=react
    console.log('\n2. Testing /api/talentos with search query q=react...');
    const resQ = await fetch('http://localhost:3005/api/talentos?q=react');
    const dataQ = await resQ.json();
    assert(dataQ.count > 0, `Search q=react returns results (got ${dataQ.count})`);
    assert(
      dataQ.talentos.some((t: any) => t.name.includes('Alejandro')),
      'Alejandro Martínez found when searching for "react"'
    );

    // 3. Test skill filter skill=Flutter
    console.log('\n3. Testing /api/talentos?skill=Flutter...');
    const resSkill = await fetch('http://localhost:3005/api/talentos?skill=Flutter');
    const dataSkill = await resSkill.json();
    assert(dataSkill.count > 0, `Filter skill=Flutter returns results (got ${dataSkill.count})`);
    assert(
      dataSkill.talentos.some((t: any) => t.name.includes('Gabriel')),
      'Gabriel Morales found when filtering by skill=Flutter'
    );

    // 4. Test Login as Empresa (TechHive)
    console.log('\n4. Testing Login as Empresa (TechHive)...');
    const resLoginEmpresa = await fetch('http://localhost:3005/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'techhive@empresa.com',
        password: 'Empresa1@',
      }),
    });
    const dataLoginEmpresa = await resLoginEmpresa.json();
    assert(resLoginEmpresa.status === 200, 'Login as Empresa returns 200');
    assert(dataLoginEmpresa.role === 'empresa', 'User role is "empresa"');

    const empresaCookie = resLoginEmpresa.headers.get('set-cookie')?.split(';')[0] || '';

    // 5. Test Empresa Perfil page
    console.log('\n5. Testing /empresa/perfil with authenticated session...');
    const resEmpresaPerfil = await fetch('http://localhost:3005/empresa/perfil', {
      headers: { Cookie: empresaCookie },
    });
    const htmlEmpresaPerfil = await resEmpresaPerfil.text();
    assert(resEmpresaPerfil.status === 200, 'GET /empresa/perfil returns 200');
    assert(htmlEmpresaPerfil.includes('TechHive Nicaragua'), 'HTML contains "TechHive Nicaragua"');
    assert(htmlEmpresaPerfil.includes('Buscar Talentos'), 'HTML contains link to "Buscar Talentos"');

    // 6. Test Match connection API as Empresa
    console.log('\n6. Testing POST /api/matches as Empresa...');
    const firstTalentId = dataTalents.talentos[0].id;
    const resMatch = await fetch('http://localhost:3005/api/matches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: empresaCookie,
      },
      body: JSON.stringify({ talentId: firstTalentId }),
    });
    const dataMatch = await resMatch.json();
    assert(resMatch.status === 200, 'POST /api/matches returns 200');
    assert(dataMatch.success === true, 'Match request succeeded');

    // 7. Test Login as Institución (UNI)
    console.log('\n7. Testing Login as Institución (UNI)...');
    const resLoginInst = await fetch('http://localhost:3005/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'rectoria@nodo.edu',
        password: 'Nodo2026@',
      }),
    });
    const dataLoginInst = await resLoginInst.json();
    assert(resLoginInst.status === 200, 'Login as Institución returns 200');
    assert(dataLoginInst.role === 'institucion', 'User role is "institucion"');

    const instCookie = resLoginInst.headers.get('set-cookie')?.split(';')[0] || '';

    // 8. Test Institución Perfil page
    console.log('\n8. Testing /institucion/perfil with authenticated session...');
    const resInstPerfil = await fetch('http://localhost:3005/institucion/perfil', {
      headers: { Cookie: instCookie },
    });
    const htmlInstPerfil = await resInstPerfil.text();
    assert(resInstPerfil.status === 200, 'GET /institucion/perfil returns 200');
    assert(
      htmlInstPerfil.includes('Universidad Nacional de Ingenier') || htmlInstPerfil.includes('UNI'),
      'HTML contains "Universidad Nacional de Ingeniería"'
    );

    // 9. Test Login as Talento without photo (Valeria Chamorro) to verify fallback template
    console.log('\n9. Testing Login as Talento without photo (Valeria Chamorro)...');
    const resLoginValeria = await fetch('http://localhost:3005/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'valeria.chamorro@talento.com',
        password: 'Talento1@',
      }),
    });
    const dataLoginValeria = await resLoginValeria.json();
    assert(resLoginValeria.status === 200, 'Login as Valeria Chamorro returns 200');

    const valeriaCookie = resLoginValeria.headers.get('set-cookie')?.split(';')[0] || '';

    // 10. Test Talento Perfil page with fallback avatar
    console.log('\n10. Testing /talento/perfil for Valeria Chamorro...');
    const resValeriaPerfil = await fetch('http://localhost:3005/talento/perfil', {
      headers: { Cookie: valeriaCookie },
    });
    const htmlValeriaPerfil = await resValeriaPerfil.text();
    assert(resValeriaPerfil.status === 200, 'GET /talento/perfil returns 200');
    assert(htmlValeriaPerfil.includes('Valeria Chamorro'), 'HTML contains "Valeria Chamorro"');
    assert(htmlValeriaPerfil.includes('VC'), 'HTML renders "VC" initials generic template');

    // 11. Test Match Talento Search Page for Empresa
    console.log('\n11. Testing /match-talento page with Empresa session...');
    // Unauthenticated should redirect
    const resMatchUnauth = await fetch('http://localhost:3005/match-talento', { redirect: 'manual' });
    assert(resMatchUnauth.status === 307 || resMatchUnauth.status === 302, 'Unauthenticated /match-talento redirects to login');

    // Authenticated with Empresa cookie
    const resMatchTalento = await fetch('http://localhost:3005/match-talento', {
      headers: { Cookie: empresaCookie },
    });
    const htmlMatchTalento = await resMatchTalento.text();
    assert(resMatchTalento.status === 200, 'GET /match-talento with Empresa cookie returns 200');
    assert(htmlMatchTalento.includes('BUSCADOR DE TALENTO'), 'HTML contains "BUSCADOR DE TALENTO"');

    console.log(`\n=================================================`);
    console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
    console.log(`=================================================`);
  } finally {
    server.kill();
  }

  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch((e) => {
  console.error(e);
  process.exit(1);
});
