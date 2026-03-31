"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useLocale } from "@/lib/i18n/locale-context";
import { Swords, Tornado, Trophy, Sparkles } from "lucide-react";

export function Solution() {
  const { t } = useLocale();

  const benefits = [
    {
      icon: Swords,
      title: t.solution.benefit1Title,
      description: t.solution.benefit1Desc,
      color: "bg-p1-bg",
      iconColor: "text-p1",
    },
    {
      icon: Tornado,
      title: t.solution.benefit2Title,
      description: t.solution.benefit2Desc,
      color: "bg-primary-container-bg",
      iconColor: "text-tornado",
    },
    {
      icon: Trophy,
      title: t.solution.benefit3Title,
      description: t.solution.benefit3Desc,
      color: "bg-emerald-50",
      iconColor: "text-success",
    },
    {
      icon: Sparkles,
      title: t.solution.benefit4Title,
      description: t.solution.benefit4Desc,
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <SectionWrapper id="features">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
          {t.solution.title}
          <span className="text-primary">{t.solution.titleAccent}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-text-secondary">
          {t.solution.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(26,28,23,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(26,28,23,0.06)]"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${benefit.color}`}
            >
              <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-text-primary">
              {benefit.title}
            </h3>
            <p className="mt-3 font-body leading-relaxed text-text-secondary">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
