'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Pequenas empresas',
        href: '#',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'bg-purple-500',
    },
    {
        title: 'Médias empresas',
        href: '#',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'bg-orange-500',
    },
    {
        title: 'Grandes empresas',
        href: '#',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=400',
        color: 'bg-emerald-500',
    },
];

export function HowItWorks() {
    return (
        <div className="py-16">
            <h2 className="text-3xl md:text-4xl font-bebas font-bold text-center text-soul-dark mb-12">
                Mini "como funciona" (3 passos):
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className={`relative w-48 h-48 rounded-full overflow-hidden mb-6 border-8 border-white shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                            <div className={`absolute inset-0 opacity-40 ${step.color}`} />
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-soul-dark mb-2">
                            {step.title}
                        </h3>
                        <Link
                            href={step.href}
                            className="text-soul-teal font-medium hover:underline text-sm"
                        >
                            Veja mais detalhes
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
