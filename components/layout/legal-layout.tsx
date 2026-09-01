"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { LocaleProvider } from "@/lib/i18n/locale-context";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-background">
        <header className="border-b border-border/40 bg-white/80 px-6 py-4 backdrop-blur-sm">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 text-text-secondary" />
              <Image src="/logo.png" alt="Flipia" width={28} height={28} />
              <span className="font-display text-lg font-bold text-primary">
                Flipia
              </span>
            </Link>
            <LanguageSwitcher />
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
      </div>
    </LocaleProvider>
  );
}
