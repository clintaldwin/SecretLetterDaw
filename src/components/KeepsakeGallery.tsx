import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PhotoMemory } from '../types';
import { GALLERY_MEMORIES } from '../data/letterData';

interface KeepsakeGalleryProps {
  perspective?: 'clint' | 'maica';
}

export const KeepsakeGallery: React.FC<KeepsakeGalleryProps> = ({ perspective = 'clint' }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoMemory | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const isRosy = perspective === 'maica';

  const handleOpenPhoto = (photo: PhotoMemory, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (selectedIndex + 1) % GALLERY_MEMORIES.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(GALLERY_MEMORIES[nextIdx]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (selectedIndex - 1 + GALLERY_MEMORIES.length) % GALLERY_MEMORIES.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(GALLERY_MEMORIES[prevIdx]);
  };

  return (
    <div
      id="scene-keepsake-gallery"
      className="my-14 sm:my-18 max-w-4xl mx-auto px-4"
    >
      {/* Header Banner */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div
          className={`flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-sans uppercase tracking-[0.2em] mb-3 border ${
            isRosy
              ? 'bg-[#24172b] text-[#f4a6b8] border-[#f4a6b8]/30'
              : 'bg-[#1b1c2b] text-[#d4af37] border-[#d4af37]/30'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Keepsake Photos</span>
        </div>
      </div>

      {/* Grid of Polaroid Keepsakes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {GALLERY_MEMORIES.map((memory, idx) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => handleOpenPhoto(memory, idx)}
            className={`cursor-pointer rounded-2xl p-3 sm:p-3.5 bg-[#131422]/90 border transition-all duration-300 flex flex-col justify-between group ${
              isRosy
                ? 'border-[#f4a6b8]/20 hover:border-[#f4a6b8]/60 hover:shadow-[0_0_20px_rgba(244,166,184,0.15)]'
                : 'border-[#d4af37]/20 hover:border-[#d4af37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
            }`}
          >
            {/* Image Preview Container */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1b2e] flex items-center justify-center">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  if (memory.fallbackUrls && memory.fallbackUrls[0]) {
                    (e.target as HTMLImageElement).src = memory.fallbackUrls[0];
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[11px] font-sans text-white/90 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#d4af37]" />
                  <span>Tap to expand</span>
                </span>
              </div>
            </div>

            {/* Polaroid Note Footer */}
            <div className="mt-3 px-1">
              <div className="flex items-center justify-between text-[10px] text-[#938b9e] font-sans mb-1">
                <span>{memory.dateStr}</span>
                <Sparkles className={`w-2.5 h-2.5 ${isRosy ? 'text-[#f4a6b8]' : 'text-[#d4af37]'}`} />
              </div>
              <h4 className="text-sm font-serif italic text-[#ede5d8] font-medium leading-snug line-clamp-1">
                {memory.title}
              </h4>
              <p className="text-[11px] font-sans text-[#b8b0c2] mt-1 line-clamp-2 leading-relaxed opacity-90">
                {memory.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl bg-[#141524] border border-white/15 p-4 sm:p-6 shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/90 border border-white/10 transition-all z-20 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white/90 border border-white/10 transition-all z-20 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Full Image */}
              <div className="w-full max-h-[60vh] sm:max-h-[68vh] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (selectedPhoto.fallbackUrls && selectedPhoto.fallbackUrls[0]) {
                      (e.target as HTMLImageElement).src = selectedPhoto.fallbackUrls[0];
                    }
                  }}
                  className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Caption Card */}
              <div className="w-full mt-4 text-center">
                <span className={`text-[11px] font-sans tracking-widest uppercase ${isRosy ? 'text-[#f4a6b8]' : 'text-[#d4af37]'}`}>
                  {selectedPhoto.dateStr} • {selectedIndex + 1} of {GALLERY_MEMORIES.length}
                </span>
                <h4 className="text-lg sm:text-xl font-serif italic text-[#fff0f3] mt-1">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm font-serif italic text-[#e6ded2] mt-2 max-w-md mx-auto leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
