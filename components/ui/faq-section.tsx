'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'A Soul é confiável? O seguro compõe a Soul?',
        answer: 'Sim, a Soul Brasil Esportes opera com total transparência e segurança. Nossos processos são estruturados para garantir a melhor experiência para atletas e empresas.',
    },
    {
        question: 'Os produtos vendidos no Seguro de vida valem o portal?',
        answer: 'Nossos serviços e produtos são selecionados com rigor técnico para entregar valor real ao ecossistema esportivo.',
    },
    {
        question: 'Como faço para escolher o caminho certo de troca no canal seguro?',
        answer: 'Nossa equipe de suporte e gestores de conta orientam todo o processo de conexão e ativação dentro da plataforma.',
    },
    {
        question: 'A Soul oferece todo suporte de que preciso quando?',
        answer: 'Oferecemos suporte contínuo em todas as fases da parceria, desde o matchmaking até a mensuração de resultados.',
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="py-16 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bebas font-bold text-center text-soul-dark mb-12 uppercase">
                Perguntas Frequentes (FAQ)
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full py-6 flex justify-between items-center text-left hover:text-soul-teal transition-colors group"
                        >
                            <span className="text-lg font-medium text-gray-800 group-hover:text-soul-teal transition-colors">
                                {faq.question}
                            </span>
                            {openIndex === index ? (
                                <Minus className="w-5 h-5 text-soul-teal shrink-0" />
                            ) : (
                                <Plus className="w-5 h-5 text-gray-400 group-hover:text-soul-teal shrink-0" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
