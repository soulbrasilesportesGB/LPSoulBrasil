import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const navigation = {
  empresa: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Portal Soul', href: 'https://app.soulbrasil.co/' },
    { name: 'Atleta em Foco', href: '/projetos/soul-atleta-em-foco' },
    { name: 'Contato', href: '/contato' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Cookies', href: '/politica-de-cookies' },
    { name: 'LGPD', href: '/lgpd' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/soulbrasilesportes', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/soul-brasil-esportes', icon: Linkedin },
  { name: 'Facebook', href: 'https://facebook.com/soulbrasilesportes', icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-soul-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <Link href="/" className="flex items-center group">
                <img
                  src="/images/logo-soul.png"
                  alt="Soul Brasil Esportes"
                  className="h-12 w-auto group-hover:scale-105 transition-transform"
                />
              </Link>

              <p className="text-gray-300 text-sm leading-relaxed">
                Um novo Portal com jornadas claras para empresas e atletas, com
                governança, processo e acompanhamento.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="h-4 w-4 text-soul-yellow flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:contato@soulbrasil.co" className="hover:text-soul-yellow transition-colors">
                    contato@soulbrasil.co
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="h-4 w-4 text-soul-yellow flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+5541984079334" className="hover:text-soul-yellow transition-colors">
                    +55 (41) 98407-9334
                  </a>
                </div>

                <div className="flex items-start space-x-3 text-sm text-gray-300">
                  <MapPin className="h-4 w-4 text-soul-yellow flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <address className="not-italic">
                    Curitiba, PR
                    <br />
                    Brasil
                  </address>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-soul-green/20 rounded-lg hover:bg-soul-teal/30 transition-colors focus:outline-none focus:ring-2 focus:ring-soul-yellow focus:ring-offset-2 focus:ring-offset-soul-dark"
                    aria-label={`Seguir no ${item.name}`}
                  >
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bebas font-medium text-soul-yellow uppercase tracking-wider mb-4">Institucional</h3>
              <ul className="space-y-3">
                {navigation.empresa.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-300 hover:text-soul-yellow transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bebas font-medium text-soul-yellow uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-300 hover:text-soul-yellow transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-soul-green/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Soul Brasil Esportes. Todos os direitos reservados.</p>
            <div className="text-sm text-gray-400">Feito no Brasil</div>
          </div>
        </div>
      </div>
    </footer>
  );
}