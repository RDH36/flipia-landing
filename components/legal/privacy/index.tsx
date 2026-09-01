"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { PrivacyEN } from "./en";
import { PrivacyFR } from "./fr";

export function PrivacyContent() {
  const { locale } = useLocale();

  return locale === "en" ? <PrivacyEN /> : <PrivacyFR />;
}
