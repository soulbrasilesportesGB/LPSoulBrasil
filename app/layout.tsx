import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import CookieBanner from "@/components/ui/cookie-banner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebas = localFont({
  src: [
    { path: '../public/fonts/BebasNeue-latin.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/BebasNeue-latin-ext.woff2', weight: '400', style: 'normal' },
  ],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Soul Brasil Esportes | Gestão de Carreira Esportiva',
  description: 'Transformando talento em trajetória. Gestão de carreira, projetos com marcas e educação para atletas.',
  keywords: 'gestão esportiva, carreira atleta, marketing esportivo, Soul Brasil',
  authors: [{ name: 'Soul Brasil Esportes' }],
  creator: 'Soul Brasil Esportes',
  openGraph: {
    title: 'Soul Brasil Esportes | Gestão de Carreira Esportiva',
    description: 'Transformando talento em trajetória. Gestão de carreira, projetos com marcas e educação para atletas.',
    url: 'https://soulbrasilesportes.com',
    siteName: 'Soul Brasil Esportes',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable} overflow-x-hidden`}>
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
