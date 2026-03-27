import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";



const galleryImages = [
  {
    src: "/gallery/bmw.custom.jokeri.webp",
    alt: "Custom jokeri teippaus autoon.",
    
  },
  {
    src: "/gallery/bmw.wagon.redbull.webp",
    alt: "Wagon red bull teippaus",
    
  },
  {
    src: "/gallery/bmw.custom.kuviot.webp",
    alt: "Custom bemarin vihertävä teippaus",
    
  },
  {
    src: "/gallery/bmw.custom.JPG",
    alt: "BMW custom teippaus.",
    
  },
  {
    src: "/gallery/tesla.matta.chrome.delete.jpg",
    alt: "Mattamusta tesla.",
   
  },
  {
    src: "/gallery/pinkki.audi.lokari.webp",
    alt: "Audi pinkki teippaus.",
    
  },
  {
    src: "/gallery/rengas.center.banderolli.jpg",
    alt: "Iso banderolli",
    
  },
  {
    src: "/gallery/liuku.ovi.jpg",
    alt: "Mainosteipattu liukuovi",
    
  },
  {
    src: "/gallery/vene.teippi.jpg",
    alt: "Buster veneen teippaus",
    
  },
  {
    src: "/gallery/vene.teippi.keskeneräinen.webp",
    alt: "Iso teipattava vene",
    
  },
  {
    src: "/gallery/pikku.tarrat.jpg",
    alt: "Custom tarroja",
    
  },
  {
    src: "/gallery/pieni.custom.tarra.png",
    alt: "Tarroja tilauksesta",
    
  },
];

export default function GalleriaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HEADER tulee globaalisti MainHeader-komponentista layoutista */}

      {/* INTRO + 3 KUVA -OSIO */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* Taustakuva + tumma overlay */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/gallery/bmw.sivu.custom.kokobody.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
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
                Alla näet esimerkkejä eri projekteista. 
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
  <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/gallery/bmw.sivu.tarra.png"
                    alt="Täysmatta yliteippaus urheiluautoon."
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-3 pt-2 text-xs sm:text-sm">
                  <span className="font-medium text-slate-100">
                    Custom teippaus
                  </span>
                </div>
              </div>

              {/* Kaksi pienempää kuvaa */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/gallery/paku.rengascenter.jpg"
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
                    src="/gallery/ovensisapinta.jpg"
                    alt="Porschen teippaus korosteväreillä."
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-3 pb-2 pt-1 text-[11px] text-slate-100">
                  Myös yksityiskohdat ratkaisevat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KUVABOXI + TEKSTI -OSIO */}
      <section className="relative bg-slate-950 py-16 md:py-20 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

            {/* Vasen: neliölaatikko kahdella kuvalla, terävät kulmat, ei rakoa kuvien väliin */}
            <div className="w-full md:w-[420px] flex-shrink-0 aspect-square overflow-hidden flex flex-col">
              <div className="relative flex-1">
                <Image
                  src="/gallery/bmw.pinkki.harmaa.JPG"
                  alt="BMW pinkki harmaa teippaus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1">
                <Image
                  src="/gallery/bmw.pinkki.harmaa.reflex.jpg"
                  alt="BMW custom teippaus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Oikea: tekstikenttä */}
            <div className="space-y-5 max-w-lg">
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-amber-300">Designia</span> jota et saa muualta

              </h2>
              <p className="text-base sm:text-lg font-bold leading-relaxed text-slate-300">
                Reflexoivalla teipillä teipattu bemari on hyvä esimerkki siitä,
                miten voimme toteuttaa uniikitin pyynnöt. </p><p className="text-sm sm:text-base leading-relaxed text-slate-300"><br />
                Tässä bemarissa ei näy teipin saumoja,
                 vaikka auton takaosa heuijjastaa valoa ja etuosan teipit ei. 
                Sama yhtenäinen rakenne ja laadukas asennus ja materiaalit ovat meille yökkösiä.
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                Käytämme ainoastaan laadukkaita materiaaleja, jotka kestävät
                aikaa ja säätä. Ammattitaitoinen asennus takaa, ettei
                lopputuloksessa näy kuplia, saumoja tai epätasaisuuksia ja kestää pitkään.
              </p>
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
              Toteutuksia vuosien varrelta, erilaisista autoista ja tarpeista.
            </h2>
            
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
