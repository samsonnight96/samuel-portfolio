import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: GalleryPhoto[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-30 p-2 border border-white/30 hover:bg-[#C81D11] hover:border-[#C81D11] transition-colors text-white cursor-pointer"
        title="Chiudi (Esc)"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Counter and Project Info */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-3 text-white">
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] bg-[#C81D11] text-white px-2.5 py-0.5 font-bold">
          {currentPhoto.project}
        </span>
        <span className="text-[10px] font-mono text-white/60 font-medium">
          STILL {currentIndex + 1} / {photos.length}
        </span>
      </div>

      {/* Left Navigation Arrow */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 z-30 p-3 border border-white/20 hover:border-[#C81D11] text-white hover:bg-[#C81D11] transition-colors cursor-pointer"
          title="Precedente"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Center Image Container */}
      <div
        className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center relative z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.url}
          alt={currentPhoto.project}
          className="max-w-full max-h-[72vh] object-contain border border-white/20 shadow-2xl"
        />
      </div>

      {/* Right Navigation Arrow */}
      {photos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 z-30 p-3 border border-white/20 hover:border-[#C81D11] text-white hover:bg-[#C81D11] transition-colors cursor-pointer"
          title="Successivo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
