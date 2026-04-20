"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gamepad2, Smartphone } from "lucide-react";
import { HeroGameMockup } from "./game-mockup";

export function Hero() {
  const { t } = useLocale();
  const stats = [
    { icon: Sparkles, ...t.hero.stats.beta },
    { icon: Gamepad2, ...t.hero.stats.modes },
    { icon: Smartphone, ...t.hero.stats.platforms },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary-container-bg)_0%,_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 rounded-full bg-primary-container-bg px-4 py-1.5 font-body text-sm text-primary"
            >
              {t.hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl lg:text-7xl"
          >
            {t.hero.h1_1}
            <br />
            <span className="text-primary">{t.hero.h1_2}</span>
            <br />
            {t.hero.h1_3}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-text-secondary md:text-xl lg:mx-0"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 font-display text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary-container"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {t.hero.cta}
            </a>
            <p className="text-sm text-text-secondary">{t.hero.micro}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col items-stretch gap-3 rounded-2xl bg-white/70 px-6 py-5 shadow-[0_20px_40px_rgba(26,28,23,0.04)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container-bg">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display text-lg font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[290px] lg:mx-0 lg:justify-self-end"
        >
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/25 via-primary-container/10 to-p1-bg/40 blur-3xl" />
          <div className="relative rounded-[2.5rem] bg-text-primary p-2 shadow-[0_30px_80px_rgba(59,48,158,0.28)] ring-1 ring-black/5">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-black">
              <HeroGameMockup />
              <div className="pointer-events-none absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
