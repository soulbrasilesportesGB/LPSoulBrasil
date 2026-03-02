'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingDown, Filter, ClipboardList } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

const benefits = [
    {
        title: 'Processo estruturado',
        description: 'Contratos, regras definidas e acompanhamento ao longo do ciclo.',
        icon: CheckCircle,
    },
    {
        title: 'Menos informalidade',
        description: 'Estrutura que reduz improviso e traz previsibilidade para a operação.',
        icon: TrendingDown,
    },
    {
        title: 'Seleção com filtro',
        description: 'A empresa define critérios e a Soul organiza o processo de conexão.',
        icon: Filter,
    },
    {
        title: 'Acompanhamento documentado',
        description: 'Organização e clareza sobre uso do recurso e etapas do ciclo.',
        icon: ClipboardList,
    },
];

export function ParceiroBenefits() {
    return (
        <SectionContainer background="gray">
            <h2 className="text-3xl md:text-5xl font-bebas font-bold text-center text-soul-dark mb-16 uppercase tracking-tight">
                Como a Soul estrutura sua relação com o esporte
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
