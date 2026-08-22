import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { youtubeAudioEngine } from '../services/youtubeAudioEngine';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    const unsubscribe = youtubeAudioEngine.subscribe((playing, muted, vol) => {
      setIsPlaying(playing);
      setIsMuted(muted);
      setVolume(vol);
    });
    return unsubscribe;
  }, []);

  const handleTogglePlay = () => {
    youtubeAudioEngine.togglePlay();
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    youtubeAudioEngine.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    youtubeAudioEngine.setVolume(newVol);
    if (isMuted && newVol > 0) {
      youtubeAudioEngine.unMute();
    }
  };

  return (
    <div
      id="global-audio-pill"
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex flex-col items-end gap-2 select-none"
    >
      {/* Floating Audio Controller Pill */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#161722]/90 backdrop-blur-md border border-[#d4af37]/30 text-xs text-[#e8ded1] shadow-xl shadow-black/50">
        <button
          onClick={handleTogglePlay}
          title={isPlaying ? 'Pause music' : 'Play music'}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/5 transition-all cursor-pointer"
        >
          {/* Animated pulse indicator */}
          <span className="relative flex h-2.5 w-2.5">
            {isPlaying && !isMuted ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37]" />
              </>
            ) : (
              <span className="inline-flex rounded-full h-2.5 w-2.5 bg-[#6c6778]" />
            )}
          </span>

          <Music className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-serif italic text-sm text-[#f0e6d6] pr-1">
            Our Music
          </span>

          <span className="text-[#a0988c] text-[11px] font-sans hidden sm:inline">
            {isPlaying ? (isMuted ? '[ Muted ]' : '[ Playing ]') : '[ Tap to Play ]'}
          </span>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={handleTogglePlay}
          className="p-1.5 rounded-full hover:bg-white/10 text-[#d4af37] transition-colors cursor-pointer"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
        </button>

        {/* Mute/Unmute Toggle */}
        <button
          onClick={handleToggleMute}
          className="p-1.5 rounded-full hover:bg-white/10 text-[#d4af37] transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || !isPlaying ? (
            <VolumeX className="w-3.5 h-3.5 opacity-60" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Expand Video toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 rounded-full hover:bg-white/10 text-[#a0988c] hover:text-[#d4af37] transition-colors cursor-pointer"
          title={isExpanded ? 'Hide player' : 'Show music video player'}
        >
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Expanded Video Card / Embed */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-72 sm:w-80 p-3 rounded-2xl bg-[#141624]/95 backdrop-blur-xl border border-[#d4af37]/30 shadow-2xl shadow-black/80"
          >
            {/* Embedded YouTube player window */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeAudioEngine.videoId}?autoplay=1&enablejsapi=1&loop=1&playlist=${youtubeAudioEngine.videoId}`}
                title="Our Monthsary Song"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Volume slider */}
            <div className="mt-3 flex items-center gap-2.5 px-1">
              <Volume2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
              <span className="text-[10px] text-[#a0988c] font-sans w-6 text-right">
                {isMuted ? '0%' : `${volume}%`}
              </span>
            </div>

            {/* External link fallback */}
            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
              <span className="text-[#a0988c] font-serif italic">Our 11th Monthsary Song</span>
              <a
                href={`https://youtu.be/${youtubeAudioEngine.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline flex items-center gap-1 font-sans"
              >
                <span>Open in YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
