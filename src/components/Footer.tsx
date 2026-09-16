import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (section: string) => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#141312] border-[#E6DFD5]/15 text-[#E6DFD5]'
          : 'bg-[#E6DFD5] border-[#181715]/20 text-[#181715]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between pb-8 border-b border-current/10 gap-4">
          <div>
            <span className="text-2xl font-poster font-black tracking-wide uppercase">
              {portfolioInfo.name}
            </span>
            <p className="text-[9px] uppercase font-mono tracking-widest mt-0.5 text-[#C81D11] font-bold">
              Regista • Sceneggiatore • Scrittore • Story Editor
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest hover:text-[#C81D11] transition-colors font-bold"
          >
            <span>Torna in Cima</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C81D11]" />
          </button>
        </div>

        {/* Middle Navigation Links */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest">
          <div className="flex flex-wrap gap-6 opacity-80 font-bold">
            <button onClick={() => onNavigate('lavori')} className="hover:text-[#C81D11] transition-colors">
              Lavori
            </button>
            <button onClick={() => onNavigate('cassetto')} className="hover:text-[#C81D11] transition-colors">
              Progetti nel Cassetto
            </button>
            <button onClick={() => onNavigate('galleria')} className="hover:text-[#C81D11] transition-colors">
              Galleria
            </button>
            <button onClick={() => onNavigate('bio')} className="hover:text-[#C81D11] transition-colors">
              Biografia
            </button>
            <button onClick={() => onNavigate('contatti')} className="hover:text-[#C81D11] transition-colors">
              Contatti
            </button>
          </div>

          <div className="flex items-center gap-6">
            {portfolioInfo.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 hover:text-[#C81D11] transition-colors font-medium"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal Archive Line */}
        <div className="pt-6 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] gap-2 opacity-60">
          <span>© {new Date().getFullYear()} SAMUEL FERLA ARCHIVE</span>
          <span>P.IVA {portfolioInfo.vatNumber} • ROMA • PALAZZOLO ACREIDE</span>
        </div>

      </div>
    </footer>
  );
};
