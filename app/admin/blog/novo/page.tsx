// /home/project/app/admin/blog/novo/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye, X, Plus } from 'lucide-react';

import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

import { blogCategories, calculateReadingTime, type BlogPost } from '@/lib/blog';

type NewPostPayload = Omit<BlogPost, 'id' | 'updatedAt' | 'readingTime'> & {
  readingTime?: number;
};

export default function NewBlogPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    featuredImage: '',
    published: false,
    author: {
      name: 'Maria Teresa Publio Dias',
      avatar:
        'https://www.espm.br/wp-content/uploads/Maria-Teresa-Publio-Dias-nova.jpg',
      bio: 'CEO & Fundadora da Soul Brasil Esportes',
    },
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: [] as string[],
    },
  });

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
      seo: {
        ...prev.seo,
        metaTitle: title ? `${title} | Soul Brasil Esportes` : '',
      },
    }));
  };

  const addTag = () => {
    const t = newTag.trim();
    if (t && !tags.includes(t)) {
      setTags((old) => [...old, t]);
      setNewTag('');
    }
  };

  const removeTag = (t: string) => setTags((old) => old.filter((x) => x !== t));

  async function persistPost(payload: NewPostPayload) {
    const res = await fetch('/api/admin/blog/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const msg = await res.text().catch(() => 'Erro ao salvar');
      throw new Error(msg);
    }
    return (await res.json()) as { slug: string };
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const now = new Date().toISOString();
      const readingTime = calculateReadingTime(formData.content);

      const newPost: NewPostPayload = {
        ...formData,
        tags,
        readingTime,
        publishedAt: now,
        // updatedAt é definido no backend
        seo: { ...formData.seo, keywords: tags },
      };

      await persistPost(newPost);
      router.push('/admin/blog');
    } catch (err) {
      console.error(err);
      alert('Falha ao salvar o post.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreview = async () => {
    // Salva como rascunho (published=false) e abre a rota com ?preview=1
    if (!formData.slug) {
      alert('Defina um título para gerar o slug antes de pré-visualizar.');
      return;
    }
    setIsLoading(true);
    try {
      const now = new Date().toISOString();
      const readingTime = calculateReadingTime(formData.content);
      const draftPayload: NewPostPayload = {
        ...formData,
        published: false,
        tags,
        readingTime,
        publishedAt: now,
        seo: { ...formData.seo, keywords: tags },
      };
      await persistPost(draftPayload);
      window.open(`/blog/${formData.slug}?preview=1`, '_blank');
    } catch (e) {
      console.error(e);
      alert('Não foi possível abrir o preview.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-soul-teal via-soul-green to-soul-dark text-white">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/admin/blog"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bebas font-semibold tracking-tight">
            Novo Post
          </h1>
          <p className="text-white/90 mt-2">
            Crie um novo artigo para o blog da Soul Brasil Esportes
          </p>
        </div>
      </section>

      <SectionContainer>
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    Informações básicas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Digite o título do post"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, slug: e.target.value }))
                      }
                      placeholder="url-do-post"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      URL: /blog/{formData.slug || 'url-do-post'}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Resumo *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, excerpt: e.target.value }))
                      }
                      placeholder="Breve descrição do post (aparece na listagem)"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="featuredImage">Imagem destacada (URL)</Label>
                    <Input
                      id="featuredImage"
                      type="url"
                      value={formData.featuredImage}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          featuredImage: e.target.value,
                        }))
                      }
                      placeholder="https://exemplo.com/imagem.jpg"
                    />
                    {formData.featuredImage && (
                      <div className="mt-2">
                        <img
                          src={formData.featuredImage}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    Conteúdo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="content">Conteúdo do post *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, content: e.target.value }))
                      }
                      placeholder="Escreva o conteúdo do post em Markdown..."
                      rows={20}
                      className="font-mono"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Suporte a Markdown. Tempo de leitura estimado:{' '}
                      {calculateReadingTime(formData.content)} min
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    Publicação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="published">Publicar imediatamente</Label>
                    <Switch
                      id="published"
                      checked={formData.published}
                      onCheckedChange={(checked) =>
                        setFormData((p) => ({ ...p, published: checked }))
                      }
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePreview}
                      className="flex-1"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button type="submit" disabled={isLoading} className="flex-1">
                      <Save className="mr-2 h-4 w-4" />
                      {isLoading ? 'Salvando...' : 'Salvar'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, category: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-soul-teal focus:border-transparent"
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    {blogCategories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    SEO
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="metaTitle">Meta título</Label>
                    <Input
                      id="metaTitle"
                      value={formData.seo.metaTitle}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          seo: { ...p.seo, metaTitle: e.target.value },
                        }))
                      }
                      placeholder="Título para SEO (máx. 60)"
                      maxLength={60}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.seo.metaTitle.length}/60 caracteres
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="metaDescription">Meta descrição</Label>
                    <Textarea
                      id="metaDescription"
                      rows={3}
                      maxLength={160}
                      value={formData.seo.metaDescription}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          seo: { ...p.seo, metaDescription: e.target.value },
                        }))
                      }
                      placeholder="Descrição para SEO (máx. 160)"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.seo.metaDescription.length}/160 caracteres
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Nova tag"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                    />
                    <Button type="button" onClick={addTag} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {t}
                        <button
                          type="button"
                          onClick={() => removeTag(t)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-semibold tracking-tight">
                    Autor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <img
                      src={formData.author.avatar}
                      alt={formData.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm">
                        {formData.author.name}
                      </p>
                      <p className="text-xs text-gray-500">{formData.author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </SectionContainer>
    </>
  );
}