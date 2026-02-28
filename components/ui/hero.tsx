'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// util simples p/ juntar classes
function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ');
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  backgroundImage?: string;
  variant?: 'default' | 'centered' | 'split';
  className?: string; // usado abaixo
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  },
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  variant = 'default',
  className, // <- agora é usado
}: HeroProps) {
  return (
    <section
      className={cn(
        // colchão para não ficar atrás do navbar fixo
        'relative pt-24 md:pt-32 pb-10 md:pb-16 min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 hero-bg">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-soul-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <motion.div
          className={cn(
            'max-w-7xl',
            variant === 'centered' && 'mx-auto text-center',
            variant === 'split' && 'grid lg:grid-cols-2 gap-12 items-center'
          )}
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* Coluna de texto */}
          <div className={cn(variant === 'split' && 'lg:pr-8')}>
            {subtitle && (
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium backdrop-blur-sm">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bebas font-bold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="bg-soul-yellow hover:bg-soul-orange text-soul-dark font-semibold px-8 py-4 rounded-full group transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}

              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-full group transition-all duration-300 backdrop-blur-sm"
                >
                  <Link href={secondaryCta.href}>
                    <Play className="mr-2 h-5 w-5" />
                    {secondaryCta.text}
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Coluna da imagem (só no layout split) */}
          {variant === 'split' && (
            <motion.div
              variants={fadeInUp}
              className="relative lg:pl-8 flex justify-self-end"
            >
              <div className="relative w-full max-w-[700px] h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <img
                  src="/images/hero-photo.jpg"
                  alt="Atleta acompanhada pela Soul Brasil Esportes"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soul-dark/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
