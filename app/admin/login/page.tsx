'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/admin/blog');
    } else {
      setError('Senha incorreta.');
      setLoading(false);
    }
  }

  return (
    <>
      <section className="pt-32 pb-10 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold">Área Administrativa</h1>
          <p className="text-white/90 mt-2">Faça login para gerenciar o blog</p>
        </div>
      </section>

      <SectionContainer>
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Entrar</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Senha de Admin</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a senha"
                    required
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}