'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SegmentToggleProps {
  activeSegment: 'athlete' | 'company';
  onSegmentChange: (segment: 'athlete' | 'company') => void;
}

export function SegmentToggle({ activeSegment, onSegmentChange }: SegmentToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative flex bg-white p-1 rounded-full shadow-lg border border-soul-teal/20">
        <motion.div
          className="absolute h-[calc(100%-8px)] rounded-full bg-soul-teal shadow-md"
          initial={false}
          animate={{
            x: activeSegment === 'athlete' ? 0 : '100%',
            width: activeSegment === 'athlete' ? '50%' : '50%',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        <button
          onClick={() => onSegmentChange('athlete')}
          className={`relative z-10 px-8 py-3 rounded-full font-bebas text-xl md:text-2xl transition-colors duration-200 ${
            activeSegment === 'athlete' ? 'text-white' : 'text-soul-dark hover:text-soul-teal'
          }`}
        >
          SOU ATLETA
        </button>
        <button
          onClick={() => onSegmentChange('company')}
          className={`relative z-10 px-8 py-3 rounded-full font-bebas text-xl md:text-2xl transition-colors duration-200 ${
            activeSegment === 'company' ? 'text-white' : 'text-soul-dark hover:text-soul-teal'
          }`}
        >
          SOU EMPRESA
        </button>
      </div>
    </div>
  );
}
