# Flipia Landing Page

Landing page pour **Flipia** — le premier jeu de mémoire 1v1 avec la mécanique Tornade.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** + **shadcn/ui**
- **Framer Motion** (scroll & entrance animations)
- **Lucide React** (icons)
- **Fredoka** + **Nunito** (Google Fonts)

## Sections

| Section | Description |
|---------|-------------|
| Hero | Headline, CTA beta, stats bar |
| Problem | 3 pain points des memory classiques |
| Solution | 4 benefit cards |
| Features | 6 features en grid |
| Tornado Spotlight | Section dédiée avec animation |
| Demo | Placeholder vidéo gameplay |
| FAQ | 7 questions en accordion |
| Final CTA | Inscription bêta |

## Pages

- `/` — Landing page principale
- `/privacy` — Politique de confidentialité
- `/terms` — Conditions d'utilisation

## i18n

Support **FR** et **EN** avec switcher dans la navbar. Les traductions sont dans `lib/i18n/dictionaries.ts`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Deploy

Compatible Vercel, Netlify, ou tout hébergement supportant Next.js.
