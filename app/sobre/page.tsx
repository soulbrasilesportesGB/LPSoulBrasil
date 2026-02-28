'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { MetricCard } from '@/components/ui/metric-card';
import { CTABlock } from '@/components/ui/cta-block';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Heart, 
  Users, 
  Zap,
  Award,
  Globe,
  Lightbulb,
  Shield
} from 'lucide-react';

const values = [
  {
    title: 'Visibilidade qualificada',
    description: 'Acesso estruturado para decisores, sem exposição genérica.',
    icon: Users,
  },
  {
    title: 'Critérios claros',
    description: 'Regras definidas para operação, seleção e relacionamento.',
    icon: Target,
  },
  {
    title: 'Governança',
    description: 'Contratos, documentação e organização da relação.',
    icon: Shield,
  },
  {
    title: 'Acompanhamento',
    description: 'Gestão do ciclo com método e previsibilidade.',
    icon: Zap,
  },
  {
    title: 'Conexões estruturadas',
    description: 'Sem improviso, sem atalhos, com processo.',
    icon: Globe,
  },
];

const team = [
  {
    name: 'Maria Teresa Publio Dias',
    role: 'CEO & Fundadora',
    description: 'Atleta de judô, com mais de 15 anos de experiência no setor esportivo, participou de grandes projetos como Corinthians, Buffalo Bills, Stock Light e Copa América.',
    image: 'https://www.espm.br/wp-content/uploads/Maria-Teresa-Publio-Dias-nova.jpg'
  },
  {
    name: 'Patricia Di Cunto Bracco',
    role: 'Especialista em Projetos',
    description: 'Atleta de esgrima, profissional com experiência em Gerenciamento de Projetos, sócia-fundadora da Esgrimaster e líder do Comitê Esporte do Grupo Mulheres do Brasil.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHx3uam6RhVvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721655534723?e=2147483647&v=beta&t=42ZKYlZKa3a_RFWFAvwseGnDAdhk9adUxktif_DiEb0'
  },
  {
    name: 'Ana Clara Miranda',
    role: 'Assistente de Projetos',
    description: 'Atleta da seleção brasileira de Roller Derby, além de experiências na área de conteúdo esportivo, mulheres no esporte e inclusão.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCbUc3reZXggcvqFay8MwElVT9mcsy3GteQ&s'
  },
  {
    name: 'Fernando Patara',
    role: 'Advisor',
    description: 'Investidor, Advisor e Mentor de startups, especialista em inovação e tecnologia aplicada ao esporte. É CoFundador do Arena Hub, o maior centro de inovação esportiva da América Latina',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQE1Vk2KmE0Qrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1612880605995?e=2147483647&v=beta&t=hWnDbCtkYGpHTii1XZNqeogJMqCpKp9BOpq8PtWlHX8'
  },
];

const achievements = [
  {
    value: 6,
    label: 'Anos de atuação',
    description: 'Experiência acumulada no ecossistema esportivo'
  },
  {
    value: 50,
    label: 'Modalidades alcançadas',
    prefix: '+',
    description: 'Diversidade de esportes conectados à operação'
  },
  {
    value: 1000,
    label: 'Horas de operação viabilizadas',
    suffix: '+',
    description: 'Atuação multidisciplinar estruturada ao longo dos ciclos'
  },
  {
    value: 10,
    label: 'Reconhecimentos do setor',
    suffix: '+',
    description: 'Validação institucional e presença no mercado'
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        
        <div className="relative container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium mb-6">
                A Soul hoje
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas font-bold mb-6 leading-tight">
                Sobre a Soul Brasil Esportes
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
  A Soul é uma plataforma que estrutura a relação entre empresas e atletas com governança, processo e gestão profissional.
</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6">
  A Soul hoje
</h2>

<p className="text-lg text-gray-600 leading-relaxed mb-6">
  A Soul é uma plataforma que estrutura a relação entre empresas e atletas com governança, processo e gestão profissional.
</p>

<p className="text-lg text-gray-600 leading-relaxed">
  O esporte ainda depende de acesso restrito e de abordagens improvisadas. Atletas com potencial seguem invisíveis para quem decide, enquanto empresas travam por falta de estrutura, clareza e segurança para se aproximar do esporte.
</p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-soul-teal/10 to-soul-green/10 rounded-2xl p-8 border border-soul-teal/20">
              <div className="w-full h-full bg-gradient-to-br from-soul-yellow/20 to-soul-teal/20 rounded-xl flex items-center justify-center p-8">
  <div className="text-center text-soul-dark max-w-sm">
    <Target className="w-16 h-16 mx-auto mb-4 text-soul-teal" />
    <h3 className="text-2xl font-bebas font-bold mb-2">
      Governança e processo
    </h3>
    <p className="text-gray-600 leading-relaxed">
      Critérios claros, contratos, documentação e acompanhamento ao longo do ciclo.
    </p>
  </div>
</div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Evolução */}
<SectionContainer>
  <div className="max-w-4xl mx-auto text-center">
    <motion.h2
      className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Uma Soul em evolução
    </motion.h2>

    <motion.p
      className="text-lg text-gray-600 leading-relaxed mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      A Soul não nasceu como um portal. Ela foi construída em ciclos de aprendizado no mercado esportivo, testando formatos e entendendo o que realmente destrava acesso e confiança nesse ecossistema.
    </motion.p>

    <motion.p
      className="text-lg text-gray-600 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Com o tempo, ficou claro que o valor não estava em registrar jornadas esportivas, mas em estruturar visibilidade e conexões reais, com governança e processo. É nesse ponto que a Soul atua hoje.
    </motion.p>
  </div>
</SectionContainer>

      {/* Values Section */}
      <SectionContainer background="gray">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nosso jeito de operar
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Como estruturamos a relação entre parceiros e atletas na prática.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-soul-teal/20">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-soul-teal/10 to-soul-green/10 rounded-xl mb-6 group-hover:from-soul-teal group-hover:to-soul-green group-hover:text-white transition-all duration-300">
                    <value.icon className="h-8 w-8 text-soul-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bebas font-bold text-soul-dark mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Achievements Section */}
      <SectionContainer>
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Estrutura construída no ecossistema
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Indicadores que refletem escala de atuação, organização e presença no mercado esportivo.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <MetricCard
              key={achievement.label}
              {...achievement}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Team Section}
      <SectionContainer background="gradient" id="equipe">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossa Equipe
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Profissionais especializados e apaixonados pelo esporte que trabalham 
            incansavelmente pelo sucesso dos nossos atletas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-soul-teal/10 to-soul-green/10 p-4">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bebas font-bold text-soul-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-soul-teal font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
      */}

      {/* CTA Section */}
      <CTABlock
  subtitle="Novo ciclo"
  title="Conheça o Portal da Soul"
  description="O Portal da Soul organiza a relação entre empresas e atletas com jornadas claras, critérios definidos e acompanhamento estruturado."
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