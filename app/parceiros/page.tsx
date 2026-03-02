'use client';

import React from 'react';
import { ParceirosHero } from '@/components/parceiros/hero';
import { ParceiroBenefits } from '@/components/parceiros/benefits';
import { ParceirosHowItWorks } from '@/components/parceiros/how-it-works';
import { ParceirosAuthoritySection } from '@/components/parceiros/authority';
import { ParceirosExplanatorySection } from '@/components/parceiros/explanatory';
import { ParceirosFAQ } from '@/components/parceiros/faq';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/ui/section-container';
import Link from 'next/link';

export default function ParceirosPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <ParceirosHero />

            {/* Benefits Section */}
            <ParceiroBenefits />

            {/* How It Works Section */}
            <ParceirosHowItWorks />

            {/* Authority Section */}
            <ParceirosAuthoritySection />

            {/* Explanatory Block */}
            <ParceirosExplanatorySection />

            {/* FAQ Section */}
            <ParceirosFAQ />

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
                        Pronto para estruturar sua relação com o esporte?
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
                                className="bg-soul-teal hover:bg-soul-dark text-white font-bebas text-4xl px-16 py-12 rounded-2xl shadow-2xl hover:scale-105 transition-all"
                            >
                                CADASTRAR EMPRESA
                            </Button>
                        </Link>
                        <p className="mt-8 text-gray-500 text-xl font-medium max-w-xl mx-auto leading-relaxed">
                            Sem informalidade. Sem improviso. <br />
                            <span className="text-soul-teal font-bold uppercase tracking-wider text-sm">Apenas processo e governança.</span>
                        </p>
                    </motion.div>
                </div>
            </SectionContainer>
        </div>
    );
}
