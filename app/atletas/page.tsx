"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { CTABlock } from "@/components/ui/cta-block";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Filter, X, ChevronRight, Star, MapPin, Medal, Target, Calendar, MessageCircle, Share2 } from "lucide-react";

// =====================================
// Types
// =====================================

type Athlete = {
  name: string;
  sport: string;
  blurb?: string;
  photo: string;
  tags?: string[];
  featured?: boolean;
  nationality?: string;
  city?: string;
  availability?: "Disponível" | "Em temporada" | "Em recuperação" | "Sem disponibilidade";
  highlights?: string[];
  birthDate?: string;
  metrics?: { ranking?: string; idade?: number; equipe?: string; categoria?: string };
  socials?: { instagram?: string };
};

// =====================================
// Data (mock)
// =====================================

const athletes: Athlete[] = [
  {
    name: "Maria Jaime",
    sport: "Atletismo — Marcha Atlética",
    blurb: "Atleta em ascensão • 1º lugar Ranking Nacional",
    photo: "https://mid-noticias.curitiba.pr.gov.br/2023/00406311.jpg",
    tags: ["Em temporada", "Disponível para marcas"],
    featured: true,
    nationality: "BRA",
    city: "Curitiba/PR",
    birthDate: "2006-03-27",
    availability: "Disponível",
    highlights: ["5x Campeã Brasileira", "Participação Sul-Americano e Pan-Americano"],
    metrics: { ranking: "1º lugar nacional", categoria: "Sub-20" },
    socials: { instagram: "https://www.instagram.com/atleta.mariajaime27/" },
  },
  {
    name: "Isabela Abreu",
    sport: "Pentatlo Moderno",
    blurb: "Olímpica • Circuito Internacional",
    photo: "/images/Isa-Abreu.webp",
    tags: ["Atleta Olímpica", "Em temporada", "Disponível para marcas"],
    featured: true,
    nationality: "BRA",
    city: "Curitiba/PR",
    birthDate: "1995-05-22",
    availability: "Em temporada",
    highlights: ["Jogos Olímpicos Paris 2024", "Bronze Pan 2019", "Campeã Sul-Americana", "5x Campeã Brasileira"],
    metrics: { ranking: "2º lugar nacional", categoria: "Adulto" },
    socials: { instagram: "https://www.instagram.com/isaabreu22/" },
  },
  {
    name: "Pedro Marostega",
    sport: "Esgrima",
    blurb: "Bronze por equipe em Santiago 2023 (florete)",
    photo: "https://www.gnu.com.br/uploads/blocos/1685465391.jpeg",
    tags: ["Disponível para marcas"],
    nationality: "BRA",
    city: "Porto Alegre/RS",
    birthDate: "1997-03-09",
    availability: "Em temporada",
    metrics: { ranking: "2º lugar nacional | Florete", categoria: "Sênior" },
    socials: { instagram: "https://www.instagram.com/pedromarostega/" },
  },
  {
    name: "Jonny Paiva",
    sport: "Parabadminton",
    blurb: "Melhores do Ano 2024 - CBDU",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Perfil-jonny.jpg",
    tags: ["Disponível para marcas"],
    nationality: "BRA",
    city: "Fortaleza/CE",
    birthDate: "1991-08-31",
    availability: "Em temporada",
    metrics: { ranking: "Top 50", categoria: "SL4" },
    socials: { instagram: "https://www.instagram.com/jonnypaiva" },
  },
  {
    name: "Matheus Olenhiscki",
    sport: "Judô",
    blurb: "Atleta profissional e treinador",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGiU5g6y4-ZB6DSNYEao8BwYk-8kTVxHeDA&s",
    nationality: "BRA",
    city: "Rio de Janeiro/RJ",
    birthDate: "1998-10-07",
    availability: "Em temporada",
    tags: ["Disponível para marcas"],
    metrics: { ranking: "Top 50", categoria: "Sênior" },
    socials: { instagram: "https://www.instagram.com/matheusolenhiscki/" },
  },
  {
    name: "Amanda Criscuoli",
    sport: "Escalada Esportiva",
    blurb: "Mais Jovem Brasileira a escalar sem queda (encadenar)",
    photo: "https://static.wixstatic.com/media/ef2ab8_be0c38bb3704464fa7f313390f140abc~mv2.jpg/v1/crop/x_108,y_0,w_2938,h_2966/fill/w_320,h_369,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Amanda%20-%20Seoul%20-%20Cor%C3%A9ia%20do%20Sul%20III.jpg",
    tags: ["Disponível para marcas"],
    nationality: "BRA",
    city: "Porto Alegre/RS",
    birthDate: "2006-08-07",
    availability: "Em temporada",
    metrics: { ranking: "Top 10 nacional", categoria: "Adulto" },
    socials: { instagram: "https://www.instagram.com/amandacriscuoli/" },
  },
  {
   name: "Guilherme Dubiel",
    sport: "Esgrima",
    blurb: "2x Campeão Brasileiro",
    photo: "https://uploads.rcn67.com.br/2024/08/7977T8gJ-gabriel-esgrima-jpg.webp",
    tags: ["Disponível para marcas"],
    nationality: "BRA",
    city: "São Paulo/SP",
    birthDate: "2008-11-03",
    availability: "Em temporada",
    metrics: { ranking: "1º lugar nacional | Espada", categoria: "Sub-17" },
    socials: { instagram: "https://www.instagram.com/dubiel_guilherme/" },
  },
];

