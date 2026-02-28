// /home/project/lib/blog.ts

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  category: string;
  tags: string[];
  featuredImage?: string;
  publishedAt: string;
  updatedAt: string;
  published: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  readingTime: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

// Mock data para demonstração
export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Gestão de Carreira',
    slug: 'gestao-de-carreira',
    description: 'Dicas e estratégias para desenvolvimento profissional no esporte',
    color: '#009c99'
  },
  {
    id: '2',
    name: 'Marketing Esportivo',
    slug: 'marketing-esportivo',
    description: 'Tendências e cases de sucesso no marketing esportivo',
    color: '#08704F'
  },
  {
    id: '3',
    name: 'Atletas em Destaque',
    slug: 'atletas-em-destaque',
    description: 'Histórias inspiradoras de atletas parceiros',
    color: '#e8d92e'
  },
  {
    id: '4',
    name: 'Mercado Esportivo',
    slug: 'mercado-esportivo',
    description: 'Análises e insights sobre o mercado esportivo brasileiro',
    color: '#e8b52e'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como Construir uma Carreira Esportiva Sustentável',
    slug: 'como-construir-carreira-esportiva-sustentavel',
    excerpt: 'Descubra as estratégias essenciais para desenvolver uma carreira esportiva que vai além da performance atlética.',
    content: `
# Como Construir uma Carreira Esportiva Sustentável

A construção de uma carreira esportiva sustentável vai muito além do desempenho nas competições. É um processo que envolve planejamento estratégico, desenvolvimento pessoal e profissional, e a criação de múltiplas fontes de valor.

## 1. Planejamento de Carreira

O primeiro passo é desenvolver um plano de carreira claro e realista. Isso inclui:

- **Definição de objetivos de curto, médio e longo prazo**
- **Mapeamento de competições e calendário esportivo**
- **Identificação de oportunidades de desenvolvimento**
- **Planejamento financeiro e de investimentos**

## 2. Desenvolvimento da Marca Pessoal

Sua marca pessoal é um dos ativos mais valiosos. Trabalhe em:

- **Definição de valores e propósito**
- **Comunicação consistente nas redes sociais**
- **Relacionamento com mídia e stakeholders**
- **Criação de conteúdo relevante**

## 3. Diversificação de Receitas

Não dependa apenas de premiações. Explore:

- **Parcerias e patrocínios**
- **Palestras e mentorias**
- **Produtos e serviços relacionados ao esporte**
- **Investimentos e empreendedorismo**

## 4. Rede de Relacionamentos

Construa e mantenha uma rede sólida:

- **Outros atletas e profissionais do esporte**
- **Empresários e investidores**
- **Mídia especializada**
- **Fãs e comunidade**

## Conclusão

Uma carreira esportiva sustentável é construída com visão de longo prazo, planejamento estratégico e execução consistente. Na Soul Brasil Esportes, ajudamos atletas a desenvolver todos esses aspectos de forma integrada e personalizada.
    `,
    author: {
      name: 'Maria Teresa Publio Dias',
      avatar: 'https://www.espm.br/wp-content/uploads/Maria-Teresa-Publio-Dias-nova.jpg',
      bio: 'CEO & Fundadora da Soul Brasil Esportes. Atleta de judô com mais de 15 anos de experiência no setor esportivo.'
    },
    category: 'Gestão de Carreira',
    tags: ['carreira', 'planejamento', 'sustentabilidade', 'marca pessoal'],
    featuredImage: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    published: true,
    seo: {
      metaTitle: 'Como Construir uma Carreira Esportiva Sustentável | Soul Brasil Esportes',
      metaDescription: 'Descubra as estratégias essenciais para desenvolver uma carreira esportiva que vai além da performance atlética. Guia completo da Soul Brasil Esportes.',
      keywords: ['carreira esportiva', 'planejamento', 'atletas', 'sustentabilidade', 'marca pessoal']
    },
    readingTime: 8
  },
  {
    id: '2',
    title: 'O Futuro do Marketing Esportivo no Brasil',
    slug: 'futuro-marketing-esportivo-brasil',
    excerpt: 'Análise das principais tendências que estão moldando o marketing esportivo brasileiro e as oportunidades para atletas e marcas.',
    content: `
# O Futuro do Marketing Esportivo no Brasil

... (conteúdo omitido para brevidade)
    `,
    author: {
      name: 'Patricia Di Cunto Bracco',
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHx3uam6RhVvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721655534723?e=2147483647&v=beta&t=42ZKYlZKa3a_RFWFAvwseGnDAdhk9adUxktif_DiEb0',
      bio: 'Especialista em Projetos na Soul Brasil Esportes. Atleta de esgrima e líder do Comitê Esporte do Grupo Mulheres do Brasil.'
    },
    category: 'Marketing Esportivo',
    tags: ['marketing', 'tendências', 'digital', 'oportunidades'],
    featuredImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    published: true,
    seo: {
      metaTitle: 'O Futuro do Marketing Esportivo no Brasil | Soul Brasil Esportes',
      metaDescription: 'Análise das principais tendências que estão moldando o marketing esportivo brasileiro e as oportunidades para atletas e marcas.',
      keywords: ['marketing esportivo', 'tendências', 'Brasil', 'oportunidades', 'digital']
    },
    readingTime: 6
  },
  {
    id: '3',
    title: 'Isabela Abreu: Da Promessa ao Pódio Olímpico',
    slug: 'isabela-abreu-promessa-podio-olimpico',
    excerpt: 'A inspiradora jornada de Isabela Abreu no pentatlo moderno, desde os primeiros passos até a representação brasileira em Paris 2024.',
    content: `
# Isabela Abreu: Da Promessa ao Pódio Olímpico

... (conteúdo omitido para brevidade)
    `,
    author: {
      name: 'Ana Clara Miranda',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCbUc3reZXggcvqFay8MwElVT9mcsy3GteQ&s',
      bio: 'Assistente de Projetos na Soul Brasil Esportes. Atleta da seleção brasileira de Roller Derby.'
    },
    category: 'Atletas em Destaque',
    tags: ['isabela abreu', 'pentatlo moderno', 'jogos olímpicos', 'inspiração'],
    featuredImage: '/images/Isa-Abreu.webp',
    publishedAt: '2024-01-05T09:00:00Z',
    updatedAt: '2024-01-05T09:00:00Z',
    published: true,
    seo: {
      metaTitle: 'Isabela Abreu: Da Promessa ao Pódio Olímpico | Soul Brasil Esportes',
      metaDescription: 'A inspiradora jornada de Isabela Abreu no pentatlo moderno, desde os primeiros passos até a representação brasileira em Paris 2024.',
      keywords: ['Isabela Abreu', 'pentatlo moderno', 'jogos olímpicos', 'atleta brasileira', 'Paris 2024']
    },
    readingTime: 5
  }
];

