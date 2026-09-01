import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";
import { PrivacyContent } from "@/components/legal/privacy";
import { JsonLd } from "@/components/seo/json-ld";
import { legalJsonLd } from "@/lib/seo/structured-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Quelles données Flipia collecte, comment elles sont utilisées, avec qui elles sont partagées et quels droits vous avez sur vos données.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Politique de confidentialité | Flipia",
    description:
      "Quelles données Flipia collecte, comment elles sont utilisées et quels droits vous avez sur vos données.",
    url: "/privacy",
  },
  twitter: {
    title: "Politique de confidentialité | Flipia",
    description: "Quelles données Flipia collecte, comment elles sont utilisées et quels droits vous avez sur vos données.",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <JsonLd data={legalJsonLd("Politique de confidentialité", "/privacy")} />
      <PrivacyContent />
    </LegalLayout>
  );
}
