'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  href?: string;
  variant?: 'default' | 'featured';
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  features,
  href,
  variant = 'default' 
}: ServiceCardProps) {
  const CardComponent = href ? 'a' : 'div';
  const cardProps = href ? { href } : {};

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card 
        className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
          variant === 'featured' 
            ? 'bg-gradient-to-br from-soul-teal to-soul-green text-white border-2 border-transparent' 
            : 'bg-white hover:border-soul-teal/20 border border-gray-100'
        }`}
        {...(href && { as: CardComponent, ...cardProps })}
      >
        <CardContent className="p-8">
          <div className="flex flex-col h-full">
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 ${
              variant === 'featured' 
                ? 'bg-white/20' 
                : 'bg-gradient-to-br from-soul-teal/10 to-soul-green/10 group-hover:from-soul-teal group-hover:to-soul-green group-hover:text-white'
            }`}>
              <Icon 
                className={`h-8 w-8 ${
                  variant === 'featured' 
                    ? 'text-white' 
                    : 'text-soul-teal group-hover:text-white'
                }`} 
                aria-hidden="true" 
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className={`text-xl font-bebas font-bold mb-4 ${
                variant === 'featured' ? 'text-white' : 'text-soul-dark group-hover:text-soul-teal'
              }`}>
                {title}
              </h3>
              
              <p className={`text-base leading-relaxed mb-6 ${
                variant === 'featured' ? 'text-white/90' : 'text-gray-600'
              }`}>
                {description}
              </p>

              {features && features.length > 0 && (
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        variant === 'featured' ? 'bg-soul-yellow' : 'bg-soul-teal'
                      }`} />
                      <span className={`text-sm ${
                        variant === 'featured' ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA */}
            {href && (
              <div className="mt-6 pt-6 border-t border-current/20">
                <span className={`text-sm font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300 ${
                  variant === 'featured' ? 'text-soul-yellow' : 'text-soul-teal'
                }`}>
                  Saiba mais
                  <svg 
                    className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}