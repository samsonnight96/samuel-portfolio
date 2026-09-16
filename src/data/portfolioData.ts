import { Project, DrawerScript, BioEducation, GalleryPhoto } from '../types';

export const portfolioInfo = {
  name: "Samuel Ferla",
  title: "Regista, Sceneggiatore, Scrittore e Story Editor",
  subtitle: "Filmmaker & Screenwriter based in Rome",
  vatNumber: "P.I. 02156780898",
  email: "samuel@samuelferla.it",
  birthDate: "25/03/1996",
  origin: "Siracusa",
  baseCity: "Roma, Italia",
  bioSummary: "Sono un Regista, Sceneggiatore, Scrittore e Story Editor Freelance. Mi occupo di sceneggiature per cinema, TV e web, di regia cinematografica e di story editing. Collaboro con produzioni e autori per sviluppare progetti originali e curare ogni fase del processo narrativo e registico.",
  socials: [
    { label: "FilmFreeway", url: "https://filmfreeway.com/SamuelFerla" },
    { label: "Instagram", url: "https://www.instagram.com/samuelferla/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/samuelferla/" }
  ],
  quotes: [
    { text: "Show me a hero, and I'll write you a tragedy.", author: "F. Scott Fitzgerald" },
    { text: "Il cinema non è un'arte della parola, ma uno sguardo sul tempo e sui volti.", author: "Samuel Ferla" },
    { text: "Ogni storia nel cassetto è una scintilla che attende il buio della sala.", author: "Samuel Ferla" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "6-1-5-a-girare",
    title: "6-1-5 A Girare",
    year: "2026",
    type: "Cortometraggio",
    role: "Regista e Sceneggiatore",
    category: "produzione",
    featured: true,
    image: "/Poster_1.jpg",
    backdrop: "/1.jpg",
    sinossi: "Totò è un cliente affezionato di una sala scommesse, ma è emarginato e ignorato dagli habitué. Una vincita alle corse con la combinazione '6-1-5 a girare' lo trasforma nel 'Re della sala'. Quando la fortuna svanisce e diventa il 'Gatto nero', Totò farà di tutto per tornare al centro dell'attenzione.",
    logline: "Un solitario scommettitore sperimenta l'effimera ascesa e il crudele declino sociale all'interno di una sala scommesse di periferia.",
    trailerUrl: "https://youtu.be/aWCxB5Ne43I",
    youtubeId: "aWCxB5Ne43I",
    meta: [
      { label: "Regia e Sceneggiatura", value: "Samuel Ferla" },
      { label: "Prodotto da", value: "Samuel Ferla" },
      { label: "Coprodotto da", value: "Melissa Guglielmino e Dave Monaco" },
      { label: "Cast principale", value: "Massimiliano Aita, Gregorio Dozzini" },
      { label: "Organizzatore di produzione", value: "Sergio Di Censo" },
      { label: "Direzione della Fotografia", value: "Tobia Gaspari" },
      { label: "Montaggio", value: "Luca Fiammengo" },
      { label: "Distribuzione", value: "Tersite Film" },
      { label: "Genere", value: "Drammatico / Grottesco" },
      { label: "Formato", value: "2.39:1 — 4K Color" }
    ],
    links: [
      { label: "Guarda il Trailer", url: "https://youtu.be/aWCxB5Ne43I", isExternal: true },
      { label: "Scheda Tersite", url: "https://www.tersitefilm.it/6-1-5-a-girare/", isExternal: true },
      { label: "IMDb", url: "https://www.imdb.com/it/title/tt43733778/", isExternal: true }
    ],
    galleryImages: [
      "/Poster_1.jpg",
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg"
    ]
  },
  {
    id: "primavera",
    title: "Primavera",
    year: "2026",
    type: "Cortometraggio",
    role: "Regista e Sceneggiatore",
    category: "produzione",
    featured: true,
    image: "/primavera.jpg",
    backdrop: "/primavera.jpg",
    sinossi: "Una giovane ragazza, Rosa, arriva in un piccolo paesino suscitando curiosità e attrazione da parte degli abitanti. Il via vai di persone nella sua abitazione mette in giro cattive voci e disprezzo da parte di alcuni paesani. Riuscirà Rosa a far valere la dignità del suo lavoro oltre le convenzioni sociali?",
    meta: [
      { label: "Scritto e Diretto da", value: "Samuel Ferla" },
      { label: "Prodotto da", value: "Luisa Porrino per Fargo Entertainment" },
      { label: "Protagonista", value: "Sara La Rosa (nel ruolo di Rosa)" },
      { label: "Direzione della Fotografia", value: "Matteo Basonetto" },
      { label: "Direttore di Produzione", value: "Beppe Platania" },
      { label: "Montaggio", value: "Francesco Tomba" },
      { label: "Post-Produzione", value: "Pyramid Factory" },
      { label: "Service Organizzativo", value: "Lucerna Entertainment" },
      { label: "Genere", value: "Drammatico / Cinema d'Autore" }
    ],
    links: [
      { label: "FilmFreeway", url: "https://filmfreeway.com/SamuelFerla", isExternal: true }
    ],
    galleryImages: [
      "/primavera.jpg"
    ]
  },
  {
    id: "juventus-primo-amore",
    title: "Juventus — Primo Amore",
    year: "2025",
    type: "Docufilm",
    role: "Sceneggiatore",
    category: "produzione",
    featured: true,
    image: "/juventus.jpg",
    sinossi: "Tra il 1975 e il 1985 la Juventus domina in Italia e in Europa, diventando simbolo di eccellenza in un Paese attraversato da tensioni sociali e terrorismo. Dalla rivalità con il Torino FC alla tragedia dell'Heysel, il documentario ripercorre il decennio d'oro bianconero segnato dall'arrivo di Trapattoni e da campioni come Zoff, Scirea, Tardelli, Bettega, Platini e Boniek, intrecciando sport e storia italiana.",
    logline: "Il decennio d'oro bianconero (1975-1985) attraverso il prisma della storia sociale italiana.",
    awards: ["Selezione Ufficiale — Torino Film Festival 2025"],
    meta: [
      { label: "Produzione", value: "LuxVide / Rai Documentari" },
      { label: "Regia", value: "Angelo Bozzolini" },
      { label: "Sceneggiatura", value: "Samuel Ferla, Angelo Bozzolini, Luca Scurati" },
      { label: "Distribuzione Cinema", value: "Sale cinematografiche d'Italia (17 Febbraio 2026)" },
      { label: "Messa in onda TV", value: "Rai 1 — Prima Serata (Maggio 2026)" },
      { label: "Festival", value: "Selezione Ufficiale — Torino Film Festival" }
    ],
    links: [
      { label: "Guarda su RaiPlay", url: "https://www.raiplay.it/programmi/juventusprimoamore", isExternal: true }
    ]
  },
  {
    id: "all-ombra-del-cipresso",
    title: "All'Ombra del Cipresso",
    year: "2026",
    type: "Docufilm",
    role: "Ideatore, Regista e Sceneggiatore",
    category: "sviluppo",
    featured: true,
    image: "/innesti.png",
    sinossi: "Ritratto di Amirhossein Yaghoobi. Un documentario che racconta con sensibilità cinematografica la storia di resilienza e passione di un giovane pittore iraniano che vive e crea in Italia, esplorando l'identità artistica tra esilio, pittura e memoria.",
    logline: "Il viaggio artistico e umano del pittore iraniano Amirhossein Yaghoobi nell'Italia contemporanea.",
    trailerUrl: "https://www.youtube.com/watch?v=ceVm-qHQ7uQ",
    youtubeId: "ceVm-qHQ7uQ",
    meta: [
      { label: "Regia", value: "Samuel Ferla" },
      { label: "Sceneggiatura", value: "Samuel Ferla" },
      { label: "Produzione", value: "Onirika Production" },
      { label: "Produttore", value: "Pierpaolo Saraceno" },
      { label: "Direzione Fotografia", value: "Tobia Gaspari, Alessandro Baroli, Giacomo Zacchia" },
      { label: "Montaggio", value: "Luca Fiammengo" },
      { label: "Stato", value: "In Produzione / Post-produzione" }
    ],
    links: [
      { label: "Guarda il Teaser Trailer", url: "https://www.youtube.com/watch?v=ceVm-qHQ7uQ", isExternal: true }
    ]
  },
  {
    id: "cento-e-oltre-puccini",
    title: "Cento e Oltre. Puccini e Noi",
    year: "2025",
    type: "Docufilm",
    role: "Collaboratore alla Scrittura",
    category: "collaborazione",
    image: "/puccini.png",
    sinossi: "A cento anni dalla sua morte, Giacomo Puccini rimane una delle figure più popolari e iconiche dell'opera italiana. Il documentario è un focus non convenzionale sulla vita personale e artistica di Puccini, rivelandolo come precursore inconsapevole di generi contemporanei dal musical alla colonna sonora per film.",
    meta: [
      { label: "Produzione", value: "AutAut Production / Rai Documentari" },
      { label: "Regia", value: "Angelo Bozzolini" },
      { label: "Ruolo", value: "Collaboratore alla scrittura" },
      { label: "Distribuzione", value: "Prima serata Rai 3 (8 Novembre 2025)" }
    ],
    links: [
      { label: "Disponibile su RaiPlay", url: "https://www.raiplay.it/programmi/centoeoltrepuccinienoi", isExternal: true }
    ]
  },
  {
    id: "viva-puccini",
    title: "Viva Puccini",
    year: "2025",
    type: "Programma TV",
    role: "Redazione e Contenuti",
    category: "collaborazione",
    image: "/viva_puccini.jpg",
    sinossi: "Serata evento per celebrare Giacomo Puccini nel centenario della sua scomparsa, con l'esecuzione dell'Orchestra Scarlatti di Napoli diretta dal Maestro Beatrice Venezi e la partecipazione di grandi interpreti della lirica internazionale.",
    meta: [
      { label: "Produzione", value: "AutAut Production / Rai Cultura" },
      { label: "Regia", value: "Fabrizio Guttuso Alaimo" },
      { label: "Ruolo", value: "Redazione / Team Autori" },
      { label: "Distribuzione", value: "Prima serata Rai 3 (1° Gennaio 2025)" }
    ],
    links: [
      { label: "Disponibile su RaiPlay", url: "https://www.raiplay.it/programmi/vivapuccini", isExternal: true }
    ]
  },
  {
    id: "tennis-and-friends",
    title: "Tennis & Friends — La Prevenzione Scende in Campo",
    year: "2024",
    type: "Docufilm",
    role: "Collaboratore alla Scrittura",
    category: "collaborazione",
    image: "/tennis.jpg",
    sinossi: "Fiorello, Mara Venier, Paolo Bonolis, Maria De Filippi e altri protagonisti del mondo della cultura e dello spettacolo raccontano l'esperienza del progetto sociale Tennis & Friends per promuovere la cultura della prevenzione e dello sport.",
    meta: [
      { label: "Produzione", value: "AutAut Production / Rai Documentari" },
      { label: "Regia", value: "Angelo Bozzolini" },
      { label: "Ruolo", value: "Collaboratore alla scrittura" },
      { label: "Messa in onda", value: "Rai (17 Maggio 2024)" }
    ],
    links: [
      { label: "Disponibile su RaiPlay", url: "https://www.raiplay.it/programmi/tennisandfriends-laprevenzionescendeincampo", isExternal: true }
    ]
  },
  {
    id: "super-g",
    title: "Super G",
    year: "2022",
    type: "Cortometraggio",
    role: "Regista",
    category: "produzione",
    image: "/super_g.jpg",
    sinossi: "Giulio, un bambino di otto anni appassionato di fumetti e supereroi, si rende conto che la madre sta affrontando un grave pericolo e decide di intervenire con coraggio e ingenuità.",
    trailerUrl: "https://www.youtube.com/watch?v=gnkwh0DjhVM",
    youtubeId: "gnkwh0DjhVM",
    meta: [
      { label: "Produzione", value: "Accademia di Cinema e TV Griffith" },
      { label: "Regia", value: "Samuel Ferla" },
      { label: "Sceneggiatura", value: "N. Sorrentino, A. Patacconi, F. Luisiani" },
      { label: "Cast", value: "Filippo Lanuto, Valentina Malaspina" }
    ],
    links: [
      { label: "Guarda su YouTube", url: "https://www.youtube.com/watch?v=gnkwh0DjhVM", isExternal: true }
    ]
  }
];

export const drawerScriptsData: DrawerScript[] = [
  {
    id: "notte-insonne",
    title: "Notte Insonne",
    year: "2025",
    type: "Cortometraggio",
    category: "Cortometraggio",
    status: "Pronto per la produzione",
    genre: ["Drammatico"],
    logline: "Nella notte più buia della sua vita, Simone vaga per le strade della città.",
    sinossi: "Nella notte più buia della sua vita, Simone vaga per le strade della città. Incapace di varcare la soglia di casa per dare la notizia che cambierà per sempre le vite di sua moglie e suo figlio.",
    pitchImages: ['/pitches/notte-insonne/01.jpg','/pitches/notte-insonne/02.jpg','/pitches/notte-insonne/03.jpg','/pitches/notte-insonne/04.jpg','/pitches/notte-insonne/05.jpg','/pitches/notte-insonne/06.jpg','/pitches/notte-insonne/07.jpg','/pitches/notte-insonne/08.jpg','/pitches/notte-insonne/09.jpg']
  },
  {
    id: "ortigia-island",
    title: "Ortigia Island",
    year: "2024",
    type: "Lungometraggio",
    category: "Lungometraggio",
    status: "Nona stesura",
    genre: ["Comedy Drama"],
    logline: "Seguire ostinatamente le proprie ambizioni o adattarsi alle circostanze?",
    sinossi: "Seguire ostinatamente le proprie ambizioni o adattarsi alle circostanze? Ortigia Island guida lo spettatore attraverso il progressivo fallimento delle aspirazioni di Alex, un ragazzo che tenta di sfuggire da un destino statico e monotono, le cui ambizioni mutano in un'ostinata ricerca di rivalsa.",
    pitchImages: ['/pitches/ortigia-island/01.jpg','/pitches/ortigia-island/02.jpg','/pitches/ortigia-island/03.jpg','/pitches/ortigia-island/04.jpg','/pitches/ortigia-island/05.jpg','/pitches/ortigia-island/06.jpg','/pitches/ortigia-island/07.jpg','/pitches/ortigia-island/08.jpg','/pitches/ortigia-island/09.jpg','/pitches/ortigia-island/10.jpg','/pitches/ortigia-island/11.jpg','/pitches/ortigia-island/12.jpg']
  },
  {
    id: "luce-blu",
    title: "Luce Blu",
    year: "2023",
    type: "Cortometraggio",
    category: "Cortometraggio",
    status: "Pronto per la produzione",
    pages: 15,
    awards: "Vincitore Milan Short Film Festival 2024 (Best Short Script) · Finalista Vesuvius IFA 2024 · Vincitore Robinson Film Awards 2023 · Finalista Rome Prisma 2023 · Finalista Theta Short Film Festival 2023",
    genre: ["Drammatico"],
    logline: "Ogni persona che incontriamo sta combattendo una battaglia di cui non conosciamo nulla.",
    sinossi: "Ogni persona che incontriamo sta combattendo una battaglia di cui non conosciamo nulla.",
    pitchImages: ['/pitches/luce-blu/01.jpg','/pitches/luce-blu/02.jpg','/pitches/luce-blu/03.jpg','/pitches/luce-blu/04.jpg','/pitches/luce-blu/05.jpg','/pitches/luce-blu/06.jpg','/pitches/luce-blu/07.jpg','/pitches/luce-blu/08.jpg']
  },
  {
    id: "do-ut-des",
    title: "Do Ut Des",
    year: "2025",
    type: "Cortometraggio",
    category: "Cortometraggio",
    status: "Pronto per la produzione",
    coAuthor: "con Luca Nicolosi",
    genre: ["Drammatico"],
    logline: "La vigilia di Natale del 1942, nella Catania sotto occupazione, un quindicenne armato incontra un giovane soldato tedesco.",
    sinossi: "La vigilia di Natale del 1942, nella Catania sotto occupazione, un quindicenne armato incontra un giovane soldato tedesco che tiene in ostaggio la sua sorellina: incapaci di capirsi, i due si fronteggiano finché il ragazzo depone il fucile e offre il suo sacco di cibo come dono di pace, ma un gesto improvviso trasforma quel fragile incontro in una tragedia.",
    pitchImages: ['/pitches/do-ut-des/01.jpg','/pitches/do-ut-des/02.jpg','/pitches/do-ut-des/03.jpg','/pitches/do-ut-des/04.jpg','/pitches/do-ut-des/05.jpg','/pitches/do-ut-des/06.jpg','/pitches/do-ut-des/07.jpg']
  },
  {
    id: "gli-avvoltoi",
    title: "Gli Avvoltoi",
    year: "2023",
    type: "Lungometraggio",
    category: "Lungometraggio",
    status: "Trattamento completato",
    coAuthor: "con Francesco Giardiello",
    awards: "Finalista Ufficiale RIFF — Rome Independent Film Festival 2023",
    genre: ["Comedy Crime"],
    logline: "Nel cuore di un intrigo criminale, una coppia di sicari professionisti è determinata ad abbandonare la vita di violenza.",
    sinossi: "Nel cuore di un intrigo criminale, una coppia di sicari professionisti è determinata ad abbandonare la vita di violenza. Tuttavia, il loro capo li persuade a compiere un ultimo lavoro: proteggere un imprenditore marsigliese incaricato di vendere una collezione di diamanti, ma qualcosa andrà storto.",
    pitchImages: ['/pitches/gli-avvoltoi/01.jpg','/pitches/gli-avvoltoi/02.jpg','/pitches/gli-avvoltoi/03.jpg','/pitches/gli-avvoltoi/04.jpg','/pitches/gli-avvoltoi/05.jpg','/pitches/gli-avvoltoi/06.jpg']
  },
  {
    id: "whispers",
    title: "Whispers",
    year: "2023",
    type: "Serie TV",
    category: "Serie TV",
    status: "Trattamento completato",
    coAuthor: "con Francesco Giardiello",
    genre: ["Thriller"],
    logline: "Dafne è una giovane hacker che collabora con una giornalista d'inchiesta per smascherare i reati di molestie.",
    sinossi: "Dafne è una giovane hacker che collabora con una giornalista d'inchiesta per smascherare i reati di molestie. L'incontro con gli Whispers, un gruppo anarchico di hacker, la coinvolgerà nella lotta contro un organizzazione di cyber criminali che minaccia il tessuto sociale del Paese.",
    pitchImages: ['/pitches/whispers/01.jpg','/pitches/whispers/02.jpg','/pitches/whispers/03.jpg','/pitches/whispers/04.jpg','/pitches/whispers/05.jpg','/pitches/whispers/06.jpg','/pitches/whispers/07.jpg','/pitches/whispers/08.jpg','/pitches/whispers/09.jpg','/pitches/whispers/10.jpg','/pitches/whispers/11.jpg']
  },
  {
    id: "il-puparo",
    title: "Il Puparo",
    year: "2023",
    type: "Film di Animazione",
    category: "Animazione",
    status: "Trattamento completato",
    genre: ["Dark Fantasy"],
    logline: "Lele è un impavido adolescente che vive nelle campagne dell'entroterra siciliana.",
    sinossi: "Lele è un impavido adolescente che vive nelle campagne dell'entroterra siciliana. Un giorno perde il pallone giù per la collina e, nel tentativo di recuperarlo, si imbatte nel Puparo, un artigiano che ha creato dei burattini (Pupi) viventi. L'uomo gli chiede aiuto per salvare i suoi Pupi imprigionati. Il ragazzo decide così di intraprendere uno strambo viaggio che lo porterà in un mondo buio e surreale."
  },
  {
    id: "autunno",
    title: "Autunno",
    year: "2023",
    type: "Cortometraggio",
    category: "Cortometraggio",
    status: "Pronto per la produzione",
    genre: ["Drammatico"],
    logline: "In un piccolo maneggio di famiglia fuori città un padre deve trovare il coraggio di dare una terribile notizia al figlio.",
    sinossi: "In un piccolo maneggio di famiglia fuori città un padre deve trovare il coraggio di dare una terribile notizia al figlio, la prematura scomparsa della madre."
  }
];

export const galleryStills: GalleryPhoto[] = [
  {
    id: "615-poster",
    url: "/Poster_1.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-1",
    url: "/1.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-2",
    url: "/2.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-3",
    url: "/3.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-4",
    url: "/4.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-5",
    url: "/5.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-6",
    url: "/6.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-7",
    url: "/7.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-8",
    url: "/8.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "615-9",
    url: "/9.jpg",
    project: "6-1-5 A Girare",
    year: "2026"
  },
  {
    id: "prim-poster",
    url: "/primavera.jpg",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "prim-title",
    url: "/p3.png",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "prim-stazione",
    url: "/p1.png",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "prim-carruggio",
    url: "/p4.png",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "prim-finestra",
    url: "/p2.png",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "prim-operai",
    url: "/p5.png",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "prim-parroco",
    url: "/p6.png",
    project: "Primavera",
    year: "2026"
  },
  {
    id: "omc-01",
    url: "/stills/all-ombra-del-cipresso/omc-01.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-02",
    url: "/stills/all-ombra-del-cipresso/omc-02.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-03",
    url: "/stills/all-ombra-del-cipresso/omc-03.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-04",
    url: "/stills/all-ombra-del-cipresso/omc-04.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-05",
    url: "/stills/all-ombra-del-cipresso/omc-05.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-06",
    url: "/stills/all-ombra-del-cipresso/omc-06.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-07",
    url: "/stills/all-ombra-del-cipresso/omc-07.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-08",
    url: "/stills/all-ombra-del-cipresso/omc-08.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-09",
    url: "/stills/all-ombra-del-cipresso/omc-09.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-10",
    url: "/stills/all-ombra-del-cipresso/omc-10.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
  {
    id: "omc-11",
    url: "/stills/all-ombra-del-cipresso/omc-11.png",
    project: "All'Ombra del Cipresso",
    year: "2026"
  },
];

export const bioEducationData: BioEducation[] = [
  {
    year: "2022",
    title: "Diploma in Regia e Sceneggiatura",
    institution: "Accademia di Cinema e Televisione Griffith, Roma",
    details: "Studio intensivo di regia cinematografica, direzione degli attori, découpage classico ed espressivo, montaggio narrativo e sceneggiatura avanzata."
  },
  {
    year: "2021",
    title: "Laurea in Scienze e Tecnologie Multimediali",
    institution: "Università degli Studi di Udine",
    details: "Approfondimento dei linguaggi dell'audiovisivo, media studies, post-produzione digitale, storia del cinema e drammaturgia cross-mediale."
  },
  {
    year: "2021",
    title: "Docenza di Marco Carrara",
    institution: "Corso di Scrittura Creativa e Progettazione di Storie",
    details: "Sviluppo della struttura in tre atti, arco di trasformazione del personaggio, dialoghi e bibbie di serie."
  },
  {
    year: "2020",
    title: "Laboratorio 'I contratti nella produzione cine-televisiva'",
    institution: "CSC — Centro Sperimentale di Cinematografia, Roma",
    details: "Diritto d'autore, accordi di opzione e cessione diritti, co-produzioni internazionali e contrattualistica con broadcaster e piattaforme."
  }
];
