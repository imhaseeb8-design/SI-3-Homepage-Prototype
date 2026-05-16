const ASSET_BASE = "/si-assets";

const productTabs = ["Web3 Identity", "AI Agent", "Certifications"];

const products = [
  {
    title: "Siher.eth",
    description: "Personal brand publisher designed for our Si Her DAO members to showcase their Web3 identities.",
    cta: "Explore Si Her Publisher",
    tags: ["Si Her"],
    preview: "siher",
  },
  {
    title: "KAIA AI Agent",
    description: "Match-making & knowledge-sharing agent powering accelerated ecosystem connectivity and learning.",
    cta: "Explore KAIA",
    tags: ["Si Her", "Grow3dge"],
    preview: "kaia",
  },
  {
    title: "SI U Certifications",
    description: "On-chain certifications for our incubator and cybersecurity programs",
    cta: "Explore Certifications",
    tags: ["Grow3dge", "Well-Being"],
    preview: "certificate",
  },
] as const;

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

function ProductTab({ label, active }: { label: string; active: boolean }) {
  return (
    <button
      className={`relative h-[60px] w-[223px] border border-white/30 bg-black/20 font-['Clesmont','Geist',Arial,sans-serif] text-lg uppercase leading-[1.3] text-white backdrop-blur-[10px] transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none ${
        active ? "opacity-100" : "opacity-30"
      }`}
      type="button"
      aria-pressed={active}
      data-animate="products-tab"
    >
      <CornerMarkers />
      {label}
    </button>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex h-[26px] items-center justify-center rounded-full border border-[#5e5e5e] bg-black/20 px-[13px] font-[var(--font-geist-mono)] text-xs leading-none tracking-[0.72px] text-white">
      {children}
    </span>
  );
}

function ProductCta({ children }: { children: string }) {
  return (
    <a
      className="group inline-flex w-max flex-col items-start gap-[9px] font-[var(--font-geist)] text-base font-medium leading-none text-white no-underline"
      href="#"
      data-animate="products-cta"
    >
      <span className="inline-flex items-center gap-1.5">
        {children}
        <img
          className="size-2 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          src={`${ASSET_BASE}/si-inline-arrow.svg`}
          alt=""
        />
      </span>
      <span className="h-px w-11 bg-white transition-[width] duration-150 group-hover:w-full" aria-hidden="true" />
    </a>
  );
}

function SiHerPreview() {
  return (
    <div className="relative aspect-[562/537] w-full overflow-hidden rounded bg-[#eceef3]" data-animate="product-preview">
      <div className="relative h-[23px] w-full bg-[#eef0f2]">
        <span className="absolute left-[6px] top-[8px] h-[6px] w-[24px] rounded-full bg-[#b8bcc5]" aria-hidden="true" />
        <span className="absolute left-1/2 top-[6px] h-[10px] w-[74px] -translate-x-1/2 rounded-sm bg-[#e0e2e6]" aria-hidden="true" />
        <span className="absolute left-1/2 top-[7px] -translate-x-1/2 font-[var(--font-geist)] text-[6px] font-medium leading-none text-black/40">
          siher.eth
        </span>
      </div>
      <img
        className="block h-[calc(100%_-_23px)] w-full object-cover object-top"
        src={`${ASSET_BASE}/products-siher-publisher.png`}
        alt="Si Her publisher website interface"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[166px] bg-gradient-to-b from-transparent to-black/20" aria-hidden="true" />
    </div>
  );
}

function KaiaPreview() {
  return (
    <div className="relative aspect-[562/539] w-full overflow-hidden rounded bg-[#a78eff]" data-animate="product-preview">
      <img
        className="block size-full object-cover"
        src={`${ASSET_BASE}/products-kaia-agent.png`}
        alt="KAIA AI agent portrait"
      />
    </div>
  );
}

function CertificatePreview() {
  return (
    <div
      className="relative grid aspect-[562/537] w-full place-items-center overflow-hidden rounded bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.56),transparent_24%),radial-gradient(circle_at_72%_26%,rgba(207,188,255,0.78),transparent_29%),linear-gradient(137deg,#8465f5_0%,#bca9ff_43%,#332070_100%)]"
      data-animate="product-preview"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[78%] bg-gradient-to-t from-[#2e205f]/80 via-[#4d3396]/20 to-transparent" aria-hidden="true" />
      <div className="relative flex h-[416px] w-[375px] max-w-[78%] flex-col rounded-[10px] bg-gradient-to-b from-[#331171]/45 to-[#a78eff]/0 px-[50px] py-[33px] text-white shadow-[0_24px_70px_rgba(0,0,0,0.24)] max-sm:h-auto max-sm:max-w-[88%] max-sm:px-7 max-sm:py-8">
        <h3 className="m-0 whitespace-nowrap font-[var(--font-geist)] text-[19.5px] font-medium leading-[1.25] max-sm:text-base">
          Claim Your Onchain Certificate
        </h3>
        <div className="mt-6 flex h-[38px] items-center gap-[13px] rounded-md bg-white/20 px-[18px] font-[var(--font-geist)] text-[14.5px] font-medium">
          <span className="grid size-4 place-items-center rounded-full bg-[#58d979] text-[10px] text-white" aria-hidden="true">
            &#10003;
          </span>
          Wallet Connected
        </div>
        <div className="mt-3 rounded-md bg-white/10 px-[18px] py-[13px]">
          <p className="m-0 font-[var(--font-geist)] text-[13px] leading-none text-[#e9e9e9]">Enter or select a display handle</p>
          <div className="my-2 h-px bg-white/30" aria-hidden="true" />
          <p className="m-0 font-[var(--font-geist)] text-[14.5px] font-medium leading-none">@stellarocks</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-y-3 font-[var(--font-geist)] text-[11.4px] leading-[1.25]">
          <p className="col-span-2 m-0 text-[13px] font-medium">Certificate Details</p>
          <p className="m-0">Marketing Foundations</p>
          <p className="m-0 text-right">30 June, 2026</p>
          <p className="m-0">Stella Rocks</p>
          <p className="m-0 text-right">Grow3dge Builder Incubator</p>
        </div>
        <label className="mt-5 inline-flex items-center gap-1.5 font-[var(--font-geist)] text-[11.4px] leading-none">
          <span className="grid size-2 rounded-[2px] bg-white text-[6px] text-[#6d32ea]" aria-hidden="true">
            &#10003;
          </span>
          I confirm this wallet for minting my certificate
        </label>
        <button className="mt-auto h-[33px] rounded-md bg-white font-[var(--font-geist)] text-[13px] font-medium text-[#6d32ea] shadow-[0_10px_13px_rgba(0,0,0,0.15)]" type="button">
          Mint My Certificate
        </button>
      </div>
    </div>
  );
}

function ProductPreview({ type }: { type: (typeof products)[number]["preview"] }) {
  if (type === "siher") return <SiHerPreview />;
  if (type === "kaia") return <KaiaPreview />;
  return <CertificatePreview />;
}

export function ProductsSectionTailwind() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 text-white sm:px-6 lg:px-[60px]"
      aria-labelledby="products-title"
      data-node-id="40:18"
      data-animate="products-section"
    >
      <div className="mx-auto flex max-w-[1256px] flex-col gap-[106px] max-lg:gap-14">
        <header className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="relative w-full max-w-[488px]">
            <img className="absolute left-0 top-[11px] h-[15px] w-[13px] object-contain" src={`${ASSET_BASE}/partner-mark.svg`} alt="" />
            <h2
              className="m-0 pl-8 font-['Clesmont','Geist',Arial,sans-serif] text-[32px] font-bold uppercase leading-[1.2] text-white max-sm:text-[28px]"
              id="products-title"
            >
              <span className="text-[#bca9ff]">Real-world</span> AI &amp; Web3
              <br />
              Applications
            </h2>
          </div>

          <div className="flex w-full max-w-[379px] flex-col items-start gap-5 md:items-end">
            <p className="m-0 font-[var(--font-geist)] text-lg leading-[1.4] text-white md:text-right">
              Tools that support professional on-chain learning and growth, connection, and growth.
            </p>
            <ProductCta>Explore Products</ProductCta>
          </div>
        </header>

        <div className="flex w-full items-start gap-[91px] max-lg:flex-col max-lg:gap-10">
          <div className="sticky top-24 flex w-[223px] shrink-0 flex-col gap-2 max-lg:static max-lg:w-full max-lg:flex-row max-lg:overflow-x-auto">
            {productTabs.map((tab, index) => (
              <ProductTab active={index === 0} label={tab} key={tab} />
            ))}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-[47px]">
            {products.map((product) => (
              <article
                className="grid w-full grid-cols-[minmax(360px,562px)_minmax(260px,348px)] items-end gap-[31px] max-md:grid-cols-1 max-md:items-start"
                data-animate="product-row"
                key={product.title}
              >
                <ProductPreview type={product.preview} />
                <div className="flex w-full flex-col items-start gap-[22px] text-white">
                  <div className="flex flex-col items-start gap-3">
                    {product.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="flex w-full flex-col gap-2.5">
                    <h3 className="m-0 font-['Clesmont','Geist',Arial,sans-serif] text-[26px] font-bold uppercase leading-[1.2]">
                      {product.title}
                    </h3>
                    <p className="m-0 font-[var(--font-geist)] text-[17px] leading-[1.4] text-white">{product.description}</p>
                  </div>
                  <ProductCta>{product.cta}</ProductCta>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSectionTailwind;
