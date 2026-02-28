// /home/project/app/governanca/soul-atleta-em-foco/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Governança — Soul Atleta em Foco | Soul Brasil Esportes',
  description:
    'Página de governança do programa Soul Atleta em Foco. Em breve, documento completo e regras detalhadas.',
};

const PORTAL_URL = 'https://app.soulbrasil.co';

export default function GovernancaSoulAtletaEmFoco() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-14 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-soul-dark" />

        <div className="relative container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
              <ShieldCheck className="h-4 w-4" />
              Governança do programa
            </div>

            <h1 className="text-5xl md:text-6xl font-bebas font-bold text-white leading-tight">
              Soul Atleta em Foco — Governança
            </h1>

            <p className="mt-4 text-white text-lg leading-relaxed max-w-3xl">
              Esta página existe para registrar as regras e o funcionamento do programa.
              O documento completo (critérios, ciclos, prestação de contas e responsabilidades)
              será publicado em breve.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Ir para o Portal da Soul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full bg-white/10 text-white border-white/25 hover:bg-white/15"
              >
                <Link href="/contato">Falar com a Soul</Link>
              </Button>
            </div>

            <div className="mt-6 text-sm text-white">
              Observação: esta página não realiza aportes e não substitui o cadastro no Portal.
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder de conteúdo */}
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
                O que vai entrar aqui
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Para evitar promessas vagas, só publicamos quando estiver fechado.
                A estrutura desta página vai cobrir:
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Critérios e elegibilidade', text: 'Regras do ciclo, filtros e condições para participação.' },
                { title: 'Fluxo do programa', text: 'Etapas, prazos, responsabilidades e comunicação.' },
                { title: 'Uso do recurso', text: 'Regras de alocação, limites e itens permitidos.' },
                { title: 'Prestação de contas', text: 'Evidências, periodicidade e padrão de acompanhamento.' },
                { title: 'Contratos e documentos', text: 'Modelo de formalização e documentação do processo.' },
                { title: 'Canal de dúvidas', text: 'Como falar com a Soul quando necessário.' },
              ].map((item) => (
                <Card key={item.title} className="border-0 shadow-lg rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-soul-teal/10 text-soul-teal flex items-center justify-center">
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-soul-dark">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}