// =====================================
// Animation preset
// =====================================

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06 } }),
};

// =====================================
// Helpers
// =====================================

function buildWhatsAppLink(name: string) {
  const base = "https://api.whatsapp.com/send/?phone=5541984079334&type=phone_number&app_absent=0";
  const msg = `Olá! Cheguei pela página da atleta ${name} no site da Soul Brasil Esportes e quero saber como podemos avançar em parceria. Pode me ajudar?`;
  const url = new URL(base);
  url.searchParams.set("text", msg);
  return url.toString();
}

function calcularIdade(data: string) {
  const hoje = new Date();
  const nasc = new Date(data);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
    idade--;
  }
  return idade;
}

function AthleteCard({ a, index, onOpen }: { a: Athlete; index: number; onOpen: (a: Athlete) => void }) {
  return (
    <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.photo} alt={a.name} className="w-full h-full object-cover" />
          {a.featured && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-soul-yellow text-soul-dark">
              Destaque
            </span>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bebas font-bold text-soul-dark">{a.name}</h3>
          <p className="text-soul-teal font-medium">{a.sport}</p>
          {a.blurb && <p className="mt-2 text-gray-600">{a.blurb}</p>}
          {a.tags && a.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-soul-teal/10 text-soul-teal">
                  {t}
                </span>
              ))}
            </div>
          )}
          <div className="mt-5 flex items-center justify-between">
            <Button onClick={() => onOpen(a)} className="rounded-2xl">
              Ver detalhes <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <a
              href={buildWhatsAppLink(a.name)}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4 text-soul-dark/80 hover:text-soul-dark"
            >
              Falar com a Soul
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function DetailRow({ icon: Icon, label, value }: { icon: any; label: string; value?: string | number }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 text-sm text-gray-700">
      <Icon className="h-4 w-4 mt-0.5" />
      <div>
        <span className="font-medium">{label}: </span>
        <span>{value}</span>
      </div>
    </div>
  );
}

// =====================================
// Page
// =====================================

