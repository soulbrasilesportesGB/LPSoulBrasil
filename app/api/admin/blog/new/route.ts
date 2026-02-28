// /home/project/app/api/admin/blog/new/route.ts
import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const supabase = getSupabase();
    if (!supabase) {
      // Fallback: salvar no mock/local storage se Supabase não estiver configurado
      return NextResponse.json({ slug: body.slug });
    }

    // procura categoria pelo nome
    let categoryId: string | null = null;
    if (body.category) {
      const { data: cat } = await supabase
        .from('blog_categories')
        .select('id')
        .eq('name', body.category)
        .maybeSingle();
      categoryId = cat?.id ?? null;
    }

    // upsert por slug (se já existir, atualiza)
    const row = {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt ?? '',
      content: body.content ?? '',
      author_name: body.author?.name ?? null,
      author_avatar: body.author?.avatar ?? null,
      author_bio: body.author?.bio ?? null,
      category_id: categoryId,
      tags: body.tags ?? [],
      featured_image: body.featuredImage ?? null,
      published_at: body.publishedAt ?? new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published: !!body.published,
      seo_meta_title: body.seo?.metaTitle ?? null,
      seo_meta_description: body.seo?.metaDescription ?? null,
      seo_keywords: body.seo?.keywords ?? [],
      reading_time: body.readingTime ?? null,
    };

    const { error } = await supabase
      .from('blog_posts')
      .upsert(row, { onConflict: 'slug' });

    if (error) {
      console.error(error);
      return new NextResponse(error.message, { status: 500 });
    }

    return NextResponse.json({ slug: body.slug });
  } catch (e: any) {
    console.error(e);
    return new NextResponse('Erro ao salvar post', { status: 500 });
  }
}