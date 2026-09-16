import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { galleryStills } from '../data/portfolioData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (photos: GalleryPhoto[], index: number) => void;
  isDarkMode: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenLightbox,
  isDarkMode
}) => {
  const [selectedFilm, setSelectedFilm] = useState<string>('all');

  const filteredPhotos = galleryStills.filter((p) => {
    if (selectedFilm === 'all') return true;
    return p.project === selectedFilm;
  });

  return (
    <section
      id="galleria"
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
              Galleria &amp; Still
            </h2>
          </div>

          {/* Project Filter Chips */}
          <div className="flex flex-wrap gap-2 text-[10px] uppercase font-mono tracking-widest">
            {[
              { id: 'all', label: 'Tutti gli Still' },
              { id: '6-1-5 A Girare', label: '6-1-5 A Girare' },
              { id: 'Primavera', label: 'Primavera' },
              { id: "All'Ombra del Cipresso", label: "All'Ombra del Cipresso" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilm(f.id)}
                className={`border px-3.5 py-1.5 transition-all font-medium ${
                  selectedFilm === f.id
                    ? 'bg-[#C81D11] text-white border-[#C81D11] font-bold'
                    : isDarkMode
                    ? 'border-[#E6DFD5]/20 text-[#E6DFD5]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
                    : 'border-[#181715]/20 text-[#181715]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(filteredPhotos, idx)}
              className={`group relative aspect-[16/10] overflow-hidden border cursor-pointer transition-all duration-300 ${
                isDarkMode ? 'bg-[#1c1a18] border-[#E6DFD5]/15 hover:border-[#C81D11]' : 'bg-[#DDD5CB] border-[#181715]/20 hover:border-[#C81D11]'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.project}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-100"
                loading="lazy"
              />

              {/* Minimal Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity flex flex-col justify-between p-5 text-white">
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-[#C81D11] text-white px-2.5 py-0.5 font-bold">
                    {photo.project}
                  </span>
                  <Eye className="w-4 h-4 text-white/90" />
                </div>

                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#E6DFD5]/70 block">
                    Still 0{idx + 1} • Ingrandisci
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
