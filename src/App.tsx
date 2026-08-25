import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, RotateCcw, ExternalLink, ArrowRight, Moon } from 'lucide-react';
import { BackgroundStars } from './components/BackgroundStars';
import { AudioToggle } from './components/AudioToggle';
import { OpeningScene } from './components/OpeningScene';
import { PerspectiveNav } from './components/PerspectiveNav';
import { LetterSection } from './components/LetterSection';
import { MonthsaryCounter } from './components/MonthsaryCounter';
import { PhotoDropCard } from './components/PhotoDropCard';
import { KeepsakeGallery } from './components/KeepsakeGallery';
import {
  LETTER_SECTIONS,
  MAICA_LETTER_SECTIONS,
  PHOTO_MEMORIES,
  MAICA_PHOTO_MEMORIES
} from './data/letterData';
import { LetterPerspective, SceneId } from './types';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [perspective, setPerspective] = useState<LetterPerspective>('clint');
  const [currentScene] = useState<SceneId>('invitation');

  // Scroll to top on open or perspective change
  useEffect(() => {
    if (isOpened) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpened, perspective]);

  const handleOpenLetter = (initialPerspective: LetterPerspective = 'clint') => {
    setPerspective(initialPerspective);
    setIsOpened(true);
  };

  const handleSwitchPerspective = (newPerspective: LetterPerspective) => {
    setPerspective(newPerspective);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setIsOpened(false);
    setPerspective('clint');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0c0d14] text-[#f5efe6] font-sans selection:bg-[#d4af37]/30 selection:text-[#fefae0]">
      {/* Background Celestial Stars Canvas */}
      <BackgroundStars
        currentScene={currentScene}
        isOpened={isOpened}
        isSealed={false}
      />

      {/* Floating Global Audio Player Indicator */}
      <AudioToggle />

      {/* Main Experience */}
      <main className="relative z-10 w-full min-h-screen">
        {!isOpened ? (
          <OpeningScene onOpenLetter={handleOpenLetter} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full pb-32"
          >
            {/* Floating Top Perspective Switcher */}
            <PerspectiveNav
              perspective={perspective}
              onSelectPerspective={handleSwitchPerspective}
            />

            <AnimatePresence mode="wait">
              {perspective === 'clint' ? (
                /* =========================================================================
                   CLINT'S PERSPECTIVE ("AND YET.")
                   ========================================================================= */
                <motion.div
                  key="clint-view"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Masthead Header */}
                  <header className="pt-12 sm:pt-16 pb-8 px-4 text-center max-w-xl mx-auto flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1c2b] border border-[#d4af37]/30 text-[11px] font-sans uppercase tracking-[0.25em] text-[#d4af37] mb-4"
                    >
                      <Moon className="w-3 h-3 text-[#d4af37]" />
                      <span>From Clint to Maica</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#f7ebd9] to-[#d4af37]"
                    >
                      “And Yet.”
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-xs sm:text-sm font-sans tracking-widest text-[#d4af37]/90 uppercase mt-3"
                    >
                      August 22, 2026 • 11 Months of Us
                    </motion.div>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mt-6" />
                  </header>

                  {/* Letter Content Stream */}
                  <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <LetterSection
                      section={LETTER_SECTIONS[0]}
                      index={0}
                      isActive={true}
                    />

                    <LetterSection
                      section={LETTER_SECTIONS[1]}
                      index={1}
                      isActive={true}
                    />

                    <LetterSection
                      section={LETTER_SECTIONS[2]}
                      index={2}
                      isActive={true}
                    />

                    <LetterSection
                      section={LETTER_SECTIONS[3]}
                      index={3}
                      isActive={true}
                    />

                    <LetterSection
                      section={LETTER_SECTIONS[4]}
                      index={4}
                      isActive={true}
                    />

                    {/* PHOTO DROP #1 */}
                    <div className="my-8">
                      <PhotoDropCard
                        memory={PHOTO_MEMORIES[0]}
                        badgeText="Our Story"
                      />
                    </div>

                    <div className="my-8">
                      <MonthsaryCounter />
                    </div>

                    <LetterSection
                      section={LETTER_SECTIONS[5]}
                      index={5}
                      isActive={true}
                    />

                    <LetterSection
                      section={LETTER_SECTIONS[6]}
                      index={6}
                      isActive={true}
                    />

                    {/* PHOTO DROP #2 */}
                    <div className="my-8">
                      <PhotoDropCard
                        memory={PHOTO_MEMORIES[1]}
                        badgeText="Everyday Moments"
                      />
                    </div>

                    <LetterSection
                      section={LETTER_SECTIONS[7]}
                      index={7}
                      isActive={true}
                    />

                    {/* PHOTO DROP #3 */}
                    <div className="my-8">
                      <PhotoDropCard
                        memory={PHOTO_MEMORIES[2]}
                        badgeText="Treasure for Life"
                        isPermanent={true}
                      />
                    </div>

                    <LetterSection
                      section={LETTER_SECTIONS[8]}
                      index={8}
                      isActive={true}
                    />

                    {/* SHARED KEEPSAKE GALLERY • 12 DISTINCT MEMORIES */}
                    <KeepsakeGallery perspective="clint" />

                    <LetterSection
                      section={LETTER_SECTIONS[9]}
                      index={9}
                      isActive={true}
                    />

                    <div className="my-16 text-center max-w-xl mx-auto flex flex-col items-center gap-4">
                      {/* Switch to Maica's Reply Button */}
                      <motion.button
                        id="read-maica-reply-button"
                        onClick={() => handleSwitchPerspective('maica')}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f4a6b8]/25 via-[#f4a6b8]/40 to-[#d4af37]/30 hover:from-[#f4a6b8]/40 hover:to-[#d4af37]/45 border border-[#f4a6b8]/60 text-[#fff2f5] text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(244,166,184,0.25)] transition-all flex items-center gap-2.5 cursor-pointer"
                      >
                        <Heart className="w-4 h-4 text-[#f4a6b8] fill-current" />
                        <span>Read Maica's Reply 💌</span>
                        <ArrowRight className="w-4 h-4 text-[#f4a6b8]" />
                      </motion.button>

                      {/* Go back to Ating Universe Button */}
                      <motion.a
                        id="go-back-ating-universe-button-clint"
                        href="https://ating-universe.vercel.app/"
                        target="_parent"
                        onClick={(e) => {
                          e.preventDefault();
                          try {
                            if (window.top) {
                              window.top.location.href = 'https://ating-universe.vercel.app/';
                            } else {
                              window.location.href = 'https://ating-universe.vercel.app/';
                            }
                          } catch {
                            window.location.href = 'https://ating-universe.vercel.app/';
                          }
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d66f] to-[#d4af37] text-[#12110c] text-xs font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all flex items-center gap-2 cursor-pointer no-underline"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#14120a]" />
                        <span>Go back to Ating Universe</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#14120a]" />
                      </motion.a>

                      {/* Read again option */}
                      <button
                        onClick={handleRestart}
                        className="text-xs text-[#9d978a] hover:text-[#d4af37] transition-colors flex items-center gap-1.5 cursor-pointer mt-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Read from beginning</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* =========================================================================
                   MAICA'S PERSPECTIVE ("STILL CHOOSING YOU.")
                   ========================================================================= */
                <motion.div
                  key="maica-view"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Masthead Header */}
                  <header className="pt-12 sm:pt-16 pb-8 px-4 text-center max-w-xl mx-auto flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24172b] border border-[#f4a6b8]/30 text-[11px] font-sans uppercase tracking-[0.25em] text-[#f4a6b8] mb-4"
                    >
                      <Sparkles className="w-3 h-3 text-[#f4a6b8]" />
                      <span>From Maica to Clint</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#fde4eb] to-[#f4a6b8]"
                    >
                      “Still Choosing You.”
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-xs sm:text-sm font-sans tracking-widest text-[#f4a6b8]/90 uppercase mt-3"
                    >
                      August 22, 2026 • 11 Months of Us
                    </motion.div>

                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#f4a6b8]/40 to-transparent mt-6" />
                  </header>

                  {/* Letter Content Stream */}
                  <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[0]}
                      index={0}
                      isActive={true}
                    />

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[1]}
                      index={1}
                      isActive={true}
                    />

                    {/* PHOTO DROP #1 */}
                    <div className="my-8">
                      <PhotoDropCard
                        memory={MAICA_PHOTO_MEMORIES[0]}
                        badgeText="Our Story"
                      />
                    </div>

                    <div className="my-8">
                      <MonthsaryCounter />
                    </div>

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[2]}
                      index={2}
                      isActive={true}
                    />

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[3]}
                      index={3}
                      isActive={true}
                    />

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[4]}
                      index={4}
                      isActive={true}
                    />

                    {/* PHOTO DROP #2 */}
                    <div className="my-8">
                      <PhotoDropCard
                        memory={MAICA_PHOTO_MEMORIES[1]}
                        badgeText="Still Trying Together"
                      />
                    </div>

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[5]}
                      index={5}
                      isActive={true}
                    />

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[6]}
                      index={6}
                      isActive={true}
                    />

                    {/* PHOTO DROP #3 */}
                    <div className="my-8">
                      <PhotoDropCard
                        memory={MAICA_PHOTO_MEMORIES[2]}
                        badgeText="Special na Special"
                        isPermanent={true}
                      />
                    </div>

                    {/* SHARED KEEPSAKE GALLERY • 12 DISTINCT MEMORIES */}
                    <KeepsakeGallery perspective="maica" />

                    <LetterSection
                      section={MAICA_LETTER_SECTIONS[7]}
                      index={7}
                      isActive={true}
                    />

                    <div className="my-16 text-center max-w-xl mx-auto flex flex-col items-center gap-4">
                      {/* Switch to Clint's Letter Button */}
                      <motion.button
                        id="read-clint-letter-button"
                        onClick={() => handleSwitchPerspective('clint')}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37]/25 via-[#d4af37]/40 to-[#f4a6b8]/30 hover:from-[#d4af37]/40 hover:to-[#f4a6b8]/45 border border-[#d4af37]/60 text-[#fcf8ee] text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all flex items-center gap-2.5 cursor-pointer"
                      >
                        <Moon className="w-4 h-4 text-[#d4af37]" />
                        <span>Read Clint's Letter 📜</span>
                        <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                      </motion.button>

                      {/* Go back to Ating Universe Button */}
                      <motion.a
                        id="go-back-ating-universe-button-maica"
                        href="https://ating-universe.vercel.app/"
                        target="_parent"
                        onClick={(e) => {
                          e.preventDefault();
                          try {
                            if (window.top) {
                              window.top.location.href = 'https://ating-universe.vercel.app/';
                            } else {
                              window.location.href = 'https://ating-universe.vercel.app/';
                            }
                          } catch {
                            window.location.href = 'https://ating-universe.vercel.app/';
                          }
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d66f] to-[#d4af37] text-[#12110c] text-xs font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all flex items-center gap-2 cursor-pointer no-underline"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#14120a]" />
                        <span>Go back to Ating Universe</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#14120a]" />
                      </motion.a>

                      {/* Read again option */}
                      <button
                        onClick={handleRestart}
                        className="text-xs text-[#9d978a] hover:text-[#f4a6b8] transition-colors flex items-center gap-1.5 cursor-pointer mt-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Read from beginning</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-[#6e6b7b]">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#8c8577] mb-1">
                <span>Clint & Maica • Still Choosing Each Other</span>
                <Heart className="w-3 h-3 fill-current text-[#f4a6b8]" />
              </div>
              <p className="text-[11px] tracking-widest text-[#5c5969]">
                AUGUST 22, 2026 • 11TH MONTHSARY
              </p>
            </footer>
          </motion.div>
        )}
      </main>
    </div>
  );
}

