import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Moon, ArrowRight } from 'lucide-react';
import { youtubeAudioEngine } from '../services/youtubeAudioEngine';
import { LetterPerspective } from '../types';

interface OpeningSceneProps {
  onOpenLetter: (perspective?: LetterPerspective) => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onOpenLetter }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [openingPerspective, setOpeningPerspective] = useState<LetterPerspective>('clint');

  const handleOpen = (perspective: LetterPerspective = 'clint') => {
    setOpeningPerspective(perspective);
    setIsOpening(true);
    // Start music playback
    youtubeAudioEngine.play();
    setTimeout(() => {
      onOpenLetter(perspective);
    }, 1200);
  };

  return (
    <div
      id="scene-00-invitation"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 relative z-10 select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="text-center max-w-2xl w-full flex flex-col items-center"
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
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs tracking-widest text-[#a39e93] font-sans mb-2"
        >
          11 months of us
        </motion.p>

        {/* Title Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-2xl sm:text-3xl font-serif text-[#f6efe4] italic mb-8"
        >
          Two Hearts. Two Letters. One Universe.
        </motion.h1>

        {/* Dual Envelope Interaction Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl my-4">
          {/* ENVELOPE 1: From Clint to Maica */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative cursor-pointer group"
            onClick={() => handleOpen('clint')}
          >
            {/* Golden Glow */}
            <div className="absolute -inset-3 bg-[#d4af37]/15 rounded-2xl blur-xl group-hover:bg-[#d4af37]/25 transition-all duration-700 pointer-events-none" />

            {/* Envelope Card */}
            <div className="relative h-52 rounded-2xl bg-gradient-to-b from-[#1b1d2c] to-[#12131e] border border-[#d4af37]/35 group-hover:border-[#d4af37]/70 shadow-2xl shadow-black/80 flex flex-col items-center justify-between p-5 overflow-hidden transition-colors duration-500 text-left">
              {/* Top flap pattern */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#222538]/60 to-transparent border-b border-[#ffffff]/5 [clip-path:polygon(0_0,100%_0,50%_100%)] pointer-events-none" />

              {/* Top info badge */}
              <div className="flex items-center justify-between w-full z-10">
                <span className="text-[10px] tracking-wider text-[#d4af37] font-sans uppercase font-medium flex items-center gap-1">
                  <Moon className="w-3 h-3 text-[#d4af37]" />
                  From Clint
                </span>
                <span className="text-[10px] text-[#9d978a] font-sans">For Maica</span>
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
              <div className="z-10 text-center w-full">
                <p className="text-sm font-serif italic text-[#f4ebdb] font-medium">
                  “And Yet.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* ENVELOPE 2: From Maica to Clint */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative cursor-pointer group"
            onClick={() => handleOpen('maica')}
          >
            {/* Rosy Glow */}
            <div className="absolute -inset-3 bg-[#f4a6b8]/15 rounded-2xl blur-xl group-hover:bg-[#f4a6b8]/25 transition-all duration-700 pointer-events-none" />

            {/* Envelope Card */}
            <div className="relative h-52 rounded-2xl bg-gradient-to-b from-[#221829] to-[#140e1c] border border-[#f4a6b8]/35 group-hover:border-[#f4a6b8]/70 shadow-2xl shadow-black/80 flex flex-col items-center justify-between p-5 overflow-hidden transition-colors duration-500 text-left">
              {/* Top flap pattern */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#2d1e38]/60 to-transparent border-b border-[#ffffff]/5 [clip-path:polygon(0_0,100%_0,50%_100%)] pointer-events-none" />

              {/* Top info badge */}
              <div className="flex items-center justify-between w-full z-10">
                <span className="text-[10px] tracking-wider text-[#f4a6b8] font-sans uppercase font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#f4a6b8]" />
                  From Maica
                </span>
                <span className="text-[10px] text-[#a895a0] font-sans">For Clint</span>
              </div>

              {/* Wax Seal Center */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 15px rgba(244,166,184,0.2)',
                    '0 0 25px rgba(244,166,184,0.4)',
                    '0 0 15px rgba(244,166,184,0.2)',
                  ],
                }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#f4a6b8] via-[#d68598] to-[#99475c] flex items-center justify-center border border-[#ffe5ec]/40 shadow-lg text-[#160d11]"
              >
                <Heart className="w-5 h-5 fill-current text-[#471221]" />
              </motion.div>

              {/* Lower info */}
              <div className="z-10 text-center w-full">
                <p className="text-sm font-serif italic text-[#fff0f3] font-medium">
                  “Still Choosing You”
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Primary Action Button */}
        <motion.button
          id="open-letter-button"
          onClick={() => handleOpen('clint')}
          disabled={isOpening}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/35 to-[#f4a6b8]/20 hover:from-[#d4af37]/40 hover:to-[#f4a6b8]/40 border border-[#d4af37]/60 text-sm font-sans tracking-wide text-[#fcf8ee] shadow-lg shadow-[#d4af37]/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
        >
          <span>{isOpening ? 'Opening letters...' : 'Open Letters'}</span>
          <ArrowRight className="w-4 h-4 text-[#d4af37]" />
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
            className="fixed inset-0 bg-[#0c0d14]/80 backdrop-blur-sm z-30 pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4"
            >
              <p className="text-2xl font-serif italic text-[#f4ebdb]">
                {openingPerspective === 'clint' ? '“And Yet.”' : '“Still Choosing You.”'}
              </p>
              <p className="text-xs font-sans tracking-widest text-[#d4af37]/80 mt-2 uppercase">
                {openingPerspective === 'clint' ? 'From Clint to Maica' : 'From Maica to Clint'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

