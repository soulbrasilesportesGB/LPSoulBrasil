'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';

export function MarketDataSection() {
    return (
        <SectionContainer>
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-block px-6 py-2 rounded-full bg-soul-teal/10 text-soul-teal font-bold text-sm uppercase tracking-widest mb-10"
                >
                    Por que a Soul existe
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-5xl font-medium text-soul-dark leading-tight"
                >
                    O esporte ainda depende de networking fechado e informalidade. <br className="hidden md:block" />
                    <span className="text-soul-teal font-bold italic">A Soul organiza acesso</span> e estrutura essa relação com governança e processo.
                </motion.p>
            </div>
        </SectionContainer>
    );
}
