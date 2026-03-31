"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { useLocale } from "@/lib/i18n/locale-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles } from "lucide-react";

export function FinalSection() {
  const { t } = useLocale();

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
  ];

  return (
    <>
      {/* FAQ */}
      <SectionWrapper className="bg-white" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold text-text-primary md:text-5xl">
            {t.faq.title}
          </h2>
          <Accordion className="mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem key={i}>
                <AccordionTrigger className="font-display text-left text-base font-semibold text-text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-text-secondary">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section
        id="cta"
        className="relative overflow-hidden px-6 py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container-bg via-background to-p1-bg" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-primary md:text-5xl">
            {t.cta.title}
            <span className="text-primary">{t.cta.titleAccent}</span>
            {t.cta.titleEnd}
          </h2>
          <p className="mt-6 font-body text-lg text-text-secondary">
            {t.cta.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-primary px-10 py-3 font-display text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary-container"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {t.cta.button}
            </a>
            <p className="text-sm text-text-secondary">{t.cta.trust}</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
