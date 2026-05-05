// src/lib/r2.ts
// Resolves image paths against your Cloudflare R2 public URL.
// Set R2_BASE_URL and R2_SITE_FOLDER in your .env file.

import { SITE } from '../config/site';

const DEFAULT_R2_BASE = 'https://media.stokeleads.com';
const R2_BASE = (import.meta.env.R2_BASE_URL as string | undefined) || DEFAULT_R2_BASE;
const R2_FOLDER = import.meta.env.R2_SITE_FOLDER as string | undefined;
const CAN_USE_CF_IMAGE_RESIZE = !import.meta.env.DEV;

/**
 * Builds a full R2 URL for an image path.
 *
 * Usage:
 *   r2img("/hero.jpg")
 *   // → https://pub-xxx.r2.dev/colville-home-service/hero.jpg
 *
 * Falls back to the path as-is if R2_BASE_URL is not set
 * (useful for local dev with images in /public).
 */
export function r2img(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;

  const folder = (R2_FOLDER || SITE.r2Folder).replace(/^\/+|\/+$/g, '');
  const normalizedPath = path.replace(/^\/+/, '');
  const base = R2_BASE.replace(/\/$/, '');

  // If the base already includes the folder (e.g. .../epsak), avoid duplicating it.
  const basePath = new URL(base).pathname.replace(/^\/+|\/+$/g, '');
  const folderPrefix = basePath.endsWith(folder) ? '' : `/${folder}`;

  return `${base}${folderPrefix}/${normalizedPath}`;
}

/**
 * Returns an srcset string for responsive images from R2.
 * Useful if you're not using Astro's <Image /> component.
 */
export function r2srcset(path: string, widths: number[] = [640, 1024, 1600]): string {
  const sourceUrl = r2img(path);
  return widths.map((width) => `${r2variant(sourceUrl, width)} ${width}w`).join(', ');
}

function r2variant(sourceUrl: string, width: number): string {
  if (!CAN_USE_CF_IMAGE_RESIZE) {
    // Local dev fallback when /cdn-cgi/image is unavailable.
    return `${sourceUrl}?width=${width}`;
  }

  const encodedSource = encodeURI(sourceUrl);
  return `/cdn-cgi/image/format=auto,width=${width},quality=62/${encodedSource}`;
}
