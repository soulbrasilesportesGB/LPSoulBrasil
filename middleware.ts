import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Permite a página de login do admin sem cookie
  if (pathname.startsWith('/admin/login')) {
    return NextResponse.next();
  }

  // Protege qualquer rota /admin/*
  if (pathname.startsWith('/admin')) {
    const cookie = req.cookies.get('sb_admin');
    if (!cookie) {
      const url = req.nextUrl.clone();
      url.pathname = '/admin/login';
      url.searchParams.set('next', pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Aplica o middleware apenas para /admin/*
export const config = {
  matcher: ['/admin/:path*'],
};