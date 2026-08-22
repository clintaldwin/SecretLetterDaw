import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail, Sparkles } from 'lucide-react';
import { youtubeAudioEngine } from '../services/youtubeAudioEngine';

interface OpeningSceneProps {
  onOpenLetter: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onOpenLetter }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Start music playback
    youtubeAudioEngine.play();
    setTimeout(() => {
      onOpenLetter();
    }, 1200);
  };

  return (
    <div
      id="scene-00-invitation"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative z-10 select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="text-center max-w-md w-full flex flex-col items-center"
      >
        {/* Subtle Date Marker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xs uppercase tracking-[0.25em] text-[#d4af37]/80 font-sans mb-1.5"
        >
          August 22, 2026
        </motion.p>

        {/* 11 Months Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xs tracking-widest text-[#a39e93] font-sans mb-8"
        >
          11 months of us
        </motion.p>

        {/* Envelope Interaction Container */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative my-4 cursor-pointer group"
          onClick={handleOpen}
        >
          {/* Subtle Golden Glow behind the Envelope */}
          <div className="absolute -inset-4 bg-[#d4af37]/10 rounded-2xl blur-xl group-hover:bg-[#d4af37]/20 transition-all duration-700 pointer-events-none" />

          {/* Envelope Card */}
          <div className="relative w-64 sm:w-72 h-44 sm:h-48 rounded-xl bg-gradient-to-b from-[#1b1d2c] to-[#12131e] border border-[#d4af37]/30 group-hover:border-[#d4af37]/60 shadow-2xl shadow-black/80 flex flex-col items-center justify-between p-5 overflow-hidden transition-colors duration-500">
            {/* Top flap pattern */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#222538]/60 to-transparent border-b border-[#ffffff]/5 [clip-path:polygon(0_0,100%_0,50%_100%)] pointer-events-none" />

            {/* Top subtle badge */}
            <div className="flex items-center justify-between w-full z-10">
              <span className="text-[10px] tracking-wider text-[#9d978a] font-sans uppercase">
                For Maica
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]/60" />
            </div>

            {/* Wax Seal Center */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 15px rgba(212,175,55,0.2)',
                  '0 0 25px rgba(212,175,55,0.4)',
                  '0 0 15px rgba(212,175,55,0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] via-[#b89128] to-[#8c6b12] flex items-center justify-center border border-[#fff2b2]/40 shadow-lg text-[#16140d]"
            >
              <Heart className="w-5 h-5 fill-current text-[#3d1818]" />
            </motion.div>

            {/* Lower info */}
            <div className="z-10 text-center">
              <p className="text-[11px] font-handwriting text-[#c2bba8] text-base">
                With all my heart
              </p>
            </div>
          </div>
        </motion.div>

        {/* Intimate Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-base sm:text-lg text-[#e6ded2] font-serif italic mt-6 mb-6"
        >
          I wrote something for you.
        </motion.p>

        {/* Open Button */}
        <motion.button
          id="open-letter-button"
          onClick={handleOpen}
          disabled={isOpening}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/30 to-[#d4af37]/20 hover:from-[#d4af37]/40 hover:to-[#d4af37]/40 border border-[#d4af37]/60 text-sm font-sans tracking-wide text-[#fcf8ee] shadow-lg shadow-[#d4af37]/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#d4af37]" />
          <span>{isOpening ? 'Opening letter...' : 'open it'}</span>
        </motion.button>
      </motion.div>

      {/* Opening transition overlay */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
            className="fixed inset-0 bg-[#0c0d14]/70 backdrop-blur-sm z-30 pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-xl font-serif italic text-[#f4ebdb]">
                “And Yet.”
              </p>
              <p className="text-xs font-sans tracking-widest text-[#d4af37]/80 mt-2 uppercase">
                August 22, 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
