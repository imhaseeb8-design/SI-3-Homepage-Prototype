"use client";

type AudienceAction = {
  label: string;
  href?: string;
  icon?: string;
  iconClassName?: string;
};

type AudienceCard = {
  eyebrow: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  iconClassName: string;
  actions: AudienceAction[];
};

const ASSET_BASE = "/si-assets";

const cards: AudienceCard[] = [
  {
    eyebrow: "Explorer",
    number: "01",
    title: "FOR WEB3 EXPLORERS",
    description: "Education & growth opportunities for professionals exploring Web3, emerging tech, and AI.",
    icon: `${ASSET_BASE}/card-explorer.svg`,
    iconClassName: "h-[55px] w-[58px]",
    actions: [{ label: "Join SI U Waitlist" }],
  },
  {
    eyebrow: "Guide",
    number: "02",
    title: "FOR WEB3 GUIDES",
    description:
      "Advancing Web3 professional development, education, leadership training, and networking for womxn established in Web3.",
    icon: `${ASSET_BASE}/card-guide.svg`,
    iconClassName: "h-[52px] w-[58px]",
    actions: [
      {
        label: "Join Si Her",
        icon: `${ASSET_BASE}/cta-guide.svg`,
        iconClassName: "h-[19px] w-[18px]",
      },
    ],
  },
  {
    eyebrow: "Partner",
    number: "03",
    title: "FOR ORGANIZATIONS",
    description: "Collaborative growth campaigns, business development and peer-to-peer learning.",
    icon: `${ASSET_BASE}/card-partner.svg`,
    iconClassName: "h-[52px] w-[44px]",
    actions: [
      {
        label: "Explore Grow3dge",
        icon: `${ASSET_BASE}/cta-grow3dge.svg`,
        iconClassName: "h-[15px] w-[22px]",
      },
      {
        label: "Explore Well-Being",
        icon: `${ASSET_BASE}/cta-wellbeing.svg`,
        iconClassName: "h-4 w-[13px]",
      },
    ],
  },
];

function DragDots() {
  return (
    <span className="grid h-[15px] w-[13px] grid-cols-2 gap-x-[3px] gap-y-[5px]" aria-hidden="true">
      <span className="size-[5px] rounded-full bg-[#8e8a95]" />
      <span className="size-[5px] rounded-full bg-[#8e8a95]" />
      <span className="size-[5px] rounded-full bg-[#8e8a95]" />
      <span className="size-[5px] rounded-full bg-[#8e8a95]" />
    </span>
  );
}

function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5" data-animate="audience-header">
      <div className="inline-flex shrink-0 items-center gap-2">
        <span className="grid size-7 place-items-center rounded border border-white/20 bg-white/[0.05] font-[var(--font-geist-mono)] text-sm leading-none text-white backdrop-blur-[10px]">
          {number}
        </span>
        <span className="font-[var(--font-geist-mono)] text-sm leading-none tracking-[0.56px] text-white/70">
          {label}
        </span>
      </div>
      <span className="h-px min-w-10 flex-1 bg-white/25" aria-hidden="true" />
    </div>
  );
}

