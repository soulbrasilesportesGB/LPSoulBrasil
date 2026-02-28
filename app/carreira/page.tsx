'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Heart, Target, Zap } from 'lucide-react';

export default function CarreiraPage() {
  return (
    <>
      {/* Header */}
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
                Trabalhe Conosco
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bebas font-bold mb-6 leading-tight">
                Carreira na Soul Brasil Esportes
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Nosso time está completo por enquanto, mas seguimos de portas abertas
                para talentos que queiram construir o futuro do esporte com a gente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banco de talentos */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-soul-teal/5 to-soul-green/5">
            <CardContent className="p-10">
              <div className="flex justify-center mb-6">
                <Heart className="h-10 w-10 text-soul-teal mx-3" />
                <Target className="h-10 w-10 text-soul-green mx-3" />
                <Zap className="h-10 w-10 text-soul-yellow mx-3" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bebas font-bold text-soul-dark mb-4">
                Banco de Talentos
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mesmo sem vagas abertas no momento, valorizamos pessoas com propósito,
                sensibilidade e energia para transformar o esporte brasileiro.
                Se você se identifica com a Soul, envie seu currículo e conte pra gente
                como gostaria de somar ao nosso time.
              </p>
              <Button asChild size="lg">
                <a href="mailto:contato@soulbrasil.co?subject=Banco%20de%20Talentos%20-%20Soul%20Brasil%20Esportes">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Currículo
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
