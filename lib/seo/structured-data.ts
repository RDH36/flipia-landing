import {
  ANDROID_PACKAGE,
  AUTHOR_NAME,
  AUTHOR_URL,
  CONTACT_EMAIL,
  PLAY_STORE_URL,
  SITE_URL,
} from "@/lib/constants";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { SEO, SITE_NAME } from "./site";

const author = {
  "@type": "Person",
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
};

/** L'app elle-même, telle que décrite sur la fiche Google Play. */
const mobileApplication = {
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Flipia: Mémoire & Pouvoirs",
  alternateName: SITE_NAME,
  description: SEO.fr.description,
  applicationCategory: "GameApplication",
  applicationSubCategory: "Jeu de mémoire",
  genre: ["Stratégie", "Réflexion", "Famille"],
  operatingSystem: "Android",
  installUrl: PLAY_STORE_URL,
  downloadUrl: PLAY_STORE_URL,
  url: SITE_URL,
  image: `${SITE_URL}/logo.png`,
  identifier: ANDROID_PACKAGE,
  inLanguage: ["fr", "en"],
  author,
  publisher: author,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: PLAY_STORE_URL,
  },
  featureList: [
    "Duels de mémoire en temps réel contre des joueurs ou l'ordinateur",
    "Pouvoirs spéciaux : gel, bouclier, révélation et tornade",
    "Mode Campagne raconté en chapitres façon webtoon",
    "Multijoueur en ligne avec code de partie",
    "Quêtes quotidiennes et hebdomadaires, succès et classement mondial",
    "Thèmes de plateau personnalisables, modes clair et sombre",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SEO.fr.description,
  inLanguage: "fr-FR",
  publisher: author,
  about: { "@id": `${SITE_URL}/#app` },
};

const organization = {
  "@type": "Organization",
  "@id": `${AUTHOR_URL}/#organization`,
  name: AUTHOR_NAME,
  url: AUTHOR_URL,
  email: CONTACT_EMAIL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "customer support",
    availableLanguage: ["fr", "en"],
  },
};

const { faq } = dictionaries.fr;

const faqPage = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: (
    [
      [faq.q1, faq.a1],
      [faq.q2, faq.a2],
      [faq.q3, faq.a3],
      [faq.q4, faq.a4],
      [faq.q5, faq.a5],
      [faq.q6, faq.a6],
      [faq.q7, faq.a7],
    ] as const
  ).map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

/** Graphe JSON-LD injecté dans la page d'accueil. */
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [website, organization, mobileApplication, faqPage],
};

/** Graphe JSON-LD pour les pages légales. */
export function legalJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "fr-FR",
    publisher: { "@id": `${AUTHOR_URL}/#organization` },
  };
}
