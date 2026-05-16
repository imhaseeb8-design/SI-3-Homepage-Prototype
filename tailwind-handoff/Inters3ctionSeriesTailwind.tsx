"use client";

const ASSET_BASE = "/si-assets";

const stats = [
  { label: "FOCUS", value: "Mobile meets Web3" },
  { label: "FORMAT", value: "4-hour side events" },
  { label: "FOR WHOM", value: "Mobile adoption leaders" },
];

const tags = ["NFT NYC", "AI SUMMIT SF", "SOLANA BREAKPOINT LONDON"];

function CornerMarkers() {
  return (
    <>
      <span className="absolute left-[38px] top-[37px] size-1 bg-[#d3d3d3] max-lg:hidden" aria-hidden="true" />
      <span className="absolute left-[38px] bottom-[41px] size-1 bg-[#d3d3d3] max-lg:hidden" aria-hidden="true" />
      <span className="absolute left-[444px] top-[37px] size-1 bg-[#d3d3d3] max-lg:hidden" aria-hidden="true" />
      <span className="absolute left-[444px] bottom-[41px] size-1 bg-[#d3d3d3] max-lg:hidden" aria-hidden="true" />
      <span className="absolute right-[38px] top-[37px] size-1 bg-[#d3d3d3] max-lg:hidden" aria-hidden="true" />
      <span className="absolute right-[38px] bottom-[41px] size-1 bg-[#d3d3d3] max-lg:hidden" aria-hidden="true" />
    </>
  );
}

export function Inters3ctionSeriesTailwind() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 text-white sm:px-6 lg:px-[60px]"
      aria-labelledby="inters3ction-title"
      data-animate="inters3ction-section"
      data-node-id="1:309"
    >
      <div className="mx-auto flex max-w-[1254px] flex-col gap-[45px]">
        <header className="flex w-full flex-col gap-6 min-[860px]:flex-row min-[860px]:items-end min-[860px]:justify-between">
          <h2
            className="m-0 flex flex-col justify-end whitespace-nowrap font-['Clesmont','Geist',Arial,sans-serif] text-white"
            id="inters3ction-title"
            data-animate="inters3ction-title"
          >
            <span className="text-[26px] font-bold uppercase leading-[1.2] sm:text-[32px]">INTERS3CTION SERIES</span>
            <span className="font-[var(--font-geist)] text-[25px] font-normal italic leading-[1.2] sm:text-[30px]">
              Where Worlds Meet
            </span>
          </h2>

          <div
            className="flex w-full max-w-[493px] flex-col items-start gap-3 min-[860px]:items-end"
            data-animate="inters3ction-copy"
          >
            <div className="flex items-center gap-2">
              <p className="m-0 whitespace-nowrap text-right font-[var(--font-geist-mono)] text-sm leading-none text-white/70">
                IRL Event Series
              </p>
              <img className="h-[15px] w-[13px] object-contain" src={`${ASSET_BASE}/partner-mark.svg`} alt="" />
            </div>
            <p className="m-0 font-[var(--font-geist)] text-lg leading-[1.4] text-[#cbcbcb] min-[860px]:text-right">
              A series of gatherings where Web3, AI &amp; Mobile converge.
            </p>
          </div>
        </header>

        <article
          className="relative overflow-hidden rounded-md border border-white/30 bg-black/20 text-white backdrop-blur-[10px] lg:grid lg:h-[390px] lg:grid-cols-[405px_minmax(0,1fr)] lg:gap-11 lg:px-[39px] lg:py-[38px]"
          data-animate="inters3ction-card"
        >
          <div className="absolute inset-x-0 top-[38px] h-px bg-white/15 max-lg:hidden" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-[40px] h-px bg-white/15 max-lg:hidden" aria-hidden="true" />
          <div className="absolute bottom-0 left-[38px] top-0 w-px bg-white/15 max-lg:hidden" aria-hidden="true" />
          <div className="absolute bottom-0 left-[444px] top-0 w-px bg-white/15 max-lg:hidden" aria-hidden="true" />
          <div className="absolute bottom-0 right-[39px] top-0 w-px bg-white/15 max-lg:hidden" aria-hidden="true" />
          <CornerMarkers />

          <div className="relative z-10 lg:h-[309px] lg:w-[405px]" data-animate="inters3ction-image">
            <img
              className="block aspect-[405/309] h-auto w-full object-cover lg:h-full"
              src={`${ASSET_BASE}/inters3ction-event.jpg`}
              alt="Inters3ction event gathering"
            />
          </div>

          <div className="relative z-10 flex min-w-0 flex-col px-5 py-6 lg:px-0 lg:pb-0 lg:pt-8">
            <div className="grid gap-5 min-[720px]:grid-cols-3 lg:max-w-[632px]" data-animate="inters3ction-stats">
              {stats.map((stat) => (
                <div className="flex min-w-0 flex-col gap-3.5" key={stat.label}>
                  <p className="m-0 font-[var(--font-geist-mono)] text-sm leading-none tracking-[0.84px] text-[#9a9a9b]">
                    {stat.label}
                  </p>
                  <p className="m-0 whitespace-nowrap font-[var(--font-geist)] text-base leading-none text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-[23px] h-px w-full max-w-[689px] bg-white/15" aria-hidden="true" />

            <div className="mt-6 flex max-w-[565px] flex-col gap-[15px]">
              <h3 className="m-0 font-[var(--font-geist-mono)] text-[29px] font-medium leading-[normal] text-white sm:text-4xl">
                Inters3ction Series
              </h3>
              <p className="m-0 font-[var(--font-geist)] text-base leading-[1.3] text-[#a7a7a7]">
                A global side event series for the builders and marketers driving real-world mobile Web3 adoption.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2.5 pr-0 lg:pr-[86px]" data-animate="inters3ction-tags">
              {tags.map((tag) => (
                <span
                  className="inline-flex h-[30px] items-center justify-center rounded-full border border-[#5e5e5e] bg-black/20 px-[18px] font-[var(--font-geist-mono)] text-xs leading-none tracking-[0.72px] text-white"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              className="mt-7 grid size-[54px] place-items-center rounded-full border border-white/40 bg-black/20 transition-colors duration-150 hover:border-white hover:bg-white/10 focus-visible:border-white focus-visible:bg-white/10 focus-visible:outline-none lg:absolute lg:bottom-[22px] lg:right-[21px] lg:mt-0"
              href="#"
              aria-label="Open Inters3ction Series"
              data-animate="inters3ction-cta"
            >
              <img className="size-2.5 object-contain" src={`${ASSET_BASE}/cta-arrow.svg`} alt="" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Inters3ctionSeriesTailwind;
