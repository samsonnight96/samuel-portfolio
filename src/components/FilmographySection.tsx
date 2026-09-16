import React, { useState } from 'react';
import { Play, Award, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

interface FilmographySectionProps {
  onSelectProject: (project: Project) => void;
  onPlayTrailer: (youtubeId: string, title: string) => void;
  isDarkMode: boolean;
}

export const FilmographySection: React.FC<FilmographySectionProps> = ({
  onSelectProject,
  onPlayTrailer,
  isDarkMode
}) => {
  const [filter, setFilter] = useState<'tutti' | 'miei' | 'sviluppo'>('tutti');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'tutti') return p.category !== 'sviluppo';
    if (filter === 'miei') return ['6-1-5-a-girare', 'primavera', 'super-g'].includes(p.id);
    if (filter === 'sviluppo') return p.category === 'sviluppo';
    return true;
  });

  return (
    <section
      id="lavori"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#141312] text-[#E6DFD5] border-[#E6DFD5]/15'
          : 'bg-[#E6DFD5] text-[#181715] border-[#181715]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 pb-6 border-b border-current/15 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-poster font-black tracking-wide uppercase text-[#181715] dark:text-[#E6DFD5]">
              I Miei Lavori
            </h2>
            <p className="text-[10px] uppercase font-mono tracking-widest mt-1 text-[#C81D11] font-bold">
              Filmografia
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'tutti', label: 'Tutti i Progetti' },
              { id: 'miei', label: 'Scritti e Diretti da Me' },
              { id: 'sviluppo', label: 'In Sviluppo' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`border px-4 py-1.5 text-[10px] uppercase font-mono tracking-widest transition-all font-bold ${
                  filter === tab.id
                    ? 'bg-[#C81D11] text-white border-[#C81D11]'
                    : isDarkMode
                      ? 'border-[#E6DFD5]/20 text-[#E6DFD5]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
                      : 'border-[#181715]/20 text-[#181715]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group flex flex-col border transition-all duration-300 ${
                isDarkMode
                  ? 'bg-[#1c1a18] border-[#E6DFD5]/15 hover:border-[#C81D11]'
                  : 'bg-[#DDD5CB] border-[#181715]/20 hover:border-[#C81D11]'
              }`}
            >
              {/* Poster Image */}
              <div
                className="relative aspect-[16/10] sm:aspect-[4/5] overflow-hidden cursor-pointer bg-[#1a1a1a]"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to cinematic still if local asset fails
                    const target = e.currentTarget;
                    if (!target.src.includes('unsplash.com')) {
                      target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop';
                    }
                  }}
                />

                {/* Subtle Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 font-mono">
                  <span className="bg-[#C81D11] text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-bold">
                    {project.year}
                  </span>
                  <span className="border border-white/30 text-white text-[9px] uppercase tracking-widest px-2 py-0.5 backdrop-blur-sm bg-black/50">
                    {project.type}
                  </span>
                </div>

                {/* Awards badge if any */}
                {project.awards && project.awards.length > 0 && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-[#C81D11] text-white text-[8px] uppercase tracking-widest px-2.5 py-0.5 flex items-center gap-1 font-mono font-black">
                      <Award className="w-2.5 h-2.5" />
                      AWARD
                    </span>
                  </div>
                )}

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-[1px]">
                  <div className="flex items-center gap-2">
                    {project.youtubeId && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayTrailer(project.youtubeId!, project.title);
                        }}
                        className="p-3 bg-[#C81D11] text-white hover:scale-110 transition-transform font-bold"
                        title="Guarda Trailer"
                      >
                        <Play className="w-4 h-4 fill-current" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="px-4 py-2 border border-white/80 text-white text-[10px] uppercase font-mono tracking-widest hover:bg-white hover:text-black transition-colors"
                    >
                      Dettagli
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#C81D11] font-bold">
                      {project.role}
                    </span>
                    <span className="text-[9px] font-mono opacity-50">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-poster uppercase font-black tracking-wide cursor-pointer hover:text-[#C81D11] transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                    isDarkMode ? 'text-[#E6DFD5]/70' : 'text-[#181715]/75'
                  }`}>
                    {project.logline || project.sinossi}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest opacity-70">
                  <span>{project.meta.find(m => m.label.toLowerCase().includes('prodotto'))?.value || 'Samuel Ferla'}</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 hover:text-[#C81D11] transition-colors font-bold"
                  >
                    <span>Scheda</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
