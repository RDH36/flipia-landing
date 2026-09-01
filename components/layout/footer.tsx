"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { AUTHOR_NAME, AUTHOR_URL, CONTACT_EMAIL } from "@/lib/constants";

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
        <div className="flex flex-col items-center gap-1 text-sm text-text-secondary">
          <p>
            &copy; {new Date().getFullYear()} Flipia. {t.footer.rights}
          </p>
          <p>
            By{" "}
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:text-primary"
            >
              {AUTHOR_NAME}
            </a>
          </p>
        </div>
        <div className="flex gap-6 text-sm text-text-secondary">
          <Link href="/privacy" className="transition-colors hover:text-primary">
            {t.footer.privacy}
          </Link>
          <Link href="/terms" className="transition-colors hover:text-primary">
            {t.footer.terms}
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-primary"
          >
            {t.footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
