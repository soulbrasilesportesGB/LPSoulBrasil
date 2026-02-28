'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricCardProps {
  value: string | number;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
  animated?: boolean;
}

export function MetricCard({ 
  value, 
  label, 
  suffix = '', 
  prefix = '',
  description,
  animated = true 
}: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

  useEffect(() => {
    if (isInView && animated && typeof value === 'number') {
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, value, animated]);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold gradient-text mb-2">
          {prefix}
          {typeof displayValue === 'number' ? 
            displayValue.toLocaleString('pt-BR') : 
            displayValue
          }
          {suffix}
        </div>
        
        <div className="h-1 w-12 bg-gradient-to-r from-soul-teal to-soul-yellow mx-auto mb-4 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        
        <h3 className="text-lg font-semibold text-soul-dark mb-2">
          {label}
        </h3>
        
        {description && (
          <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}