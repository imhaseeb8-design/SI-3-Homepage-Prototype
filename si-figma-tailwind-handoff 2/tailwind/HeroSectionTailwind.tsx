"use client";

import { useState } from "react";

const ASSET_BASE = "/si-assets";

type HeroCardId = "si-her" | "grow3dge" | "well-being";

type HeroCard = {
  id: HeroCardId;
  label: string;
  icon: string;
  iconClassName: string;
  badgeClassName: string;
  title: string;
  description: string;
  cta: string;
};

const navItems = ["Grow3dge", "Well-Being", "Si Her DAO", "Inters3ction"];

const heroCards: HeroCard[] = [
  {
    id: "si-her",
    label: "Si Her DAO",
    icon: `${ASSET_BASE}/cta-guide.svg`,
    iconClassName: "h-[15px] w-[14px]",
    badgeClassName: "bg-[rgba(77,90,197,0.2)]",
    title: "For Web3 Leaders",
    description: "Professional development, education and leadership paths for womxn established in Web3.",
    cta: "Explore Si Her DAO",
  },
  {
    id: "grow3dge",
    label: "Grow3dge",
    icon: `${ASSET_BASE}/cta-grow3dge.svg`,
    iconClassName: "h-[15px] w-[22px]",
    badgeClassName: "bg-[rgba(46,25,109,0.2)]",
    title: "For Scaling Ecosystems",
    description: "An emerging tech members club fostering collaborative growth & partnerships.",
    cta: "Explore Grow3dge",
  },
  {
    id: "well-being",
    label: "Well-Being",
    icon: `${ASSET_BASE}/cta-wellbeing.svg`,
    iconClassName: "h-3.5 w-[11px]",
    badgeClassName: "bg-[rgba(42,104,134,0.2)]",
    title: "For Sustainable Growth",
    description: "Programs and community experiences supporting well-being for builders in emerging tech.",
    cta: "Explore Well-Being",
  },
];

function MiniImage({ src, className }: { src: string; className?: string }) {
  return (
    <span
      className={`inline-flex h-[41px] w-[73px] overflow-hidden rounded-[999px] align-middle ring-1 ring-white/20 ${className ?? ""}`}
      aria-hidden="true"
    >
      <img className="h-full w-full object-cover" src={src} alt="" />
    </span>
  );
}

function HeroTicker() {
  return (
    <div
      className="absolute inset-x-0 bottom-3 hidden h-4 items-center overflow-hidden opacity-50 md:flex"
      aria-hidden="true"
      data-animate="hero-ticker"
    >
      <div className="flex min-w-full items-center justify-center gap-[34px] whitespace-nowrap">
        {Array.from({ length: 12 }).map((_, index) => (
          <span className="inline-flex items-center gap-2 font-[var(--font-geist-mono)] text-[13px] uppercase leading-none tracking-[2.6px] text-white" key={index}>
            <img className="h-[10px] w-2 object-contain" src={`${ASSET_BASE}/hero-si-more-mark.svg`} alt="" />
            SI MORE
          </span>
        ))}
      </div>
    </div>
  );
}

