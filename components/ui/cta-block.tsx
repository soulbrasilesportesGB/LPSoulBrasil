'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTABlockProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'gradient' | 'dark';
  showPattern?: boolean;
}

export function CTABlock({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  variant = 'gradient',
  showPattern = true,
}: CTABlockProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-soul-dark text-white';
      case 'gradient':
        return 'bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white';
      default:
        return 'bg-white border border-gray-200 text-soul-dark';
    }
  };

  return (
    <motion.section
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={`relative py-20 lg:py-28 ${getVariantClasses()}`}>
        {/* Background Pattern */}
        {showPattern && (
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:20px_20px]" />
          </div>
        )}

        <div className="relative container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-soul-yellow/20 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-8 w-8 text-soul-yellow" aria-hidden="true" />
            </motion.div>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                className={`text-sm font-medium uppercase tracking-wider mb-4 ${
                  variant === 'default' ? 'text-soul-teal' : 'text-soul-yellow'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            {/* Description */}
            {description && (
              <motion.p
                className={`text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${
                  variant === 'default' ? 'text-gray-600' : 'text-white/90'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
            )}

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className={`font-semibold px-8 py-4 rounded-full group transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  variant === 'default'
                    ? 'bg-soul-teal hover:bg-soul-green text-white'
                    : 'bg-soul-yellow hover:bg-soul-orange text-soul-dark'
                }`}
              >
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              {secondaryCta && (
  <Button
    asChild
    variant="outline"
    size="lg"
    className={`bg-transparent px-8 py-4 rounded-full transition-all duration-300 ${
      variant === 'default'
        ? 'border-2 border-soul-teal text-soul-teal hover:bg-soul-teal hover:text-white'
        : 'border-2 border-white text-white hover:bg-white hover:text-soul-dark'
    }`}
  >
    <Link href={secondaryCta.href}>
      {secondaryCta.text}
    </Link>
  </Button>
)}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}