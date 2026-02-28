import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    '';

  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    '';

  if (!url || !serviceKey) {
    throw new Error(
      'Supabase env vars faltando. Configure NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY.'
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim().toLowerCase();

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, message: 'Informe seu nome.' }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, message: 'Informe um e-mail válido.' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    // upsert por email (se a pessoa já tinha cadastrado, só atualiza nome)
    const { error } = await supabase
      .from('portal_waitlist')
      .upsert(
        { name, email, source: 'portal_lp' },
        { onConflict: 'email' }
      );

    if (error) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || 'Erro inesperado.' },
      { status: 500 }
    );
  }
}