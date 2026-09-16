import React, { useEffect } from 'react';
import { X, Play, ExternalLink, Award, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPlayTrailer: (youtubeId: string, title: string) => void;
  onOpenGallery: (projectName: string) => void;
  isDarkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onPlayTrailer,
  onOpenGallery,
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

  if (!isOpen || !project) return null;

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
          
          {/* Left Column: Poster / Backdrop Stage */}
          <div className="md:col-span-5 bg-black relative min-h-[280px] md:min-h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('unsplash.com')) {
                  target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            {/* Poster Badges */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-[#C81D11] text-white text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 font-bold inline-block mb-2">
                {project.type} • {project.year}
              </span>
              <h3 className="text-3xl font-poster uppercase font-black tracking-wide leading-none">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-white/70 mt-1 uppercase tracking-widest">
                {project.role}
              </p>

              {project.youtubeId && (
                <button
                  onClick={() => onPlayTrailer(project.youtubeId!, project.title)}
                  className="mt-4 px-4 py-2 bg-[#C81D11] hover:bg-[#A8170D] text-white text-[10px] uppercase font-mono tracking-widest flex items-center gap-2 transition-colors font-bold cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Guarda Trailer</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Full Metadata & Synopsis */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] block mb-1 text-[#C81D11] font-bold">
                SCHEDA OPERA • {project.year}
              </span>
              <h2 className="text-3xl sm:text-4xl font-poster font-black tracking-wide uppercase">
                {project.title}
              </h2>
            </div>

            {/* Awards section if present */}
            {project.awards && project.awards.length > 0 && (
              <div className="p-4 border border-[#C81D11]/50 bg-[#C81D11]/10 text-xs">
                <span className="text-[9px] uppercase font-mono tracking-widest block text-[#C81D11] mb-1.5 flex items-center gap-1.5 font-black">
                  <Award className="w-3.5 h-3.5 stroke-[2.5]" />
                  Riconoscimenti Ufficiali
                </span>
                <ul className="space-y-1">
                  {project.awards.map((award, aIdx) => (
                    <li key={aIdx} className="font-mono text-[11px] font-bold text-[#C81D11]">
                      • {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Logline */}
            {project.logline && (
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest mb-1.5 opacity-60">
                  Logline
                </h4>
                <p className="text-xs italic leading-relaxed font-serif text-base">
                  &ldquo;{project.logline}&rdquo;
                </p>
              </div>
            )}

            {/* Full Synopsis */}
            {project.sinossi && (
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest mb-1.5 opacity-60">
                  Sinossi
                </h4>
                <p className={`text-xs leading-relaxed ${
                  isDarkMode ? 'text-[#E6DFD5]/80' : 'text-[#181715]/85'
                }`}>
                  {project.sinossi}
                </p>
              </div>
            )}

            {/* Technical Specs & Metadata Grid */}
            {project.meta && project.meta.length > 0 && (
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-current/10 text-xs font-mono">
                {project.meta.map((item, mIdx) => (
                  <div key={mIdx}>
                    <span className="text-[9px] uppercase tracking-widest block opacity-60">{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Links */}
            <div className="pt-4 border-t border-current/10 flex flex-wrap items-center gap-3">
              {project.links && project.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 border text-[10px] uppercase font-mono tracking-widest transition-colors flex items-center gap-1.5 font-bold ${
                    isDarkMode
                      ? 'border-[#E6DFD5]/30 hover:border-[#C81D11] hover:text-[#C81D11]'
                      : 'border-[#181715]/30 hover:border-[#C81D11] hover:text-[#C81D11]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}

              {['6-1-5-a-girare', 'primavera', 'all-ombra-del-cipresso'].includes(project.id) && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenGallery(project.title);
                  }}
                  className="text-[10px] uppercase font-mono tracking-widest px-3 py-2 transition-colors flex items-center gap-1 hover:text-[#C81D11] font-bold cursor-pointer"
                >
                  <span>Vedi Still di Scena →</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
