export type Lang = 'en' | 'de'

export const translations = {
  en: {
    nav: {
      howItWorks: 'How it Works',
      theApp: 'The App',
      sports: 'Sports',
      getYours: 'Get Yours',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      headline: ['Play.', 'Capture.', 'Enjoy.'],
      sub1: 'Your game. Captured effortlessly.',
      sub2: 'The premium aluminium mount built for the net.',
      orderNow: 'Order Now',
      seeHow: 'See How It Works',
      scroll: 'Scroll',
    },
    productSpecs: {
      label: 'The Product',
      headline: 'Built to last.',
      subheadline: 'Made to impress.',
      description:
        'Every millimetre is machined from solid aluminium. No plastic. No flex. No compromise. NetShot is engineered like the sport it was made for.',
      dragToRotate: 'Drag to rotate',
      specs: [
        { label: 'Material', value: 'Aircraft-grade 6061 aluminium' },
        { label: 'Weight', value: '238g: lighter than your phone' },
        { label: 'Compatibility', value: 'Any net post or top rail' },
        { label: 'Phone fit', value: 'Universal: up to 75mm wide, 12mm thick' },
        { label: 'Finish', value: 'Sandblasted + anodised' },
      ],
    },
    tagline: {
      label: 'Three steps. Zero friction.',
      phrases: [
        { label: 'Mount it.', sub: 'Clips to any net in seconds.' },
        { label: 'Record it.', sub: 'Automatically captures every rally.' },
        { label: 'Own it.', sub: 'Review, highlight, and share your game.' },
      ],
    },
    howItWorks: {
      label: 'How It Works',
      headline: 'Simple by design.',
      subheadline: 'Powerful by nature.',
      steps: [
        {
          number: '01',
          title: 'Mount',
          headline: 'On the net in seconds.',
          description:
            'The precision-machined aluminium clamp slides onto any standard net post or top rail. No tools. No setup hassle.',
        },
        {
          number: '02',
          title: 'Clip',
          headline: 'Your phone. Perfectly positioned.',
          description:
            'The universal spring-loaded cradle holds any smartphone up to 90mm wide. Portrait or landscape — your call.',
        },
        {
          number: '03',
          title: 'Play',
          headline: 'The app takes over.',
          description:
            'Open the NetShot app, start recording. AI detects rallies, highlights, and key moments — automatically.',
        },
        {
          number: '04',
          title: 'Review',
          headline: 'Watch yourself improve.',
          description:
            'Every session. Every rally. Automatically organised, clipped and ready to watch. Share with your coach or keep it for yourself.',
        },
      ],
    },
    app: {
      label: 'The App',
      headline: 'Your game on autopilot.',
      description: 'The NetShot app turns raw footage into actionable insights. Automatically.',
      features: [
        {
          id: 'highlights',
          pill: 'AI Highlights',
          title: 'Every great moment. Automatically.',
          body: "NetShot's AI engine analyses your session in real time. It detects rallies, winners, and key points — and clips them for you. No editing required.",
        },
        {
          id: 'training',
          pill: 'Training Mode',
          title: 'See your game like your coach does.',
          body: 'Review your technique, footwork, and positioning frame by frame. Add timestamps and notes. Share clips directly with your coach for feedback.',
        },
        {
          id: 'autopilot',
          pill: 'Autopilot',
          title: 'Set it. Forget it. Watch it.',
          body: 'Press record and walk away. Autopilot intelligently pauses between points, resumes on serve, and saves battery — so you never run out of storage mid-match.',
        },
      ],
      comingSoon: 'App available at launch — iOS & Android',
    },
    sports: {
      label: 'Sports',
      headline: 'Built for the net.',
      subheadline: 'Made for the moments.',
      soon: 'Soon',
      comingSoon: 'Coming Soon',
      orderNow: 'Order Now',
      tennis: {
        name: 'Tennis',
        tagline: 'Every rally. Every ace. Captured.',
        description:
          'NetShot mounts to the net post and captures your entire baseline game. Perfect angle. Perfect framing. Train smarter, win more.',
        stat1: { value: '180°', label: 'Coverage Arc' },
        stat2: { value: '4K', label: 'Max Recording' },
        stat3: { value: '< 5s', label: 'Setup Time' },
      },
      padel: {
        name: 'Padel',
        tagline: 'Coming to the glass court.',
        description:
          "NetShot for Padel is in development. The unique glass-wall court makes for incredible footage — we're engineering the perfect mount for it.",
        stat1: { value: 'Coming', label: 'Soon' },
        stat2: { value: 'Padel', label: 'Optimised' },
      },
    },
    features: {
      label: 'Why NetShot',
      headline: 'Everything considered.',
      showAll: (n: number) => `Show all ${n} features`,
      items: [
        { title: 'Premium Aluminium', body: 'Machined from 6061 aircraft-grade aluminium. Built for courts, built to last. No plastic. No compromises.' },
        { title: 'Universal Fit', body: 'Any net post. Any phone. Instantly secure.' },
        { title: 'App Connected', body: 'iOS & Android. Automatic sync. Everything in one place.' },
        { title: 'Auto Highlights', body: 'AI detects your best moments and clips them automatically. No editing. No hassle. Just great footage.' },
        { title: 'Setup in Seconds', body: 'Under 5 seconds from bag to recording. No tools required.' },
      ],
    },
    preorder: {
      headline: 'Your game.',
      subheadline: 'Captured effortlessly.',
      description: 'Get the mount now or join the waitlist for the NetShot app.',
      getYoursCard: {
        badge: 'Available Now',
        title: 'Get Yours',
        description: 'Built from aerospace-grade aluminium. Mounts to any tennis net post in seconds.',
        statsLabels: ['Aluminium', 'Weight', 'Mount time', 'Potential'],
        cta: 'Buy on Amazon',
      },
      appCard: {
        badge: 'Coming Soon',
        title: 'The App',
        description:
          'AI highlights, training review, and autopilot recording — all in one place. Join the waitlist and be first to know when it drops.',
        features: [
          { label: 'AI Highlights', desc: 'Auto-clipped rallies & winners' },
          { label: 'Training Mode', desc: 'Frame-by-frame review & coach share' },
          { label: 'Autopilot', desc: 'Smart recording, saves battery' },
        ],
        placeholder: 'your@email.com',
        notifyMe: 'Notify Me',
        noSpam: 'No spam. Unsubscribe any time.',
        onList: "You're on the list!",
      },
    },
    faq: {
      label: 'FAQ',
      headline: 'Common questions.',
      items: [
        {
          q: 'How does NetShot attach to a tennis net?',
          a: 'NetShot features a precision-machined aluminium clamp that slides onto any standard tennis net post or top rail in under 5 seconds. No tools required.',
        },
        {
          q: 'What phones does NetShot support?',
          a: "NetShot's universal spring-loaded cradle holds any smartphone up to 75mm wide and 12mm thick — covering all major iPhone and Android models.",
        },
        {
          q: 'How do I record my tennis match with NetShot?',
          a: 'Mount NetShot on the net post, clip in your phone, and open the NetShot app. Press record and the AI automatically detects rallies, clips highlights, and organises your session — no editing required.',
        },
        {
          q: 'Is there an AI highlights app for tennis?',
          a: 'Yes. The NetShot companion app (coming soon for iOS and Android) uses AI to automatically detect rallies, clip highlights, and organise your sessions so you can improve without ever touching a video editor.',
        },
        {
          q: 'Does NetShot work for padel?',
          a: 'NetShot currently supports tennis net posts. A padel-optimised version is in development and coming soon.',
        },
        {
          q: 'What material is the NetShot mount made from?',
          a: 'NetShot is machined from aircraft-grade 6061 aluminium, weighs just 238g, and has a sandblasted anodised finish for long-term durability on outdoor courts.',
        },
      ],
    },
    footer: {
      tagline: 'Capture your game.',
      links: [
        { label: 'Tennis', href: '#sports' },
        { label: 'Padel', href: '#sports' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'The App', href: '#app' },
        { label: 'Pre-order', href: '#preorder' },
      ],
      rights: (year: number) => `© ${year} NetShot. All rights reserved.`,
    },
  },

  de: {
    nav: {
      howItWorks: 'So funktioniert\'s',
      theApp: 'Die App',
      sports: 'Sportarten',
      getYours: 'Jetzt kaufen',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },
    hero: {
      headline: ['Spielen.', 'Aufnehmen.', 'Genießen.'],
      sub1: 'Dein Spiel. Mühelos festgehalten.',
      sub2: 'Die premium Aluminiumhalterung fürs Netz.',
      orderNow: 'Jetzt bestellen',
      seeHow: 'So funktioniert\'s',
      scroll: 'Scrollen',
    },
    productSpecs: {
      label: 'Das Produkt',
      headline: 'Für die Ewigkeit gebaut.',
      subheadline: 'Gemacht, um zu beeindrucken.',
      description:
        'Jeder Millimeter aus massivem Aluminium gefräst. Kein Plastik. Kein Biegen. Kein Kompromiss. NetShot ist so engineered wie der Sport, für den es gemacht wurde.',
      dragToRotate: 'Zum Drehen ziehen',
      specs: [
        { label: 'Material', value: 'Luftfahrt-Aluminium 6061' },
        { label: 'Gewicht', value: '238g – leichter als dein Handy' },
        { label: 'Kompatibilität', value: 'Jeder Netzpfosten oder Netzstab' },
        { label: 'Handyhalterung', value: 'Universal: bis 75mm breit, 12mm dick' },
        { label: 'Oberfläche', value: 'Sandgestrahlt + eloxiert' },
      ],
    },
    tagline: {
      label: 'Drei Schritte. Null Aufwand.',
      phrases: [
        { label: 'Montieren.', sub: 'In Sekunden am Netz befestigt.' },
        { label: 'Aufnehmen.', sub: 'Erfasst automatisch jeden Ballwechsel.' },
        { label: 'Besitzen.', sub: 'Ansehen, hervorheben und teilen.' },
      ],
    },
    howItWorks: {
      label: 'So funktioniert\'s',
      headline: 'Einfach by Design.',
      subheadline: 'Leistungsstark von Natur aus.',
      steps: [
        {
          number: '01',
          title: 'Montieren',
          headline: 'In Sekunden am Netz.',
          description:
            'Die präzisionsgefräste Aluminiumklemme gleitet auf jeden Standard-Netzpfosten oder Netzstab. Kein Werkzeug. Kein Aufwand.',
        },
        {
          number: '02',
          title: 'Einclipsen',
          headline: 'Dein Handy. Perfekt positioniert.',
          description:
            'Die universelle Federwiege hält jedes Smartphone bis 90mm Breite. Hoch- oder Querformat – deine Wahl.',
        },
        {
          number: '03',
          title: 'Spielen',
          headline: 'Die App übernimmt.',
          description:
            'Öffne die NetShot-App, starte die Aufnahme. Die KI erkennt Ballwechsel, Highlights und Schlüsselmomente – automatisch.',
        },
        {
          number: '04',
          title: 'Analysieren',
          headline: 'Sieh dich verbessern.',
          description:
            'Jede Session. Jeder Ballwechsel. Automatisch organisiert, geschnitten und bereit zum Ansehen. Teile es mit deinem Coach oder behalte es für dich.',
        },
      ],
    },
    app: {
      label: 'Die App',
      headline: 'Dein Spiel auf Autopilot.',
      description: 'Die NetShot-App verwandelt Rohmaterial in verwertbare Erkenntnisse. Automatisch.',
      features: [
        {
          id: 'highlights',
          pill: 'KI-Highlights',
          title: 'Jeder großartige Moment. Automatisch.',
          body: 'Die KI-Engine von NetShot analysiert deine Session in Echtzeit. Sie erkennt Ballwechsel, Winnerschläge und Schlüsselpunkte – und schneidet sie für dich. Kein Editieren nötig.',
        },
        {
          id: 'training',
          pill: 'Trainingsmodus',
          title: 'Sieh dein Spiel wie dein Trainer.',
          body: 'Überprüfe deine Technik, Beinarbeit und Positionierung Bild für Bild. Füge Zeitstempel und Notizen hinzu. Teile Clips direkt mit deinem Coach.',
        },
        {
          id: 'autopilot',
          pill: 'Autopilot',
          title: 'Einschalten. Vergessen. Anschauen.',
          body: 'Aufnahme starten und weggehen. Der Autopilot pausiert intelligent zwischen den Punkten, nimmt beim Aufschlag wieder auf und schont den Akku.',
        },
      ],
      comingSoon: 'App verfügbar beim Launch – iOS & Android',
    },
    sports: {
      label: 'Sportarten',
      headline: 'Gebaut fürs Netz.',
      subheadline: 'Gemacht für die Momente.',
      soon: 'Bald',
      comingSoon: 'Demnächst',
      orderNow: 'Jetzt bestellen',
      tennis: {
        name: 'Tennis',
        tagline: 'Jeder Ballwechsel. Jedes Ass. Festgehalten.',
        description:
          'NetShot montiert sich am Netzpfosten und erfasst dein gesamtes Grundlinienspiel. Perfekter Winkel. Perfektes Bild. Cleverer trainieren, mehr gewinnen.',
        stat1: { value: '180°', label: 'Abdeckungswinkel' },
        stat2: { value: '4K', label: 'Max. Aufnahme' },
        stat3: { value: '< 5s', label: 'Montagezeit' },
      },
      padel: {
        name: 'Padel',
        tagline: 'Kommt auf den Glasplatz.',
        description:
          'NetShot für Padel ist in Entwicklung. Der einzigartige Glaswandplatz bietet unglaubliches Filmmaterial – wir entwickeln die perfekte Halterung dafür.',
        stat1: { value: 'Demnächst', label: 'Verfügbar' },
        stat2: { value: 'Padel', label: 'Optimiert' },
      },
    },
    features: {
      label: 'Warum NetShot',
      headline: 'Alles durchdacht.',
      showAll: (n: number) => `Alle ${n} Features anzeigen`,
      items: [
        { title: 'Premium-Aluminium', body: 'Aus 6061-Luftfahrtaluminium gefräst. Für Courts gebaut, um zu halten. Kein Plastik. Keine Kompromisse.' },
        { title: 'Universelle Passform', body: 'Jeder Netzpfosten. Jedes Handy. Sofort sicher.' },
        { title: 'App-Verbunden', body: 'iOS & Android. Automatische Sync. Alles an einem Ort.' },
        { title: 'Auto-Highlights', body: 'Die KI erkennt deine besten Momente und schneidet sie automatisch. Kein Editieren. Kein Aufwand. Nur tolles Material.' },
        { title: 'Montage in Sekunden', body: 'Unter 5 Sekunden von der Tasche bis zur Aufnahme. Kein Werkzeug nötig.' },
      ],
    },
    preorder: {
      headline: 'Dein Spiel.',
      subheadline: 'Mühelos festgehalten.',
      description: 'Hol dir die Halterung jetzt oder trag dich für die NetShot-App auf die Warteliste ein.',
      getYoursCard: {
        badge: 'Jetzt verfügbar',
        title: 'Jetzt kaufen',
        description: 'Aus Luftfahrtaluminium gefertigt. Montiert in Sekunden an jedem Tennisnetpfosten.',
        statsLabels: ['Aluminium', 'Gewicht', 'Montagezeit', 'Potenzial'],
        cta: 'Auf Amazon kaufen',
      },
      appCard: {
        badge: 'Demnächst',
        title: 'Die App',
        description:
          'KI-Highlights, Trainingsüberprüfung und Autopilot-Aufnahme – alles an einem Ort. Trag dich ein und sei der Erste, der es weiß.',
        features: [
          { label: 'KI-Highlights', desc: 'Automatisch geschnittene Ballwechsel & Winner' },
          { label: 'Trainingsmodus', desc: 'Bild-für-Bild-Analyse & Coach-Sharing' },
          { label: 'Autopilot', desc: 'Clevere Aufnahme, schont den Akku' },
        ],
        placeholder: 'deine@email.de',
        notifyMe: 'Benachrichtigen',
        noSpam: 'Kein Spam. Jederzeit abmeldbar.',
        onList: 'Du bist dabei!',
      },
    },
    faq: {
      label: 'FAQ',
      headline: 'Häufige Fragen.',
      items: [
        {
          q: 'Wie befestigt sich NetShot am Tennisnetz?',
          a: 'NetShot verfügt über eine präzisionsgefräste Aluminiumklemme, die in unter 5 Sekunden auf jeden Standard-Tennisnetpfosten oder Netzstab gleitet. Kein Werkzeug erforderlich.',
        },
        {
          q: 'Welche Handys unterstützt NetShot?',
          a: 'Die universelle Federwiege von NetShot hält jedes Smartphone bis 75mm Breite und 12mm Dicke – alle wichtigen iPhone- und Android-Modelle.',
        },
        {
          q: 'Wie nehme ich mein Tennisspiel mit NetShot auf?',
          a: 'NetShot am Netzpfosten montieren, Handy einclipsen und die NetShot-App öffnen. Aufnahme starten – die KI erkennt automatisch Ballwechsel, schneidet Highlights und organisiert deine Session.',
        },
        {
          q: 'Gibt es eine KI-Highlights-App für Tennis?',
          a: 'Ja. Die NetShot-Begleit-App (demnächst für iOS und Android) nutzt KI, um automatisch Ballwechsel zu erkennen, Highlights zu schneiden und deine Sessions zu organisieren.',
        },
        {
          q: 'Funktioniert NetShot auch für Padel?',
          a: 'NetShot unterstützt derzeit Tennis-Netzpfosten. Eine Padel-optimierte Version ist in Entwicklung und kommt bald.',
        },
        {
          q: 'Aus welchem Material besteht die NetShot-Halterung?',
          a: 'NetShot wird aus Luftfahrt-Aluminium 6061 gefräst, wiegt nur 238g und hat eine sandgestrahlte eloxierte Oberfläche für langfristige Haltbarkeit auf Außenplätzen.',
        },
      ],
    },
    footer: {
      tagline: 'Dein Spiel festhalten.',
      links: [
        { label: 'Tennis', href: '#sports' },
        { label: 'Padel', href: '#sports' },
        { label: 'So funktioniert\'s', href: '#how-it-works' },
        { label: 'Die App', href: '#app' },
        { label: 'Vorbestellen', href: '#preorder' },
      ],
      rights: (year: number) => `© ${year} NetShot. Alle Rechte vorbehalten.`,
    },
  },
}
