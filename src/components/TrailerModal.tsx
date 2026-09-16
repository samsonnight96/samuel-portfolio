import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
  title: string;
  isDarkMode: boolean;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({
  isOpen,
  onClose,
  youtubeId,
  title,
  isDarkMode
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !youtubeId) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl border border-white/20 bg-[#050505] shadow-2xl overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#141312]">
          <div className="flex items-center gap-3">
            <span className="bg-[#C81D11] text-white text-[9px] uppercase font-mono tracking-[0.2em] px-2.5 py-0.5 font-bold">
              PROIEZIONE
            </span>
            <h3 className="text-base font-poster uppercase font-bold tracking-wide truncate max-w-md text-[#E6DFD5]">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-mono uppercase tracking-widest text-white/70 hover:text-[#C81D11] flex items-center gap-1 transition-colors font-bold"
            >
              <span>Apri su YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1 border border-white/20 hover:bg-[#C81D11] hover:border-[#C81D11] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player 16:9 */}
        <div className="relative aspect-video bg-black w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom bar */}
        <div className="px-6 py-3 border-t border-white/10 flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-white/50 bg-[#141312]">
          <span>FORMATO CINEMA DIGITAL • STEREO 2.0</span>
          <span>SAMUEL FERLA ARCHIVE</span>
        </div>
      </div>
    </div>
  );
};
