'use client';

import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate, getRelatedPosts, blogCategories, BlogPost } from '@/lib/blog';
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const relatedPosts = getRelatedPosts(post);
  const category = blogCategories.find(cat => cat.name === post.category);
  const shareText = `${post.title} - ${post.excerpt}`;

  return (
    <>
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

            {/* Category Badge */}
            <div className="mb-6">
              <Badge 
                className="text-white text-sm px-4 py-2"
                style={{ backgroundColor: category?.color || '#009c99' }}
              >
                {post.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
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

      {/* Featured Image */}
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

      {/* Content */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Back Button */}
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-soul-teal hover:text-soul-green transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao blog
                </Link>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                />
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-soul-dark mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-soul-teal/10 text-soul-teal rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-soul-dark mb-4">Compartilhar</h3>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <Card className="mb-8 border-0 shadow-lg">
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
                      <h3 className="font-semibold text-soul-dark">{post.author.name}</h3>
                      <p className="text-sm text-gray-500">Autor</p>
                    </div>
                  </div>
                  {post.author.bio && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.author.bio}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <SectionContainer background="gray">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bebas font-bold text-soul-dark mb-8 text-center">
              Artigos Relacionados
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Card key={relatedPost.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className="text-white text-xs"
                        style={{ backgroundColor: blogCategories.find(cat => cat.name === relatedPost.category)?.color || '#009c99' }}
                      >
                        {relatedPost.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(relatedPost.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readingTime} min
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bebas font-bold text-soul-dark mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center text-soul-teal font-medium hover:text-soul-green transition-colors group text-sm"
                    >
                      Ler mais
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