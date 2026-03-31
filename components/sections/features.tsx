"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useLocale } from "@/lib/i18n/locale-context";
import { Bot, Globe, TrendingUp, Tornado, BookOpen, Moon } from "lucide-react";

const icons = [Bot, Globe, TrendingUp, Tornado, BookOpen, Moon];

export function Features() {
  const { t } = useLocale();

  const features = [
    { icon: icons[0], title: t.features.f1Title, description: t.features.f1Desc },
    { icon: icons[1], title: t.features.f2Title, description: t.features.f2Desc },
    { icon: icons[2], title: t.features.f3Title, description: t.features.f3Desc },
    { icon: icons[3], title: t.features.f4Title, description: t.features.f4Desc },
    { icon: icons[4], title: t.features.f5Title, description: t.features.f5Desc },
    { icon: icons[5], title: t.features.f6Title, description: t.features.f6Desc },
  ];

  return (
    <SectionWrapper className="bg-white">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
          {t.features.title}
          <span className="text-primary">{t.features.titleAccent}</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col gap-4 rounded-2xl bg-background p-6 transition-all hover:shadow-[0_20px_40px_rgba(26,28,23,0.06)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-container-bg transition-colors group-hover:bg-primary/10">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-text-primary">
              {feature.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-text-secondary">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
