"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Quote, Smartphone, Wifi, Shield, Hand, Languages } from "lucide-react";

const testimonials = [
  {
    quote:
      "Je pensais que c'était un memory classique. La première Tornade m'a fait crier dans le bus.",
    author: "Lucas, 24 ans",
    role: "Joueur casual",
    stat: "47 parties en 2 semaines",
  },
  {
    quote:
      "AlphaMemory m'a humilié 6 fois avant que je le batte. Meilleure victoire de ma vie mobile.",
    author: "Sarah, 28 ans",
    role: "Gameuse compétitive",
    stat: "Top 50 du leaderboard",
  },
  {
    quote:
      "On y joue tous les midis avec mes collègues. Le code room, c'est génial pour des duels rapides.",
    author: "Thomas, 31 ans",
    role: "Office gamer",
    stat: "12 collègues convertis",
  },
];

const trustIndicators = [
  { icon: Smartphone, label: "Sur Android" },
  { icon: Wifi, label: "Temps réel" },
  { icon: Shield, label: "Gratuit, sans P2W" },
  { icon: Hand, label: "Retour haptique" },
  { icon: Languages, label: "Multi-langue" },
];

export function Testimonials() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
          Ils ont retourné leurs premières cartes
          <span className="text-primary"> — et ils sont accros</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(26,28,23,0.03)]"
          >
            <Quote className="h-8 w-8 text-primary/20" />
            <p className="mt-4 flex-1 font-body text-base leading-relaxed text-text-primary">
              &quot;{t.quote}&quot;
            </p>
            <div className="mt-6 border-t border-border/40 pt-4">
              <p className="font-display text-sm font-bold text-text-primary">
                {t.author}
              </p>
              <p className="text-xs text-text-secondary">{t.role}</p>
              <p className="mt-1 text-xs font-semibold text-primary">
                {t.stat}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
        {trustIndicators.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-text-secondary"
          >
            <item.icon className="h-5 w-5 text-primary/60" />
            <span className="font-body text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
