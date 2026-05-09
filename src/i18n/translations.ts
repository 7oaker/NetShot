export type Lang = 'en' | 'de'

export const translations = {
  en: {
    nav: {
      howItWorks: 'How it Works',
      theApp: 'The App',
      sports: 'Sports',
      getYours: 'Get Yours',
      downloadApp: 'Download App',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      headline: ['Play.', 'Capture.', 'Enjoy.'],
      sub1: 'Your game. Captured effortlessly.',
      sub2: 'The premium aluminium mount built for the net.',
      orderNow: 'Get Launch Updates',
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
            'The universal spring-loaded cradle holds any smartphone up to 75mm wide. Portrait or landscape — your call.',
        },
        {
          number: '03',
          title: 'Play',
          headline: 'The app takes over.',
          description:
            'Open the NetShot app, hit record, and play. Shout "Cut it!" — or any custom keyword — whenever something great happens. Or just tap the big button on screen.',
        },
        {
          number: '04',
          title: 'Review',
          headline: 'Your reel, in seconds.',
          description:
            'After the match, every marked moment is on a visual timeline. Trim, label, reorder. Hit Regenerate and your highlight reel is saved straight to your camera roll.',
        },
      ],
    },
    app: {
      label: 'The App',
      headline: 'Your highlights, zero editing.',
      description: 'Hit record, play your match. Shout your keyword whenever something great happens. NetShot builds your reel.',
      features: [
        {
          id: 'voice',
          pill: 'Voice Triggers',
          title: 'Say the word. Any word.',
          body: 'The default keyword is "Cut it!" — but set any word you like: "Vamos", "Yes", whatever fires you up. NetShot listens in the background, fully on-device and offline. A haptic buzz confirms every mark instantly.',
        },
        {
          id: 'review',
          pill: 'Review & Edit',
          title: 'Every moment on your timeline.',
          body: 'After the match, every marked clip appears on a visual timeline. Preview, trim, label, reorder — then toggle moments in or out of your reel in seconds.',
        },
        {
          id: 'reel',
          pill: 'Highlight Reel',
          title: 'Reel ready. Straight to your camera roll.',
          body: 'Set your length — 30, 60, 90, or 120 seconds. Hard cuts or crossfades. NetShot generates your reel as an MP4 ready for TikTok, Instagram Reels, or WhatsApp.',
        },
      ],
      appStoreCta: 'Download on the App Store',
      comingSoon: 'Google Play — coming soon',
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
        { title: 'App Connected', body: 'Free on iOS. Shout your keyword mid-match to mark highlights — "Cut it!" by default, or set your own.' },
        { title: 'Highlight Reel', body: 'Every marker becomes a clip. Set your reel length, hit Regenerate, and it\'s saved straight to your camera roll.' },
        { title: 'Setup in Seconds', body: 'Under 5 seconds from bag to recording. No tools required.' },
      ],
    },
    preorder: {
      headline: 'Your game.',
      subheadline: 'Captured effortlessly.',
      description: 'Join the launch list for the mount and the upcoming NetShot app.',
      getYoursCard: {
        badge: 'Coming Soon',
        title: 'Get Yours',
        description: 'Built from aerospace-grade aluminium. Mounts to any tennis net post in seconds. Amazon listing coming soon.',
        statsLabels: ['Aluminium', 'Weight', 'Mount time', 'Potential'],
        cta: 'Buy on Amazon',
        comingSoonCta: 'Amazon listing coming soon',
      },
      appCard: {
        badge: 'Free on iOS',
        title: 'The App',
        description:
          'Hit record, shout your keyword for every great moment, and NetShot builds your highlight reel. No editing. No subscription. No fuss.',
        features: [
          { label: 'Voice Triggers', desc: '"Cut it!" by default — set any keyword you like' },
          { label: 'Review & Edit', desc: 'Visual timeline, trim, label, reorder' },
          { label: 'Highlight Reel', desc: 'MP4 saved straight to your camera roll' },
        ],
        appStoreCta: 'Download on the App Store',
        playStoreSoon: 'Google Play — coming soon',
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
          a: 'Mount NetShot on the net post, clip in your phone, and open the NetShot app. Hit record and play. Shout "Cut it!" — or any custom keyword — whenever something great happens. Or tap the button on screen. After the match, NetShot turns your markers into a shareable highlight reel.',
        },
        {
          q: 'Does the app work offline?',
          a: 'Yes. Everything runs on-device. No internet needed, no cloud upload, no account required. Voice detection uses on-device processing — nothing ever leaves your iPhone.',
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
        { label: 'Order', href: '#order' },
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
      downloadApp: 'App herunterladen',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },
    hero: {
      headline: ['Spielen.', 'Aufnehmen.', 'Genießen.'],
      sub1: 'Dein Spiel. Mühelos festgehalten.',
      sub2: 'Die premium Aluminiumhalterung fürs Netz.',
      orderNow: 'Updates erhalten',
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
            'NetShot-App öffnen, Aufnahme starten, spielen. "Cut it!" rufen – oder ein eigenes Schlüsselwort – für jeden großartigen Moment. Oder einfach den großen Button tippen.',
        },
        {
          number: '04',
          title: 'Teilen',
          headline: 'Dein Reel. In Sekunden.',
          description:
            'Jede Markierung erscheint auf der Timeline. Trimmen, beschriften, umsortieren. Auf Regenerieren tippen – der Highlight-Reel landet direkt in der Fotomediathek.',
        },
      ],
    },
    app: {
      label: 'Die App',
      headline: 'Deine Highlights. Kein Editieren.',
      description: 'Aufnehmen, spielen, dein Schlüsselwort rufen – NetShot baut deinen Highlight-Reel.',
      features: [
        {
          id: 'voice',
          pill: 'Sprachbefehle',
          title: 'Dein Wort. Dein Marker.',
          body: 'Das Standard-Schlüsselwort ist "Cut it!" – aber du kannst jedes beliebige Wort festlegen: "Vamos", "Ja", was auch immer dich pusht. NetShot hört im Hintergrund zu, komplett auf dem Gerät und offline. Ein kurzes Vibrationssignal bestätigt jeden Marker.',
        },
        {
          id: 'review',
          pill: 'Überprüfen & Schneiden',
          title: 'Jeder Moment auf deiner Timeline.',
          body: 'Nach dem Match erscheint jede Markierung auf einer visuellen Timeline. Vorschau, trimmen, beschriften, umsortieren – und Momente für den Reel ein- oder ausblenden.',
        },
        {
          id: 'reel',
          pill: 'Highlight-Reel',
          title: 'Fertig. Direkt in der Fotomediathek.',
          body: 'Wähle die Länge – 30, 60, 90 oder 120 Sekunden. Harter Schnitt oder Überblendung. NetShot generiert deinen Reel als MP4 – fertig für TikTok, Instagram Reels oder WhatsApp.',
        },
      ],
      appStoreCta: 'Im App Store laden',
      comingSoon: 'Google Play — demnächst',
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
        { title: 'App verfügbar', body: 'Kostenlos für iOS. Ruf dein Schlüsselwort mitten im Match – "Cut it!" als Standard, oder leg dein eigenes fest.' },
        { title: 'Highlight-Reel', body: 'Jede Markierung wird ein Clip. Länge wählen, Regenerieren tippen – fertig in der Fotomediathek.' },
        { title: 'Montage in Sekunden', body: 'Unter 5 Sekunden von der Tasche bis zur Aufnahme. Kein Werkzeug nötig.' },
      ],
    },
    preorder: {
      headline: 'Dein Spiel.',
      subheadline: 'Mühelos festgehalten.',
      description: 'Trag dich für den Launch der Halterung und der kommenden NetShot-App ein.',
      getYoursCard: {
        badge: 'Demnächst',
        title: 'Jetzt vormerken',
        description: 'Aus Luftfahrtaluminium gefertigt. Montiert in Sekunden an jedem Tennisnetpfosten. Amazon-Listing folgt in Kürze.',
        statsLabels: ['Aluminium', 'Gewicht', 'Montagezeit', 'Potenzial'],
        cta: 'Auf Amazon kaufen',
        comingSoonCta: 'Amazon-Listing folgt in Kürze',
      },
      appCard: {
        badge: 'Kostenlos für iOS',
        title: 'Die App',
        description:
          'Aufnehmen, dein Schlüsselwort rufen, Reel teilen. Kein Editieren. Kein Abo. Kein Aufwand.',
        features: [
          { label: 'Sprachbefehle', desc: '"Cut it!" als Standard – beliebiges Schlüsselwort wählbar' },
          { label: 'Überprüfen & Schneiden', desc: 'Timeline, trimmen, beschriften, umsortieren' },
          { label: 'Highlight-Reel', desc: 'MP4 direkt in der Fotomediathek' },
        ],
        appStoreCta: 'Im App Store laden',
        playStoreSoon: 'Google Play — demnächst',
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
          a: 'NetShot am Netzpfosten montieren, Handy einclipsen und die NetShot-App öffnen. Aufnahme starten und spielen. "Cut it!" rufen – oder ein eigenes Schlüsselwort – für jeden großartigen Moment. Oder den Button tippen. Danach baut NetShot deinen Highlight-Reel.',
        },
        {
          q: 'Funktioniert die App ohne Internet?',
          a: 'Ja. Alles läuft auf dem Gerät. Kein Internet nötig, kein Cloud-Upload, kein Account erforderlich. Die Spracherkennung läuft komplett offline – nichts verlässt dein iPhone.',
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
        { label: 'Bestellen', href: '#order' },
      ],
      rights: (year: number) => `© ${year} NetShot. Alle Rechte vorbehalten.`,
    },
  },
}
