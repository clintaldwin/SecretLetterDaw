import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { LetterSectionData } from '../types';

interface LetterSectionProps {
  section: LetterSectionData;
  index: number;
  isActive: boolean;
}

export const LetterSection: React.FC<LetterSectionProps> = ({
  section,
  index,
}) => {
  return (
    <motion.section
      id={`section-${section.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className="w-full my-12 sm:my-16 max-w-2xl mx-auto px-4 sm:px-6 relative"
    >
      {/* Floating Letter Card */}
      <div className="paper-texture paper-inner-glow rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        {/* Subtle decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d4af37]/10 to-transparent pointer-events-none" />

        {/* Section Header with subtle numbering */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#d4af37]/80">
              {section.sceneNumber}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-serif italic text-[#ded7cb]">
              {section.sceneTitle}
            </span>
          </div>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]/50" />
        </div>

        {/* The Exact Letter Paragraphs */}
        <div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl font-serif text-[#f4eee4] leading-relaxed tracking-wide">
          {section.paragraphs.map((p, pIdx) => (
            <motion.p
              key={pIdx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pIdx * 0.15 }}
              className="relative"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* UI Commentary or Handwritten Annotation */}
        {(section.handwrittenNote || section.uiCommentary) && (
          <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {section.uiCommentary && (
              <div className="px-3 py-1 rounded-full bg-[#1e2030] text-[11px] font-sans text-[#cfc7b8] border border-white/5 self-start">
                {section.uiCommentary}
              </div>
            )}

            {section.handwrittenNote && (
              <div className="flex items-center gap-2 text-sm sm:text-base font-handwriting text-[#d4af37] italic self-end sm:self-auto">
                <Heart className="w-3 h-3 fill-current text-[#d4af37]/70" />
                <span>{section.handwrittenNote}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
};
