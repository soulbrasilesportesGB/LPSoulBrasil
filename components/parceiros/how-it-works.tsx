'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';

const steps = [
    {
        title: 'Cadastro da empresa',
        description: 'Definição de objetivos e critérios.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'bg-soul-teal',
    },
    {
        title: 'Curadoria e estruturação',
        description: 'A Soul organiza a conexão conforme os filtros definidos.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'bg-soul-yellow',
    },
    {
        title: 'Formalização e acompanhamento',
        description: 'Contrato, regras claras e gestão do ciclo.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'bg-soul-dark',
    },
];

export function ParceirosHowItWorks() {
    return (
        <SectionContainer>
            <h2 className="text-3xl md:text-5xl font-bebas font-bold text-center text-soul-dark mb-16 uppercase">
                COMO FUNCIONA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
                            <div className={`absolute inset-0 opacity-20 ${step.color}`} />
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-soul-dark/10 group-hover:bg-transparent transition-colors" />
                        </div>

                        <div className="bg-soul-teal text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg group-hover:bg-soul-dark transition-colors">
                            0{index + 1}
                        </div>

                        <h3 className="text-2xl font-bold text-soul-dark mb-4">
                            {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
}
