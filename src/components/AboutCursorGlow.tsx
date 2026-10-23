"use client";

import { useEffect, useRef } from "react";

export default function AboutCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const updateGlow = (event: PointerEvent) => {
      const bounds = glow.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      glow.style.opacity = inside ? "1" : "0";
      if (inside) {
        glow.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
        glow.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
      }
    };

    window.addEventListener("pointermove", updateGlow);
    return () => window.removeEventListener("pointermove", updateGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 left-[78px] right-7 top-4 z-0 rounded-t-[16px] opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255, 126, 135, 0.22), transparent 70%)",
      }}
    />
  );
}
