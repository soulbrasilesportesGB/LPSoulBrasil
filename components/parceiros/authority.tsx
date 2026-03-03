'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, BadgePercent } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

const milestones = [
    {
        label: 'Finalista leAD Adidas',
        sublabel: '(Top 10 mundial)',
        icon: Award,
    },
    {
        label: 'Destaque InovAtiva Brasil',
        sublabel: '(Aceleração nacional)',
        icon: Star,
    },
    {
        label: 'Prêmio Empreendedora Curitibana',
        sublabel: '/ Female Force',
        icon: Award,
    },
    {
        label: '+4mi atletas no ecossistema',
        sublabel: '/ +20 empresas conectadas',
        icon: Users,
    },
    {
        label: 'Operação com taxa de gestão definida',
        sublabel: '(10%)',
        icon: BadgePercent,
    },
];

export function ParceirosAuthoritySection() {
    return (
        <SectionContainer background="dark">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bebas font-bold mb-4 uppercase tracking-tight">
                    Estrutura validada no ecossistema
                </h2>
                <div className="w-24 h-1 bg-soul-teal mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="w-20 h-20 rounded-full bg-soul-teal/20 flex items-center justify-center mb-8 group-hover:bg-soul-teal group-hover:scale-110 transition-all">
                            <item.icon className="w-10 h-10 text-soul-teal group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">
                            {item.label}
                        </h3>
                        <p className="text-white/60 text-lg">
                            {item.sublabel}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
}
