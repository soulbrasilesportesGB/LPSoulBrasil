// /home/project/app/robots.txt/route.ts
import { NextResponse } from 'next/server';

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://soulbrasil.co';

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${BASE}/sitemap.xml`,
    `Host: ${BASE}`,
  ].join('\n');

  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}