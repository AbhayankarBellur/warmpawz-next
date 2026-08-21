"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "Screenshot 2026-08-21 154939.png",
  "Screenshot 2026-08-21 155329.png",
  "Screenshot 2026-08-21 155342.png",
  "Screenshot 2026-08-21 155354.png",
  "Screenshot 2026-08-21 155407.png",
  "Screenshot 2026-08-21 155424.png",
  "Screenshot 2026-08-21 155439.png",
  "Screenshot 2026-08-21 155451.png",
  "Screenshot 2026-08-21 155503.png",
  "Screenshot 2026-08-21 155518.png",
  "Screenshot 2026-08-21 155532.png",
  "Screenshot 2026-08-21 155543.png",
  "Screenshot 2026-08-21 155555.png",
  "Screenshot 2026-08-21 155610.png",
  "Screenshot 2026-08-21 155625.png",
  "Screenshot 2026-08-21 155637.png",
  "Screenshot 2026-08-21 155651.png",
  "Screenshot 2026-08-21 155703.png",
  "Screenshot 2026-08-21 155725.png",
  "Screenshot 2026-08-21 155743.png",
];

export default function DeckPage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === current) return;
      setDirection(next > current ? "right" : "left");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 220);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    if (current < slides.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const half = window.innerWidth / 2;
    if (x > half) next();
    else prev();
  };

  return (
    <div
      className="fixed inset-0 bg-black select-none overflow-hidden"
      onClick={handleClick}
      style={{ cursor: "none" }}
    >
      {/* Slide image */}
      <div
        className="absolute inset-0 transition-opacity duration-200"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <Image
          key={current}
          src={`/pitchdeck/${slides[current]}`}
          alt={`Slide ${current + 1}`}
          fill
          className="object-contain"
          priority
          sizes="100vw"
          draggable={false}
        />
      </div>

      {/* Left click zone — prev cursor */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 z-10 flex items-center justify-start pl-6"
        style={{ cursor: current > 0 ? "w-resize" : "default" }}
      />

      {/* Right click zone — next cursor */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 z-10 flex items-center justify-end pr-6"
        style={{ cursor: current < slides.length - 1 ? "e-resize" : "default" }}
      />

      {/* Slide counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-none">
        {slides.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              backgroundColor: i === current ? "#F69052" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* Slide number */}
      <div className="absolute bottom-4 right-6 z-20 text-white/40 text-xs font-mono pointer-events-none">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}