export default function AthletesPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Athlete | null>(null);
  const [open, setOpen] = useState(false);

  const featured = useMemo(() => athletes.filter((a) => a.featured), []);
  const others = useMemo(() => athletes.filter((a) => !a.featured), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { featured, others };
    const f = featured.filter(
      (a) => a.name.toLowerCase().includes(q) || a.sport.toLowerCase().includes(q) || a.tags?.some((t) => t.toLowerCase().includes(q))
    );
    const o = others.filter(
      (a) => a.name.toLowerCase().includes(q) || a.sport.toLowerCase().includes(q) || a.tags?.some((t) => t.toLowerCase().includes(q))
    );
    return { featured: f, others: o };
  }, [query, featured, others]);

  function openModal(a: Athlete) {
    setSelected(a);
    setOpen(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-16 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-soul-yellow/20 text-soul-yellow text-sm font-medium">
              Nossos Atletas
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bebas font-bold leading-tight">Destaques da Soul Brasil Esportes</h1>
            <p className="mt-4 text-lg text-white/90">
              Talentos que estamos ajudando a transformar em trajetória — com gestão de carreira, projetos com marcas e educação.
            </p>
          </motion.div>

          {/* Busca */}
          <div className="mt-8 max-w-xl">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-2xl p-2">
              <Filter className="h-4 w-4 opacity-80 ml-2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nome, esporte ou tag"
                className="bg-transparent border-0 text-white placeholder:text-white/70 focus-visible:ring-0"
              />
              {query && (
                <Button variant="ghost" size="icon" onClick={() => setQuery("")}> <X className="h-4 w-4" /> </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      {filtered.featured.length > 0 && (
        <SectionContainer>
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.featured.map((a, i) => (
              <AthleteCard a={a} index={i} key={a.name} onOpen={openModal} />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Grid simples */}
      {filtered.others.length > 0 && (
        <SectionContainer background="gray">
          <div className="text-center mb-10">
            <motion.h2 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Mais atletas da casa
            </motion.h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.others.map((a, i) => (
              <AthleteCard a={a} index={i} key={a.name} onOpen={openModal} />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* CTA final */}
      <CTABlock
        subtitle="Marcas & Instituições"
        title="Quer se conectar com nossos atletas?"
        description="Conte pra gente o seu objetivo e encontramos o melhor encaixe — com segurança de marca e performance."
        primaryCta={{ text: "Fale com a Soul", href: "/contato" }}
        variant="gradient"
      />

      {/* Modal Detalhes */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selected && (
            <div className="grid md:grid-cols-2">
              {/* Foto */}
              <div className="relative h-64 md:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selected.photo} alt={selected.name} className="w-full h-full object-cover" />
                {selected.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-soul-yellow text-soul-dark">
                    Destaque
                  </span>
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bebas text-soul-dark">{selected.name}</DialogTitle>
                  <DialogDescription className="text-soul-teal font-medium">{selected.sport}</DialogDescription>
                </DialogHeader>

                {selected.blurb && <p className="mt-3 text-gray-700">{selected.blurb}</p>}

                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.tags?.map((t) => (
                    <Badge key={t} className="bg-soul-teal/10 text-soul-teal border-0">{t}</Badge>
                  ))}
                  {selected.availability && (
                    <Badge className="bg-soul-yellow text-soul-dark border-0">{selected.availability}</Badge>
                  )}
                </div>

                <Separator className="my-5" />

                <div className="grid grid-cols-1 gap-2">
                  <DetailRow icon={MapPin} label="Base" value={[selected.city, selected.nationality].filter(Boolean).join(" • ")} />
                  <DetailRow icon={Medal} label="Ranking" value={selected.metrics?.ranking} />
                  <DetailRow icon={Target} label="Categoria" value={selected.metrics?.categoria} />
                  <DetailRow icon={Calendar} label="Idade" value={selected.birthDate ? calcularIdade(selected.birthDate) : selected.metrics?.idade} />
                </div>

                {selected.highlights && selected.highlights.length > 0 && (
                  <div className="mt-5">
                    <h4 className="font-semibold text-soul-dark mb-2">Conquistas</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selected.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ações */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl">
                    <a href={buildWhatsAppLink(selected.name)} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> Falar com a Soul (WhatsApp)
                    </a>
                  </Button>

                  {selected.socials?.instagram && (
                    <Button asChild variant="ghost" className="rounded-2xl">
                      <a href={selected.socials.instagram} target="_blank" rel="noreferrer">
                        <Share2 className="mr-2 h-4 w-4" /> Instagram do atleta
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
