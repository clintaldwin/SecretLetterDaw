import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';

export const StillChoosingScene: React.FC = () => {
  const [isChoosing, setIsChoosing] = useState(true);

  return (
    <div
      id="scene-still-choosing"
      className="w-full my-8 py-8 px-4 sm:px-6 rounded-3xl bg-gradient-to-b from-[#1c1424]/90 to-[#100d18]/95 border border-[#f4a6b8]/25 shadow-2xl relative overflow-hidden"
    >
      {/* Background celestial soft patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f4a6b8]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest text-[#f4a6b8] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Turning Point</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif text-[#fcf2f4] text-center mb-2 italic">
          “What If...” vs “Let’s Try Again”
        </h3>

        <p className="text-xs sm:text-sm text-[#c4b5c4] max-w-md text-center font-sans mb-8">
          When misunderstandings came and fear whispered <span className="italic">‘what if’</span>, you never gave up on us.
        </p>

        {/* Interactive Comparison Card */}
        <div className="w-full max-w-lg min-h-[220px] sm:min-h-[250px] relative rounded-2xl bg-[#0d0914]/85 border border-[#f4a6b8]/20 p-6 flex flex-col justify-between overflow-hidden">
          <AnimatePresence mode="wait">
            {!isChoosing ? (
              <motion.div
                key="whatifs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center my-auto text-center"
              >
                <span className="px-3 py-1 rounded-full bg-[#2a1b24] text-[#e09fa8] text-[11px] font-sans uppercase tracking-wider mb-3">
                  Katung ni abut sa part...
                </span>
                <p className="text-sm sm:text-base font-serif italic text-[#e6d0d8] max-w-sm leading-relaxed">
                  “abi nako na mao najd tuy ending 🥹... cge kog ana nga ‘what if’...”
                </p>
                <span className="text-[11px] text-[#9b8594] font-sans mt-3">
                  Doubts and fears trying to pull us apart
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="still-trying"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center my-auto text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f4a6b8]/30 to-[#d4af37]/30 flex items-center justify-center mb-3 border border-[#f4a6b8]/40 shadow-lg shadow-[#f4a6b8]/20">
                  <Heart className="w-6 h-6 text-[#f7cad0] fill-current" />
                </div>
                <span className="text-xs sm:text-sm font-serif italic text-[#fef0f2] font-semibold">
                  “try, let’s try and try naten ulit”
                </span>
                <div className="mt-3 px-4 py-1.5 rounded-full bg-[#351a2e]/60 border border-[#f4a6b8]/40 text-[11px] sm:text-xs text-[#ffd6df] font-sans flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f4a6b8]" />
                  <span>Still choosing each other. Still trying.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interaction Switcher */}
        <button
          onClick={() => setIsChoosing(!isChoosing)}
          className="mt-6 px-5 py-2 rounded-full bg-[#2a1c2e] hover:bg-[#38263e] border border-[#f4a6b8]/30 text-xs text-[#f4e2ec] flex items-center gap-2 transition-all cursor-pointer group shadow-md shadow-black/40"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#f4a6b8] group-hover:rotate-180 transition-transform duration-500" />
          <span>{isChoosing ? 'Review the “What If” moment' : 'See Clint’s Reassurance'}</span>
        </button>
      </div>
    </div>
  );
};