function AudienceCardItem({ card }: { card: AudienceCard }) {
  return (
    <article
      className="flex min-h-[499px] flex-col rounded-md border border-white/30 bg-black/20 px-[18px] pb-[18px] pt-3.5 text-white backdrop-blur-[10px]"
      data-animate="audience-card"
      data-card={card.eyebrow.toLowerCase()}
    >
      <div className="flex items-center gap-[18px]">
        <div className="flex min-w-0 flex-1 items-end justify-between">
          <DragDots />
          <span className="whitespace-nowrap font-[var(--font-geist-mono)] text-sm leading-none text-[#6d6d6e]/70">
            / {card.number}
          </span>
        </div>
        <button
          className="flex h-9 w-7 items-center rounded border border-white/20 bg-white/[0.05] px-[7px] py-[13px] backdrop-blur-[10px]"
          type="button"
          aria-label={`Collapse ${card.eyebrow}`}
        >
          <span className="block h-0.5 w-3.5 rounded-[10px] bg-white" />
        </button>
      </div>

      <div className="mt-4 h-px w-full bg-white/15" />

      <div className="flex flex-1 flex-col justify-between gap-8 pt-7">
        <div className="flex flex-col items-start gap-[25px]">
          <img className={`block object-contain ${card.iconClassName}`} src={card.icon} alt="" />
          <div className="flex w-full flex-col gap-2">
            <h3 className="m-0 font-['Clesmont','Geist',Arial,sans-serif] text-xl font-bold uppercase leading-[1.2] text-white">
              {card.title}
            </h3>
            <p className="m-0 max-w-[360px] font-[var(--font-geist)] text-[17px] leading-[1.4] text-[#a6a6a6]">
              {card.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2" data-animate="audience-ctas">
          {card.actions.map((action) => {
            const content = (
              <>
                <span className="inline-flex min-w-0 items-center gap-2">
                  {action.icon ? (
                    <img className={`block shrink-0 object-contain ${action.iconClassName}`} src={action.icon} alt="" />
                  ) : null}
                  <span>{action.label}</span>
                </span>
                <img className="block size-[15.578px] shrink-0 object-contain" src={`${ASSET_BASE}/cta-arrow.svg`} alt="" />
              </>
            );

            const className =
              "flex min-h-[52px] w-full items-center justify-between rounded border border-[#5e5e5e] bg-black/20 px-[22px] py-4 text-left font-[var(--font-geist)] text-base leading-none text-white transition-colors duration-150 hover:bg-[rgba(41,41,41,0.2)] focus-visible:bg-[rgba(41,41,41,0.2)] focus-visible:outline-none";

            return action.href ? (
              <a className={className} href={action.href} key={action.label}>
                {content}
              </a>
            ) : (
              <button className={className} type="button" key={action.label}>
                {content}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function SiAudienceCardsTailwind() {
  return (
    <section
      className="w-full bg-transparent px-4 py-10 text-white sm:px-6 lg:px-[60px] lg:pb-5 lg:pt-[53px]"
      aria-labelledby="learning-pathways-title"
      data-animate="learning-pathways-section"
    >
      <div className="mx-auto max-w-[1255px]">
        <header className="mb-[38px] flex flex-col items-start justify-between gap-6 min-[820px]:flex-row min-[820px]:items-end">
          <h2
            className="m-0 whitespace-nowrap font-['Clesmont','Geist',Arial,sans-serif] text-[32px] font-bold uppercase leading-[1.2] text-white"
            id="learning-pathways-title"
            data-animate="learning-pathways-title"
          >
            OUR LEARNING
            <br />
            PATHWAYS
          </h2>

          <div className="flex w-full max-w-[364px] flex-col items-start gap-3 min-[820px]:items-end" data-animate="learning-pathways-copy">
            <div className="flex items-start gap-3">
              <p className="m-0 whitespace-nowrap text-right font-[var(--font-geist-mono)] text-sm leading-none text-white/70">
                SI U Pathways
              </p>
              <img className="h-[15px] w-[13px] object-contain" src={`${ASSET_BASE}/partner-mark.svg`} alt="" />
            </div>
            <p className="m-0 font-[var(--font-geist)] text-lg leading-[1.4] text-[#cbcbcb] min-[820px]:text-right">
              Onboarding emerging tech professionals, communities and organizations.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 justify-center gap-[17px] min-[981px]:grid-cols-3">
          {cards.map((card) => (
            <div className="grid min-w-0 grid-rows-[28px_auto] gap-6 min-[981px]:gap-10" key={card.number}>
              <SectionHeader number={card.number} label={card.eyebrow} />
              <AudienceCardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SiAudienceCardsTailwind;
