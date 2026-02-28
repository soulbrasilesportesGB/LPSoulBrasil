// /home/project/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import ShareButtons from '@/components/blog/ShareButtonsClient';

// Service (Supabase + fallback)
import {
  fetchPostBySlug,
  fetchRelatedPosts as fetchRelatedPostsDB,
  fetchCategories,
} from '@/lib/blog-db';

// util (mantemos o formatador existente)
import { formatDate, blogCategories as mockCategories } from '@/lib/blog';

// no topo
import { redirect } from 'next/navigation';

interface BlogPostPageProps {
  params: { slug: string };
  searchParams?: { preview?: string };
}

/** URL absoluta segura com fallback */
function absoluteUrl(path: string) {
  const base =
    process.env.NEXT_PUBLIC_SUPABASE_SITE_URL?.replace(/\/$/, '') || // se você usar domínio da app aqui
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://soulbrasil.co';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export async function generateMetadata(
  { params, searchParams }: BlogPostPageProps
): Promise<Metadata> {
  const includeDraft = searchParams?.preview === '1';
  const post = await fetchPostBySlug(params.slug, { includeDraft });
  if (!post) {
    return { title: 'Post não encontrado | Soul Brasil Esportes' };
  }

  const url = absoluteUrl(`/blog/${post.slug}`);
  const images = post.featuredImage
    ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }]
    : [];

  return {
    title: post.seo.metaTitle || `${post.title} | Soul Brasil Esportes`,
    description: post.seo.metaDescription || post.excerpt,
    keywords: post.seo.keywords,
    alternates: { canonical: url },
    robots: post.published
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: 'article',
      url,
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription || post.excerpt,
      images,
      siteName: 'Soul Brasil Esportes',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const includeDraft = searchParams?.preview === '1';

  // Post (Supabase com fallback)
  const post = await fetchPostBySlug(params.slug, { includeDraft });

  // Protege rascunhos: só abre se tiver ?preview=1
if (!post) {
  // slug inexistente → não explode a página
  redirect('/blog');
}

if (!post.published && searchParams?.preview !== '1') {
  // rascunho sem preview → volta pro blog
  redirect('/blog');
}

  // Categorias (pra pegar cor). Se falhar, usa mockCategories.
  const categories = (await fetchCategories()) ?? mockCategories;
  const category = categories.find((c) => c.name === post.category) ??
    mockCategories.find((c) => c.name === post.category);

  // Relacionados (service com fallback)
  const relatedPosts = await fetchRelatedPostsDB(post, 3);

  const url = absoluteUrl(`/blog/${post.slug}`);

  // ---------- JSON-LD (Article) ----------
  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage ? [post.featuredImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Person', name: post.author.name },
    publisher: {
      '@type': 'Organization',
      name: 'Soul Brasil Esportes',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/logo-soul-dark.png'),
      },
    },
  };
  // --------------------------------------

  return (
    <>
      {/* JSON-LD inline */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />
        <div className="relative container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>

            {/* Categoria */}
            <div className="mb-6">
              <Badge
                className="text-white text-sm px-4 py-2"
                style={{ backgroundColor: category?.color || '#009c99' }}
              >
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagem destaque */}
      {post.featuredImage && (
        <section className="relative -mt-16 mb-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conteúdo */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Principal */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-soul-teal hover:text-soul-green transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao blog
                </Link>
              </div>

              <article className="prose prose-lg max-w-none">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(/\n/g, '<br />'),
                  }}
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-soul-dark mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-soul-teal/10 text-soul-teal rounded-full text-sm"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compartilhar */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-soul-dark mb-4">
                  Compartilhar
                </h3>
                <ShareButtons url={url} title={post.title} text={post.excerpt} />
              </div>
            </div>

            {/* Sidebar simples */}
            <div className="lg:col-span-1">
              <div className="mb-8 border-0 shadow-lg rounded-xl bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {post.author.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-soul-dark">
                        {post.author.name}
                      </h3>
                      <p className="text-sm text-gray-500">Autor</p>
                    </div>
                  </div>
                  {post.author.bio && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.author.bio}
                    </p>
                  )}
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Relacionados */}
      {relatedPosts.length > 0 && (
        <SectionContainer background="gray">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bebas font-bold text-soul-dark mb-8 text-center">
              Artigos Relacionados
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Card
                  key={rp.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={rp.featuredImage}
                      alt={rp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className="text-white text-xs"
                        style={{
                          backgroundColor:
                            (categories.find((c) => c.name === rp.category)?.color) ||
                            (mockCategories.find((c) => c.name === rp.category)?.color) ||
                            '#009c99',
                        }}
                      >
                        {rp.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(rp.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {rp.readingTime} min
                      </div>
                    </div>

                    <h3 className="text-lg font-bebas font-bold text-soul-dark mb-3 line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                      {rp.excerpt}
                    </p>

                    <Link
                      href={`/blog/${rp.slug}`}
                      className="inline-flex items-center text-soul-teal font-medium hover:text-soul-green transition-colors group text-sm"
                    >
                      Ler artigo completo
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}
    </>
  );
}