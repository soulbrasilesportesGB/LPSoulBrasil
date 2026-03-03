'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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

export function AthleteHero() {
    return (
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 min-h-[80vh] flex items-center justify-center overflow-hidden bg-soul-teal">
            {/* Background patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-soul-dark/20 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center text-left"
                    variants={staggerChildren}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Column */}
                    <div className="lg:pr-8">
                        <motion.div variants={fadeInUp} className="mb-6">
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium backdrop-blur-sm uppercase tracking-wider">
                                Para Atletas
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl lg:text-7xl font-bebas font-bold text-white mb-6 leading-[1.1]"
                        >
                            Sua carreira não pode depender de networking fechado.
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed"
                        >
                            A Soul conecta você a parcerias e patrocínios — com um passo a passo definido e regras claras do começo ao fim.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <Link href="https://app.soulbrasil.co">
                                <Button
                                    size="lg"
                                    className="bg-soul-yellow hover:bg-soul-orange text-soul-dark font-bold text-lg md:text-xl px-8 md:px-10 py-5 md:py-8 rounded-full shadow-xl hover:scale-105 transition-all group w-full sm:w-auto"
                                >
                                    CADASTRAR MEU PERFIL
                                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        variants={fadeInUp}
                        className="hidden lg:flex justify-end"
                    >
                        <div className="relative w-full max-w-[600px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                            <img
                                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800&h=1000"
                                alt="Atleta em ação"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-soul-dark/40 to-transparent" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
