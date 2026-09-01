import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { TermsContent } from "@/components/legal/terms";
import { JsonLd } from "@/components/seo/json-ld";
import { legalJsonLd } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Les conditions d'utilisation de Flipia : compte, règles de jeu, achats intégrés, publicité, propriété intellectuelle et responsabilités.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Conditions d'utilisation | Flipia",
    description:
      "Les conditions d'utilisation de Flipia : compte, achats intégrés, publicité et responsabilités.",
    url: "/terms",
  },
  twitter: {
    title: "Conditions d'utilisation | Flipia",
    description: "Les conditions d'utilisation de Flipia : compte, achats intégrés, publicité et responsabilités.",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <JsonLd data={legalJsonLd("Conditions d'utilisation", "/terms")} />
      <TermsContent />
    </LegalLayout>
  );
}
