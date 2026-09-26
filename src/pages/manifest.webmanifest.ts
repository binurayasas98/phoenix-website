import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import appIcon from '../assets/images/app-icon.png';
import { site } from '../data/site';

export const GET: APIRoute = async () => {
  const sizes = [192, 512];
  const icons = await Promise.all(
    sizes.map(async (size) => {
      const img = await getImage({ src: appIcon, width: size, height: size, format: 'png' });
      return { src: img.src, sizes: `${size}x${size}`, type: 'image/png' };
    }),
  );

  const manifest = {
    name: site.legalName,
    short_name: site.name,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons,
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json' },
  });
};
