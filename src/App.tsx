import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EditorialHero } from './components/EditorialHero';
import { FilmographySection } from './components/FilmographySection';
import { DrawerProjectsSection } from './components/DrawerProjectsSection';
import { GallerySection } from './components/GallerySection';
import { BioSection } from './components/BioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PitchViewerModal } from './components/PitchViewerModal';
import { ProjectModal } from './components/ProjectModal';
import { TrailerModal } from './components/TrailerModal';
import { LightboxModal } from './components/LightboxModal';
import { Project, GalleryPhoto, DrawerScript } from './types';
import { projectsData, galleryStills, drawerScriptsData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [isPitchViewerOpen, setIsPitchViewerOpen] = useState(false);
  const [selectedScript, setSelectedScript] = useState<DrawerScript | null>(null);

  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [activeTrailer, setActiveTrailer] = useState<{ youtubeId: string; title: string }>({
    youtubeId: 'aWCxB5Ne43I',
    title: '6-1-5 A Girare'
  });

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState<GalleryPhoto[]>(galleryStills);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [contactSubject, setContactSubject] = useState<string>('');

  // Handle section scrolling observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'lavori', 'cassetto', 'galleria', 'bio', 'contatti'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update dark mode class on root body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#141312] text-[#E6DFD5] antialiased selection:bg-[#C81D11] selection:text-white';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#E6DFD5] text-[#181715] antialiased selection:bg-[#C81D11] selection:text-white';
    }
  }, [isDarkMode]);

  // Handlers
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handlePlayTrailer = (youtubeId: string, title: string) => {
    setActiveTrailer({ youtubeId, title });
    setIsTrailerModalOpen(true);
  };

  const handleOpenPitchViewer = (scriptId: string) => {
    const script = drawerScriptsData.find(s => s.id === scriptId) ?? null;
    setSelectedScript(script);
    setIsPitchViewerOpen(true);
  };

  const handleRequestScript = (scriptTitle: string) => {
    setContactSubject(scriptTitle);
    handleNavigate('contatti');
  };

  const handleOpenLightbox = (photos: GalleryPhoto[], index: number) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleOpenGalleryForProject = (projectName: string) => {
    const projectPhotos = galleryStills.filter(p => p.project.toLowerCase().includes(projectName.toLowerCase()));
    if (projectPhotos.length > 0) {
      handleOpenLightbox(projectPhotos, 0);
    } else {
      handleOpenLightbox(galleryStills, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      
      {/* Top Fixed Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={handleNavigate}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        openDrawer={() => handleNavigate('cassetto')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Editorial Hero Showcase (inspired by visual reference) */}
        <EditorialHero
          onNavigate={handleNavigate}
          onOpenTrailer={() => handlePlayTrailer('aWCxB5Ne43I', '6-1-5 A Girare')}
          onOpen615={() => {
            const p615 = projectsData.find(p => p.id === '6-1-5-a-girare');
            if (p615) handleOpenProject(p615);
          }}
          isDarkMode={isDarkMode}
        />

        {/* 2. Selected Filmography & Works */}
        <FilmographySection
          onSelectProject={handleOpenProject}
          onPlayTrailer={handlePlayTrailer}
          isDarkMode={isDarkMode}
        />

        {/* 3. Special Feature Section: Progetti nel Cassetto (Trailers & Screenplays) */}
        <DrawerProjectsSection
          onOpenPitchViewer={handleOpenPitchViewer}
          onPlayTrailer={handlePlayTrailer}
          onRequestScript={handleRequestScript}
          isDarkMode={isDarkMode}
        />

        {/* 4. Film Stills & Photographic Diary */}
        <GallerySection
          onOpenLightbox={handleOpenLightbox}
          isDarkMode={isDarkMode}
        />

        {/* 5. Biography, Education & Vision */}
        <BioSection
          onContactClick={() => handleNavigate('contatti')}
          isDarkMode={isDarkMode}
        />

        {/* 6. Contact & Script Inquiries */}
        <ContactSection
          prefilledSubject={contactSubject}
          isDarkMode={isDarkMode}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} isDarkMode={isDarkMode} />

      {/* MODALS */}
      {/* Pitch Deck Viewer Modal */}
      <PitchViewerModal
        isOpen={isPitchViewerOpen}
        onClose={() => setIsPitchViewerOpen(false)}
        script={selectedScript}
        isDarkMode={isDarkMode}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onPlayTrailer={handlePlayTrailer}
        onOpenGallery={handleOpenGalleryForProject}
        isDarkMode={isDarkMode}
      />

      {/* Trailer Video Player Modal */}
      <TrailerModal
        isOpen={isTrailerModalOpen}
        onClose={() => setIsTrailerModalOpen(false)}
        youtubeId={activeTrailer.youtubeId}
        title={activeTrailer.title}
        isDarkMode={isDarkMode}
      />

      {/* Lightbox Stills Gallery Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex((lightboxIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length)}
        onNext={() => setLightboxIndex((lightboxIndex + 1) % lightboxPhotos.length)}
      />

    </div>
  );
}
