import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";



const galleryImages = [
  {
    src: "/gallery/gtr-perse.jpg",
    alt: "Täysmatta yliteippaus urheiluautoon.",
    title: "Täysmatta yliteippaus",
    label: "Auton yliteippaus",
  },
  {
    src: "/gallery/mustapaku.jpg",
    alt: "Yrityspaku näyttävällä mainosteippauksella.",
    title: "Yrityspakun mainosteippaus",
    label: "Mainosteippaus",
  },
  {
    src: "/gallery/porsche-orange.jpg",
    alt: "Porschen teippaus korosteväreillä.",
    title: "Korosteteipit & yksityiskohdat",
    label: "Detailing & stripe",
  },
  {
    src: "/gallery/jdm.jpg",
    alt: "JDM-tyylinen teippaus drift-autossa.",
    title: "JDM & drift-teippaukset",
    label: "Custom design",
  },
  {
    src: "/gallery/mustapaku.jpg",
    alt: "Logo ja yhteystiedot pakettiautossa.",
    title: "Logo & yhteystiedot",
    label: "Yritysauto",
  },
  {
    src: "/gallery/gtr-perse.jpg",
    alt: "Sporttiauton takaviisto näkymä yliteippauksella.",
    title: "Kokonaisuuden viimeistely",
    label: "Premium wrap",
  },
];

export default function GalleriaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HEADER tulee globaalisti MainHeader-komponentista layoutista */}

      {/* INTRO + 3 KUVA -OSIO */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* Taustagradientti, että sivu näyttää “premiumilta” */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.10),_rgba(15,23,42,1))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(8,47,73,0.45),_transparent)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-center">
            {/* Tekstit */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                GALLERIA
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Teippaukset, jotka{" "}
                <span className="text-amber-300">
                  erottuvat kadulla ja somessa
                </span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Wrap Point suunnittelee ja toteuttaa näyttävät yliteippaukset,
                mainosteippaukset, kiinteistöteippaukset sekä yksityiskohdat, jotka keräävät katseet.
                Alla näet esimerkkejä eri projekteista – sporttiautoista
                yrityspakuihin.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Kaikki toteutukset suunnitellaan auto ja brändi edellä. Värit,
                linjat ja yksityiskohdat mietitään niin, että lopputulos on
                yhtenäinen ja laadukkaan näköinen.
              </p>
            </div>

            {/* 3 kuvan mosaiikki */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Iso pääkuva */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-[0_22px_60px_rgba(0,0,0,0.65)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/gallery/gtr-perse.jpg"
                    alt="Täysmatta yliteippaus urheiluautoon."
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-3 pt-2 text-xs sm:text-sm">
                  <span className="font-medium text-slate-100">
                    Täysmatta yliteippaus
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-amber-300">
                    Premium wrap
                  </span>
                </div>
              </div>

              {/* Kaksi pienempää kuvaa */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/gallery/mustapaku.jpg"
                    alt="Yrityspaku näyttävällä mainosteippauksella."
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-3 pb-2 pt-1 text-[11px] text-slate-100">
                  Mainosteipattu yrityspaku
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/gallery/porsche-orange.jpg"
                    alt="Porschen teippaus korosteväreillä."
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-3 pb-2 pt-1 text-[11px] text-slate-100">
                  Korostevärit & yksityiskohdat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VARSINAINEN GALLERIA – ENEMMÄN KUVIA */}
      <section className="relative bg-slate-950 py-14 md:py-18">
        {/* Kevyt taustatekstuuri */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),_transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(8,47,73,0.45),_transparent)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
              Toteutuksia eri{" "}
              <span className="text-amber-300">autoista ja projekteista</span>
            </h2>
            <p className="max-w-md text-xs sm:text-sm text-slate-400">
              Alla esimerkkejä yliteippauksista, mainosteippauksista ja
              yksityiskohtien viimeistelystä. Selaa ja poimi ideoita omaan
              projektiisi – toteutamme sekä hillityt että todella rohkeat
              kokonaisuudet.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {galleryImages.map((image, idx) => (
              <figure
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_22px_60px_rgba(0,0,0,0.85)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 pb-2 pt-1 text-[11px] sm:text-xs text-slate-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-medium line-clamp-1">
                    {image.title}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-amber-300/90">
                    {image.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
