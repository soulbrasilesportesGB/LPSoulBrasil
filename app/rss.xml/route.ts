// /home/project/app/rss.xml/route.ts
import { blogPosts } from '@/lib/blog';

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://soulbrasil.co';

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function GET() {
  const items = blogPosts
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((post) => {
      const link = `${SITE}/blog/${post.slug}`;
      const pubDate = new Date(post.publishedAt).toUTCString();
      const updated = new Date(post.updatedAt).toUTCString();

      return `
  <item>
    <title>${escape(post.title)}</title>
    <link>${link}</link>
    <guid>${link}</guid>
    <description>${escape(post.excerpt)}</description>
    <pubDate>${pubDate}</pubDate>
    <lastBuildDate>${updated}</lastBuildDate>
    ${post.featuredImage ? `<enclosure url="${post.featuredImage}" type="image/jpeg" />` : ''}
    <category>${escape(post.category)}</category>
  </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Soul Brasil Esportes — Blog</title>
  <link>${SITE}/blog</link>
  <description>Insights do mundo esportivo, marketing e carreira</description>
  <language>pt-BR</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=300',
    },
  });
}