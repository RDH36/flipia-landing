"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useLocale } from "@/lib/i18n/locale-context";
import { Shuffle, UserX, RotateCcw } from "lucide-react";

export function Problem() {
  const { t } = useLocale();

  const painPoints = [
    { icon: Shuffle, title: t.problem.pain1Title, description: t.problem.pain1Desc },
    { icon: UserX, title: t.problem.pain2Title, description: t.problem.pain2Desc },
    { icon: RotateCcw, title: t.problem.pain3Title, description: t.problem.pain3Desc },
  ];

  return (
    <SectionWrapper className="bg-white">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
          {t.problem.title}
          <span className="text-text-secondary">{t.problem.titleAccent}</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {painPoints.map((point) => (
          <div
            key={point.title}
            className="group rounded-2xl bg-background p-8 transition-all hover:shadow-[0_20px_40px_rgba(26,28,23,0.06)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-p2-bg transition-colors group-hover:bg-p2/10">
              <point.icon className="h-6 w-6 text-p2" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-text-primary">
              {point.title}
            </h3>
            <p className="mt-3 font-body leading-relaxed text-text-secondary">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-3xl text-center font-body text-lg leading-relaxed text-text-secondary">
        {t.problem.agitation}{" "}
        <span className="font-semibold text-p2">
          {t.problem.agitationHighlight}
        </span>
        {t.problem.agitationEnd}
      </p>
    </SectionWrapper>
  );
}
