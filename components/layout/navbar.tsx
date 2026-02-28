'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Tipagem explícita do item de navegação
 * (resolve erro de build do Railway)
 */
type NavItem = {
  name: string;
  href: string;
  external?: boolean;
};

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  //{ name: 'Serviços', href: '/servicos' },
  //{ name: 'Atletas', href: '/atletas' },
  { name: 'Portal   Soul', href: 'https://app.soulbrasil.co/'},
  { name: 'Atleta em Foco', href: '/projetos/soul-atleta-em-foco' },
  //{ name: 'Projetos', href: '/projetos' },
  //{ name: 'Blog', href: '/blog' },
  //{ name: 'Contato', href: '/contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu mobile ao voltar para desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 h-16 md:h-20 transition-all duration-300',
        'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
      )}
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Soul Brasil Esportes - Página inicial"
          >
            <img
              src="/images/logo-soul-dark.png"
              alt="Soul Brasil Esportes"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              const linkProps = item.external
                ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: item.href };

              return (
                <Link
                  key={item.name}
                  {...linkProps}
                  className={cn(
                    'relative font-medium transition-colors hover:text-soul-teal focus:outline-none focus:ring-2 focus:ring-soul-teal focus:ring-offset-2 rounded-sm px-1 py-1',
                    isActive
                      ? 'text-soul-teal'
                      : 'text-gray-900 hover:text-soul-teal'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}

                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-soul-teal"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contato"
              className="bg-gradient-to-r from-soul-teal to-soul-green text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-soul-teal focus:ring-offset-2"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-soul-teal transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="bg-white border-t border-gray-100 py-4 space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              const linkProps = item.external
                ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: item.href };

              return (
                <Link
                  key={item.name}
                  {...linkProps}
                  className={cn(
                    'block px-4 py-2 font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-soul-teal focus:ring-inset',
                    isActive
                      ? 'bg-soul-teal/10 text-soul-teal border-l-4 border-soul-teal'
                      : 'text-gray-900 hover:bg-gray-50 hover:text-soul-teal'
                  )}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="px-4 pt-4 border-t border-gray-100">
              <Link
                href="/contato"
                className="block w-full text-center bg-gradient-to-r from-soul-teal to-soul-green text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-soul-teal focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}