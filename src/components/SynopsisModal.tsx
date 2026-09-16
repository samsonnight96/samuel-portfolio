import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { DrawerScript } from '../types';

interface SynopsisModalProps {
  script: DrawerScript | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export const SynopsisModal: React.FC<SynopsisModalProps> = ({
  script,
  isOpen,
  onClose,
  isDarkMode
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !script) return null;

  const meta = [
    { label: 'Formato', value: script.type },
    { label: 'Genere', value: script.genre.join(', ') },
    { label: 'Durata', value: script.runtime },
    { label: 'Sceneggiatura', value: script.scriptStage },
    { label: 'Stato', value: script.status },
  ].filter((m) => m.value);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-4xl my-auto border shadow-2xl overflow-hidden transition-all relative ${
          isDarkMode ? 'bg-[#1c1a18] border-[#E6DFD5]/20 text-[#E6DFD5]' : 'bg-[#DDD5CB] border-[#181715]/30 text-[#181715]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 border border-white/40 bg-black/60 hover:bg-[#C81D11] hover:border-[#C81D11] transition-colors text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">

          {/* Left Column: Cover */}
          <div className="md:col-span-5 bg-black relative min-h-[280px] md:min-h-full">
            {script.coverImage && (
              <img
                src={script.coverImage}
                alt={script.title}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>

          {/* Right Column: Metadata & Synopsis */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] block mb-1 text-[#C81D11] font-bold">
                SCHEDA SCENEGGIATURA • {script.year}
              </span>
              <h2 className="text-3xl sm:text-4xl font-poster font-black tracking-wide uppercase">
                {script.title}
              </h2>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-current/10 text-xs font-mono">
              {meta.map((item) => (
                <div key={item.label}>
                  <span className="text-[9px] uppercase tracking-widest block opacity-60">{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Synopsis */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest mb-1.5 opacity-60">
                Sinossi
              </h4>
              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-[#E6DFD5]/80' : 'text-[#181715]/85'
              }`}>
                {script.sinossi}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
