"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useLocale } from "@/lib/i18n/locale-context";
import { Play } from "lucide-react";

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
        className="mx-auto mt-12 max-w-3xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-primary-container-bg to-p1-bg shadow-[0_20px_60px_rgba(59,48,158,0.1)]">
          {/* Video placeholder — replace with actual video/embed */}
          <div className="flex aspect-video flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform hover:scale-110">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <p className="font-display text-lg font-semibold text-text-secondary">
              {t.demo.placeholder}
            </p>
          </div>
        </div>
        <p className="mt-4 text-center font-body text-sm text-text-secondary">
          {t.demo.caption}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
