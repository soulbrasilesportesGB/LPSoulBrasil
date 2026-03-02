'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, TrendingUp, Handshake, Shield, Globe, Award, BarChart3 } from 'lucide-react';

interface Benefit {
    title: string;
    description: string;
    icon: React.ElementType;
}

const athleteBenefits: Benefit[] = [
    {
        title: 'Visibilidade Qualificada',
        description: 'Acesso estruturado para decisores, sem exposição genérica.',
        icon: Users,
    },
    {
        title: 'Critérios Claros',
        description: 'Regras definidas para operação, seleção e relacionamento.',
        icon: Shield,
    },
    {
        title: 'Acompanhamento',
        description: 'Gestão do ciclo com método e previsibilidade.',
        icon: TrendingUp,
    },
    {
        title: 'Conexões Estruturadas',
        description: 'Sem improviso, sem atalhos, com processo.',
        icon: Globe,
    },
];

const companyBenefits: Benefit[] = [
    {
        title: 'Matchmaking Preciso',
        description: 'Encontre atletas alinhados aos valores e objetivos da sua marca.',
        icon: Target,
    },
    {
        title: 'Governança e Compliance',
        description: 'Processos claros e documentados para parcerias seguras.',
        icon: Shield,
    },
    {
        title: 'Mensuração de Resultados',
        description: 'Acompanhe o ROI e o impacto social das suas ativações.',
        icon: BarChart3,
    },
    {
        title: 'Projetos com Propósito',
        description: 'Crie conexões verdadeiras que fortalecem o posicionamento da marca.',
        icon: Award,
    },
];

interface BenefitsGridProps {
    activeSegment: 'athlete' | 'company';
}

export function BenefitsGrid({ activeSegment }: BenefitsGridProps) {
    const benefits = activeSegment === 'athlete' ? athleteBenefits : companyBenefits;

    return (
        <div className="py-12">
            <h2 className="text-3xl md:text-4xl font-bebas font-bold text-center text-soul-dark mb-12 uppercase">
                {activeSegment === 'athlete' ? 'Bullets dos benefícios para os atletas' : 'Bullets dos benefícios para AS EMPRESAS'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={`${activeSegment}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-soul-teal/10 flex items-center justify-center mb-6 group-hover:bg-soul-teal group-hover:text-white transition-colors duration-300">
                                <benefit.icon className="w-8 h-8 text-soul-teal group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-soul-dark mb-3 uppercase tracking-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
