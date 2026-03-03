'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

const faqs = [
    {
        question: '1) A Soul garante patrocínio?',
        answer: (
            <div className="space-y-4">
                <p>Não.</p>
                <p>A Soul conecta você a empresas e organiza essa relação com regras claras — mas não garante que a parceria vai acontecer.</p>
                <p>A conexão depende do seu perfil, do momento e do que cada empresa está procurando.</p>
                <p>O que a Soul garante é que, se houver match, tudo acontece de forma organizada e documentada.</p>
            </div>
        ),
    },
    {
        question: '2) O atleta paga para participar?',
        answer: (
            <div className="space-y-4">
                <p>Não há mensalidade para o atleta.</p>
                <p>Quando uma parceria é fechada, a Soul cobra uma taxa de gestão sobre o valor combinado — referente à intermediação e ao acompanhamento da parceria.</p>
            </div>
        ),
    },
    {
        question: '3) O que as empresas procuram num atleta?',
        answer: (
            <div className="space-y-4">
                <p>Cada empresa define o que está procurando.</p>
                <p>A Soul organiza esse filtro e ajuda a conectar seu perfil com as oportunidades certas — mas a decisão final considera o alinhamento entre o que você oferece e o que a empresa quer na parceria.</p>
            </div>
        ),
    },
    {
        question: '4) Como funciona a taxa da Soul?',
        answer: (
            <div className="space-y-4">
                <p>Simples: a Soul só cobra quando uma parceria é fechada.</p>
                <p>Nesse momento, aplica-se uma taxa de gestão sobre o valor da parceria — que cobre a intermediação, o contrato e o acompanhamento do começo ao fim.</p>
                <p>Cadastro e participação são gratuitos.</p>
            </div>
        ),
    },
    {
        question: '5) A Soul interfere na minha carreira?',
        answer: (
            <div className="space-y-4">
                <p>Não.</p>
                <p>Você continua tomando todas as decisões da sua carreira.</p>
                <p>A Soul atua só na organização das parcerias com empresas — cuidando do contrato, das regras e do acompanhamento dentro do combinado.</p>
                <p>O restante — treinos, competições, escolhas técnicas — é tudo seu.</p>
            </div>
        ),
    },
];

export function AthleteFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionContainer background="gray">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bebas font-bold text-center text-soul-dark mb-16 uppercase">
                    PERGUNTAS FREQUENTES
                </h2>
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-0">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex justify-between items-center text-left hover:text-soul-teal transition-colors group"
                            >
                                <span className="text-xl font-bold text-gray-800 group-hover:text-soul-teal transition-colors">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6 text-soul-teal shrink-0" />
                                ) : (
                                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-soul-teal shrink-0" />
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
                                        <div className="pb-8 text-gray-600 text-lg leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
