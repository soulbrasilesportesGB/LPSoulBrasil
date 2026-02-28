import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();

  // Defina a senha no .env como ADMIN_PASSWORD="SUA-SENHA-AQUI"
  const ok = password && process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD;

  if (!ok) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  // cookie httpOnly com expiração de 1 dia
  res.cookies.set('sb_admin', '1', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24,
  });
  return res;
}