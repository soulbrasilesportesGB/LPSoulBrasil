'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Dribbble,
    Shirt,
    CreditCard,
    PenTool,
    Ticket,
    Monitor,
    Handshake,
    Store
} from 'lucide-react';

const trustItems = [
    { icon: Dribbble, label: 'Artigos Esportivos' },
    { icon: Shirt, label: 'Uniformização' },
    { icon: CreditCard, label: 'Cartão Presente / E-Gift' },
    { icon: PenTool, label: 'Projetos Especiais' },
    { icon: Ticket, label: 'Cupons de desconto / Vouchers' },
    { icon: Monitor, label: 'Lms Periódico' },
    { icon: Handshake, label: 'Programa de pontos' },
    { icon: Store, label: 'Lojas Parceiras' },
];

export function TrustSection() {
    return (
        <div className="py-16 bg-gray-50/50 rounded-3xl mt-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bebas font-bold text-center text-soul-dark mb-12 uppercase tracking-wide">
                    Bloco para passar confiança, dados do mercado, dados da soul:
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center space-y-4 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-sm flex items-center justify-center border border-soul-teal/10 group-hover:border-soul-teal/30 group-hover:shadow-md transition-all duration-300">
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-soul-teal" />
                            </div>
                            <span className="text-sm md:text-base font-medium text-gray-700 max-w-[150px]">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