// ------------- UTILITIES EXISTENTES -------------
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.published);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  const category = blogCategories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  return blogPosts
    .filter(post => post.category === category.name && post.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post =>
      post.id !== currentPost.id &&
      post.published &&
      (post.category === currentPost.category ||
        post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// ------------- NOVO: SUPORTE AO FEED / BUSCA -------------
export function getAllPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter(p => p.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// remove acentos e deixa minúsculo pra busca robusta
function normalize(str: string) {
  return (str || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

/**
 * Filtra por categoria (slug) e por texto (q) em título, excerpt, conteúdo e tags.
 * Se nada for passado, retorna todos publicados ordenados por data desc.
 */
export function filterPosts(params: { categorySlug?: string; q?: string } = {}): BlogPost[] {
  const { categorySlug, q } = params;

  let list = getAllPublishedPosts();

  if (categorySlug) {
    const cat = blogCategories.find(c => c.slug === categorySlug);
    if (cat) {
      list = list.filter(p => p.category === cat.name);
    } else {
      // categoria inválida => nenhum
      return [];
    }
  }

  if (q && q.trim()) {
    const term = normalize(q.trim());
    list = list.filter(p => {
      const haystack =
        normalize(p.title) + ' ' +
        normalize(p.excerpt) + ' ' +
        normalize(p.content) + ' ' +
        normalize(p.tags.join(' '));
      return haystack.includes(term);
    });
  }

  return list;
}