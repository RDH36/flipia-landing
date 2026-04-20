"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardState, HudCard, ProgressDots } from "./game-parts";

const EMOJIS = ["🐶", "🐱", "🐸", "🦊", "🐼", "🦁", "🐯", "🦋"];
const LAYOUT = [0, 4, 7, 2, 5, 1, 3, 6, 2, 7, 0, 5, 6, 3, 1, 4];
const COLS = 4;
const TOTAL_PAIRS = 8;

type Action =
  | { t: "flip"; c: number }
  | { t: "unflip"; cs: [number, number] }
  | { t: "match"; a: number; b: number; p: 1 | 2 }
  | { t: "tornado" }
  | { t: "reset" };

const SEQUENCE: { delay: number; action: Action }[] = [
  { delay: 700, action: { t: "flip", c: 0 } },
  { delay: 450, action: { t: "flip", c: 3 } },
  { delay: 800, action: { t: "unflip", cs: [0, 3] } },
  { delay: 600, action: { t: "flip", c: 8 } },
  { delay: 450, action: { t: "flip", c: 3 } },
  { delay: 800, action: { t: "match", a: 8, b: 3, p: 2 } },
  { delay: 600, action: { t: "flip", c: 10 } },
  { delay: 450, action: { t: "flip", c: 0 } },
  { delay: 800, action: { t: "match", a: 10, b: 0, p: 1 } },
  { delay: 600, action: { t: "flip", c: 5 } },
  { delay: 450, action: { t: "flip", c: 12 } },
  { delay: 800, action: { t: "unflip", cs: [5, 12] } },
  { delay: 600, action: { t: "flip", c: 14 } },
  { delay: 450, action: { t: "flip", c: 5 } },
  { delay: 800, action: { t: "match", a: 14, b: 5, p: 1 } },
  { delay: 900, action: { t: "tornado" } },
  { delay: 1600, action: { t: "flip", c: 4 } },
  { delay: 450, action: { t: "flip", c: 11 } },
  { delay: 800, action: { t: "match", a: 4, b: 11, p: 2 } },
  { delay: 600, action: { t: "flip", c: 2 } },
  { delay: 450, action: { t: "flip", c: 9 } },
  { delay: 800, action: { t: "match", a: 2, b: 9, p: 1 } },
  { delay: 600, action: { t: "flip", c: 6 } },
  { delay: 450, action: { t: "flip", c: 13 } },
  { delay: 800, action: { t: "match", a: 6, b: 13, p: 2 } },
  { delay: 600, action: { t: "flip", c: 1 } },
  { delay: 450, action: { t: "flip", c: 15 } },
  { delay: 800, action: { t: "match", a: 1, b: 15, p: 1 } },
  { delay: 600, action: { t: "flip", c: 7 } },
  { delay: 450, action: { t: "flip", c: 12 } },
  { delay: 800, action: { t: "match", a: 7, b: 12, p: 2 } },
  { delay: 1800, action: { t: "reset" } },
];

const initialCards = (): CardState[] =>
  Array(16).fill(null).map(() => ({ face: "hidden", by: 0 }));

