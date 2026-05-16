"use client";

import { useEffect, useRef } from "react";

const ASSET_BASE = "/si-assets";

export function SiUSocialLearningSectionTailwind() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;

    if (!section || !imageWrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      imageWrap?.style.setProperty("--si-u-feed-scale", "1");
      imageWrap?.style.setProperty("--si-u-feed-y", "0px");
      return;
    }

    let animationFrame = 0;
    imageWrap.style.setProperty("--si-u-feed-scale", "1");
    imageWrap.style.setProperty("--si-u-feed-y", "0px");

    const updateScale = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const scrollRange = Math.max(rect.height - viewportHeight * 0.45, 1);
      const rawProgress = Math.min(Math.max((viewportHeight * 0.72 - rect.top) / scrollRange, 0), 1);
      const progress = Math.min(Math.max((rawProgress - 0.14) / 0.86, 0), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      imageWrap.style.setProperty("--si-u-feed-scale", String(1 + easedProgress * 1.16));
      imageWrap.style.setProperty("--si-u-feed-y", `${easedProgress * 286}px`);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateScale);
    };

    updateScale();
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
      className="w-full bg-transparent px-4 py-12 text-white sm:px-6 lg:min-h-[145vh] lg:px-[60px] lg:py-[12vh]"
      aria-labelledby="si-u-social-learning-title"
      data-animate="si-u-section"
    >
      <div className="mx-auto flex max-w-[1254px] flex-col items-start gap-10 lg:sticky lg:top-[12vh] lg:flex-row lg:gap-[92px]">
        <div className="flex w-full max-w-[582px] flex-col items-start gap-[31px]" data-animate="si-u-copy">
          <div className="flex w-full flex-col items-start gap-3">
            <div className="relative w-full">
              <img
                className="absolute left-0 top-[11px] h-[15px] w-[13px] object-contain"
                src={`${ASSET_BASE}/si-section-mark.svg`}
                alt=""
              />
              <h2
                className="m-0 pl-7 font-['Clesmont','Geist',Arial,sans-serif] text-[30px] font-bold uppercase leading-[1.2] text-white sm:text-[32px]"
                id="si-u-social-learning-title"
              >
                A Social{" "}
                <span className="text-[#bca9ff]">
                  Learning Network
                </span>{" "}
                For The New Economy
              </h2>
            </div>
            <p className="m-0 max-w-[582px] font-[var(--font-geist)] text-lg leading-[1.4] text-white/80">
              An on-chain social network accelerating learning and professional connections in the emerging tech
              industry.
            </p>
          </div>

          <a
            className="group inline-flex flex-col items-start gap-2.5 font-[var(--font-geist)] text-base font-medium leading-none text-white focus-visible:outline-none"
            href="#"
            data-animate="si-u-cta"
          >
            <span className="inline-flex items-center gap-2">
              <span>Join SI U</span>
              <img
                className="size-2 object-contain transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                src={`${ASSET_BASE}/si-inline-arrow.svg`}
                alt=""
              />
            </span>
            <span className="h-px w-11 bg-white transition-colors duration-150 group-hover:bg-[#bca9ff]" aria-hidden="true" />
          </a>
        </div>

        <div className="relative ml-auto h-auto w-full max-lg:max-w-[579px] lg:h-[1070px] lg:w-[579px] lg:shrink-0">
          <div
            ref={imageWrapRef}
            className="relative z-10 ml-auto h-auto w-full origin-top-right translate-y-[var(--si-u-feed-y)] scale-[var(--si-u-feed-scale)] overflow-hidden rounded transition-transform duration-75 ease-out [--si-u-feed-scale:1] [--si-u-feed-y:0px] lg:h-[363px] lg:w-[579px]"
            data-animate="si-u-product"
          >
            <img
              className="block aspect-[579/363] h-auto w-full object-cover object-top lg:h-[113.65%] lg:max-w-none"
              src={`${ASSET_BASE}/si-u-feed.png`}
              alt="SI U social learning feed interface"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SiUSocialLearningSectionTailwind;
