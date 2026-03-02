'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';

const faqs = [
    {
        question: '1) Isso é doação?',
        answer: (
            <div className="space-y-4">
                <p>Não.</p>
                <p>A relação entre parceiros e atletas na Soul é profissional, estruturada com contratos e regras claras definidas para cada ciclo.</p>
                <p>A Soul organiza a operação com governança e processo — não se trata de doação, patrocínio informal ou filantropia.</p>
            </div>
        ),
    },
    {
        question: '2) Existe garantia de resultado esportivo?',
        answer: (
            <div className="space-y-4">
                <p>Não.</p>
                <p>O foco da Soul é na governança e organização da relação entre parceiros e atletas — não no desempenho esportivo.</p>
                <p>A Soul estrutura o processo de conexão, os contratos e o acompanhamento do ciclo. Resultados esportivos dependem do atleta e de fatores externos à operação.</p>
            </div>
        ),
    },
    {
        question: '3) Como a empresa escolhe o atleta?',
        answer: (
            <div className="space-y-4">
                <p>A empresa define os critérios de seleção — modalidade, perfil, objetivos e outros filtros relevantes.</p>
                <p>A Soul organiza o processo de conexão com base nesses filtros, estruturando as etapas e garantindo que a relação siga as regras estabelecidas.</p>
                <p>A decisão final considera o alinhamento entre o perfil do atleta e os critérios definidos pelo parceiro.</p>
            </div>
        ),
    },
    {
        question: '4) Como funciona a taxa da Soul?',
        answer: (
            <div className="space-y-4">
                <p>A Soul atua como gestora da operação.</p>
                <p>Quando há formalização de aporte, aplica-se uma taxa de gestão de 10% sobre a transação, referente à intermediação, contratos, acompanhamento e organização do ciclo.</p>
                <p>Não há cobrança antecipada para cadastro ou participação.</p>
            </div>
        ),
    },
    {
        question: '5) A Soul utiliza Lei de Incentivo?',
        answer: (
            <div className="space-y-4">
                <p>Não.</p>
                <p>O modelo da Soul utiliza contratos estruturados e não depende de leis de incentivo fiscal.</p>
                <p>A operação é baseada em processo, governança e formalização da relação — sem dependência de benefícios tributários ou renúncia fiscal.</p>
            </div>
        ),
    },
];

export function ParceirosFAQ() {
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