export function HeroGameMockup() {
  const [cards, setCards] = useState<CardState[]>(initialCards);
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const [turn, setTurn] = useState<1 | 2>(1);
  const [tornado, setTornado] = useState(false);
  const [lastMatch, setLastMatch] = useState<number[]>([]);
  const [lastMiss, setLastMiss] = useState<number[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let step = 0;
    let cancelled = false;

    const apply = (a: Action) => {
      switch (a.t) {
        case "flip":
          setCards((prev) => {
            if (prev[a.c].face !== "hidden") return prev;
            const next = [...prev];
            next[a.c] = { face: "flipped", by: 0 };
            return next;
          });
          break;
        case "unflip":
          setLastMiss([...a.cs]);
          setTimeout(() => setLastMiss([]), 400);
          setCards((prev) => {
            const next = [...prev];
            a.cs.forEach((c) => {
              if (next[c].face === "flipped") next[c] = { face: "hidden", by: 0 };
            });
            return next;
          });
          setTurn((t) => (t === 1 ? 2 : 1));
          break;
        case "match":
          setCards((prev) => {
            const next = [...prev];
            next[a.a] = { face: "matched", by: a.p };
            next[a.b] = { face: "matched", by: a.p };
            return next;
          });
          setScores((prev) => ({
            p1: prev.p1 + (a.p === 1 ? 1 : 0),
            p2: prev.p2 + (a.p === 2 ? 1 : 0),
          }));
          setLastMatch([a.a, a.b]);
          setTimeout(() => setLastMatch([]), 600);
          break;
        case "tornado":
          setTornado(true);
          setTimeout(() => setTornado(false), 1500);
          break;
        case "reset":
          setCards(initialCards());
          setScores({ p1: 0, p2: 0 });
          setTurn(1);
          break;
      }
    };

    const run = () => {
      if (cancelled) return;
      const { delay, action } = SEQUENCE[step];
      timeoutRef.current = setTimeout(() => {
        if (cancelled) return;
        apply(action);
        step = (step + 1) % SEQUENCE.length;
        run();
      }, delay);
    };

    run();
    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="flex h-full flex-col gap-2 bg-surface px-2.5 pb-2.5 pt-8 font-body">
      <HudCard
        name="Alex"
        subtitle="Joueur · En direct"
        avatar="🎮"
        pairs={scores.p2}
        totalPairs={TOTAL_PAIRS}
        active={turn === 2}
        timer="00:12"
      />

      <div className="flex items-baseline justify-center gap-2 py-1">
        <span className="text-[9px] font-bold tracking-[1.5px] text-text-secondary">
          PAIRES
        </span>
        <span className="font-display text-base font-bold text-p1 tabular-nums">
          {scores.p1}
        </span>
        <span className="text-xs text-text-secondary">—</span>
        <span className="font-display text-base font-bold text-p2 tabular-nums">
          {scores.p2}
        </span>
        <span className="text-[10px] text-text-secondary">/ {TOTAL_PAIRS}</span>
      </div>

      <div className="flex flex-1 items-center justify-center px-1">
        <div className="grid w-full grid-cols-4 gap-1.5">
          {cards.map((card, i) => (
            <Card
              key={i}
              state={card}
              emoji={EMOJIS[LAYOUT[i]]}
              justMatched={lastMatch.includes(i)}
              justMissed={lastMiss.includes(i)}
              tornadoRow={tornado ? Math.floor(i / COLS) : -1}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl bg-surface-container px-2.5 py-1.5 shadow-[0_4px_12px_rgba(26,28,23,0.04)]">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[11px] font-semibold text-text-primary">
            🌪️ Tornade prête
          </p>
          <p className="truncate text-[9px] text-text-secondary">
            Mélange les cartes non-matchées
          </p>
        </div>
        <motion.button
          type="button"
          animate={tornado ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-[10px] bg-primary-container px-2.5 py-1.5 text-[10px] font-bold text-white shadow-sm"
        >
          LANCER
        </motion.button>
      </div>

      <div className="flex items-center gap-2 pt-0.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-primary-container-bg text-base">
          😎
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[11px] font-semibold text-text-primary">
            Toi
          </p>
          <p className="truncate text-[9px] text-text-secondary">Joueur · 🌪️</p>
        </div>
        <ProgressDots filled={scores.p1} total={TOTAL_PAIRS} />
        <div
          className={`rounded-lg px-2 py-1 text-[10px] font-bold tabular-nums transition-colors ${
            turn === 1
              ? "bg-primary-container-bg text-primary-container"
              : "bg-[#F5F2F2] text-text-secondary"
          }`}
        >
          00:08
        </div>
      </div>
    </div>
  );
}
