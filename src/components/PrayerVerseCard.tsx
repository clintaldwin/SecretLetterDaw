import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, Sparkles } from 'lucide-react';

export const PrayerVerseCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full my-10 py-8 px-6 sm:px-8 rounded-3xl bg-gradient-to-b from-[#181928] to-[#10111d] border border-[#d4af37]/35 shadow-2xl relative overflow-hidden text-center max-w-xl mx-auto"
    >
      {/* Subtle ambient golden candlelight glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#23253a] border border-[#d4af37]/25 text-[#d4af37] text-[11px] font-sans uppercase tracking-widest mb-6">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Holy Scripture & Prayer</span>
        </div>

        {/* Verse Reference */}
        <h4 className="text-sm sm:text-base font-sans tracking-widest text-[#d4af37] uppercase font-semibold mb-3">
          Song of Solomon 1:15 ESV
        </h4>

        {/* The Scripture Itself */}
        <blockquote className="my-2 text-xl sm:text-2xl md:text-3xl font-serif italic text-[#faf2e6] leading-relaxed max-w-lg">
          “Behold, you are beautiful, my love; behold, you are beautiful; your eyes are doves.”
        </blockquote>

        <div className="w-12 h-px bg-[#d4af37]/40 my-6" />

        {/* The sweet emotional whiplash from Clint */}
        <div className="flex flex-col items-center">
          <p className="text-base sm:text-lg text-[#e6ded2] font-handwriting text-2xl">
            🤗🤭 hehehahhahahahahh...
          </p>
          <p className="text-xs text-[#9d9688] font-sans mt-1">
            (always praising God for giving me you)
          </p>
        </div>

        <div className="flex items-center gap-1 mt-6 text-[#d4af37]/60 text-xs">
          <Sparkles className="w-3 h-3" />
          <span className="text-[11px] tracking-wider uppercase">Prayer for our future & guidance</span>
        </div>
      </div>
    </motion.div>
  );
};
