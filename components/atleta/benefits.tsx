'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, LayoutGrid, FileText } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

const benefits = [
    {
        title: 'Parcerias e patrocínios ao seu alcance',
        description: 'Seu perfil fica visível para empresas — e elas já sabem o que procuram num atleta.',
        icon: LayoutGrid,
    },
    {
        title: 'Contrato com regras claras',
        description: 'Contratos com regras claras e acompanhamento em cada etapa da parceria.',
        icon: ShieldCheck,
    },
    {
        title: 'Sem achismo, sem informalidade',
        description: 'A Soul cuida da negociação para que nada fique só no boca a boca.',
        icon: Handshake,
    },
    {
        title: 'Tudo documentado e transparente',
        description: 'Você sabe exatamente o que está acontecendo em cada passo a passo.',
        icon: FileText,
    },
];

export function AthleteBenefits() {
    return (
        <SectionContainer background="gray">
            <h2 className="text-3xl md:text-5xl font-bebas font-bold text-center text-soul-dark mb-16 uppercase tracking-tight">
                Como a Soul potencializa sua trajetória
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                    >
                        <div className="w-16 h-16 rounded-full bg-soul-teal/10 flex items-center justify-center mb-6 group-hover:bg-soul-teal group-hover:text-white transition-colors duration-300">
                            <benefit.icon className="w-8 h-8 text-soul-teal group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-soul-dark mb-4 uppercase tracking-tight">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {benefit.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
}
