import React from 'react';
import { bioEducationData } from '../data/portfolioData';

interface BioSectionProps {
  onContactClick: () => void;
  isDarkMode: boolean;
}

export const BioSection: React.FC<BioSectionProps> = ({ onContactClick, isDarkMode }) => {
  return (
    <section
      id="bio"
      className={`py-24 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#141312] text-[#E6DFD5] border-[#E6DFD5]/15'
          : 'bg-[#E6DFD5] text-[#181715] border-[#181715]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-current/15">
          <h2 className="text-3xl sm:text-4xl font-poster font-black tracking-wide uppercase text-[#181715] dark:text-[#E6DFD5]">
            Biografia &amp; Visione
          </h2>
          <p className="text-[10px] uppercase font-mono tracking-widest mt-1 text-[#C81D11] font-bold">
            Profilo Autoriale • Formazione Accademica • Nota di Regia
          </p>
        </div>

        {/* Grid 2-Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Profile Photo + Name Header */}
            <div className="flex items-center gap-5">
              <img
                src="/fotoprofilo.jpg"
                alt="Samuel Ferla"
                className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#C81D11]/40 flex-shrink-0"
              />
              <div>
                <h3 className="text-2xl font-poster uppercase font-black tracking-wide">Samuel Ferla</h3>
                <p className="text-[10px] uppercase font-mono tracking-widest mt-0.5 text-[#C81D11] font-bold">
                  Regista • Sceneggiatore • Scrittore • Story Editor
                </p>
              </div>
            </div>
            
            {/* Bio Card */}
            <div className={`p-8 border ${
              isDarkMode ? 'bg-[#1c1a18] border-[#E6DFD5]/15' : 'bg-[#DDD5CB] border-[#181715]/20'
            }`}>
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-current/10">
                <div>
                  <h3 className="text-2xl font-poster uppercase font-black tracking-wide">
                    Samuel Ferla
                  </h3>
                  <p className="text-[10px] uppercase font-mono tracking-widest mt-0.5 text-[#C81D11] font-bold">
                    Regista • Sceneggiatore • Scrittore • Story Editor
                  </p>
                </div>
                <span className="text-[10px] font-mono opacity-50">
                  ROMA • 1996
                </span>
              </div>

              <div className={`space-y-4 text-xs font-sans leading-relaxed ${
                isDarkMode ? 'text-[#E6DFD5]/80' : 'text-[#181715]/85'
              }`}>
                <p>
                  Regista, Sceneggiatore, Scrittore e Story Editor Freelance con base a Roma. Mi dedico alla scrittura e alla regia di cortometraggi cinematografici, docufilm, format televisivi e sceneggiature originali. Mi occupo inoltre di story editing e sviluppo narrativo per produzioni terze.
                </p>
                <p>
                  Formatosi tra il <em>Centro Sperimentale di Cinematografia</em>, l&apos;<em>Accademia Griffith</em> di Roma e l&apos;<em>Università degli Studi di Udine</em> (Scienze e Tecnologie Multimediali), unisco una solida cultura teorica alla concretezza della direzione sul set e dello sviluppo di concept narrativi.
                </p>
                <p>
                  Collaborazioni con case di produzione come <em>LuxVide</em>, <em>AutAut Production</em>, <em>Fargo Entertainment</em>, <em>Onirika Production</em> e broadcaster quali <em>Rai 1</em>, <em>Rai 3</em> e <em>Rai Documentari</em>.
                </p>
              </div>

              {/* Identity Snapshot Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-current/10 text-xs font-mono">
                <div>
                  <span className="text-[9px] uppercase tracking-widest block opacity-60">Origine</span>
                  <span className="font-bold">Siracusa (SR)</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest block opacity-60">Base Operativa</span>
                  <span className="font-bold">Roma, Italia</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest block opacity-60">Partita IVA</span>
                  <span className="font-bold">02156780898</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest block opacity-60">Disponibilità</span>
                  <span className="font-bold text-[#C81D11]">Cinema • TV • Doc • Story Editing</span>
                </div>
              </div>
            </div>

            {/* Billy Wilder Quote */}
            <div className="p-6 border border-[#C81D11]/30 bg-[#C81D11]/5">
              <p className={`text-sm italic leading-relaxed font-serif ${
                isDarkMode ? 'text-[#E6DFD5]' : 'text-[#181715]'
              }`}>
                &ldquo;If you have a problem with the third act, the real problem is in the first act.&rdquo;
              </p>
              <span className="mt-3 block not-italic uppercase font-mono tracking-widest text-[9px] text-[#C81D11] font-bold">
                — Billy Wilder
              </span>
            </div>

          </div>

          {/* Right Column: Education & Experience Timeline (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-[11px] uppercase font-mono tracking-widest text-[#C81D11] font-bold mb-4">
              Percorso di Studi &amp; Alta Formazione
            </h3>

            <div className="space-y-4">
              {bioEducationData.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-6 border transition-all ${
                    isDarkMode
                      ? 'bg-[#1c1a18] border-[#E6DFD5]/15 hover:border-[#C81D11]'
                      : 'bg-[#DDD5CB] border-[#181715]/20 hover:border-[#C81D11]'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#C81D11] font-bold">
                      {edu.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-poster uppercase font-black tracking-wide">
                    {edu.institution}
                  </h4>

                  <p className="text-xs font-mono uppercase tracking-widest mt-0.5 opacity-75">
                    {edu.title}
                  </p>

                  {edu.details && (
                    <p className={`text-xs mt-3 leading-relaxed ${
                      isDarkMode ? 'text-[#E6DFD5]/70' : 'text-[#181715]/75'
                    }`}>
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Inquire Button */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="w-full py-3.5 bg-[#C81D11] hover:bg-[#A8170D] text-white text-[10px] uppercase font-mono tracking-widest font-bold transition-all shadow-sm"
              >
                Contattami →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
