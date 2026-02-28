"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Projeto = {
  nome: string;
  resumo: string;
  tags: string[];
};

const projetos: Projeto[] = [
  {
    nome: "Atletas Invisíveis",
    resumo:
      "Mapeamento e acompanhamento de jovens atletas em parceria com o Instituto Futebol de Rua. Metodologia de avaliação, relatórios e encaminhamento para rede multidisciplinar.",
    tags: ["Impacto Social", "Educação", "Gestão de Carreira"],
  },
  {
    nome: "Soul Paraná Esportes",
    resumo:
      "Programa de mapeamento e organização de dados de atletas em nível estadual, com suporte estratégico, conteúdos educativos e conexão com oportunidades.",
    tags: ["Políticas Públicas", "Dados", "Parcerias"],
  },
];

// helper pro CTA do WhatsApp com identificação da página
function buildWhatsAppLink() {
  const base =
    "https://api.whatsapp.com/send/?phone=5541984079334&type=phone_number&app_absent=0";
  const msg =
    "Olá! Cheguei pela página de Projetos da Soul Brasil Esportes e quero conversar sobre como posso apoiar/participar.";
  const url = new URL(base);
  url.searchParams.set("text", msg);
  return url.toString();
}

export default function ProjetosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-16 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white">
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bebas font-bold leading-tight">
              Nossos Projetos
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Iniciativas em andamento para qualificar o esporte no Brasil —
              unindo gestão de carreira, educação e dados, com foco humano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de projetos */}
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-8">
          {projetos.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bebas font-bold text-soul-dark">
                    {p.nome}
                  </h3>
                  <p className="mt-2 text-gray-600 flex-grow">{p.resumo}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-soul-teal/10 text-soul-teal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA final */}
      <SectionContainer>
        <div className="rounded-3xl bg-gradient-to-r from-soul-teal to-soul-green p-8 md:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div>
            <p className="text-sm opacity-90">Marcas & Instituições</p>
            <h3 className="text-3xl md:text-4xl font-bebas font-bold leading-tight">
              Quer apoiar ou se conectar aos nossos projetos?
            </h3>
            <p className="mt-2 opacity-95">
              Conte seu objetivo e desenhamos o melhor encaixe — com segurança de
              marca e impacto real.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="rounded-2xl">
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                Falar com a Soul (WhatsApp)
              </a>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}