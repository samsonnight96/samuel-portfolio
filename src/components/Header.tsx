import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  openDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  isDarkMode,
  setIsDarkMode,
  openDrawer
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'lavori', label: 'Lavori' },
    { id: 'cassetto', label: 'Progetti nel Cassetto' },
    { id: 'galleria', label: 'Galleria' },
    { id: 'bio', label: 'Biografia' },
    { id: 'contatti', label: 'Contatti' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-[#141312]/95 backdrop-blur-md border-b border-[#E6DFD5]/15 py-3.5 shadow-2xl'
            : 'bg-[#E6DFD5]/95 backdrop-blur-md border-b border-[#181715]/20 py-3.5 shadow-sm'
          : isDarkMode
          ? 'bg-[#141312] border-b border-[#E6DFD5]/15 py-5'
          : 'bg-[#E6DFD5] border-b border-[#181715]/20 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-baseline justify-between">
        
        {/* Brand Name & Title */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex flex-col text-left focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C81D11]"
        >
          <h1 className={`text-xl sm:text-2xl font-poster uppercase tracking-wider font-extrabold transition-colors ${
            isDarkMode ? 'text-[#E6DFD5] group-hover:text-[#C81D11]' : 'text-[#181715] group-hover:text-[#C81D11]'
          }`}>
            {portfolioInfo.name}
          </h1>
          <p className={`text-[9px] uppercase tracking-widest mt-0.5 transition-colors font-mono ${
            isDarkMode ? 'text-[#E6DFD5]/40' : 'text-[#181715]/50'
          }`}>
            Regista • Sceneggiatore • Scrittore • Story Editor
          </p>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[12px] uppercase tracking-widest font-mono font-bold">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-[#C81D11] font-bold underline underline-offset-8 decoration-[#C81D11]'
                    : isDarkMode
                    ? 'text-[#E6DFD5]/70 hover:text-[#C81D11]'
                    : 'text-[#181715]/70 hover:text-[#C81D11]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "Modalità chiara (Carta)" : "Modalità scura (Inchiostro)"}
            className={`p-2 border transition-all text-[10px] uppercase tracking-widest ${
              isDarkMode
                ? 'border-[#E6DFD5]/20 text-[#E6DFD5]/70 hover:text-[#C81D11] hover:border-[#C81D11]'
                : 'border-[#181715]/20 text-[#181715]/70 hover:text-[#C81D11] hover:border-[#C81D11]'
            }`}
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={openDrawer}
            className={`hidden sm:inline-flex items-center gap-2 border px-4 py-2 text-[10px] uppercase tracking-widest transition-all font-mono ${
              isDarkMode
                ? 'bg-[#C81D11] border-[#C81D11] text-white hover:bg-[#A8170D]'
                : 'bg-[#C81D11] border-[#C81D11] text-white hover:bg-[#181715] hover:border-[#181715]'
            }`}
          >
            <span>Pitch &amp; Progetti</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 border transition-colors ${
              isDarkMode ? 'border-[#E6DFD5]/20 text-[#E6DFD5]' : 'border-[#181715]/20 text-[#181715]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 border-b transition-all ${
            isDarkMode ? 'bg-[#1a1918] border-[#E6DFD5]/15' : 'bg-[#DDD5CB] border-[#181715]/20'
          }`}
        >
          <div className="flex flex-col space-y-4 text-[11px] uppercase tracking-widest font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 border-b transition-colors ${
                  activeSection === item.id
                    ? 'text-[#C81D11] border-[#C81D11] font-bold'
                    : isDarkMode
                    ? 'text-[#E6DFD5]/70 border-[#E6DFD5]/10 hover:text-[#C81D11]'
                    : 'text-[#181715]/70 border-[#181715]/10 hover:text-[#C81D11]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDrawer();
              }}
              className="mt-3 py-2.5 text-center text-[10px] uppercase tracking-widest bg-[#C81D11] text-white font-semibold transition-all hover:bg-[#181715]"
            >
              Vedi Progetti nel Cassetto →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
