import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MessageSquare, PhoneCall, Moon } from 'lucide-react';
import { EVERYDAY_FRAGMENTS } from '../data/letterData';

export const MonthsaryCounter: React.FC = () => {
  return (
    <div
      id="scene-eleven-months"
      className="w-full my-10 py-8 px-4 sm:px-6 rounded-3xl bg-gradient-to-b from-[#121422]/90 to-[#0e0f18]/90 border border-[#d4af37]/20 relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Subtitle */}
        <div className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.2em] text-[#d4af37]/80 mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Our Journey Milestone</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-serif text-[#fbf4ea] mb-1 font-light">
          11
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#a8a192] font-sans mb-6">
          Months of Us • August 22, 2026
        </p>

        {/* 11 Glowing Markers */}
        <div className="flex items-center justify-center gap-2 sm:gap-3.5 py-4 px-4 rounded-full bg-[#0a0b12]/80 border border-white/5 max-w-full overflow-x-auto">
          {Array.from({ length: 11 }).map((_, i) => {
            const isToday = i === 10;
            return (
              <div
                key={i}
                className="flex flex-col items-center group relative cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center transition-all ${
                    isToday
                      ? 'bg-gradient-to-tr from-[#d4af37] to-[#fff4cc] shadow-[0_0_15px_#d4af37] ring-2 ring-[#d4af37]/50 scale-110'
                      : 'bg-[#35384e] group-hover:bg-[#d4af37]/60'
                  }`}
                >
                  {isToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1b1910]" />
                  )}
                </motion.div>
                <span
                  className={`text-[9px] font-sans mt-1.5 ${
                    isToday
                      ? 'text-[#d4af37] font-semibold'
                      : 'text-[#6e6b7b] group-hover:text-[#a09baa]'
                  }`}
                >
                  M{i + 1}
                </span>

                {/* Tooltip on hover */}
                {isToday && (
                  <div className="absolute -bottom-8 whitespace-nowrap px-2 py-0.5 rounded bg-[#d4af37] text-[#12110c] text-[10px] font-semibold tracking-wide shadow-md pointer-events-none">
                    TODAY ✨
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* The Everyday Moments Section Container */}
        <div className="w-full mt-10 pt-8 border-t border-white/5 relative">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-wider text-[#b8b1a3] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Everyday Little Things</span>
          </div>

          <p className="text-xs sm:text-sm text-[#aba395] font-serif italic max-w-md mx-auto mb-8">
            “everyday all those updates, all those mga unsay pagabuhaton sa screen, tabi² chat2, hangtud sa kanang mga memories...”
          </p>

          {/* Floating conversational fragments */}
          <div className="relative w-full min-h-[180px] rounded-2xl bg-[#090a12]/60 border border-white/5 p-4 overflow-hidden">
            {EVERYDAY_FRAGMENTS.map((frag) => (
              <motion.div
                key={frag.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0.6, 0.95, 0.6],
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4 + frag.delay * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: frag.delay,
                }}
                style={{
                  left: `${frag.x}%`,
                  top: `${frag.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className={`absolute px-2.5 py-1 rounded-full bg-[#181a28]/90 border border-[#d4af37]/20 shadow-md backdrop-blur-sm text-[#ded5c5] font-sans ${
                  frag.size === 'lg'
                    ? 'text-xs sm:text-sm font-medium border-[#d4af37]/40'
                    : frag.size === 'md'
                    ? 'text-[11px] sm:text-xs'
                    : 'text-[10px]'
                }`}
              >
                {frag.text}
              </motion.div>
            ))}

            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4 text-[10px] text-[#757284] font-sans">
              <span className="flex items-center gap-1">
                <PhoneCall className="w-2.5 h-2.5 text-[#d4af37]" /> Late Night Calls
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Moon className="w-2.5 h-2.5 text-[#e0b0ff]" /> Goodnight Dreams
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" /> Daily Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