function HeroAccordionCard({
  card,
  isOpen,
  onToggle,
}: {
  card: HeroCard;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`overflow-hidden rounded-md border border-white/30 bg-black/20 text-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-[10px] transition-[height] duration-300 ease-out ${
        isOpen ? "h-[247px]" : "h-14"
      }`}
      data-animate="hero-card"
      data-card={card.id}
    >
      <button
        className="flex h-14 w-full items-center justify-between px-[18px] py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <img className="h-[15px] w-[13px] shrink-0 object-contain opacity-70" src={`${ASSET_BASE}/partner-mark.svg`} alt="" />
        <span className="ml-auto flex items-center gap-3">
          <span
            className={`inline-flex h-7 items-end gap-2 rounded border border-white/30 px-[9px] pb-[7px] pt-1.5 font-[var(--font-geist-mono)] text-sm leading-none text-white backdrop-blur-[10px] ${card.badgeClassName}`}
          >
            <img className={`shrink-0 object-contain ${card.iconClassName}`} src={card.icon} alt="" />
            {card.label}
          </span>
          <span className="relative grid size-7 place-items-center rounded border border-white/20 bg-white/[0.05] backdrop-blur-[10px]" aria-hidden="true">
            <span className="absolute h-0.5 w-3.5 rounded-full bg-white" />
            {!isOpen ? <span className="absolute h-3.5 w-0.5 rounded-full bg-white" /> : null}
          </span>
        </span>
      </button>

      <div className="px-[18px] pb-5">
        <div className="h-px w-full bg-white/15" aria-hidden="true" />
        <div className="pt-[16px]">
          <h2 className="m-0 font-['Clesmont','Geist',Arial,sans-serif] text-xl font-bold uppercase leading-[1.2] text-white">
            {card.title}
          </h2>
          <p className="m-0 mt-1.5 font-[var(--font-geist)] text-[17px] leading-[1.4] text-white">
            {card.description}
          </p>
          <a
            className="mt-[22px] inline-flex flex-col items-start gap-2.5 font-[var(--font-geist)] text-base leading-none text-white focus-visible:outline-none"
            href="#"
          >
            <span className="inline-flex items-center gap-1.5">
              {card.cta}
              <img className="size-2 object-contain" src={`${ASSET_BASE}/si-inline-arrow.svg`} alt="" />
            </span>
            <span className="h-px w-11 bg-white" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function HeroSectionTailwind() {
  const [openCard, setOpenCard] = useState<HeroCardId | null>("grow3dge");

  return (
    <section
      className="relative isolate min-h-[760px] overflow-hidden bg-[#0d0816] text-white lg:h-[994px]"
      aria-labelledby="hero-title"
      data-animate="hero-section"
      data-node-id="1:1310"
    >
      <img className="absolute inset-0 -z-20 h-full w-full object-cover" src={`${ASSET_BASE}/hero-bg.png`} alt="" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[154px] bg-gradient-to-b from-[#0d0816]/0 to-[#0d0816]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />

      <nav className="relative z-20 mx-auto flex h-[65px] w-full max-w-[1255px] items-center justify-between px-4 pt-[6px] sm:px-6 lg:px-0" aria-label="Primary">
        <a className="inline-flex h-[22px] w-[90px] items-center" href="#" aria-label="SI home">
          <img className="h-full w-full object-contain" src={`${ASSET_BASE}/hero-logo.png`} alt="SI<3" />
        </a>
        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-[22px] font-[var(--font-geist)] text-sm font-medium leading-none text-white/80">
            {navItems.map((item) => (
              <a className="transition-colors duration-150 hover:text-white focus-visible:text-white focus-visible:outline-none" href="#" key={item}>
                {item}
              </a>
            ))}
          </div>
          <a className="inline-flex h-[34px] items-center justify-center rounded bg-white px-[18px] font-[var(--font-geist)] text-sm font-medium leading-none text-black backdrop-blur-md" href="#">
            Onboard
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex w-full max-w-[1255px] flex-col gap-10 px-4 pb-24 pt-[270px] sm:px-6 md:pt-[360px] lg:flex-row lg:items-end lg:gap-[155px] lg:px-0 lg:pb-[88px] lg:pt-[399px]">
        <div className="flex w-full max-w-[608px] flex-col items-start gap-7" data-animate="hero-copy">
          <h1
            className="m-0 font-['Clesmont','Geist',Arial,sans-serif] text-[42px] font-bold uppercase leading-[1.1] text-white sm:text-[56px] lg:text-[62px]"
            id="hero-title"
          >
            <span className="flex items-center gap-3">
              <MiniImage src={`${ASSET_BASE}/hero-title-vr-1.png`} className="hidden sm:inline-flex" />
              <span>Driving</span>
            </span>
            <span className="flex items-center gap-3 text-[#bba9ff]">
              <span>Real</span>
              <MiniImage src={`${ASSET_BASE}/hero-title-planet-1.png`} className="hidden sm:inline-flex" />
              <span>World</span>
            </span>
            <span className="block">
              <span className="text-[#bba9ff]">Web3</span> Adoption
            </span>
          </h1>

          <a className="group inline-flex items-end gap-[3px] font-[var(--font-geist)] text-lg font-medium leading-none text-white focus-visible:outline-none" href="#" data-animate="hero-ecosystem-cta">
            <span>Explore Ecosystem</span>
            <img className="size-[15px] object-contain transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" src={`${ASSET_BASE}/si-inline-arrow.svg`} alt="" />
          </a>
        </div>

        <div className="flex w-full max-w-[492px] flex-col gap-2 lg:mb-0" data-animate="hero-accordion">
          {heroCards.map((card) => (
            <HeroAccordionCard
              card={card}
              isOpen={openCard === card.id}
              key={card.id}
              onToggle={() => setOpenCard((current) => (current === card.id ? null : card.id))}
            />
          ))}
        </div>
      </div>

      <HeroTicker />
    </section>
  );
}

export default HeroSectionTailwind;
