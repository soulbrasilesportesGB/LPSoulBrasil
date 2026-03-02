'use client';

import { Hero } from '@/components/ui/hero';
import { SectionContainer } from '@/components/ui/section-container';
import { ServiceCard } from '@/components/ui/service-card';
import { MetricCard } from '@/components/ui/metric-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { CTABlock } from '@/components/ui/cta-block';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Trophy,
  Target,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Star,
  Handshake,
  Search
} from 'lucide-react';

const services = [
  {
    title: 'Gestão de Carreira',
    description: 'Plano integrado de carreira com metas, calendário competitivo e suporte 360º — guiado por dados.',
    icon: Trophy,
    features: [
      'Diagnóstico 360º (técnico, físico e imagem)',
      'Planejamento de temporada e metas',
      'Gestão de contratos e compliance',
      'Painel de KPIs e relatórios'
    ],
    href: '/servicos#carreira'
  },
  {
    title: 'Projetos com Marcas & Ativações',
    description: 'Conectamos atletas e o mercado para criar projetos com propósito e resultado.',
    icon: Target,
    features: [
      'Matchmaking atleta-mercado',
      'Cocriação de estratégia',
      'Gestão de entregas e mensuração'
    ],
    href: '/servicos#marcas'
  },
  {
    title: 'Educação Esportiva',
    description: 'Desenvolvimento de competências além do esporte para uma carreira completa e sustentável.',
    icon: BookOpen,
    features: [
      'Conteúdos especializados',
      'Mentorias personalizadas',
      'Workshops práticos'
    ],
    href: '/servicos#educacao'
  },
];

const metrics = [
  {
    value: 3000,
    label: 'Atletas Mapeados',
    suffix: '+',
    description: 'Base construída ao longo de ciclos no ecossistema esportivo, com diversidade de modalidades e regiões'
  },
  {
    value: 100,
    label: 'Conexões Estruturadas',
    suffix: '+',
    description: 'Articulações e operações organizadas entre atletas, empresas, projetos e poder público — com processo e documentação'
  },
  {
    value: 98,
    label: 'Satisfação com a operação',
    suffix: '%',
    description: 'Percepção de clareza, organização e confiabilidade na forma como a Soul conduz as relações'
  },
  {
    value: 20,
    label: 'Empresas envolvidas',
    suffix: '+',
    description: 'Empresas que já operaram ou coconstruíram iniciativas no esporte com apoio da Soul'
  },
];

const testimonials = [
  {
    content: 'Faço parte da equipe da Soul Brasil há muitos anos e tenho muito orgulho dessa trajetória. Cada ação é pensada para fortalecer conexões verdadeiras com os atletas e impulsionar o esporte no país',
    author: {
      name: 'Patrícia Di Cunto Bracco',
      role: 'Atleta Master',
      company: 'Esgrima'
    },
    rating: 5
  },
  {
    content: 'Minha entrada na Soul abriu oportunidades incríveis e me aproximou de pessoas que realmente fazem a diferença no esporte.',
    author: {
      name: 'Isabela Abreu',
      role: 'Atleta Olímpica',
      company: 'Pentatlo Moderno'
    },
    rating: 5,
    featured: true
  },
  {
    content: 'O trabalho com a psicóloga da Soul fez diferença na minha trajetória. Senti evolução na confiança e no desempenho, principalmente em momentos que exigem mais calma e equilíbrio.',
    author: {
      name: 'Guilherme Dubiel',
      role: 'Atleta Profissional',
      company: 'Esgrima'
    },
    rating: 5
  },
];

