/*
  # Seed Initial Data

  1. Insert blog categories
  2. Insert sample blog posts
*/

-- Insert blog categories
INSERT INTO blog_categories (name, slug, description, color) VALUES
  ('Gestão de Carreira', 'gestao-de-carreira', 'Dicas e estratégias para desenvolvimento profissional no esporte', '#009c99'),
  ('Marketing Esportivo', 'marketing-esportivo', 'Tendências e cases de sucesso no marketing esportivo', '#08704F'),
  ('Atletas em Destaque', 'atletas-em-destaque', 'Histórias inspiradoras de atletas parceiros', '#e8d92e'),
  ('Mercado Esportivo', 'mercado-esportivo', 'Análises e insights sobre o mercado esportivo brasileiro', '#e8b52e')
ON CONFLICT (slug) DO NOTHING;

-- Get category IDs for blog posts
DO $$
DECLARE
    gestao_id uuid;
    marketing_id uuid;
    atletas_id uuid;
BEGIN
    SELECT id INTO gestao_id FROM blog_categories WHERE slug = 'gestao-de-carreira';
    SELECT id INTO marketing_id FROM blog_categories WHERE slug = 'marketing-esportivo';
    SELECT id INTO atletas_id FROM blog_categories WHERE slug = 'atletas-em-destaque';

    -- Insert sample blog posts
    INSERT INTO blog_posts (
        title, slug, excerpt, content, author_name, author_avatar, author_bio,
        category_id, tags, featured_image, published_at, published,
        seo_meta_title, seo_meta_description, seo_keywords, reading_time
    ) VALUES
    (
        'Como Construir uma Carreira Esportiva Sustentável',
        'como-construir-carreira-esportiva-sustentavel',
        'Descubra as estratégias essenciais para desenvolver uma carreira esportiva que vai além da performance atlética.',
        '# Como Construir uma Carreira Esportiva Sustentável

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

Uma carreira esportiva sustentável é construída com visão de longo prazo, planejamento estratégico e execução consistente. Na Soul Brasil Esportes, ajudamos atletas a desenvolver todos esses aspectos de forma integrada e personalizada.',
        'Maria Teresa Publio Dias',
        'https://www.espm.br/wp-content/uploads/Maria-Teresa-Publio-Dias-nova.jpg',
        'CEO & Fundadora da Soul Brasil Esportes. Atleta de judô com mais de 15 anos de experiência no setor esportivo.',
        gestao_id,
        ARRAY['carreira', 'planejamento', 'sustentabilidade', 'marca pessoal'],
        'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '2024-01-15T10:00:00Z',
        true,
        'Como Construir uma Carreira Esportiva Sustentável | Soul Brasil Esportes',
        'Descubra as estratégias essenciais para desenvolver uma carreira esportiva que vai além da performance atlética. Guia completo da Soul Brasil Esportes.',
        ARRAY['carreira esportiva', 'planejamento', 'atletas', 'sustentabilidade', 'marca pessoal'],
        8
    ),
    (
        'O Futuro do Marketing Esportivo no Brasil',
        'futuro-marketing-esportivo-brasil',
        'Análise das principais tendências que estão moldando o marketing esportivo brasileiro e as oportunidades para atletas e marcas.',
        '# O Futuro do Marketing Esportivo no Brasil

O marketing esportivo brasileiro está passando por uma transformação significativa, impulsionada por novas tecnologias, mudanças no comportamento do consumidor e a crescente profissionalização do setor.

## Tendências Emergentes

### 1. Digitalização Acelerada
A pandemia acelerou a migração para plataformas digitais, criando novas oportunidades de engajamento.

### 2. Conteúdo Autêntico
Marcas buscam parcerias mais autênticas com atletas que compartilham seus valores.

### 3. Dados e Analytics
O uso de dados para personalização e mensuração de resultados se tornou essencial.

## Oportunidades para Atletas

- Criação de conteúdo próprio
- Parcerias estratégicas de longo prazo
- Desenvolvimento de produtos próprios
- Educação e capacitação

## Conclusão

O futuro do marketing esportivo no Brasil é promissor para atletas que souberem se posicionar estrategicamente no mercado.',
        'Patricia Di Cunto Bracco',
        'https://media.licdn.com/dms/image/v2/D4D03AQHx3uam6RhVvw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721655534723?e=2147483647&v=beta&t=42ZKYlZKa3a_RFWFAvwseGnDAdhk9adUxktif_DiEb0',
        'Especialista em Projetos na Soul Brasil Esportes. Atleta de esgrima e líder do Comitê Esporte do Grupo Mulheres do Brasil.',
        marketing_id,
        ARRAY['marketing', 'tendências', 'digital', 'oportunidades'],
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
        '2024-01-10T14:30:00Z',
        true,
        'O Futuro do Marketing Esportivo no Brasil | Soul Brasil Esportes',
        'Análise das principais tendências que estão moldando o marketing esportivo brasileiro e as oportunidades para atletas e marcas.',
        ARRAY['marketing esportivo', 'tendências', 'Brasil', 'oportunidades', 'digital'],
        6
    ),
    (
        'Isabela Abreu: Da Promessa ao Pódio Olímpico',
        'isabela-abreu-promessa-podio-olimpico',
        'A inspiradora jornada de Isabela Abreu no pentatlo moderno, desde os primeiros passos até a representação brasileira em Paris 2024.',
        '# Isabela Abreu: Da Promessa ao Pódio Olímpico

A trajetória de Isabela Abreu no pentatlo moderno é um exemplo inspirador de dedicação, superação e excelência esportiva. Desde os primeiros passos no esporte até sua participação nos Jogos Olímpicos de Paris 2024, Isa construiu uma carreira sólida e cheia de conquistas.

## Os Primeiros Passos

Isabela começou no esporte ainda jovem, descobrindo no pentatlo moderno uma modalidade que combinava perfeitamente com seu perfil atlético versátil.

## Principais Conquistas

- **Jogos Olímpicos Paris 2024**: Representação brasileira
- **Bronze Pan-Americano 2019**: Primeira grande conquista internacional
- **Campeã Sul-Americana**: Múltiplas vezes
- **5x Campeã Brasileira**: Dominância nacional

## O Trabalho com a Soul Brasil Esportes

A parceria com a Soul Brasil Esportes tem sido fundamental para o desenvolvimento da carreira de Isabela, proporcionando:

- Gestão estratégica de carreira
- Conexões com marcas e patrocinadores
- Suporte em comunicação e marketing pessoal
- Planejamento de longo prazo

## Inspiração para Novos Atletas

A história de Isabela mostra que com dedicação, planejamento estratégico e o suporte adequado, é possível alcançar os mais altos níveis do esporte mundial.

## Conclusão

Isabela Abreu representa o que há de melhor no esporte brasileiro: talento, dedicação e profissionalismo. Sua jornada continua inspirando novos atletas a perseguirem seus sonhos olímpicos.',
        'Ana Clara Miranda',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCbUc3reZXggcvqFay8MwElVT9mcsy3GteQ&s',
        'Assistente de Projetos na Soul Brasil Esportes. Atleta da seleção brasileira de Roller Derby.',
        atletas_id,
        ARRAY['isabela abreu', 'pentatlo moderno', 'jogos olímpicos', 'inspiração'],
        '/images/Isa-Abreu.webp',
        '2024-01-05T09:00:00Z',
        true,
        'Isabela Abreu: Da Promessa ao Pódio Olímpico | Soul Brasil Esportes',
        'A inspiradora jornada de Isabela Abreu no pentatlo moderno, desde os primeiros passos até a representação brasileira em Paris 2024.',
        ARRAY['Isabela Abreu', 'pentatlo moderno', 'jogos olímpicos', 'atleta brasileira', 'Paris 2024'],
        5
    )
    ON CONFLICT (slug) DO NOTHING;
END $$;