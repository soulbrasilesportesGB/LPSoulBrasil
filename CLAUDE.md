# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Sobre o Projeto
Site institucional da Soul Brasil Esportes — plataforma que conecta atletas e empresas com governança, gestão profissional e contratos. Não é ONG, não é doação. É estrutura, segurança e profissionalismo.

---

## Stack

- **Framework:** Next.js 13.5 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS com paleta Soul Brasil customizada; shadcn/ui (Radix UI) para componentes
- **Animações:** Framer Motion
- **Backend/DB:** Supabase (com fallback para mock quando variáveis de ambiente ausentes)
- **Hospedagem:** Netlify (`@netlify/plugin-nextjs`)
- **Fontes:** Bebas Neue (local, display), Inter (Google Fonts, body)

---

## Comandos

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de produção (Next.js)
npm run start  # Iniciar servidor de produção
npm run lint   # Verificação com ESLint
```

Build no Netlify: `npx next build` → publish `.next`

---

## Arquitetura

### Roteamento (App Router)
Todas as rotas ficam em `/app`. Páginas principais:

| Rota | Propósito |
|---|---|
| `/` | Home institucional |
| `/atleta` | Landing page para atletas (note: singular) |
| `/parceiros` | Landing page para empresas parceiras |
| `/sobre`, `/contato`, `/carreira`, `/projetos` | Páginas institucionais |
| `/blog/[slug]` | Posts do blog (Supabase + Markdown) |
| `/blog/categoria/[slug]` | Blog por categoria |
| `/admin` | Área admin protegida (login + gestão de blog) |
| `/governanca`, `/lgpd`, `/politica-*`, `/termos-de-uso` | Páginas legais |

Redirect permanente: `/atletas` → `/atleta` (configurado em `next.config.js`).

### Componentes
- `/components/ui/` — shadcn/ui + componentes customizados do site (hero, cta-block, service-card, etc.)
- `/components/layout/` — `navbar.tsx` e `footer.tsx`
- `/components/atleta/`, `/components/parceiros/`, `/components/blog/`, `/components/admin/` — componentes específicos por seção

### Backend
- `/lib/supabase.ts` — factory do cliente Supabase
- `/lib/blog-db.ts` — lógica de banco de dados do blog
- `/app/api/` — API routes: waitlist, admin auth, CRUD do blog
- `/middleware.ts` — protege `/admin/*` com cookie `sb_admin`; redireciona para `/admin/login` se não autenticado

### Banco de Dados
Migrações em `/supabase/migrations/`. Variáveis de ambiente necessárias:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
O app funciona sem elas (dados mock como fallback).

### SEO
- `/app/sitemap.ts` — sitemap dinâmico
- `/app/robots.txt/` — robots.txt
- `/app/rss.xml/` — RSS feed do blog

---

## Identidade de Marca

### Tom de Voz
- Aspiracional, acolhedor, comunitário, empoderador, transparente, autêntico
- Linguagem simples e direta, sem jargões
- Apelo a pertencimento, propósito e impacto — não a ROI
- Nunca soar como ONG, vaquinha ou doação

### O que PODEMOS comunicar
- Visibilidade qualificada para atletas
- Segurança, confiabilidade e boa gestão dos recursos
- Profissionalismo (contratos, regras, processos, documentação)
- Impacto real com métricas possíveis
- ESG como motivação possível (sem lógica simplista)
- "Atleta não é influenciador por padrão" — diferencial estratégico

### O que NÃO comunicar (proibido)
- "Doação", "vaquinha", "crowdfunding", "ajuda", "apoio" (tom ONG)
- "ROI", "retorno mensurável", "retorno sobre investimento"
- "Performance garantida" ou "vai melhorar resultado do atleta"
- "Atleta é funcionário da marca" ou "vai postar e vender"
- "Lei de incentivo" (não é o modelo da Soul)
- "Equity" / "investimento" (leitura financeira equivocada)

---

## Produtos

### Programa Soul Atleta em Foco
Forma estruturada de empresas apoiarem atletas com gestão, segurança e governança. Ciclos de 3 ou 6 meses. Empresa não escolhe o atleta — a Soul seleciona por critérios. Sem promessa de performance esportiva.

### Aporte Direto
Intermediação consultiva para empresa que quer apoiar um atleta específico. Dupla curadoria (valida atleta e empresa), contratos claros, fee transacional, gestão opcional.

---

## Públicos

### Empresas (ICP)
- PMEs ou médias empresas com agenda ESG/impacto e budget institucional
- Motivação: transformação social via esporte, não compra de mídia
- Decisor: marketing, sustentabilidade ou RH
- Não é para: microaportes, empresas que exigem escolha direta de atleta ou ROI mensurável

### Atletas (ICP)
- Modalidades olímpicas sem apelo comercial
- Buscando índices olímpicos ou metas de alto nível
- Valorizam acesso a empresas, segurança e profissionalismo
- Atleta é parte contratual — não beneficiário

---

## Narrativa Institucional

**Problema que a Soul resolve:**
- Atletas com potencial ficam invisíveis para decisores
- Empresas querem se aproximar do esporte, mas travam por falta de estrutura, processo e segurança operacional

**Como a Soul resolve:**
Atua como ponte, vitrine qualificada e gestora da relação empresa–atleta — com regras, contratos, governança e acompanhamento. Não promete performance esportiva, não garante patrocínio, não trata como doação.

**Promessa central:**
Visibilidade qualificada + operação organizada para que empresas apoiem atletas com segurança, contratos, processo e transparência real.

---

## Instruções para o Claude

- Manter sempre o tom de voz definido acima
- Nunca usar palavras proibidas listadas na seção de marca
- Priorizar clareza, objetividade e profissionalismo nas copy
- Ao gerar textos para o site, considerar sempre os dois públicos: empresas e atletas
- Não romantizar impacto nem usar linguagem de coach/motivacional
- Benchmark de referência: Futebol de Rua, Common Goal
