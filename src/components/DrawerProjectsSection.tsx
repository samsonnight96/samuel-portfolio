import React, { useState } from 'react';
import { Play, Images, Award, Send, BookOpen } from 'lucide-react';
import { drawerScriptsData } from '../data/portfolioData';
import { DrawerScript } from '../types';

interface DrawerProjectsSectionProps {
  onOpenPitchViewer: (scriptId: string) => void;
  onOpenSynopsis: (scriptId: string) => void;
  onPlayTrailer: (youtubeId: string, title: string) => void;
  onRequestScript: (scriptTitle: string) => void;
  isDarkMode: boolean;
}

export const DrawerProjectsSection: React.FC<DrawerProjectsSectionProps> = ({
  onOpenPitchViewer,
  onOpenSynopsis,
  onPlayTrailer,
  onRequestScript,
  isDarkMode
}) => {
  const [activeTab, setActiveTab] = useState<'scripts' | 'trailers'>('scripts');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedTrailerIndex, setSelectedTrailerIndex] = useState(0);

  const trailerList = [
    {
      title: "6-1-5 A Girare",
      year: "2026",
      type: "Cortometraggio",
      youtubeId: "aWCxB5Ne43I",
      runtime: "Trailer Ufficiale • 1m 45s",
      aspectRatio: "2.39:1 Cinemascope",
      logline: "Totò è un cliente affezionato di una sala scommesse. Una giocata '6-1-5 a girare' cambierà per sempre il suo destino tra gli avventori.",
      synopsis: "La parabola tragicomica di un solitario che tocca con mano l'idolatria e l'emarginazione nella periferia romana.",
      stillsUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "All'Ombra del Cipresso",
      year: "2026",
      type: "Docufilm",
      youtubeId: "ceVm-qHQ7uQ",
      runtime: "Teaser Trailer • 1m 20s",
      aspectRatio: "1.85:1 Flat",
      logline: "Ritratto del pittore iraniano Amirhossein Yaghoobi e del suo esilio artistico in Italia.",
      synopsis: "Un documentario Onirika Production che indaga il legame indissolubile tra identità, memoria e pittura ad olio.",
      stillsUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Super G",
      year: "2022",
      type: "Cortometraggio",
      youtubeId: "gnkwh0DjhVM",
      runtime: "Film Integrale • 12m",
      aspectRatio: "2.39:1 Anamorphic",
      logline: "Un bambino di 8 anni e il suo mantello da supereroe per salvare la madre in pericolo.",
      synopsis: "Saggio di diploma Accademia Griffith. Un coming of age intriso di tenerezza e suspense domestica.",
      stillsUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const currentTrailer = trailerList[selectedTrailerIndex];

  const filteredScripts = drawerScriptsData.filter((script) => {
    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'ready') return script.status === 'Pronto per la produzione';
    if (categoryFilter === 'features') return script.category === 'Lungometraggio' || script.category === 'Serie TV';
    if (categoryFilter === 'shorts') return script.category === 'Cortometraggio';
    return script.category === categoryFilter;
  });

  return (
    <section
      id="cassetto"
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
              Progetti nel Cassetto
            </h2>
            <p className="text-[10px] uppercase font-mono tracking-widest mt-1 text-[#C81D11] font-bold">
              I miei progetti inediti
            </p>
          </div>

          {/* Section Main View Switcher */}
          <div className="flex gap-3 text-[10px] uppercase font-mono tracking-widest">
            <button
              onClick={() => setActiveTab('scripts')}
              className={`border px-5 py-2 transition-all font-bold ${
                activeTab === 'scripts'
                  ? 'bg-[#C81D11] text-white border-[#C81D11]'
                  : isDarkMode
                  ? 'border-[#E6DFD5]/20 text-[#E6DFD5]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
                  : 'border-[#181715]/20 text-[#181715]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
              }`}
            >
              Sceneggiature ({drawerScriptsData.length})
            </button>

            <button
              onClick={() => setActiveTab('trailers')}
              className={`border px-5 py-2 transition-all font-bold ${
                activeTab === 'trailers'
                  ? 'bg-[#C81D11] text-white border-[#C81D11]'
                  : isDarkMode
                  ? 'border-[#E6DFD5]/20 text-[#E6DFD5]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
                  : 'border-[#181715]/20 text-[#181715]/70 hover:border-[#C81D11] hover:text-[#C81D11]'
              }`}
            >
              Trailer Room ({trailerList.length})
            </button>
          </div>
        </div>

        {/* TAB 1: COPIONI & SCENEGGIATURE */}
        {activeTab === 'scripts' && (
          <div>
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-10 text-[10px] uppercase font-mono tracking-widest">
              {[
                { id: 'all', label: 'Tutti i Pitch' },
                { id: 'ready', label: 'Pronti per Produzione' },
                { id: 'features', label: 'Lungometraggi & Serie' },
                { id: 'shorts', label: 'Cortometraggi' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setCategoryFilter(f.id)}
                  className={`border px-3.5 py-1.5 transition-all font-medium ${
                    categoryFilter === f.id
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

            {/* Scripts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScripts.map((script, index) => (
                <div
                  key={script.id}
                  className={`group border p-6 flex flex-col justify-between transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-[#1c1a18] border-[#E6DFD5]/15 hover:border-[#C81D11]'
                      : 'bg-[#DDD5CB] border-[#181715]/20 hover:border-[#C81D11]'
                  }`}
                >
                  <div>
                    {/* Top Row: Numeration & Status */}
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="text-[10px] font-mono opacity-50">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#C81D11] font-bold">
                        {script.type} • {script.genre[0]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-poster uppercase font-black tracking-wide mb-2 group-hover:text-[#C81D11] transition-colors">
                      {script.title}
                    </h3>

                    {/* Awards or Co-authors */}
                    {script.awards && (
                      <div className="mb-3 text-[9px] uppercase font-mono tracking-wider text-[#C81D11] flex items-start gap-1.5 font-black">
                        <Award className="w-3.5 h-3.5 text-[#C81D11] stroke-[2.5] flex-shrink-0 mt-0.5" />
                        <span className="font-black leading-relaxed">{script.awards}</span>
                      </div>
                    )}

                    {script.coAuthor && (
                      <p className="text-[10px] uppercase font-mono tracking-widest mb-3 opacity-60">
                        Co-Autore: {script.coAuthor}
                      </p>
                    )}

                    {/* Logline */}
                    <p className={`text-xs leading-relaxed mt-2 font-sans ${
                      isDarkMode ? 'text-[#E6DFD5]/80' : 'text-[#181715]/80'
                    }`}>
                      {script.logline}
                    </p>

                    {/* Status Badge */}
                    <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest">
                      <span className="opacity-60">Stato</span>
                      <span className="font-bold text-[#C81D11]">{script.status}</span>
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between gap-3">
                    {script.pitchImages && script.pitchImages.length > 0 ? (
                      <button
                        onClick={() => onOpenPitchViewer(script.id)}
                        className="bg-[#C81D11] hover:bg-[#A8170D] text-white px-4 py-2 text-[10px] uppercase font-mono tracking-widest flex items-center gap-1.5 transition-all font-bold"
                      >
                        <Images className="w-3 h-3" />
                        <span>Guarda il Pitch!</span>
                      </button>
                    ) : script.coverImage ? (
                      <button
                        onClick={() => onOpenSynopsis(script.id)}
                        className="bg-[#C81D11] hover:bg-[#A8170D] text-white px-4 py-2 text-[10px] uppercase font-mono tracking-widest flex items-center gap-1.5 transition-all font-bold"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Leggi la Sinossi</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => onRequestScript(script.title)}
                        className={`border px-4 py-2 text-[10px] uppercase font-mono tracking-widest flex items-center gap-1.5 transition-all ${
                          isDarkMode
                            ? 'border-[#E6DFD5]/30 text-[#E6DFD5] hover:border-[#C81D11] hover:text-[#C81D11]'
                            : 'border-[#181715]/30 text-[#181715] hover:border-[#C81D11] hover:text-[#C81D11]'
                        }`}
                      >
                        <Send className="w-3 h-3" />
                        <span>Richiedi Pitch</span>
                      </button>
                    )}

                    {script.pitchImages && script.pitchImages.length > 0 && (
                      <button
                        onClick={() => onRequestScript(script.title)}
                        className="text-[9px] uppercase tracking-widest font-mono hover:text-[#C81D11] font-bold transition-colors"
                      >
                        Opziona Pitch →
                      </button>
                    )}

                    {script.coverImage && (
                      <button
                        onClick={() => onRequestScript(script.title)}
                        className="text-[9px] uppercase tracking-widest font-mono hover:text-[#C81D11] font-bold transition-colors"
                      >
                        Richiedi Pitch →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: TRAILER ROOM */}
        {activeTab === 'trailers' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Stage (8 cols) */}
            <div className="lg:col-span-8 flex flex-col">
              <div className={`relative aspect-video overflow-hidden border ${
                isDarkMode ? 'bg-[#000000] border-[#E6DFD5]/20' : 'bg-black border-[#181715]/30'
              }`}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentTrailer.youtubeId}?rel=0`}
                  title={currentTrailer.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Video Info under frame */}
              <div className={`p-6 border border-t-0 ${
                isDarkMode ? 'bg-[#1c1a18] border-[#E6DFD5]/20' : 'bg-[#DDD5CB] border-[#181715]/30'
              }`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#C81D11] text-white text-[9px] uppercase font-mono tracking-wider px-2.5 py-0.5 font-bold">
                      {currentTrailer.year}
                    </span>
                    <h3 className="text-2xl font-poster uppercase font-black tracking-wide">{currentTrailer.title}</h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">
                    {currentTrailer.runtime} • {currentTrailer.aspectRatio}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mt-2 ${
                  isDarkMode ? 'text-[#E6DFD5]/80' : 'text-[#181715]/80'
                }`}>
                  {currentTrailer.synopsis}
                </p>
              </div>
            </div>

            {/* Playlist Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-[11px] uppercase font-mono tracking-widest text-[#C81D11] font-bold mb-3">
                Seleziona Proiezione
              </h3>

              {trailerList.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedTrailerIndex(idx)}
                  className={`border p-4 cursor-pointer transition-all flex items-center gap-4 ${
                    selectedTrailerIndex === idx
                      ? 'bg-[#C81D11] text-white border-[#C81D11] font-bold'
                      : isDarkMode
                      ? 'bg-[#1c1a18] border-[#E6DFD5]/15 text-[#E6DFD5]/70 hover:border-[#C81D11]'
                      : 'bg-[#DDD5CB] border-[#181715]/20 text-[#181715]/70 hover:border-[#C81D11]'
                  }`}
                >
                  <span className="text-[10px] font-mono opacity-60">0{idx + 1}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-poster uppercase font-bold tracking-wider truncate">{item.title}</h4>
                    <p className="text-[9px] font-mono opacity-80 mt-0.5">{item.type} • {item.year}</p>
                  </div>
                  <Play className={`w-3.5 h-3.5 ${selectedTrailerIndex === idx ? 'fill-current' : 'opacity-50'}`} />
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
