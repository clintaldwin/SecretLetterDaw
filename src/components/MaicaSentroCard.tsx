import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Shield } from 'lucide-react';

export const MaicaSentroCard: React.FC = () => {
  return (
    <motion.div
      id="scene-maica-sentro-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="my-12 sm:my-16 max-w-xl mx-auto px-4"
    >
      <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#22172b]/95 via-[#191122]/95 to-[#120c1a]/95 border border-[#f4a6b8]/30 shadow-2xl text-center overflow-hidden">
        {/* Subtle Rosy Starburst background */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#f4a6b8]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Spiritual Symbol */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f4a6b8]/20 to-[#d4af37]/20 border border-[#f4a6b8]/40 flex items-center justify-center mb-4 text-[#fcd5ce]">
            <Shield className="w-5 h-5 text-[#f4a6b8]" />
          </div>

          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#f4a6b8] mb-2">
            Guide, Protection, and Grace
          </span>

          <h3 className="text-xl sm:text-2xl font-serif text-[#fff0f3] mb-4 italic">
            “Ang Ginoo Naga Sentro”
          </h3>

          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#f4a6b8]/60 to-transparent my-2" />

          <p className="text-base sm:text-lg font-serif italic text-[#fde4eb] leading-relaxed max-w-md my-4">
            “I hope we continue making more memories, growing together, and keeping Ang Ginoo naga sentro sa atung relationship... Padayun ta lovey, PADAYUN TA HEHEH 😊 pipiliin natin Ang isa't Isa ....”
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-handwriting text-[#f4a6b8] italic">
            <Heart className="w-3.5 h-3.5 fill-current text-[#f4a6b8]" />
            <span>Maica to Clint • With God at our core</span>
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
