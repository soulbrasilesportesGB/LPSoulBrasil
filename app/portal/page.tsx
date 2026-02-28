'use client';

import { useState } from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PortalPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/portal-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message || 'Não foi possível cadastrar agora.');
      }

      setStatus('success');
      setMessage('Cadastro feito! Vamos te avisar em primeira mão.');
      setName('');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.message || 'Erro ao cadastrar. Tente novamente.');
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium mb-6">
              Portal em atualização
            </span>

            {/* VERSÃO B */}
            <h1 className="text-4xl md:text-5xl font-bebas font-bold leading-tight">
              Prepare-se para o próximo nível
            </h1>

            <p className="mt-4 text-white/90 text-lg leading-relaxed">
              Se você chegou até aqui buscando o Portal Soul Brasil Esportes, saiba que estamos trabalhando nos
              bastidores para entregar uma versão muito mais potente.
            </p>

            <p className="mt-3 text-white/85 leading-relaxed">
              O portal que você conhecia entrou em pausa porque estamos reconstruindo a experiência para 2026:
              mais completa, mais estratégica e com mais oportunidades de verdade.
            </p>

            <p className="mt-3 text-white/80 leading-relaxed">
              Quer ser um(a) dos primeiros a saber? Cadastre seu nome e e-mail e receba as novidades do lançamento.
            </p>
          </div>
        </div>
      </section>

      <SectionContainer>
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-soul-dark mb-1">Nome</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-soul-teal"
                    required
                    minLength={2}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-soul-dark mb-1">E-mail</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-soul-teal"
                    required
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando...' : 'Quero receber as novidades'}
                </Button>

                {message && (
                  <p
                    className={[
                      'text-sm',
                      status === 'success' ? 'text-soul-green' : '',
                      status === 'error' ? 'text-red-600' : '',
                    ].join(' ')}
                  >
                    {message}
                  </p>
                )}
              </form>

              <p className="mt-4 text-xs text-gray-500">
                A Soul usa seu e-mail apenas para avisos sobre o lançamento do novo portal.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}