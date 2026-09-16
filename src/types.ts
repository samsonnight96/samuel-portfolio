export interface ProjectCredit {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  type: 'Cortometraggio' | 'Docufilm' | 'Programma TV' | 'Lungometraggio' | 'In Sviluppo';
  role: string;
  category: 'produzione' | 'sviluppo' | 'collaborazione';
  image: string;
  backdrop?: string;
  sinossi: string;
  logline?: string;
  meta: ProjectCredit[];
  links: ProjectLink[];
  trailerUrl?: string;
  youtubeId?: string;
  awards?: string[];
  galleryImages?: string[];
  featured?: boolean;
}

export interface DrawerScript {
  id: string;
  title: string;
  year: string;
  type: string;
  category: 'Cortometraggio' | 'Lungometraggio' | 'Serie TV' | 'Animazione' | 'Documentario';
  status: 'Pronto per la produzione' | 'In sviluppo' | 'Nona stesura' | 'Trattamento completato' | 'Bozza finale' | 'Archiviato' | 'In cerca di una produzione';
  coAuthor?: string;
  awards?: string;
  logline: string;
  sinossi: string;
  genre: string[];
  pages?: number;
  pitchImages?: string[];
  trailerId?: string;
  coverImage?: string;
  runtime?: string;
  scriptStage?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  project: string;
  year: string;
}

export interface BioEducation {
  year: string;
  title: string;
  institution: string;
  details?: string;
}
