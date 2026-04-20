"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useLocale } from "@/lib/i18n/locale-context";

export function Demo() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="demo">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
          {t.demo.title}
          <span className="text-primary">{t.demo.titleAccent}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
          {t.demo.subtitle}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto mt-12 w-full max-w-[320px]"
      >
        <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary-container-bg to-p1-bg/50 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2.5rem] bg-text-primary p-2 shadow-[0_30px_80px_rgba(59,48,158,0.2)] ring-1 ring-black/5">
          <video
            src="/flipia-game-play.mp4"
            className="aspect-[9/19.5] w-full rounded-[2rem] bg-black object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
        <p className="mt-6 text-center font-body text-sm text-text-secondary">
          {t.demo.caption}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
