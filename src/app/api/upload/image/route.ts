// =============================================================================
// PUNTOCLICK — API: Upload Profile Image to Cloudinary
// POST /api/upload/image
// Accepts: multipart/form-data with fields: file (File), userId (string), role (string)
// Returns: { url, publicId, width, height }
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { uploadProfilePhoto, uploadLogo } from '@/infrastructure/storage/cloudinaryClient';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const userId = (formData.get('userId') as string) || `anon_${Date.now()}`;
    const role = (formData.get('role') as string) || 'talento';
    const type = (formData.get('type') as string) || 'profile'; // 'profile' | 'logo'

    if (!file) {
      return NextResponse.json({ error: 'No se recibió ningún archivo' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Formato no válido. Usa JPG, PNG, WebP o GIF' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'El archivo excede el tamaño máximo de 5 MB' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let result;

    if (type === 'logo') {
      result = await uploadLogo(buffer, userId, role as 'empresa' | 'institucion');
    } else {
      result = await uploadProfilePhoto(buffer, userId, role as 'talento' | 'empresa' | 'institucion');
    }

    return NextResponse.json({
      success: true,
      url: result.secureUrl,
      publicId: result.publicId,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Error al subir imagen';
    console.error('[Upload API Error]:', error);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
