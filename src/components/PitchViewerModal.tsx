import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { DrawerScript } from '../types';

interface PitchViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  script: DrawerScript | null;
  isDarkMode: boolean;
}

export const PitchViewerModal: React.FC<PitchViewerModalProps> = ({
  isOpen,
  onClose,
  script,
  isDarkMode
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = script?.pitchImages ?? [];
  const total = images.length;

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % total);
  }, [total]);

  // Reset index when opening a different script
  useEffect(() => {
    setCurrentIndex(0);
  }, [script?.id]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && total > 1) next();
      if (e.key === 'ArrowLeft' && total > 1) prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, next, prev, onClose, total]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !script) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col" style={{ background: 'rgba(0,0,0,0.97)' }}>

      {/* Top Bar */}
      <div className={`flex items-center justify-between px-6 py-4 border-b flex-shrink-0 ${
        isDarkMode ? 'border-white/10' : 'border-white/10'
      }`}>
        <div>
          <h2 className="text-white font-poster font-black uppercase tracking-wide text-lg leading-tight">
            {script.title}
          </h2>
          <p className="text-[10px] font-mono uppercase tracking-widest text-[#C81D11] font-bold mt-0.5">
            {script.year} • {script.type} • Pitch Deck
          </p>
        </div>

        <div className="flex items-center gap-4">
          {total > 0 && (
            <span className="text-white/50 text-xs font-mono uppercase tracking-widest">
              {currentIndex + 1} / {total}
            </span>
          )}
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-4 py-4">

        {total === 0 ? (
          /* No images yet */
          <div className="text-center">
            <p className="text-white/30 text-sm font-mono uppercase tracking-widest mb-2">
              Pitch deck non ancora disponibile
            </p>
            <p className="text-white/20 text-xs font-mono">
              Carica le immagini in{' '}
              <code className="text-white/40">public/pitches/{script.id}/</code>
            </p>
          </div>
        ) : (
          <>
            {/* Prev Arrow */}
            {total > 1 && (
              <button
                onClick={prev}
                className="absolute left-4 z-10 p-2 text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`${script.title} — Slide ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain select-none"
              draggable={false}
            />

            {/* Next Arrow */}
            {total > 1 && (
              <button
                onClick={next}
                className="absolute right-4 z-10 p-2 text-white/50 hover:text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      {total > 1 && (
        <div className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 border-t border-white/10 overflow-x-auto">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`flex-shrink-0 w-14 h-10 border-2 overflow-hidden transition-all ${
                idx === currentIndex
                  ? 'border-[#C81D11] opacity-100'
                  : 'border-white/20 opacity-40 hover:opacity-70'
              }`}
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
