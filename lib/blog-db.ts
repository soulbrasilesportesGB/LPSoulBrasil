// /home/project/lib/blog-db.ts
// Serviço de leitura do Blog a partir do Supabase, com fallback para o mock.
// Agora cria o client do Supabase localmente (sem importar de outros arquivos).

import { createClient } from '@supabase/supabase-js';
import {
  BlogPost,
  BlogCategory,
  blogPosts as mockPosts,
  blogCategories as mockCategories,
  calculateReadingTime,
} from '@/lib/blog';

/** Cria um client local para evitar problemas de path no build */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

/** Helpers seguros */
function envReady() {
  return !!SUPABASE_URL && !!SUPABASE_ANON_KEY && !!supabase;
}

function mapRowToPost(row: any, category?: BlogCategory): BlogPost {
  return {
    id: String(row.id),
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? '',
    content: row.content ?? '',
    author: {
      name: row.author_name ?? 'Equipe Soul',
      avatar: row.author_avatar ?? undefined,
      bio: row.author_bio ?? undefined,
    },
    category: category?.name ?? row.category_name ?? 'Sem categoria',
    tags: (row.tags as string[]) ?? [],
    featuredImage: row.featured_image ?? undefined,
    publishedAt: row.published_at ?? new Date().toISOString(),
    updatedAt: row.updated_at ?? row.published_at ?? new Date().toISOString(),
    published: !!row.published,
    seo: {
      metaTitle: row.seo_meta_title ?? undefined,
      metaDescription: row.seo_meta_description ?? undefined,
      keywords: (row.seo_keywords as string[]) ?? undefined,
    },
    readingTime:
      typeof row.reading_time === 'number'
        ? row.reading_time
        : calculateReadingTime(row.content ?? ''),
  };
}

async function fetchCategoryById(categoryId: string): Promise<BlogCategory | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .eq('id', categoryId)
    .maybeSingle();

  if (error || !data) return null;

  return {
    id: String(data.id),
    name: data.name,
    slug: data.slug,
    description: data.description ?? undefined,
    color: data.color ?? undefined,
  };
}

/** Pega 1 post por slug (publicado por padrão) */
export async function fetchPostBySlug(
  slug: string,
  opts?: { includeDraft?: boolean }
): Promise<BlogPost | null> {
  if (!envReady()) {
    const m = mockPosts.find(
      (p) => p.slug === slug && (opts?.includeDraft ? true : p.published)
    );
    return m ?? null;
  }

  const query = supabase!
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .limit(1);

  if (!opts?.includeDraft) query.eq('published', true);

  const { data, error } = await query.maybeSingle();
  if (error || !data) {
    const m = mockPosts.find(
      (p) => p.slug === slug && (opts?.includeDraft ? true : p.published)
    );
    return m ?? null;
  }

  const category = data.category_id ? await fetchCategoryById(data.category_id) : null;
  return mapRowToPost(data, category ?? undefined);
}

/** Lista recentes (publicados) */
export async function fetchRecentPosts(limit = 9): Promise<BlogPost[]> {
  if (!envReady()) {
    return [...mockPosts]
      .filter((p) => p.published)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  }

  const { data, error } = await supabase!
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(limit);

  if (error || !data) {
    return [...mockPosts]
      .filter((p) => p.published)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, limit);
  }

  // categorias em lote
  const categoryIds = Array.from(
    new Set(data.map((d) => d.category_id).filter(Boolean))
  );
  const categoriesMap = new Map<string, BlogCategory>();
  if (categoryIds.length) {
    const { data: cats } = await supabase!
      .from('blog_categories')
      .select('*')
      .in('id', categoryIds);
    cats?.forEach((c: any) => {
      categoriesMap.set(String(c.id), {
        id: String(c.id),
        name: c.name,
        slug: c.slug,
        description: c.description ?? undefined,
        color: c.color ?? undefined,
      });
    });
  }

  return data.map((row) =>
    mapRowToPost(
      row,
      row.category_id ? categoriesMap.get(row.category_id) : undefined
    )
  );
}

/** Lista por categoria (slug) */
export async function fetchPostsByCategorySlug(
  categorySlug: string
): Promise<BlogPost[]> {
  if (!envReady()) {
    const cat = mockCategories.find((c) => c.slug === categorySlug);
    if (!cat) return [];
    return mockPosts
      .filter((p) => p.published && p.category === cat.name)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }

  // 1) pega categoria
  const { data: cat, error: catErr } = await supabase!
    .from('blog_categories')
    .select('*')
    .eq('slug', categorySlug)
    .maybeSingle();
  if (catErr || !cat) return [];

  // 2) posts publicados dessa categoria
  const { data, error } = await supabase!
    .from('blog_posts')
    .select('*')
    .eq('category_id', cat.id)
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error || !data) return [];

  const category: BlogCategory = {
    id: String(cat.id),
    name: cat.name,
    slug: cat.slug,
    description: cat.description ?? undefined,
    color: cat.color ?? undefined,
  };

  return data.map((row) => mapRowToPost(row, category));
}

/** Relacionados (por categoria e/ou tags) */
export async function fetchRelatedPosts(
  basePost: BlogPost,
  limit = 3
): Promise<BlogPost[]> {
  if (!envReady()) {
    const { getRelatedPosts } = await import('@/lib/blog');
    return getRelatedPosts(basePost, limit);
  }

  const { data, error } = await supabase!
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .neq('slug', basePost.slug)
    .order('published_at', { ascending: false })
    .limit(20);

  if (error || !data || !data.length) {
    const { getRelatedPosts } = await import('@/lib/blog');
    return getRelatedPosts(basePost, limit);
  }

  const catIds = Array.from(new Set(data.map((d) => d.category_id).filter(Boolean)));
  const categoriesMap = new Map<string, BlogCategory>();
  if (catIds.length) {
    const { data: cats } = await supabase!
      .from('blog_categories')
      .select('*')
      .in('id', catIds);
    cats?.forEach((c: any) => {
      categoriesMap.set(String(c.id), {
        id: String(c.id),
        name: c.name,
        slug: c.slug,
        description: c.description ?? undefined,
        color: c.color ?? undefined,
      });
    });
  }

  const pool = data
    .map((row) =>
      mapRowToPost(
        row,
        row.category_id ? categoriesMap.get(row.category_id) : undefined
      )
    )
    .filter((p) => {
      const sameCategory = p.category === basePost.category;
      const shareTag = p.tags?.some((t) => basePost.tags?.includes(t));
      return sameCategory || shareTag;
    });

  return pool.slice(0, limit);
}

/** Categorias (todas) */
export async function fetchCategories(): Promise<BlogCategory[]> {
  if (!envReady()) return mockCategories;

  const { data, error } = await supabase!
    .from('blog_categories')
    .select('*')
    .order('name', { ascending: true });
  if (error || !data) return mockCategories;

  return data.map((c: any) => ({
    id: String(c.id),
    name: c.name,
    slug: c.slug,
    description: c.description ?? undefined,
    color: c.color ?? undefined,
  }));
}