const partners = [
  { name: 'SMELJ', src: 'https://muraldoparana.com.br/wp-content/uploads/2021/03/SMELJ.jpeg' },
  { name: 'Prefeitura de Curitiba', src: 'https://mid.curitiba.pr.gov.br/2025/00460263.png' },
  { name: 'The Players Tribune', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/The_Players%27_Tribune_logo.svg/2560px-The_Players%27_Tribune_logo.svg.png' },
  { name: 'Retize', src: 'https://public.flourish.studio/uploads/2329514/13cc93d6-88c9-4088-8b9e-42f345757779.png' },
  { name: 'Futebol de Rua', src: '/images/images_(1).png' },
  { name: 'UniOpet', src: '/images/images.png' },
  { name: 'NeuroPerformance', src: '/images/marca_neuroperformance_final_prancheta-1-c_pia-8.png' },
];

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <Hero
        title="O novo Portal da Soul já está no ar."
        description="Organizamos a relação entre empresas e atletas com processo, governança e operação estruturada."
        primaryCta={{
          text: 'Acessar o Portal',
          href: 'https://app.soulbrasil.co/'
        }}
        secondaryCta={{
          text: 'Entender a nova Soul',
          href: '/sobre'
        }}
        variant="split"
      />

      {/* Services Section}
      <SectionContainer id="servicos" background="gray">
        <div className="text-center mb-16">
          <motion.p
            className="text-sm font-medium text-soul-teal uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossos Serviços
          </motion.p>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Soluções Completas para Sua Carreira Esportiva
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Oferecemos um ecossistema completo de serviços especializados para 
            atletas que buscam excelência esportiva.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                href={service.href}
                variant={index === 1 ? 'featured' : 'default'}
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>
        */}
      {/* Metrics Section */}
      <SectionContainer background="gradient">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Estrutura que já opera no ecossistema
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nossa atuação conecta empresas e atletas com método, processo e governança — com experiência prática acumulada no mercado esportivo.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              suffix={metric.suffix}
              description={metric.description}
            />
          ))}
        </div>
      </SectionContainer>

      {/* O que muda com o novo ciclo */}
      <SectionContainer background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-6 sm:p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8"
            >
              {/* Coluna esquerda */}
              <div className="lg:w-[48%]">
                <p className="text-xs font-semibold text-soul-teal uppercase tracking-wider">
                  Novo ciclo
                </p>

                <h2 className="mt-3 text-4xl md:text-5xl font-bebas font-bold text-soul-dark leading-[0.95]">
                  O que muda com o novo ciclo
                </h2>

                <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
                  A Soul evoluiu: saímos de um modelo centrado em registro de jornada esportiva
                  para uma estrutura focada em <strong>visibilidade qualificada</strong> e
                  <strong> conexões organizadas</strong> entre parceiros e atletas.
                </p>

                <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                  Hoje, nosso foco é <strong>governar</strong> essa relação com método, processo e segurança.
                </p>

                <div className="mt-6">
                  <Link
                    href="/sobre"
                    className="inline-flex items-center justify-center rounded-full bg-soul-teal px-5 py-3 text-white font-medium hover:bg-soul-teal/90 transition-colors"
                  >
                    Entender a nova Soul
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              {/* Coluna direita: lista com ênfase */}
              <div className="lg:w-[52%]">
                <div className="rounded-2xl bg-soul-teal/10 border border-soul-teal/20 p-5 sm:p-6">
                  <p className="text-sm font-semibold text-soul-dark">
                    O que passa a ser central na operação
                  </p>

                  <ul className="mt-4 space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-soul-teal shrink-0" />
                      <span><strong>Visibilidade qualificada</strong> para decisores (não “exposição”)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-soul-teal shrink-0" />
                      <span><strong>Conexões</strong> com critérios e regras claras</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-soul-teal shrink-0" />
                      <span><strong>Contratos</strong> e documentação estruturada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-soul-teal shrink-0" />
                      <span><strong>Acompanhamento</strong> da operação (não só “conectar e sumir”)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-soul-teal shrink-0" />
                      <span><strong>Redução</strong> de improviso e informalidade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer id="testimonials">
        <div className="text-center mb-16">
          <motion.p
            className="text-sm font-medium text-soul-teal uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Confiança na prática
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            O que dizem sobre a forma como a Soul opera
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Parceiros */}
      <SectionContainer background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bebas font-bold text-soul-dark mb-10">
            Parceiros
          </h2>

          <div className="space-y-10">
            {/* Afiliada a */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-4 text-center">
                Startup Afiliada
              </p>

              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-80">
                {[
                  { src: "/logos/arena-hub.png", alt: "Arena Hub" },
                  { src: "/logos/sportstech-latam.png", alt: "SportsTech Latam" },
                  { src: "/logos/cwb-startups.png", alt: "CWB Startups" },
                ].map((logo) => (
                  <div
                    key={logo.src}
                    className="w-[180px] h-[80px] flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Startup residente */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-4 text-center">
                Startup residente
              </p>

              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-80">
                {[
                  { src: "/logos/worktiba.png", alt: "Worktiba" },
                ].map((logo) => (
                  <div
                    key={logo.src}
                    className="w-[180px] h-[80px] flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Programa 2025 */}
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 mb-4 text-center">
                Startup selecionada (2025)
              </p>

              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-80">
                {[
                  { src: "/logos/parana-anjo-inovador.png", alt: "Paraná Anjo Inovador" },
                  { src: "/logos/secretaria-inovacao-ia.png", alt: "Secretaria da Inovação e Inteligência Artificial" },
                ].map((logo) => (
                  <div
                    key={logo.src}
                    className="w-[180px] h-[80px] flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>


      {/* CTA Section */}
      <CTABlock
        subtitle="Pronto para operar com mais estrutura no esporte?"
        title="Conheça o novo ciclo da Soul"
        description="O Portal da Soul organiza a relação entre empresas e atletas com governança, critérios e acompanhamento."
        primaryCta={{
          text: 'Acessar o Portal',
          href: 'https://app.soulbrasil.co/'
        }}
        secondaryCta={{
          text: 'Falar com a Soul',
          href: '/contato'
        }}
      />
    </>
  );
}