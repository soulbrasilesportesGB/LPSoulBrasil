'use client';

import React from 'react';
import { AthleteHero } from '@/components/atleta/hero';
import { AthleteBenefits } from '@/components/atleta/benefits';
import { AthleteHowItWorks } from '@/components/atleta/how-it-works';
import { AuthoritySection } from '@/components/atleta/authority';
import { MarketDataSection } from '@/components/atleta/market-data';
import { AthleteFAQ } from '@/components/atleta/faq';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import Link from 'next/link';

export default function AthletePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <AthleteHero />

            {/* Benefits Section */}
            <AthleteBenefits />

            {/* How It Works Section */}
            <AthleteHowItWorks />

            {/* Authority Section */}
            <AuthoritySection />

            {/* Market Data Section */}
            <MarketDataSection />

            {/* FAQ Section */}
            <AthleteFAQ />

            {/* Final Call to Action */}
            <SectionContainer className="border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bebas font-bold text-soul-dark mb-12 uppercase tracking-tight"
                    >
                        Pronto para o próximo ciclo?
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="https://app.soulbrasil.co">
                            <Button
                                size="lg"
                                className="bg-soul-teal hover:bg-soul-dark text-white font-bebas text-2xl md:text-4xl px-8 md:px-16 py-6 md:py-12 rounded-2xl shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
                            >
                                CADASTRAR MEU PERFIL
                            </Button>
                        </Link>
                        <p className="mt-8 text-gray-500 text-xl font-medium max-w-xl mx-auto leading-relaxed">
                            Sem mensalidade. Sem indicação. <br />
                            <span className="text-soul-teal font-bold uppercase tracking-wider text-sm">Só parcerias com regras claras.</span>
                        </p>
                    </motion.div>
                </div>
            </SectionContainer>
        </div>
    );
}
