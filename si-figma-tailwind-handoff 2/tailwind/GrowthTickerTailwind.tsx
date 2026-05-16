const ASSET_BASE = "/si-assets";

const tickerItems = [
  { type: "text", label: "COLLABORATIVE GROWTH" },
  { type: "image", src: `${ASSET_BASE}/ticker-collaborative-growth.png`, alt: "" },
  { type: "text", label: "ON-CHAIN LEARNING" },
  { type: "image", src: `${ASSET_BASE}/ticker-onchain-learning.png`, alt: "" },
  { type: "text", label: "ECOSYSTEM PARTNERSHIPS" },
] as const;

export function GrowthTickerTailwind() {
  return (
    <section className="w-full overflow-hidden bg-transparent text-white" aria-label="SI growth themes" data-node-id="1:623">
      <div
        className="flex h-[116px] w-max items-center gap-5 text-white"
        data-animate="growth-ticker"
      >
        {tickerItems.map((item, index) =>
          item.type === "image" ? (
            <img
              className="block h-[116px] w-[88px] shrink-0 object-cover"
              src={item.src}
              alt={item.alt}
              aria-hidden="true"
              key={`${item.type}-${index}`}
            />
          ) : (
            <p
              className="m-0 shrink-0 whitespace-nowrap font-['Bebas_Neue','Clesmont','Geist',Arial,sans-serif] text-[84px] font-normal uppercase leading-none text-white max-md:text-[64px] max-sm:text-[52px]"
              key={`${item.type}-${item.label}`}
            >
              {item.label}
            </p>
          ),
        )}
      </div>
    </section>
  );
}

export default GrowthTickerTailwind;
