// /home/project/app/blog/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  blogPosts,
  blogCategories,
  formatDate,
} from '@/lib/blog';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Soul Brasil Esportes',
  description:
    'Artigos sobre gestão de carreira no esporte, marketing esportivo, atletas em destaque e mercado esportivo.',
};

type PageProps = {
  searchParams?: {
    q?: string;
    categoria?: string; // slug da categoria (ex: 'marketing-esportivo')
  };
};

// util: normaliza strings (casefold + sem acento)
function norm(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

export default function BlogPage({ searchParams }: PageProps) {
  const q = (searchParams?.q ?? '').trim();
  const categoriaSlug = (searchParams?.categoria ?? '').trim();

  // mapeia slug -> categoria (name)
  const slugToCategoryName = new Map(
    blogCategories.map((c) => [c.slug, c.name])
  );

  const selectedCategoryName = categoriaSlug
    ? slugToCategoryName.get(categoriaSlug) ?? ''
    : '';

  // filtra posts (publicados) por q e categoria
  const posts = blogPosts
    .filter((p) => p.published)
    .filter((p) => {
      // filtro por categoria (se veio via URL)
      if (selectedCategoryName && p.category !== selectedCategoryName) {
        return false;
      }

      // filtro por q (se veio via URL)
      if (q) {
        const nq = norm(q);
        const haystack = [
          p.title,
          p.excerpt,
          p.category,
          ...(p.tags || []),
        ]
          .filter(Boolean)
          .map((v) => norm(String(v)))
          .join(' || ');

        return haystack.includes(nq);
      }

      return true;
    })
    // mais recentes primeiro
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <>
      {/* Hero simples */}
      <section className="pt-28 pb-10 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold">
            Blog Soul Brasil Esportes
          </h1>
          <p className="mt-2 text-white/90">
            Conteúdo sobre carreira, marketing esportivo, atletas e mercado.
          </p>
        </div>
      </section>

      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          {/* Tabs de categorias (viram Links com ?categoria=<slug>) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {/* Tab "Todos" */}
            <Link
              href="/blog"
              className={[
                'px-4 py-2 rounded-full text-sm border transition',
                categoriaSlug
                  ? 'bg-white border-gray-200 text-soul-dark hover:bg-gray-50'
                  : 'bg-soul-teal text-white border-soul-teal',
              ].join(' ')}
            >
              Todos
            </Link>

            {blogCategories.map((cat) => {
              const isActive = categoriaSlug === cat.slug;
              return (
                <Link
                  key={cat.id}
                  href={`/blog?categoria=${cat.slug}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                  className={[
                    'px-4 py-2 rounded-full text-sm border transition',
                    isActive
                      ? 'text-white'
                      : 'bg-white border-gray-200 text-soul-dark hover:bg-gray-50',
                  ].join(' ')}
                  style={isActive ? { backgroundColor: cat.color } : undefined}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>

          {/* Filtro ativo (mostra chips com q e/ou categoria) */}
          {(q || selectedCategoryName) && (
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {selectedCategoryName && (
                <span className="px-3 py-1 rounded-full text-sm bg-soul-teal/10 text-soul-teal">
                  Categoria: {selectedCategoryName}
                </span>
              )}
              {q && (
                <span className="px-3 py-1 rounded-full text-sm bg-soul-green/10 text-soul-dark">
                  Busca: “{q}”
                </span>
              )}
              {/* Ação para limpar filtros */}
              <Link
                href="/blog"
                className="text-sm underline text-soul-teal hover:text-soul-green"
              >
                Limpar filtros
              </Link>
            </div>
          )}

          {/* Grid de posts */}
          {posts.length === 0 ? (
            <p className="text-gray-600">
              Nenhum artigo encontrado com esse filtro.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Imagem + badge categoria */}
                  {post.featuredImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className="text-white text-xs"
                          style={{
                            backgroundColor:
                              blogCategories.find(
                                (c) => c.name === post.category
                              )?.color || '#009c99',
                          }}
                        >
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min
                      </div>
                    </div>

                    <h3 className="text-xl font-bebas font-bold text-soul-dark mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-soul-teal font-medium hover:text-soul-green transition-colors group text-sm"
                    >
                      Ler artigo completo
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </>
  );
}