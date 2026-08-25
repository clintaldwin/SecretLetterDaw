import React from 'react';
import { motion } from 'motion/react';
import { LetterSectionData } from '../types';

interface LetterSectionProps {
  section: LetterSectionData;
  index: number;
  isActive: boolean;
}

export const LetterSection: React.FC<LetterSectionProps> = ({
  section,
}) => {
  return (
    <motion.section
      id={`section-${section.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
      className="w-full my-8 sm:my-10 max-w-2xl mx-auto px-4 sm:px-6 relative"
    >
      {/* Letter Card */}
      <div className="paper-texture paper-inner-glow rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Subtle corner light */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d4af37]/10 to-transparent pointer-events-none" />

        {/* The Exact Letter Paragraphs */}
        <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl font-serif text-[#f4eee4] leading-relaxed tracking-wide">
          {section.paragraphs.map((p, pIdx) => (
            <motion.p
              key={pIdx}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.1 }}
              className="relative whitespace-pre-line"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

