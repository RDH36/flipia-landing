"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";
import { Tornado } from "lucide-react";

export function TornadoSpotlight() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(83,74,183,0.4)_0%,_transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-shrink-0 items-center justify-center"
        >
          <div className="relative flex h-48 w-48 items-center justify-center md:h-64 md:w-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-white/15"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border-2 border-white/20"
            />
            <Tornado className="h-20 w-20 text-white md:h-28 md:w-28" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            {t.tornado.title}
            <br />
            <span className="text-white/70">{t.tornado.subtitle}</span>
          </h2>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/80">
            {t.tornado.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {[t.tornado.tag1, t.tornado.tag2, t.tornado.tag3].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-4 py-2 font-body text-sm text-white/90 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
