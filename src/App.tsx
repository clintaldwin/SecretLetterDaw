import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, RotateCcw, ExternalLink } from 'lucide-react';
import { BackgroundStars } from './components/BackgroundStars';
import { AudioToggle } from './components/AudioToggle';
import { OpeningScene } from './components/OpeningScene';
import { LetterSection } from './components/LetterSection';
import { TheGapScene } from './components/TheGapScene';
import { AndYetScene } from './components/AndYetScene';
import { MonthsaryCounter } from './components/MonthsaryCounter';
import { PhotoDropCard } from './components/PhotoDropCard';
import { PrayerVerseCard } from './components/PrayerVerseCard';
import { LETTER_SECTIONS, PHOTO_MEMORIES } from './data/letterData';
import { SceneId } from './types';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [currentScene] = useState<SceneId>('invitation');

  // Scroll to top on open
  useEffect(() => {
    if (isOpened) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpened]);

  const handleOpenLetter = () => {
    setIsOpened(true);
  };

  const handleRestart = () => {
    setIsOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0c0d14] text-[#f5efe6] font-sans selection:bg-[#d4af37]/30 selection:text-[#fefae0]">
      {/* Background Celestial Stars & Clint/Maica Dynamic Path Canvas */}
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
            {/* Elegant Header / Masthead */}
            <header className="pt-16 sm:pt-20 pb-8 px-4 text-center max-w-xl mx-auto flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1c2b] border border-[#d4af37]/25 text-[11px] font-sans uppercase tracking-[0.25em] text-[#d4af37] mb-4"
              >
                <Sparkles className="w-3 h-3" />
                <span>Our 11th Monthsary</span>
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
                August 22, 2026 • 11 Months
              </motion.div>

              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mt-6" />
            </header>

            {/* Letter Experience Flow */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              {/* SCENE 01: The Letter Opens */}
              <LetterSection
                section={LETTER_SECTIONS[0]}
                index={0}
                isActive={true}
              />

              {/* SCENE 02: Grade 11 */}
              <LetterSection
                section={LETTER_SECTIONS[1]}
                index={1}
                isActive={true}
              />

              {/* SCENE 03: The Gap Visual Section */}
              <div className="my-8">
                <TheGapScene />
                <LetterSection
                  section={LETTER_SECTIONS[2]}
                  index={2}
                  isActive={true}
                />
              </div>

              {/* SCENE 04: The Emotional Climax (AND YET. -> Karon Naa) */}
              <div className="my-12">
                <AndYetScene />
                <LetterSection
                  section={LETTER_SECTIONS[4]}
                  index={4}
                  isActive={true}
                />
              </div>

              {/* PHOTO DROP #1 */}
              <div className="my-10">
                <PhotoDropCard
                  memory={PHOTO_MEMORIES[0]}
                  badgeText="Photo Drop #1 • Karon Naa"
                />
              </div>

              {/* SCENE 05: 11 Months of Us & Everyday Memories */}
              <div className="my-10">
                <MonthsaryCounter />
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
              </div>

              {/* PHOTO DROP #2 */}
              <div className="my-10">
                <PhotoDropCard
                  memory={PHOTO_MEMORIES[1]}
                  badgeText="Photo Drop #2 • Everyday Moments"
                />
              </div>

              {/* SCENE 06: Treasure for Life */}
              <div className="my-10">
                <LetterSection
                  section={LETTER_SECTIONS[7]}
                  index={7}
                  isActive={true}
                />
                {/* PHOTO DROP #3 - Permanent Keepsake */}
                <PhotoDropCard
                  memory={PHOTO_MEMORIES[2]}
                  badgeText="Photo Drop #3 • Treasure for Life"
                  isPermanent={true}
                />
              </div>

              {/* SCENE 07: A Prayer & Song of Solomon */}
              <div className="my-12">
                <LetterSection
                  section={LETTER_SECTIONS[8]}
                  index={8}
                  isActive={true}
                />
                <PrayerVerseCard />
              </div>

              {/* SCENE 08: The Last Line & Navigation to Ating Universe */}
              <div className="my-16 text-center max-w-xl mx-auto">
                <LetterSection
                  section={LETTER_SECTIONS[9]}
                  index={9}
                  isActive={true}
                />

                <div className="mt-10 flex flex-col items-center gap-4">
                  {/* Go back to Ating Universe Button */}
                  <motion.a
                    id="go-back-ating-universe-button"
                    href="https://ating-universe.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7d66f] to-[#d4af37] text-[#12110c] text-sm font-semibold tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all flex items-center gap-2 cursor-pointer no-underline"
                  >
                    <Sparkles className="w-4 h-4 text-[#14120a]" />
                    <span>Go back to Ating Universe</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#14120a]" />
                  </motion.a>

                  {/* Replay / Read again option */}
                  <button
                    onClick={handleRestart}
                    className="text-xs text-[#9d978a] hover:text-[#d4af37] transition-colors flex items-center gap-1.5 cursor-pointer mt-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Read letter from beginning</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-[#6e6b7b]">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#8c8577] mb-1">
                <span>Made for Maica with all my love</span>
                <Heart className="w-3 h-3 fill-current text-[#d4af37]" />
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
