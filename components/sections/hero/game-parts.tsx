"use client";

import { motion } from "framer-motion";

export type CardState = { face: "hidden" | "flipped" | "matched"; by: 0 | 1 | 2 };

export function ProgressDots({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            i < filled ? "bg-primary-container" : "bg-[#E8E4E4]"
          }`}
        />
      ))}
    </div>
  );
}

export function HudCard({
  name,
  subtitle,
  avatar,
  pairs,
  totalPairs,
  active,
  timer,
}: {
  name: string;
  subtitle: string;
  avatar: string;
  pairs: number;
  totalPairs: number;
  active: boolean;
  timer: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-surface-container px-2.5 py-2 shadow-[0_4px_12px_rgba(26,28,23,0.04)]">
      <div
        className={`rounded-lg px-2 py-1 text-[10px] font-bold tabular-nums transition-colors ${
          active
            ? "bg-primary-container-bg text-primary-container"
            : "bg-[#F5F2F2] text-text-secondary"
        }`}
      >
        {timer}
      </div>
      <ProgressDots filled={pairs} total={totalPairs} />
      <div className="flex-1" />
      <div className="min-w-0 text-right">
        <p className="truncate font-display text-[11px] font-semibold text-text-primary">
          {name}
        </p>
        <div className="flex items-center justify-end gap-1">
          {active && <span className="h-1.5 w-1.5 rounded-full bg-success" />}
          <p className="truncate text-[9px] text-text-secondary">{subtitle}</p>
        </div>
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-p2-bg text-lg">
        {avatar}
      </div>
    </div>
  );
}

export function Card({
  state,
  emoji,
  justMatched,
  justMissed,
  tornadoRow,
}: {
  state: CardState;
  emoji: string;
  justMatched: boolean;
  justMissed: boolean;
  tornadoRow: number;
}) {
  const isUp = state.face !== "hidden";
  const matched = state.face === "matched";
  const tornadoDelay = tornadoRow >= 0 ? 0.2 + tornadoRow * 0.18 : 0;
  const shouldTornado = tornadoRow >= 0 && !matched;

  return (
    <motion.div
      className="relative aspect-square"
      style={{ perspective: "600px" }}
      animate={
        shouldTornado
          ? {
              rotate: [0, -8, 10, -6, 8, -3, 0],
              y: [0, -6, 8, -5, 4, 0],
              scale: [1, 0.88, 1.02, 1],
            }
          : justMissed
            ? { x: [0, -4, 4, -3, 3, 0] }
            : justMatched
              ? { scale: [1, 1.12, 1] }
              : { rotate: 0, y: 0, scale: 1, x: 0 }
      }
      transition={
        shouldTornado
          ? { duration: 0.5, delay: tornadoDelay }
          : { duration: 0.35 }
      }
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isUp ? 180 : 0 }}
        transition={{ duration: 0.32, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-p1-bg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="font-display text-xl font-bold text-p1">?</span>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor:
              state.by === 1
                ? "var(--p1-bg)"
                : state.by === 2
                  ? "var(--p2-bg)"
                  : "var(--surface-container)",
            border: matched
              ? `1.5px solid ${state.by === 1 ? "#5DA9FE33" : "#A2340A33"}`
              : "1.5px solid transparent",
          }}
        >
          <span className="text-[18px] leading-none">{emoji}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
