import type { Metadata } from "next";
import { AUTHOR_NAME, AUTHOR_URL, SITE_URL } from "@/lib/constants";

/**
 * Contenu SEO aligné sur la fiche Google Play
 * (« Flipia: Mémoire & Pouvoirs » — catégorie Stratégie / Famille).
 */
export const SITE_NAME = "Flipia";

export const SEO = {
  fr: {
    title: "Flipia — Jeu de mémoire en duel avec pouvoirs",
    titleTemplate: "%s | Flipia",
    tagline: "Mémoire & Pouvoirs",
    description:
      "Flipia, le jeu de mémoire nouvelle génération : retrouve les paires, déclenche des pouvoirs spectaculaires et affronte le monde entier en duel. Gratuit sur Android.",
    shortDescription:
      "Jeu de mémoire en duel : trouve les paires, utilise tes pouvoirs et gagne !",
  },
  en: {
    title: "Flipia — Memory duel game with powers",
    description:
      "Flipia is the next-generation memory game: match the pairs, unleash spectacular powers and duel players worldwide. Free on Android.",
  },
} as const;

/** Mots-clés repris du référencement de la fiche Play. */
export const SEO_KEYWORDS = [
  "flipia",
  "jeu de mémoire",
  "jeu de paires",
  "memory game",
  "jeu de mémoire gratuit",
  "jeu de mémoire multijoueur",
  "duel de mémoire",
  "jeu de cartes mémoire",
  "jeu de réflexion",
  "jeu de concentration",
  "entraînement cérébral",
  "jeu de stratégie",
  "pouvoirs",
  "tornade",
  "mode campagne",
  "multijoueur en ligne",
  "classement mondial",
  "jeu Android gratuit",
];

/** Métadonnées communes à toutes les pages, surchargeables par route. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.fr.title,
    template: SEO.fr.titleTemplate,
  },
  description: SEO.fr.description,
  keywords: SEO_KEYWORDS,
  applicationName: SITE_NAME,
  category: "games",
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "/",
    title: SEO.fr.title,
    description: SEO.fr.description,
    // Les images OG/Twitter proviennent de app/opengraph-image.tsx et app/twitter-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.fr.title,
    description: SEO.fr.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    // favicon.ico est déjà pris en charge par app/favicon.ico
    apple: "/logo.png",
  },
};
