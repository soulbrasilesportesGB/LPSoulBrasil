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
                <p>A Soul organiza o acesso e estrutura a relação entre empresas e atletas com critérios claros e processo definido.</p>
                <p>A conexão depende do perfil do atleta, do momento e dos critérios estabelecidos pela empresa.</p>
                <p>A Soul não garante patrocínio ou performance esportiva.</p>
            </div>
        ),
    },
    {
        question: '2) O atleta paga para participar?',
        answer: (
            <div className="space-y-4">
                <p>Não há mensalidade para o atleta.</p>
                <p>A Soul trabalha na estruturação da relação com as empresas. Quando existe uma conexão formalizada, há uma taxa de gestão sobre a transação, referente à intermediação e organização da operação.</p>
            </div>
        ),
    },
    {
        question: '3) Quem define os critérios de seleção?',
        answer: (
            <div className="space-y-4">
                <p>Os critérios são definidos pela empresa.</p>
                <p>A Soul organiza filtros e estrutura o processo, mas a decisão final de conexão considera o alinhamento entre perfil do atleta, objetivos da empresa e regras estabelecidas para cada ciclo.</p>
            </div>
        ),
    },
    {
        question: '4) Como funciona a taxa (fee) da Soul?',
        answer: (
            <div className="space-y-4">
                <p>A Soul atua como gestora da operação.</p>
                <p>Quando há formalização de aporte, aplica-se uma taxa de gestão sobre a transação, referente a intermediação, contratos, acompanhamento e organização do ciclo.</p>
                <p>Não há cobrança antecipada para cadastro ou participação.</p>
            </div>
        ),
    },
    {
        question: '5) A Soul interfere na carreira do atleta?',
        answer: (
            <div className="space-y-4">
                <p>Não.</p>
                <p>O atleta mantém sua independência.</p>
                <p>A Soul atua exclusivamente na organização da relação com as empresas no escopo do contrato estabelecido, garantindo processo, regras e acompanhamento.</p>
                <p>Decisões técnicas, esportivas e estratégicas da carreira continuam sendo do atleta e seu time.</p>
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
