'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoCloudProps {
  title?: string;
  subtitle?: string;
  logos: {
    name: string;
    src: string;
    href?: string;
  }[];
  variant?: 'default' | 'scrolling';
}

export function LogoCloud({ 
  title, 
  subtitle, 
  logos,
  variant = 'default' 
}: LogoCloudProps) {
  const LogoItem = ({ logo, index }: { logo: typeof logos[0], index: number }) => (
    <motion.div
      key={logo.name}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {logo.href ? (
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-soul-teal/30 hover:shadow-md transition-all duration-300 group-hover:scale-105"
          aria-label={`Visitar ${logo.name}`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={logo.src}
              alt={`Logo ${logo.name}`}
              width={120}
              height={60}
              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
            />
          </div>
        </a>
      ) : (
        <div className="flex items-center justify-center h-20 px-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={logo.src}
              alt={`Logo ${logo.name}`}
              width={120}
              height={60}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {subtitle && (
            <p className="text-sm font-medium text-soul-teal uppercase tracking-wider mb-4">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bebas font-bold text-soul-dark">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Logos Grid */}
      {variant === 'default' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <LogoItem key={logo.name} logo={logo} index={index} />
          ))}
        </div>
      ) : (
        // Scrolling variant for many logos
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [0, -100 * logos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: logos.length * 2,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex-shrink-0 w-48">
                <LogoItem logo={logo} index={0} />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}