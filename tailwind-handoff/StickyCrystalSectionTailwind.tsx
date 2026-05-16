"use client";

import { type ReactNode, useEffect, useRef } from "react";

const ASSET_BASE = "/si-assets";

export function StickyCrystalSectionTailwind({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const crystalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const crystal = crystalRef.current;

    if (!section || !crystal || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      crystal?.style.setProperty("--sticky-crystal-scale", "1");
      crystal?.style.setProperty("--sticky-crystal-y", "0px");
      crystal?.style.setProperty("--sticky-crystal-opacity", "1");
      return;
    }

    let animationFrame = 0;

    const updateCrystal = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const rawProgress = Math.min(Math.max((viewportHeight * 0.84 - rect.top) / (viewportHeight * 0.34), 0), 1);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);

      crystal.style.setProperty("--sticky-crystal-scale", String(0.42 + easedProgress * 0.58));
      crystal.style.setProperty("--sticky-crystal-y", `${(1 - easedProgress) * 190}px`);
      crystal.style.setProperty("--sticky-crystal-opacity", String(0.18 + easedProgress * 0.82));
    };

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateCrystal);
    };

    updateCrystal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-[#08040f]"
      aria-label="Sticky crystal backdrop"
      data-animate="sticky-crystal-section"
    >
      <div className="pointer-events-none sticky top-0 z-0 mb-[-100vh] grid h-screen min-h-[760px] place-items-center overflow-hidden" aria-hidden="true">
        <div
          ref={crystalRef}
          className="h-[min(82vw,860px)] w-[min(82vw,860px)] translate-y-[var(--sticky-crystal-y)] scale-[var(--sticky-crystal-scale)] opacity-[var(--sticky-crystal-opacity)] transition-[transform,opacity] duration-200 ease-out [--sticky-crystal-opacity:0.18] [--sticky-crystal-scale:0.42] [--sticky-crystal-y:190px]"
          data-animate="sticky-crystal"
        >
          <img className="h-full w-full object-contain" src={`${ASSET_BASE}/hero-sticky-crystal.png`} alt="" />
        </div>
      </div>
      <div className="relative z-10 grid gap-24">{children}</div>
    </section>
  );
}

export default StickyCrystalSectionTailwind;
