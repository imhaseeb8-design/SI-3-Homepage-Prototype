"use client";

type PartnerLogo =
  | {
      name: string;
      type: "image";
      src: string;
      className: string;
    }
  | {
      name: string;
      type: "moonDao";
      mark: string;
      wordmark: string;
    };

const ASSET_BASE = "/si-assets";

const partnerLogos: PartnerLogo[] = [
  { name: "Stellar", type: "image", src: `${ASSET_BASE}/logo-stellar.svg`, className: "h-7 w-[106px]" },
  { name: "Unlock", type: "image", src: `${ASSET_BASE}/logo-unlock.svg`, className: "h-[22.476px] w-[101.703px]" },
  { name: "Dune", type: "image", src: `${ASSET_BASE}/logo-dune.svg`, className: "h-[32.98px] w-[94.071px]" },
  { name: "RARI", type: "image", src: `${ASSET_BASE}/logo-rari.svg`, className: "h-[14.046px] w-[107.876px]" },
  { name: "ENS", type: "image", src: `${ASSET_BASE}/logo-ens.svg`, className: "h-7 w-[94px]" },
  { name: "Uniswap Foundation", type: "image", src: `${ASSET_BASE}/logo-uniswap.png`, className: "h-[29px] w-[122.176px]" },
  { name: "Hacken", type: "image", src: `${ASSET_BASE}/logo-hacken.png`, className: "h-8 w-[115.048px]" },
  { name: "Zerion", type: "image", src: `${ASSET_BASE}/logo-zerion.svg`, className: "h-[26.624px] w-[111.524px]" },
  { name: "Arbitrum", type: "image", src: `${ASSET_BASE}/logo-arbitrum.svg`, className: "h-[29.286px] w-[115px]" },
  {
    name: "MoonDAO",
    type: "moonDao",
    mark: `${ASSET_BASE}/logo-moondao-mark.png`,
    wordmark: `${ASSET_BASE}/logo-moondao-wordmark.png`,
  },
  { name: "Starknet", type: "image", src: `${ASSET_BASE}/logo-starknet.png`, className: "h-[35px] w-[132px]" },
  { name: "Stellar", type: "image", src: `${ASSET_BASE}/logo-stellar-repeat.svg`, className: "h-7 w-[106px]" },
  { name: "Unlock", type: "image", src: `${ASSET_BASE}/logo-unlock.svg`, className: "h-[22.476px] w-[101.703px]" },
  { name: "Dune", type: "image", src: `${ASSET_BASE}/logo-dune.svg`, className: "h-[32.98px] w-[94.071px]" },
];

function CornerMarkers() {
  return (
    <>
      <span className="absolute -left-px -top-px size-1 bg-[#d3d3d3]" aria-hidden="true" />
      <span className="absolute -right-px -top-px size-1 bg-[#d3d3d3]" aria-hidden="true" />
      <span className="absolute -bottom-px -left-px size-1 bg-[#d3d3d3]" aria-hidden="true" />
      <span className="absolute -bottom-px -right-px size-1 bg-[#d3d3d3]" aria-hidden="true" />
    </>
  );
}

function PartnerLogoTile({ logo }: { logo: PartnerLogo }) {
  return (
    <button
      className="relative grid h-[89px] min-w-0 place-items-center border border-white/30 bg-black/20 p-0 opacity-100 backdrop-blur-[10px] transition-opacity duration-200 group-hover/logos:opacity-40 hover:!opacity-100 focus-visible:!opacity-100 focus-visible:outline-none"
      type="button"
      aria-label={logo.name}
      data-animate="partner-logo"
      data-logo={logo.name.toLowerCase().replaceAll(" ", "-")}
    >
      <CornerMarkers />
      {logo.type === "moonDao" ? (
        <span className="inline-grid h-6 w-[123px] grid-cols-[auto_auto] items-center justify-center">
          <img className="block h-[23.978px] w-[24.456px] object-contain" src={logo.mark} alt="" />
          <img className="block h-[14.434px] w-[98.539px] object-contain" src={logo.wordmark} alt={logo.name} />
        </span>
      ) : (
        <img className={`block max-w-[calc(100%_-_28px)] object-contain ${logo.className}`} src={logo.src} alt={logo.name} />
      )}
    </button>
  );
}

export function PartnerSectionTailwind() {
  return (
    <section className="mx-auto w-full max-w-[1253px] bg-transparent text-white" aria-labelledby="partners-title" data-animate="partners-section">
      <header className="mb-[27px] flex w-full flex-col items-start justify-between gap-3.5 sm:flex-row sm:items-center sm:gap-8">
        <div className="inline-flex min-w-0 items-center gap-3">
          <img className="block h-[15px] w-[13px] shrink-0 object-contain" src={`${ASSET_BASE}/partner-mark.svg`} alt="" />
          <h2
            className="m-0 whitespace-nowrap font-['Clesmont','Geist',Arial,sans-serif] text-[26px] font-bold uppercase leading-[1.1] text-white max-[420px]:text-2xl"
            id="partners-title"
          >
            PARTNERS
          </h2>
        </div>
        <p className="m-0 whitespace-nowrap text-left font-[var(--font-geist)] text-base leading-[1.4] text-white/80 sm:text-right max-[420px]:text-sm">
          PROGRAM &amp; PRODUCT
          <br />
          PARTNERS WE SUPPORT
        </p>
      </header>

      <div className="group/logos grid w-full grid-cols-1 gap-3.5 min-[421px]:grid-cols-2 min-[721px]:grid-cols-4 min-[1201px]:grid-cols-7 min-[1201px]:gap-x-[21px] min-[1201px]:gap-y-4">
        {partnerLogos.map((logo, index) => (
          <PartnerLogoTile logo={logo} key={`${logo.name}-${index}`} />
        ))}
      </div>
    </section>
  );
}

export default PartnerSectionTailwind;
