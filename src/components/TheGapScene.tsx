import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, GraduationCap, HeartHandshake } from 'lucide-react';

interface TheGapSceneProps {
  onBridgeGap?: () => void;
}

export const TheGapScene: React.FC<TheGapSceneProps> = () => {
  const [isBridged, setIsBridged] = useState(false);

  return (
    <div
      id="scene-the-gap"
      className="w-full my-8 py-8 px-4 sm:px-6 rounded-2xl bg-gradient-to-b from-[#141624]/90 to-[#0e101a]/95 border border-[#d4af37]/20 shadow-2xl relative overflow-hidden"
    >
      {/* Background soft grid lines simulating notebook paper / academic charts */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-[#d4af37]/75 uppercase mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>The Grade 11 Perception</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif text-[#f2e9dc] text-center mb-2 italic">
          “Layu kay tag Gap...”
        </h3>

        <p className="text-xs sm:text-sm text-[#aba496] max-w-md text-center font-sans mb-8">
          Back in Grade 11, you seemed like a world away. Everything about academics, achievements, and grace — and I was just looking from the bottom.
        </p>

        {/* Visual Gap Diagram */}
        <div className="w-full max-w-lg min-h-[220px] sm:min-h-[260px] relative rounded-xl bg-[#090a10]/80 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
          {/* Upper Right: MAICA */}
          <motion.div
            animate={{
              x: isBridged ? '-120%' : '0%',
              y: isBridged ? '110px' : '0px',
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="self-end flex items-center gap-3"
          >
            <div className="text-right">
              <div className="flex items-center justify-end gap-1.5">
                <span className="text-xs font-semibold text-[#eedec4] tracking-wide">
                  MAICA
                </span>
                <GraduationCap className="w-3.5 h-3.5 text-[#e0b0ff]" />
              </div>
              <span className="text-[11px] text-[#a89ea8] font-sans block">
                Top of everything, radiant & far ahead
              </span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#e0aaff] flex items-center justify-center shadow-lg shadow-[#9d4edd]/30 text-white font-medium text-xs">
              M
            </div>
          </motion.div>

          {/* Center Gap Indicator Line */}
          <div className="my-auto py-4 relative flex items-center justify-center">
            {!isBridged ? (
              <motion.div
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full h-px border-t border-dashed border-[#d4af37]/40 relative flex items-center justify-center">
                  <span className="px-3 py-0.5 rounded-full bg-[#1b1c28] border border-[#d4af37]/30 text-[10px] uppercase tracking-widest text-[#d4af37] font-sans">
                    THE PERCEIVED GAP
                  </span>
                </div>
                <span className="text-[10px] font-handwriting text-[#a89c8a] text-sm mt-2">
                  “seems impossible to even casually talk...”
                </span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#fefae0] text-xs font-sans"
              >
                <HeartHandshake className="w-4 h-4 text-[#d4af37]" />
                <span>The distance collapsed. God made it Us.</span>
              </motion.div>
            )}
          </div>

          {/* Lower Left: CLINT */}
          <motion.div
            animate={{
              x: isBridged ? '120%' : '0%',
              y: isBridged ? '-110px' : '0px',
            }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="self-start flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#b89128] to-[#f4d06f] flex items-center justify-center shadow-lg shadow-[#b89128]/30 text-[#141208] font-bold text-xs">
              C
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-[#f0e6d6] tracking-wide">
                  CLINT
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              </div>
              <span className="text-[11px] text-[#9b9487] font-sans block">
                Grade 11: “Bisag casual talk lang, treasure na kaayo...”
              </span>
            </div>
          </motion.div>
        </div>

        {/* Interaction trigger */}
        <button
          onClick={() => setIsBridged(!isBridged)}
          className="mt-6 px-4 py-1.5 rounded-full bg-[#202334] hover:bg-[#2a2d42] border border-white/10 text-xs text-[#ded7cb] flex items-center gap-2 transition-all cursor-pointer group"
        >
          <span>{isBridged ? 'Reset Grade 11 View' : 'See How The Gap Was Bridged'}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
