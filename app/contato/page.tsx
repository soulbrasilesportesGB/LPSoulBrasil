'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Mail, MessageCircle, Calendar, MapPin, Phone } from 'lucide-react';

const contactMethods = [
  {
    title: 'Email Direto',
    description: 'Responderemos em até 24h',
    icon: Mail,
    contact: 'contato@soulbrasil.co',
    href: 'mailto:contato@soulbrasil.co',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'WhatsApp',
    description: 'Converse conosco em tempo real',
    icon: MessageCircle,
    contact: '+55 (41) 98407-9334',
    href: 'https://wa.me/5541984079334',
    color: 'from-green-500 to-green-600'
  },
  /*
  {
    title: 'Reunião',
    description: 'Agende uma conversa objetiva para entender o Portal e a operação.',
    icon: Calendar,
    contact: 'Agendar chamada',
    href: 'https://calendly.com/seu-usuario/30min',
    color: 'from-purple-500 to-purple-600'
  },
  */
];

const officeInfo = [
  {
    label: 'Endereço',
    value: 'Curitiba, PR - Brasil',
    icon: MapPin
  },
  {
    label: 'Atendimento',
    value: 'Segunda à Sexta: 10h às 18h',
    icon: Calendar
  },
  {
    label: 'WhatsApp',
    value: '+55 (41) 98407-9334',
    icon: Phone
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium mb-6">
                Fale Conosco
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas font-bold mb-6 leading-tight">
                Vamos Conversar
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Se você representa uma empresa, um atleta ou um parceiro do ecossistema, fale com a Soul. A gente explica o novo ciclo, o Portal e como operamos a relação com governança, critérios e acompanhamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:contato@soulbrasil.co"
                  className="bg-soul-yellow hover:bg-soul-orange text-soul-dark px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Enviar mensagem
                </Link>
                <Link
                  href="https://wa.me/5541984079334"
                  target="_blank"
                  className="border-2 border-white text-white hover:bg-white hover:text-soul-dark px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Chamar no WhatsApp
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Métodos de contato (cards) */}
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bebas font-bold text-soul-dark mb-4">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  <Link
                    href={method.href}
                    target={method.href?.startsWith('http') ? '_blank' : undefined}
                    className="inline-flex items-center text-soul-teal font-medium hover:text-soul-green transition-colors"
                  >
                    {method.contact}
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* Info do escritório (sem mapa) */}
      <SectionContainer>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark mb-8">
            Informações de contato
          </h2>
          <div className="space-y-8 text-left">
            {officeInfo.map((info, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="bg-soul-teal/10 p-3 rounded-lg flex-shrink-0">
                  <info.icon className="h-6 w-6 text-soul-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-soul-dark mb-2">{info.label}</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}