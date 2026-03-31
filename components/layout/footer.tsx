"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border/40 bg-white/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Flipia" width={28} height={28} />
          <span className="font-display text-lg font-bold text-primary">
            Flipia
          </span>
        </div>
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Flipia. {t.footer.rights}
        </p>
        <div className="flex gap-6 text-sm text-text-secondary">
          <a href="/privacy" className="transition-colors hover:text-primary">
            {t.footer.privacy}
          </a>
          <a href="/terms" className="transition-colors hover:text-primary">
            {t.footer.terms}
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            {t.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
