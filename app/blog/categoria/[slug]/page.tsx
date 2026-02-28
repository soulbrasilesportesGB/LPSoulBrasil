import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostsByCategory, blogCategories, formatDate } from '@/lib/blog';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = blogCategories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Categoria não encontrada | Soul Brasil Esportes',
    };
  }

  return {
    title: `${category.name} | Blog Soul Brasil Esportes`,
    description: category.description || `Artigos sobre ${category.name} no blog da Soul Brasil Esportes`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = blogCategories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(params.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span>Categorias</span>
              <span>/</span>
              <span>{category.name}</span>
            </div>

            {/* Back Button */}
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao blog
              </Link>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <Badge 
                className="text-white text-sm px-4 py-2"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-bebas font-bold leading-tight mb-6">
              {category.name}
            </h1>
            
            {category.description && (
              <p className="text-xl text-white/90 leading-relaxed">
                {category.description}
              </p>
            )}

            <div className="mt-6 text-white/80">
              {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <SectionContainer>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className="text-white text-xs"
                      style={{ backgroundColor: category.color }}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author.name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bebas font-bold text-soul-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-soul-teal font-medium hover:text-soul-green transition-colors group text-sm mt-auto"
                  >
                    Ler mais
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              Ainda não há artigos nesta categoria.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-soul-teal font-medium hover:text-soul-green transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver todos os artigos
            </Link>
          </div>
        )}
      </SectionContainer>
    </>
  );
}