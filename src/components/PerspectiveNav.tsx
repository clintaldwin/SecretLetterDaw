import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Moon } from 'lucide-react';
import { LetterPerspective } from '../types';

interface PerspectiveNavProps {
  perspective: LetterPerspective;
  onSelectPerspective: (p: LetterPerspective) => void;
}

export const PerspectiveNav: React.FC<PerspectiveNavProps> = ({
  perspective,
  onSelectPerspective,
}) => {
  return (
    <div className="sticky top-4 z-20 w-full flex justify-center px-4 py-2 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto flex items-center gap-1.5 p-1 rounded-full bg-[#131422]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/80"
      >
        {/* Clint's Letter Tab */}
        <button
          id="tab-clint-letter"
          onClick={() => onSelectPerspective('clint')}
          className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            perspective === 'clint'
              ? 'bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/40 to-[#d4af37]/30 text-[#fff8ea] border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.25)]'
              : 'text-[#9c9688] hover:text-[#e4ded3] hover:bg-white/5 border border-transparent'
          }`}
        >
          <Moon className={`w-3.5 h-3.5 ${perspective === 'clint' ? 'text-[#d4af37]' : 'text-current'}`} />
          <span>Clint's Letter</span>
        </button>

        {/* Maica's Reply Tab */}
        <button
          id="tab-maica-letter"
          onClick={() => onSelectPerspective('maica')}
          className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            perspective === 'maica'
              ? 'bg-gradient-to-r from-[#f4a6b8]/30 via-[#f4a6b8]/40 to-[#f4a6b8]/30 text-[#fff2f5] border border-[#f4a6b8]/60 shadow-[0_0_15px_rgba(244,166,184,0.25)]'
              : 'text-[#9c9688] hover:text-[#e4ded3] hover:bg-white/5 border border-transparent'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${perspective === 'maica' ? 'text-[#f4a6b8] fill-current' : 'text-current'}`} />
          <span>Maica's Letter</span>
        </button>
      </motion.div>
    </div>
  );
};
