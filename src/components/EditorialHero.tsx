import React from 'react';
import { Play, ArrowUpRight, FolderOpen } from 'lucide-react';

interface EditorialHeroProps {
  onNavigate: (section: string) => void;
  onOpenTrailer: () => void;
  onOpen615: () => void;
  isDarkMode: boolean;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onNavigate,
  onOpenTrailer,
  onOpen615,
  isDarkMode
}) => {
  return (
    <section
      id="hero"
      className={`pt-24 sm:pt-28 pb-10 transition-colors duration-300 flex flex-col justify-start ${
        isDarkMode
          ? 'bg-[#141312] text-[#E6DFD5]'
          : 'bg-[#E6DFD5] text-[#181715]'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-10 flex flex-col">
        
        {/* TOP POSTER HEADLINE: GIANT CARMINE RED EDITORIAL TITLE */}
        <div className="pt-2 sm:pt-4 pb-4">
          <div className="relative flex flex-col items-center justify-center text-center animate-hero-rise">

            {/* Massive Tall Condensed Title */}
            <h1 className="text-[#C81D11] font-poster font-black uppercase text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[11.5rem] tracking-tight leading-[0.82] select-none text-center transition-all duration-300">
              SAMUEL FERLA
            </h1>

            {/* Centered Portfolio subtitle banner */}
            <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5 text-center">
              <span className="h-px w-10 sm:w-16 bg-[#C81D11]" />
              <span className="text-xs sm:text-sm uppercase font-mono tracking-[0.35em] text-[#C81D11] font-bold">
                PORTFOLIO
              </span>
              <span className="h-px w-10 sm:w-16 bg-[#C81D11]" />
            </div>
          </div>
        </div>

        {/* HERO CENTERPIECE: CINEMATIC SHOWCASE & QUICK ACTION BAR */}
        <div className="mt-4 mb-2 animate-hero-rise-delayed">
          <div className={`relative overflow-hidden border ${
            isDarkMode ? 'border-[#E6DFD5]/20 bg-[#1c1a18]' : 'border-[#181715]/30 bg-[#DDD4C8]'
          }`}>
            
            {/* Background High-Impact Still */}
            <div className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 filter brightness-[0.7] contrast-[1.05]"
                style={{
                  backgroundImage: "url('/1.jpg')"
                }}
              />
              
              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10" />

              {/* Top Header inside Frame */}
              <div className="relative z-20 flex justify-end items-center text-[10px] uppercase font-mono tracking-widest text-white/90">
                <span className="bg-[#C81D11] text-white px-2.5 py-0.5 font-bold tracking-widest">
                  OPERA PRINCIPALE 2026
                </span>
              </div>

              {/* Bottom Content inside Frame */}
              <div className="relative z-20 max-w-2xl mt-auto pt-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poster font-extrabold uppercase text-white tracking-wide leading-tight">
                  6-1-5 A GIRARE
                </h2>

                <p className="text-xs sm:text-sm text-white/80 mt-2 font-sans leading-relaxed">
                  Regia e Sceneggiatura di Samuel Ferla. Un viaggio tragicomico nel microcosmo di una sala scommesse di periferia, tra l&apos;ossessione del gioco e la disperata fragilità umana.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
                  <button
                    onClick={onOpenTrailer}
                    className="bg-[#C81D11] hover:bg-[#A8170D] text-white px-6 py-2.5 text-[11px] uppercase font-mono tracking-widest transition-all flex items-center gap-2 font-bold shadow-lg cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Guarda Trailer Ufficiale</span>
                  </button>

                  <button
                    onClick={() => onOpen615()}
                    className="bg-black/60 hover:bg-black text-white border border-white/30 px-5 py-2.5 text-[11px] uppercase font-mono tracking-widest transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Scheda Tecnica &amp; Cast</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('cassetto')}
                    className="text-white/80 hover:text-white px-3 py-2 text-[10px] uppercase font-mono tracking-widest transition-colors flex items-center gap-1.5 underline underline-offset-4 cursor-pointer"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Progetti nel Cassetto</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

