"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-full bg-surface-container p-1 text-sm font-semibold">
      <button
        onClick={() => setLocale("fr")}
        className={cn(
          "rounded-full px-3 py-1 transition-all",
          locale === "fr"
            ? "bg-primary text-white"
            : "text-text-secondary hover:text-text-primary"
        )}
      >
        FR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-3 py-1 transition-all",
          locale === "en"
            ? "bg-primary text-white"
            : "text-text-secondary hover:text-text-primary"
        )}
      >
        EN
      </button>
    </div>
  );
}
