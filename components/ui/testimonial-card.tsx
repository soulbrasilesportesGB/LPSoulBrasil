'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    role: string;
    company?: string;
    image?: string;
  };
  rating?: number;
  featured?: boolean;
}

export function TestimonialCard({ 
  content, 
  author, 
  rating = 5,
  featured = false 
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
        featured 
          ? 'bg-gradient-to-br from-soul-teal to-soul-green text-white' 
          : 'bg-white border border-gray-100 hover:border-soul-teal/20'
      }`}>
        <CardContent className="p-8 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="mb-6">
            <Quote className={`h-8 w-8 ${
              featured ? 'text-soul-yellow/80' : 'text-soul-teal/60'
            }`} aria-hidden="true" />
          </div>

          {/* Rating */}
          {rating && (
            <div className="flex items-center mb-4" aria-label={`${rating} de 5 estrelas`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating 
                      ? featured ? 'text-soul-yellow fill-soul-yellow' : 'text-soul-yellow fill-soul-yellow'
                      : featured ? 'text-white/30' : 'text-gray-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}

          {/* Content */}
          <blockquote className="flex-1 mb-6">
            <p className={`text-base leading-relaxed italic ${
              featured ? 'text-white/90' : 'text-gray-700'
            }`}>
              &ldquo;{content}&rdquo;
            </p>
          </blockquote>

          {/* Author */}
          <div className="flex items-center">
            {author.image ? (
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image
                  src={author.image}
                  alt={`Foto de ${author.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className={`w-12 h-12 rounded-full mr-4 flex-shrink-0 flex items-center justify-center text-lg font-bebas font-bold ${
                featured 
                  ? 'bg-white/20 text-white' 
                  : 'bg-soul-teal/10 text-soul-teal'
              }`}>
                {author.name.charAt(0)}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className={`font-semibold ${
                featured ? 'text-white' : 'text-soul-dark'
              }`}>
                {author.name}
              </div>
              <div className={`text-sm ${
                featured ? 'text-white/70' : 'text-gray-600'
              }`}>
                {author.role}
                {author.company && (
                  <>
                    <span className="mx-1">•</span>
                    {author.company}
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}