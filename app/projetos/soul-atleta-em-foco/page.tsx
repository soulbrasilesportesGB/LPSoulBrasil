// /home/project/app/projetos/soul-atleta-em-foco/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import {
  ShieldCheck,
  ClipboardList,
  Search,
  FileText,
  ArrowRight,
  Users,
  Building2,
  User,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Layers,
  CalendarDays,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soul Atleta em Foco | Soul Brasil Esportes',
  description:
    'Programa estruturado de apoio ao esporte, com critérios claros, governança e gestão profissional. Apoie pelo Portal da Soul.',
};

const PORTAL_URL = 'https://app.soulbrasil.co';
const GOVERNANCA_URL = '/governanca/soul-atleta-em-foco';

function ExternalCta({ label }: { label: string }) {
  return (
    <Button
      asChild
      size="lg"
      className="w-full sm:w-auto rounded-full bg-soul-teal text-white hover:bg-soul-teal/90 shadow-sm"
    >
      <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
        <span className="whitespace-normal">{label}</span>
        <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
      </a>
    </Button>
  );
}

function SecondaryCta({ label, href }: { label: string; href: string }) {
  return (
    <Button
      asChild
      size="lg"
      className="w-full sm:w-auto rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 whitespace-normal"
      variant="outline"
    >
      <Link href={href}>
        <span className="whitespace-normal">{label}</span>
        <ChevronRight className="ml-2 h-4 w-4 shrink-0" />
      </Link>
    </Button>
  );
}

function SoftCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="border-0 shadow-lg rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-11 w-11 rounded-2xl bg-soul-teal/10 text-soul-teal flex items-center justify-center shrink-0">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-soul-dark">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 leading-relaxed">{text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Step({
  n,
  title,
  text,
  isLast,
}: {
  n: number;
  title: string;
  text: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center shrink-0">
        <div className="h-10 w-10 rounded-full bg-soul-teal text-white flex items-center justify-center font-semibold">
          {n}
        </div>
        {!isLast && <div className="w-px flex-1 bg-gray-200 mt-2" />}
      </div>
      <div className={isLast ? 'pb-0' : 'pb-8'}>
        <h4 className="text-base font-semibold text-soul-dark">{title}</h4>
        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function SoulAtletaEmFocoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-soul-dark" />

        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* Texto */}
            <div className="lg:col-span-7 min-w-0">
              <div className="w-full max-w-full sm:max-w-3xl mx-auto lg:mx-0 min-w-0 h-full text-white rounded-3xl bg-soul-dark/70 backdrop-blur-md border border-white/10 shadow-2xl p-5 sm:p-6 md:p-10">
                {/* Badge (arrumado no mobile: “chips” quebram bonito) */}
                <div className="mb-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/85">
                    <Sparkles className="h-3.5 w-3.5 shrink-0" />
                    <span className="font-medium">Programa</span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Estruturado', 'Governança', 'Ciclos'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-xs text-white/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h1 className="font-bebas font-bold text-white leading-[0.95] break-words text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Soul Atleta em Foco
                </h1>

                <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Apoio estruturado ao esporte, com critérios claros, governança e gestão profissional.
                </p>

                <p className="mt-4 text-white/90 leading-relaxed max-w-2xl text-sm sm:text-base">
                  O Soul Atleta em Foco é um programa da Soul Brasil Esportes que conecta empresas e pessoas físicas a atletas
                  por meio de um modelo organizado, com regras claras, acompanhamento e prestação de contas ao longo de todo
                  o ciclo.
                </p>

                {/* Botões (sem “vazado”) */}
                <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <ExternalCta label="Ir para o Portal da Soul e apoiar o esporte" />
                  <SecondaryCta label="Ver governança do programa" href={GOVERNANCA_URL} />
                </div>

                <div className="mt-5 text-xs sm:text-sm text-white/75">
                  Aporte e cadastro acontecem no Portal (área do parceiro). Esta página não realiza pagamento.
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="lg:col-span-5">
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl min-h-[220px] sm:min-h-[280px] lg:min-h-0 lg:h-full">
                <Image
                  src="/images/portal/hero-atletas.jpg"
                  alt="Atletas - Soul Brasil Esportes"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soul-dark/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Por que existe */}
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start min-w-0">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
                Por que esse programa existe
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Muitos atletas com potencial enfrentam dificuldades de acesso a recursos e oportunidades, não por falta de talento,
                mas por falta de estrutura.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O Soul Atleta em Foco existe para organizar o apoio ao esporte de forma profissional, transparente e responsável,
                reduzindo improvisos e repasses informais.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <SoftCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Segurança operacional"
                text="Modelo organizado, com regras claras, documentação e rastreabilidade das decisões e recursos."
              />
              <SoftCard
                icon={<ClipboardList className="h-5 w-5" />}
                title="Prestação de contas"
                text="Acompanhamento e prestação de contas estruturados ao longo do ciclo do programa."
              />
              <SoftCard
                icon={<Layers className="h-5 w-5" />}
                title="Programa coletivo"
                text="Você apoia o programa como um todo — a seleção é conduzida pela Soul, sem escolha individual de atletas."
              />
              <SoftCard
                icon={<FileText className="h-5 w-5" />}
                title="Gestão profissional"
                text="A Soul atua como gestora do programa: governança, processos e acompanhamento."
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 3) O que é */}
      <SectionContainer background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 min-w-0">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
                O que é o Soul Atleta em Foco
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O Soul Atleta em Foco é um <strong>programa estruturado de apoio ao esporte</strong>, operado em ciclos definidos, com:
              </p>

              <ul className="mt-5 space-y-2 text-gray-700">
                {[
                  'critérios claros de seleção',
                  'governança do uso dos recursos',
                  'acompanhamento da execução',
                  'prestação de contas organizada',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-soul-teal mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Ao apoiar o programa, você contribui para uma iniciativa coletiva, e não para um atleta individual específico.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 md:p-8 bg-gradient-to-br from-soul-teal/10 via-white to-soul-green/10">
                    <div className="flex items-center gap-3 text-soul-dark">
                      <HelpCircle className="h-5 w-5 text-soul-teal" />
                      <h3 className="text-xl font-semibold">Em uma frase</h3>
                    </div>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      Um programa governado por ciclos, com seleção conduzida pela Soul e acompanhamento estruturado, para que
                      o apoio ao esporte aconteça com organização e previsibilidade.
                    </p>

                    <div className="mt-6 grid sm:grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-soul-dark">
                          <CalendarDays className="h-4 w-4 text-soul-teal" />
                          Ciclos
                        </div>
                        <p className="mt-1 text-sm text-gray-600">Operação por períodos definidos.</p>
                      </div>
                      <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-soul-dark">
                          <Search className="h-4 w-4 text-soul-teal" />
                          Critérios
                        </div>
                        <p className="mt-1 text-sm text-gray-600">Regras e elegibilidade definidos previamente.</p>
                      </div>
                      <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-soul-dark">
                          <FileText className="h-4 w-4 text-soul-teal" />
                          Evidências
                        </div>
                        <p className="mt-1 text-sm text-gray-600">Acompanhamento e prestação de contas organizados.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 4) Como funciona */}
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
                Como funciona
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
                O apoio acontece dentro do Portal da Soul. O cadastro como Parceiro é obrigatório.
              </p>
            </div>
            <div className="lg:shrink-0 w-full sm:w-auto">
              <ExternalCta label="Ir para o Portal da Soul" />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start min-w-0">
            <div className="lg:col-span-7 min-w-0">
              <div className="w-full rounded-2xl border border-gray-100 bg-white shadow-lg p-6 md:p-7">
                <h3 className="text-lg font-semibold text-soul-dark mb-5">
                  Como apoiar o Soul Atleta em Foco
                </h3>

                <div className="mt-2">
                  <Step
                    n={1}
                    title="Você decide apoiar o programa"
                    text="O apoio é feito ao programa como um todo, dentro de regras previamente definidas."
                  />
                  <Step
                    n={2}
                    title="Cadastre-se no Portal como Parceiro"
                    text="Crie sua conta no Portal da Soul para acessar a área do parceiro."
                  />
                  <Step
                    n={3}
                    title="Escolha o formato e o valor do aporte"
                    text="Você define o valor e a periodicidade dentro da plataforma."
                  />
                  <Step
                    n={4}
                    title="Finalize o apoio dentro do Portal"
                    text="A conclusão do apoio acontece exclusivamente no Portal."
                  />
                  <Step
                    n={5}
                    title="Acompanhe o programa ao longo do ciclo"
                    text="O programa conta com acompanhamento e prestação de contas ao longo do ciclo."
                    isLast
                  />
                </div>

                <div className="mt-6">
                  <ExternalCta label="Criar cadastro no Portal da Soul" />
                </div>

                <div className="mt-4 text-xs text-gray-500 leading-relaxed">
                  Observação: esta página não realiza aportes. O cadastro e o apoio acontecem no Portal.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <Card className="border border-gray-100 shadow-lg rounded-2xl">
                <CardContent className="p-6 md:p-7">
                  <h3 className="text-lg font-semibold text-soul-dark">
                    O que você encontra no Portal
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Tudo que envolve cadastro, apoio e acompanhamento fica centralizado na área do parceiro.
                  </p>

                  <ul className="mt-5 space-y-3 text-sm text-gray-700">
                    {[
                      'Cadastro do apoiador (PF ou PJ)',
                      'Escolha de valor e periodicidade do aporte',
                      'Histórico e status do apoio',
                      'Atualizações do ciclo e comunicações do programa',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl bg-soul-teal/10 p-4">
                    <div className="text-sm font-semibold text-soul-dark">Importante</div>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                      O apoio é feito ao programa (iniciativa coletiva). Não há escolha individual de atleta nesta etapa.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 5) Níveis */}
      <SectionContainer background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
            Níveis de apoio ao programa
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
            O Soul Atleta em Foco possui diferentes níveis de apoio, definidos de acordo com o valor e a periodicidade do aporte.
            Todos os níveis seguem as mesmas regras de governança.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 text-soul-dark">
                  <User className="h-5 w-5 text-soul-teal" />
                  <h3 className="text-xl font-semibold">Nível 1 — Parceiro do Programa</h3>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  <strong>A partir de R$ 99</strong> (aporte único ou recorrente)
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {[
                    'Participação no programa',
                    'Comunicações periódicas sobre o andamento do ciclo',
                    'Relatórios consolidados do programa',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 text-soul-dark">
                  <Users className="h-5 w-5 text-soul-teal" />
                  <h3 className="text-xl font-semibold">Nível 2 — Parceiro Ativo</h3>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  <strong>A partir de R$ 600 acumulados</strong> (mensal ou semestral)
                </p>

                <div className="mt-3 text-sm text-gray-600">
                  Tudo do nível anterior, mais:
                </div>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {[
                    'Conteúdos exclusivos sobre o programa',
                    'Atualizações sobre modalidades e perfis apoiados',
                    'Reconhecimento institucional como parceiro ativo',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 text-soul-dark">
                  <Building2 className="h-5 w-5 text-soul-teal" />
                  <h3 className="text-xl font-semibold">Nível 3 — Parceiro Estratégico</h3>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  <strong>A partir de R$ 1.200</strong> (anual)
                </p>

                <div className="mt-3 text-sm text-gray-600">
                  Tudo do nível anterior, mais:
                </div>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {[
                    'Relatório consolidado de encerramento do ciclo',
                    'Reconhecimento institucional ampliado',
                    'Convites para encontros institucionais online do ecossistema Soul (quando houver)',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 w-full sm:w-auto">
            <ExternalCta label="Ir para o Portal da Soul" />
          </div>
        </div>
      </SectionContainer>

      {/* 6) Benefícios PF/PJ */}
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
            Benefícios para quem apoia
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-soul-teal" />
                  <h3 className="text-xl font-semibold text-soul-dark">Para empresas</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {[
                    'Associação institucional a um programa estruturado',
                    'Organização contratual e governança do processo',
                    'Relatórios consolidados de uso dos recursos',
                    'Emissão de nota fiscal conforme regras do programa',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-soul-teal" />
                  <h3 className="text-xl font-semibold text-soul-dark">Para pessoas físicas</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {[
                    'Participação em um programa contínuo e organizado',
                    'Clareza sobre como o recurso é utilizado',
                    'Acompanhamento do impacto do programa',
                    'Apoio ao esporte com critérios claros',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* 7) Governança (botões sem vazado) */}
      <SectionContainer background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
                Governança, segurança e critérios
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O Soul Atleta em Foco foi desenhado para oferecer segurança e previsibilidade:
              </p>
            </div>

            <div className="lg:col-span-7">
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                    {[
                      'critérios definidos previamente',
                      'seleção conduzida pela Soul',
                      'regras claras de uso do recurso',
                      'acompanhamento e prestação de contas',
                      'contratos e documentação organizados',
                      'rastreabilidade das decisões',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <ShieldCheck className="h-4 w-4 text-soul-teal mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="w-full sm:w-auto rounded-full bg-soul-teal text-white hover:bg-soul-teal/90"
                    >
                      <Link href={GOVERNANCA_URL}>
                        <span className="whitespace-normal">Veja como funciona a governança do programa</span>
                        <ChevronRight className="ml-2 h-4 w-4 shrink-0" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      className="w-full sm:w-auto rounded-full border border-gray-200 bg-white text-soul-dark hover:bg-gray-50"
                      variant="outline"
                    >
                      <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                        <span className="whitespace-normal">Ir para o Portal da Soul</span>
                        <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 8) Primeiro ciclo */}
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-8 md:p-10 bg-gradient-to-br from-soul-teal/10 via-white to-soul-green/10">
              <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
                Primeiro ciclo do programa
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl">
                Neste momento, a Soul está lançando a estrutura do Soul Atleta em Foco.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-4xl">
                O primeiro ciclo do programa, com foco, categorias e critérios específicos, será definido em breve.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-4xl">
                Os aportes realizados nesta fase inauguram o programa e serão alocados conforme as regras do primeiro ciclo.
              </p>

              <div className="mt-6 w-full sm:w-auto">
                <ExternalCta label="Ir para o Portal da Soul" />
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* 9) FAQ (botão final bonito) */}
      <SectionContainer background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
            Perguntas frequentes (FAQ)
          </h2>

          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            {[
              { q: 'É doação?', a: 'Não. Os aportes não configuram doação.' },
              { q: 'Tem benefício fiscal?', a: 'Não há promessa ou garantia de benefício fiscal.' },
              { q: 'Posso escolher um atleta específico?', a: 'Não. O apoio é feito ao programa.' },
              { q: 'Como sei que o recurso foi bem utilizado?', a: 'O programa conta com acompanhamento e prestação de contas.' },
              { q: 'Onde faço o aporte?', a: 'O apoio é realizado exclusivamente pelo Portal da Soul.' },
            ].map((item) => (
              <Card key={item.q} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <details>
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-2xl bg-soul-teal/10 text-soul-teal flex items-center justify-center shrink-0">
                          <HelpCircle className="h-5 w-5" />
                        </div>
                        <span className="font-semibold text-soul-dark">{item.q}</span>
                      </div>
                      <span className="text-soul-teal">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-md">
              <ExternalCta label="Criar conta no Portal da Soul e apoiar o esporte" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 10) CTA final */}
      <section className="py-16 md:py-20 bg-soul-dark text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bebas font-bold">
              Pronto para apoiar o esporte de forma estruturada?
            </h2>
            <p className="mt-3 text-white/85 leading-relaxed max-w-2xl">
              O cadastro e o apoio acontecem no Portal da Soul. Esta página serve para orientar e dar clareza sobre o programa.
            </p>

            <div className="mt-8 w-full sm:w-auto">
              <ExternalCta label="Ir para o Portal da Soul" />
            </div>

            <div className="mt-6 text-sm text-white/75">
              Disclaimer: os aportes não configuram doação, não garantem benefício fiscal e não envolvem promessa de resultado esportivo.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}