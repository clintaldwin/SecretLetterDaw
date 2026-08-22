import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Camera, Heart, Maximize2, X } from 'lucide-react';
import { PhotoMemory } from '../types';

interface PhotoDropCardProps {
  memory: PhotoMemory;
  badgeText?: string;
  isPermanent?: boolean;
}

export const PhotoDropCard: React.FC<PhotoDropCardProps> = ({
  memory,
  badgeText = 'Memory Snapshot',
  isPermanent = false,
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const availableUrls: string[] = [];
  if (memory.imageUrl) availableUrls.push(memory.imageUrl);
  if (memory.fallbackUrls) availableUrls.push(...memory.fallbackUrls);

  const activeSrc = customPhoto || (availableUrls.length > 0 && !imageError ? availableUrls[currentUrlIndex] : null);

  const handleImageError = () => {
    if (currentUrlIndex + 1 < availableUrls.length) {
      setCurrentUrlIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
      setImageError(false);
      setImageLoaded(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`my-8 mx-auto w-full max-w-sm sm:max-w-md rounded-2xl bg-[#141624] p-4 sm:p-5 border ${
          isPermanent
            ? 'border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.18)]'
            : 'border-white/10 shadow-xl hover:border-[#d4af37]/40'
        } relative overflow-hidden group transition-all duration-300`}
      >
        {/* Polaroid/Keepsake Header */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-[#202336] text-[#d4af37] font-sans text-[10px] uppercase tracking-wider border border-[#d4af37]/20 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            {badgeText}
          </span>
          <span className="text-[#8e899a] text-[11px] font-sans">
            {memory.dateStr || 'August 2026'}
          </span>
        </div>

        {/* Frame Visual Area */}
        <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#1c1e30] to-[#0d0e18] border border-white/10 overflow-hidden flex items-center justify-center">
          {activeSrc ? (
            <div className="relative w-full h-full group/img cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#161828] text-xs text-[#8e899a]">
                  <Sparkles className="w-4 h-4 text-[#d4af37] animate-spin mr-2" />
                  <span>Loading memory...</span>
                </div>
              )}
              <img
                src={activeSrc}
                alt={memory.title}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-[#f5efe6] flex items-center gap-1.5 border border-white/20">
                  <Maximize2 className="w-3 h-3 text-[#d4af37]" />
                  <span>Expand photo</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative flex flex-col items-center justify-center p-4">
              {/* SVG Evocative Silhouette Art */}
              {memory.illustrationType === 'school-glance' && (
                <svg
                  viewBox="0 0 320 200"
                  className="w-full h-full opacity-85 text-[#d4af37]"
                  fill="none"
                >
                  <rect x="20" y="20" width="280" height="140" rx="8" fill="#181a2c" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="160" y1="20" x2="160" y2="160" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 3" />
                  <circle cx="90" cy="110" r="14" fill="#d4af37" fillOpacity="0.8" />
                  <path d="M70 150 C70 128, 110 128, 110 150 Z" fill="#b89128" fillOpacity="0.6" />
                  <circle cx="230" cy="95" r="14" fill="#e0b0ff" fillOpacity="0.8" />
                  <path d="M210 150 C210 120, 250 120, 250 150 Z" fill="#9d4edd" fillOpacity="0.6" />
                  <path d="M104 110 Q160 80, 216 95" stroke="#f5e6b8" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.7" />
                  <text x="160" y="70" textAnchor="middle" fill="#d4af37" fontSize="10" fontFamily="sans-serif">The First Shy Glances</text>
                </svg>
              )}

              {memory.illustrationType === 'holding-hands' && (
                <svg
                  viewBox="0 0 320 200"
                  className="w-full h-full opacity-90 text-[#d4af37]"
                  fill="none"
                >
                  <circle cx="160" cy="100" r="70" fill="url(#warmGlow)" />
                  <defs>
                    <radialGradient id="warmGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="140" cy="85" r="15" fill="#d4af37" fillOpacity="0.9" />
                  <circle cx="180" cy="85" r="15" fill="#f0d38d" fillOpacity="0.9" />
                  <path d="M125 155 C125 110, 195 110, 195 155 Z" fill="#3a2f1b" fillOpacity="0.8" />
                  <path d="M150 120 Q160 130, 170 120" stroke="#fff5d1" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="160" y="175" textAnchor="middle" fill="#e6ded2" fontSize="11" fontFamily="sans-serif">Holding Hands • Everyday Reality</text>
                </svg>
              )}

              {memory.illustrationType === 'stargazing-moment' && (
                <svg
                  viewBox="0 0 320 200"
                  className="w-full h-full opacity-95"
                  fill="none"
                >
                  <circle cx="160" cy="90" r="60" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
                  <circle cx="160" cy="90" r="6" fill="#d4af37" />
                  <line x1="160" y1="20" x2="160" y2="160" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.3" />
                  <line x1="90" y1="90" x2="230" y2="90" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.3" />
                  <text x="160" y="165" textAnchor="middle" fill="#f5ebdb" fontSize="11" fontFamily="serif" fontStyle="italic">“Treasure for Life”</text>
                </svg>
              )}
            </div>
          )}

          {/* Change or Upload photo trigger */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-[#000000]/70 hover:bg-[#000000]/90 text-[10px] text-[#e0d7c7] border border-white/10 flex items-center gap-1 backdrop-blur-sm transition-all cursor-pointer z-10"
            title="Upload photo from device"
          >
            <Camera className="w-3 h-3 text-[#d4af37]" />
            <span>{activeSrc ? 'Change' : 'Add photo'}</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>

        {/* Caption & Title */}
        <div className="mt-3.5 text-center">
          <h4 className="text-sm font-serif text-[#f2e8dc] italic">
            {memory.title}
          </h4>
          <p className="text-xs text-[#a39c8e] font-sans mt-0.5">
            {memory.caption}
          </p>
        </div>

        {isPermanent && (
          <div className="mt-2.5 pt-2 border-t border-[#d4af37]/20 flex items-center justify-center gap-1.5 text-[11px] text-[#d4af37] font-handwriting text-base">
            <Heart className="w-3 h-3 fill-current text-[#d4af37]" />
            <span>Kept forever in my heart</span>
          </div>
        )}
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && activeSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-2xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-10 right-0 p-2 text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeSrc}
                alt={memory.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-[#d4af37]/30 shadow-2xl"
              />
              <div className="mt-3 text-center">
                <p className="text-sm font-serif italic text-[#f7ebd9]">{memory.title}</p>
                <p className="text-xs text-[#a8a192] font-sans">{memory.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
