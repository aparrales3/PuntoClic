// =============================================================================
// PUNTOCLICK — Cloudinary Client (Server-Side Only)
// Cloud Name: vdhvsvgk | Project: PuntoClic
// NEVER import this in client components
// =============================================================================

import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('❌ CLOUDINARY_CLOUD_NAME is not set in .env.local');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

export interface UploadResult {
  url: string;
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

/**
 * Upload a profile photo to Cloudinary under puntoclick/profiles/
 * Applies automatic face-centered cropping and quality optimization
 */
export async function uploadProfilePhoto(
  fileBuffer: Buffer,
  userId: string,
  role: 'talento' | 'empresa' | 'institucion' = 'talento'
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    const uniqueId = `${userId}_${Date.now()}`;

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `puntoclick/profiles/${role}`,
        public_id: uniqueId,
        transformation: [
          {
            width: 400,
            height: 400,
            crop: 'fill',
            gravity: 'face',
            quality: 'auto:best',
            fetch_format: 'auto',
          },
        ],
        resource_type: 'image',
        overwrite: true,
        tags: ['puntoclick', 'profile', role],
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error('Cloudinary upload returned no result'));
          return;
        }
        resolve({
          url: result.url,
          secureUrl: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
}

/**
 * Upload a logo (for empresa/institucion) with letterbox padding
 */
export async function uploadLogo(
  fileBuffer: Buffer,
  entityId: string,
  type: 'empresa' | 'institucion'
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    const uniqueId = `${entityId}_logo_${Date.now()}`;

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `puntoclick/logos/${type}`,
        public_id: uniqueId,
        transformation: [
          {
            width: 300,
            height: 300,
            crop: 'pad',
            background: 'white',
            quality: 'auto:best',
            fetch_format: 'auto',
          },
        ],
        resource_type: 'image',
        overwrite: true,
        tags: ['puntoclick', 'logo', type],
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error('Cloudinary upload returned no result'));
          return;
        }
        resolve({
          url: result.url,
          secureUrl: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
}

/**
 * Delete an image from Cloudinary by publicId
 */
export async function deleteImage(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}
