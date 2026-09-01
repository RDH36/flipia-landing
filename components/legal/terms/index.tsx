"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { TermsEN } from "./en";
import { TermsFR } from "./fr";

export function TermsContent() {
  const { locale } = useLocale();

  return locale === "en" ? <TermsEN /> : <TermsFR />;
}
