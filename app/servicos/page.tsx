'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Trophy, // ícone genérico para seção
  Target,
  Handshake,
  GraduationCap,
  CheckCircle2,
  CalendarDays,
  ChartBar,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium mb-6">
              Nossos Serviços
            </span>
            <h1 className="text-5xl md:text-6xl font-bebas font-bold leading-tight">
              Soluções que transformam talento em trajetória
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Um ecossistema de serviços para atletas e projetos esportivos — do
              planejamento de carreira às conexões com marcas e ao
              desenvolvimento de competências.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESUMO EM CARDS */}
      <SectionContainer>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Gestão de Carreira */}
          <Card id="carreira" className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-soul-teal/10 mb-6">
                <Target className="h-6 w-6 text-soul-teal" />
              </div>
              <h3 className="text-2xl font-bebas font-bold text-soul-dark mb-3">
                Gestão de Carreira
              </h3>
              <p className="text-gray-600 mb-6">
                Plano integrado com metas, calendário competitivo e suporte 360º
                — guiado por dados.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-teal"/> Diagnóstico 360º (técnico, físico e imagem)</li>
                <li className="flex items-start gap-2"><CalendarDays className="h-4 w-4 mt-0.5 text-soul-teal"/> Planejamento de temporada & metas</li>
                <li className="flex items-start gap-2"><FileCheck className="h-4 w-4 mt-0.5 text-soul-teal"/> Gestão de contratos & compliance</li>
                <li className="flex items-start gap-2"><ChartBar className="h-4 w-4 mt-0.5 text-soul-teal"/> Painel de KPIs & relatórios</li>
              </ul>

              <div className="mt-8">
                <Button asChild className="rounded-full px-6">
                  <Link href="/contato?servico=gestao-de-carreira">Fale sobre sua carreira</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Projetos com Marcas & Ativações */}
          <Card id="projetos" className="border-0 shadow-lg bg-gradient-to-br from-soul-teal/10 to-soul-green/10">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-soul-green/10 mb-6">
                <Handshake className="h-6 w-6 text-soul-green" />
              </div>
              <h3 className="text-2xl font-bebas font-bold text-soul-dark mb-3">
                Projetos com Marcas & Ativações
              </h3>
              <p className="text-gray-600 mb-6">
                Conectamos atletas e mercado para criar projetos com propósito e resultado.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-green"/> Matchmaking atleta–mercado</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-green"/> Cocriação de estratégia</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-green"/> Gestão de entregas & mensuração</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-green"/> Conteúdo & PR (ex.: The Players’ Tribune)</li>
              </ul>

              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full px-6 border-soul-teal text-soul-teal">
                  <Link href="/contato?servico=projetos-com-marcas">Propor um projeto</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Educação Esportiva */}
          <Card id="educacao" className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-soul-yellow/10 mb-6">
                <GraduationCap className="h-6 w-6 text-soul-yellow" />
              </div>
              <h3 className="text-2xl font-bebas font-bold text-soul-dark mb-3">
                Educação Esportiva
              </h3>
              <p className="text-gray-600 mb-6">
                Desenvolvimento de competências além do esporte para uma carreira completa e sustentável.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-yellow"/> Conteúdos especializados</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-yellow"/> Mentorias personalizadas</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-soul-yellow"/> Workshops práticos</li>
              </ul>

              <div className="mt-8">
                <Button asChild className="rounded-full px-6">
                  <Link href="/contato?servico=educacao-esportiva">Quero aprender</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* CTA final */}
      <SectionContainer background="dark">
        <div className="text-center text-white max-w-3xl mx-auto">
          <Trophy className="mx-auto h-10 w-10 text-soul-yellow mb-4" />
          <h2 className="text-4xl md:text-5xl font-bebas font-bold mb-4">
            Pronto para o próximo nível?
          </h2>
          <p className="text-white/85 mb-8">
            Escreva pra gente e vamos montar, juntos, o próximo capítulo da sua trajetória.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>
      </SectionContainer>
    </>
  );
}