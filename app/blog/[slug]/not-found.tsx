// /app/blog/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bebas font-bold text-soul-dark">
          Post não encontrado
        </h1>
        <p className="mt-3 text-gray-600">
          O artigo pode ter sido movido, removido ou é um rascunho sem preview.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/blog"
            className="px-5 py-2 rounded-lg bg-soul-teal text-white hover:bg-soul-green transition-colors"
          >
            Voltar ao Blog
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-lg border border-soul-teal text-soul-teal hover:bg-soul-teal/10 transition-colors"
          >
            Ir para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}