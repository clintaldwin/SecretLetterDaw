import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface AndYetSceneProps {
  onClimaxReached?: () => void;
}

export const AndYetScene: React.FC<AndYetSceneProps> = () => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1200); // "dli to siya motoo hahah"
    const timer2 = setTimeout(() => setStep(2), 3000); // "kay impossible kaayo hahahah"
    const timer3 = setTimeout(() => {
      setStep(3); // "AND YET."
    }, 5000);
    const timer4 = setTimeout(() => {
      setStep(4); // "Karon naa 😊"
    }, 7800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div
      id="scene-and-yet-climax"
      className="w-full my-12 py-12 px-6 rounded-3xl bg-gradient-to-b from-[#10111a]/95 via-[#151726]/90 to-[#0d0e17]/95 border border-[#d4af37]/30 shadow-2xl relative flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background warm pulse */}
      <div className="absolute inset-0 bg-radial from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

      {/* Sequence of reveals */}
      <div className="relative z-10 max-w-xl w-full flex flex-col items-center min-h-[300px] justify-center">
        {/* Step 0: The Grade 11 premise */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg text-[#d1c8b8] font-serif italic mb-6"
        >
          “if ang Grade 11 lang nga ako no maka witness ani nato karon...”
        </motion.p>

        {/* Step 1: "dli to siya motoo hahah" */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-sm sm:text-base text-[#a8a192] font-serif mb-3"
            >
              “dli to siya motoo hahah,”
            </motion.p>
          )}
        </AnimatePresence>

        {/* Step 2: "dli to siya motoo kay impossible kaayo hahahah" */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-xs sm:text-sm text-[#8c8577] font-sans tracking-wide mb-8"
            >
              “dli to siya motoo kay impossible kaayo hahahah,”
            </motion.p>
          )}
        </AnimatePresence>

        {/* Step 3: "AND YET." */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="my-6 flex flex-col items-center"
            >
              <span className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-wider font-light text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f5ebdb] to-[#d4af37]">
                AND YET.
              </span>
              <div className="w-16 h-0.5 bg-[#d4af37]/40 rounded-full mt-3" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 4: "Karon naa 😊" */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-6 flex flex-col items-center"
            >
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-serif text-[#fdefd2] italic">
                <span>Karon naa</span>
                <span className="text-xl not-italic">😊</span>
              </div>
              <p className="text-sm text-[#d4af37]/90 font-sans tracking-wide mt-2">
                ako, ikaw, kita hahah
              </p>
              <p className="text-xs text-[#a69e90] font-sans max-w-sm mt-1">
                with memories, mga experiences nga sa atong pag kuyug...
              </p>

              <div className="flex items-center gap-1 mt-4 text-[#d4af37]/70 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-handwriting text-base">The impossible became us</span>
                <Heart className="w-3.5 h-3.5 fill-current text-[#e07a5f]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
