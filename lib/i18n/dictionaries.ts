export type Locale = "fr" | "en";

export const dictionaries = {
  fr: {
    nav: {
      cta: "Rejoindre la bêta",
    },
    hero: {
      badge: "Bientôt disponible — Rejoins la bêta",
      h1_1: "Retourne.",
      h1_2: "Mémorise.",
      h1_3: "Domine.",
      subtitle:
        "Le premier jeu de mémoire 1v1 avec une mécanique qui change tout : la Tornade. Défie tes amis ou affronte des IA redoutables.",
      cta: "Rejoindre la bêta",
      micro: "Bientôt sur Android — iOS arrive ensuite",
      social: "Rejoins les premiers joueurs en avant-première",
      stats: {
        beta: { value: "Bêta", label: "Bientôt" },
        modes: { value: "3", label: "Modes de jeu" },
        platforms: { value: "Android", label: "D'abord sur Android" },
      },
    },
    problem: {
      title: "Les jeux de mémoire, c'était fun…",
      titleAccent: " en 2005.",
      pain1Title: "Zéro stratégie",
      pain1Desc:
        "Tu retournes des cartes au hasard, tu retiens, tu recommences. Pas de twist, pas de surprise.",
      pain2Title: "Jouer seul, c'est mou",
      pain2Desc:
        "Pas d'adversaire, pas d'adrénaline. Juste toi et un chrono triste.",
      pain3Title: "Aucune rejouabilité",
      pain3Desc:
        "Au bout de 3 parties, t'as tout vu. Même grille, même ennui.",
      agitation:
        "Soyons honnêtes : les jeux de mémoire classiques sont devenus le fond d'écran du gaming mobile. Pas de tension, pas de comeback possible, pas de moment",
      agitationHighlight: '"OH NON IL A TROUVÉ LA PAIRE"',
      agitationEnd:
        ". Tu mérites un jeu qui fait monter le rythme cardiaque, pas un jeu qui t'endort.",
    },
    solution: {
      title: "Flipia réinvente le memory.",
      titleAccent: " Pour de vrai.",
      subtitle:
        "Flipia est un duel de mémoire en temps réel. Chaque partie est un face-à-face intense : toi contre un ami ou une IA qui ne pardonne pas.",
      benefit1Title: "Des duels qui font transpirer",
      benefit1Desc:
        "Affronte un ami en temps réel ou défie 3 niveaux d'IA — du BabyBot gentil à AlphaMemory qui retient 85% des cartes.",
      benefit2Title: "La Tornade change tout",
      benefit2Desc:
        "Déclenche la Tornade pour mélanger toutes les cartes non-matchées. Sacrifie ton tour pour détruire la mémoire de ton adversaire.",
      benefit3Title: "Progresse et grimpe le classement",
      benefit3Desc:
        "Gagne de l'XP, monte de niveau, et compare-toi au monde entier sur le leaderboard global.",
      benefit4Title: "Design premium, sensations premium",
      benefit4Desc:
        "Animations fluides à 60fps, retour haptique à chaque flip, et un design épuré inspiré des galeries d'art.",
    },
    features: {
      title: "Tout ce qu'il faut pour",
      titleAccent: " devenir le meilleur",
      f1Title: "3 adversaires IA, 3 niveaux de douleur",
      f1Desc:
        "BabyBot pour s'échauffer, NekoFlash pour transpirer, AlphaMemory pour pleurer. Chaque IA a sa propre personnalité.",
      f2Title: "Défie n'importe qui, n'importe quand",
      f2Desc:
        "Crée une room avec un code à 6 caractères, envoie-le à ton ami, et c'est parti. Synchronisation en temps réel.",
      f3Title: "Chaque partie te rend plus fort",
      f3Desc:
        "Gagne 15 à 40 XP par victoire selon la difficulté. Monte de niveau sur le leaderboard global.",
      f4Title: "L'arme secrète qui change la méta",
      f4Desc:
        "Une seule utilisation par partie. La Tornade mélange toutes les cartes non-matchées. Timing is everything.",
      f5Title: "Maîtrise le jeu en 60 secondes",
      f5Desc:
        "Un onboarding en 6 étapes qui t'apprend tout : les bases, le matching, la Tornade, et les modes de jeu.",
      f6Title: "Joue de jour comme de nuit",
      f6Desc:
        "Thème clair élégant ou mode sombre pour les sessions nocturnes. Interface adaptative qui respecte tes yeux.",
    },
    tornado: {
      title: "La Tornade.",
      subtitle: "Le comeback ultime.",
      description:
        "Une fois par partie, déclenche la Tornade pour mélanger toutes les cartes non-matchées sur le plateau. Tu sacrifies ton tour, mais ton adversaire perd tous ses repères.",
      tag1: "1 utilisation par partie",
      tag2: "Mélange Fisher-Yates",
      tag3: "Cartes matchées protégées",
    },
    demo: {
      title: "Découvre Flipia",
      titleAccent: " en action",
      subtitle:
        "Regarde comment une partie se déroule — de la première carte retournée au comeback Tornade.",
      caption:
        "Gameplay réel capturé sur l'app — Duel 1v1 en temps réel contre un vrai joueur",
    },
    faq: {
      title: "Questions fréquentes",
      q1: "Flipia est-il gratuit ?",
      a1: "Oui. Télécharge et joue gratuitement. Aucun paywall ne bloque l'accès aux modes de jeu.",
      q2: "Comment jouer avec un ami ?",
      a2: "Crée une room depuis l'app, copie le code à 6 caractères, envoie-le à ton ami. Il rejoint, le countdown démarre, et c'est parti.",
      q3: "Qu'est-ce que la Tornade exactement ?",
      a3: "Une fois par partie, tu peux déclencher la Tornade. Elle mélange toutes les cartes non-matchées sur le plateau. Tu sacrifies ton tour, mais ton adversaire perd ses repères.",
      q4: "Les IA sont-elles vraiment difficiles ?",
      a4: "BabyBot retient 20% des cartes. NekoFlash en retient 55%. AlphaMemory retient 85% — il est presque parfait. Bonne chance.",
      q5: "Sur quels appareils puis-je jouer ?",
      a5: "D'abord sur Android, puis iOS. L'app est construite avec Expo/React Native pour une expérience native sur les deux plateformes.",
      q6: "Quand sort Flipia ?",
      a6: "Flipia est actuellement en bêta fermée. Inscris-toi pour être notifié dès la sortie officielle.",
      q7: "Y aura-t-il des mises à jour ?",
      a7: "Oui. Mode Ranked avec ELO, classements saisonniers, succès et badges arrivent prochainement.",
    },
    cta: {
      title: "Prêt à prouver que ta mémoire est",
      titleAccent: " la meilleure",
      titleEnd: " ?",
      subtitle:
        "Inscris-toi à la bêta, sois parmi les premiers à jouer, et montre au monde de quoi tu es capable.",
      button: "Rejoindre la bêta",
      trust: "Gratuit · Bientôt sur Android, puis iOS",
    },
    footer: {
      rights: "Tous droits réservés.",
      privacy: "Confidentialité",
      terms: "Conditions",
      contact: "Contact",
    },
  },
  en: {
    nav: {
      cta: "Join the beta",
    },
    hero: {
      badge: "Coming soon — Join the beta",
      h1_1: "Flip.",
      h1_2: "Memorize.",
      h1_3: "Dominate.",
      subtitle:
        "The first 1v1 memory game with a mechanic that changes everything: the Tornado. Challenge friends or face ruthless AI opponents.",
      cta: "Join the beta",
      micro: "Coming soon on Android — iOS to follow",
      social: "Join the first players in early access",
      stats: {
        beta: { value: "Beta", label: "Coming soon" },
        modes: { value: "3", label: "Game modes" },
        platforms: { value: "Android", label: "Android first" },
      },
    },
    problem: {
      title: "Memory games were fun…",
      titleAccent: " in 2005.",
      pain1Title: "Zero strategy",
      pain1Desc:
        "You flip random cards, memorize, repeat. No twist, no surprise.",
      pain2Title: "Playing alone is boring",
      pain2Desc:
        "No opponent, no adrenaline. Just you and a sad timer.",
      pain3Title: "No replayability",
      pain3Desc:
        "After 3 games, you've seen it all. Same grid, same boredom.",
      agitation:
        "Let's be honest: classic memory games have become the wallpaper of mobile gaming. No tension, no comeback, no",
      agitationHighlight: '"OH NO HE FOUND THE PAIR"',
      agitationEnd:
        " moment. You deserve a game that raises your heart rate, not puts you to sleep.",
    },
    solution: {
      title: "Flipia reinvents memory.",
      titleAccent: " For real.",
      subtitle:
        "Flipia is a real-time memory duel. Every game is an intense face-off: you against a friend or a ruthless AI.",
      benefit1Title: "Duels that make you sweat",
      benefit1Desc:
        "Face a friend in real-time or challenge 3 AI levels — from friendly BabyBot to AlphaMemory that remembers 85% of cards.",
      benefit2Title: "The Tornado changes everything",
      benefit2Desc:
        "Trigger the Tornado to shuffle all unmatched cards. Sacrifice your turn to destroy your opponent's memory.",
      benefit3Title: "Progress and climb the ranks",
      benefit3Desc:
        "Earn XP, level up, and compare yourself to the world on the global leaderboard.",
      benefit4Title: "Premium design, premium feel",
      benefit4Desc:
        "Smooth 60fps animations, haptic feedback on every flip, and a clean design inspired by art galleries.",
    },
    features: {
      title: "Everything you need to",
      titleAccent: " become the best",
      f1Title: "3 AI opponents, 3 pain levels",
      f1Desc:
        "BabyBot to warm up, NekoFlash to sweat, AlphaMemory to cry. Each AI has its own personality.",
      f2Title: "Challenge anyone, anytime",
      f2Desc:
        "Create a room with a 6-character code, send it to your friend, and go. Real-time sync.",
      f3Title: "Every game makes you stronger",
      f3Desc:
        "Earn 15 to 40 XP per win depending on difficulty. Level up on the global leaderboard.",
      f4Title: "The secret weapon that changes the meta",
      f4Desc:
        "One use per game. The Tornado shuffles all unmatched cards. Timing is everything.",
      f5Title: "Master the game in 60 seconds",
      f5Desc:
        "A 6-step onboarding that teaches everything: basics, matching, Tornado, and game modes.",
      f6Title: "Play day or night",
      f6Desc:
        "Elegant light theme or dark mode for night sessions. Adaptive interface that respects your eyes.",
    },
    tornado: {
      title: "The Tornado.",
      subtitle: "The ultimate comeback.",
      description:
        "Once per game, trigger the Tornado to shuffle all unmatched cards on the board. You sacrifice your turn, but your opponent loses all their bearings.",
      tag1: "1 use per game",
      tag2: "Fisher-Yates shuffle",
      tag3: "Matched cards protected",
    },
    demo: {
      title: "See Flipia",
      titleAccent: " in action",
      subtitle:
        "Watch how a game unfolds — from the first card flip to the Tornado comeback.",
      caption:
        "Real gameplay captured in-app — Real-time 1v1 duel against a real player",
    },
    faq: {
      title: "Frequently asked questions",
      q1: "Is Flipia free?",
      a1: "Yes. Download and play for free. No paywall blocks access to game modes.",
      q2: "How do I play with a friend?",
      a2: "Create a room from the app, copy the 6-character code, send it to your friend. They join, the countdown starts, and you're off.",
      q3: "What exactly is the Tornado?",
      a3: "Once per game, you can trigger the Tornado. It shuffles all unmatched cards on the board. You sacrifice your turn, but your opponent loses their bearings.",
      q4: "Are the AIs really hard?",
      a4: "BabyBot remembers 20% of cards. NekoFlash remembers 55%. AlphaMemory remembers 85% — nearly perfect. Good luck.",
      q5: "What devices can I play on?",
      a5: "Android first, then iOS. The app is built with Expo/React Native for a native experience on both platforms.",
      q6: "When does Flipia launch?",
      a6: "Flipia is currently in closed beta. Sign up to be notified when it officially launches.",
      q7: "Will there be updates?",
      a7: "Yes. Ranked mode with ELO, seasonal leaderboards, achievements and badges are coming soon.",
    },
    cta: {
      title: "Ready to prove your memory is",
      titleAccent: " the best",
      titleEnd: "?",
      subtitle:
        "Sign up for the beta, be among the first to play, and show the world what you're made of.",
      button: "Join the beta",
      trust: "Free · Coming soon on Android, then iOS",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
