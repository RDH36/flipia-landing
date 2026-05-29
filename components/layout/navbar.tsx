"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { GooglePlayIcon } from "@/components/ui/google-play-icon";
import { PLAY_STORE_URL } from "@/lib/constants";

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Flipia" width={36} height={36} />
          <span className="font-display text-2xl font-bold text-primary">
            Flipia
          </span>
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-primary-container"
          >
            <GooglePlayIcon className="mr-2 h-4 w-4" />
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
