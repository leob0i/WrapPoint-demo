import MainHeader from "../MainHeader";
import Image from "next/image";

export const metadata = {
  title: "Graafinen suunnittelu – Tarrat, teipit ja vaatepainatukset | Wrap Point",
  description:
    "Wrap Point suunnittelee ja valmistaa custom tarrat, mainosteipit ja vaatepainatukset. Lähetä kuva tai PDF-luonnos – teemme juuri sinun toiveesi mukaan.",
  alternates: {
    canonical: "https://www.wrappoint.fi/graafinen",
  },
  openGraph: {
    title: "Graafinen suunnittelu – Wrap Point",
    description:
      "Custom tarrat, kylkitarrat, banderollit ja vaatepainatukset. Ota yhteyttä ja pyydä tarjous.",
    url: "https://www.wrappoint.fi/graafinen",
    siteName: "Wrap Point",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "https://www.wrappoint.fi/gallery/pikku.tarrat.jpg",
        width: 1200,
        height: 630,
        alt: "Graafinen suunnittelu – tarrat ja teipit",
      },
    ],
  },
};

export default function GraafinenSuunnitteluPage() {
  return (
    <>
      <MainHeader />

      <main className="bg-slate-950 text-slate-50">

        {/* HERO – Graafinen suunnittelu */}
        <section className="relative border-b border-white/10 overflow-hidden">
          {/* Taustakuva – ei koko sivun kokoinen */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/pikku.tarrat.jpg"
              alt="Graafinen suunnittelu – tarrat, teipit ja vaatepainatukset"
              fill
              priority
              sizes="100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/75" />
          </div>

          {/* Hero-sisältö – keskitetty, kohtuullinen korkeus */}
          <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28 md:pb-20">
            <div className="max-w-3xl space-y-4 mt-12 md:mt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="text-amber-300">Graafinen</span> suunnittelu
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200">
              Valmistamme tarroja, kalvoja ja vaatepainatuksia toiveidesi mukaan.
            </p>
            </div>
          </div>
        </section>

{/* OSIO 1 – Custom grafiikka autoon */}
        <section className="">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
              <div className="space-y-4 text-sm leading-relaxed text-slate-100 sm:text-base">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Custom grafiikka autoon
                </h2>
                <p>
                  Toteutamme isompien ja vaativienkin kokonaisuuksien toteutuksen, kuten custom grafiikka auton yliteippaukseen.
                </p>
                <p>
                  Autamme tarvittaessa suunnittelussa ja jokainen työmme on meille ainutlaatuinen.
                </p>
                <p className="text-lg sm:text-xl font-medium text-slate-50 mt-12">
                  Voit lähettää meille kuvan tai PDF-dokumentin ideastasi,<br /> ja otamme sinuun yhteyttä!
                </p>
                <a
                  href="#yhteydenotto"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
                >
                  Lähetä kuva/PDF
                </a>
              </div>

              <div className="relative h-72 sm:h-80 md:h-[22rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70">
                <Image
                  src="/gallery/bmw.sivu.custom.kokobody.webp"
                  alt="Custom grafiikka autoon"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"  
                  loading="lazy"                             
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
              </div>
            </div>
          </div>
        </section>


        {/* OSIO 2 – Custom tarrat autoihin */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 pt-0 pb-12 md:pb-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Mitä vain mieleesi juolahtaa!
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Suunnittelemme ja valmistamme custom tarrat juuri sinun toiveidesi mukaan.
                Isot kylkitarrat, tuulilasin banderollit, sponsori- ja mainostarrat.
              </p>
              <p className="text-sm sm:text-base text-slate-200">
                Meiltä onnistuu myös vaatepainatukset vaikka tiimeille, yrityksellesi tai itsellesi.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
  src="/gallery/pikku.tarrat.jpg"
  alt="Tarrat omalla kuvalla"
  fill
  sizes="(max-width: 640px) 100vw, 33vw"   
  loading="lazy"                             
  className="h-full w-full object-cover"
/>
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-lg font-semibold text-slate-100">
                  Valmistamme tarroja joka lähtöön!
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/paku.rengascenter.jpg"
                  alt="Mainostarrat"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"  
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-lg font-semibold text-slate-100">
                  Mainostarrat
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/services/wrap.point.musta.jpg"
                  alt="Tekstiilipainatukset"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"  
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-lg font-semibold text-slate-100">
                  Vaatepainatukset
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
                  src="/gallery/bmw.pinkki.harmaa.jpg"
                  alt="BMW pinkki harmaa teippaus"
                  fill
                   sizes="(max-width: 768px) 100vw, 420px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1">
                <Image
                  src="/gallery/bmw.pinkki.harmaa.reflex.jpg"
                  alt="BMW custom teippaus"
                  fill
                   sizes="(max-width: 768px) 100vw, 420px"
                    loading="lazy"
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
                miten voimme toteuttaa uniikitkin pyynnöt. </p><p className="text-sm sm:text-base leading-relaxed text-slate-300"><br />
                Tässä bemarissa ei näy teipin saumoja,
                 vaikka auton takaosa heijastaa valoa ja etuosan teipit ei. 
                Sama yhtenäinen rakenne, laadukas asennus ja materiaalit ovat meille ykkösiä!
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

        {/* Yhteydenottolomake */}
        <section id="yhteydenotto" className="relative bg-slate-950 py-16 md:py-20">

          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/bmw.custom.jokeri.webp"
              alt="Wrap Point – auton teippaus ja graafinen suunnittelu"
              fill
               sizes="100vw"    
               loading="lazy"  
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4">
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Pyydä tarjous tai kysy lisää{" "}
                <span className="text-amber-300">
                  tarroista, teipeistä ja vaatepainatuksista
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                Kerro lyhyesti mitä haluat: custom tarra autoihin, mainos, vaatepainatus
                tai muu graafinen työ. Voit valita alta, mikä palvelu kiinnostaa eniten –
                ja halutessasi voit liittää kuvan, luonnoksen tai PDF-tiedoston mukaan.
                Palaamme sinulle mahdollisimman pian.
              </p>
            </div>

            <form className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl backdrop-blur">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5 text-sm">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Nimi
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-amber-400"
                    placeholder="Etunimi Sukunimi"
                  />
                </div>

                <div className="space-y-1.5 text-sm">
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Yritys (valinnainen)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                    placeholder="Yrityksen nimi"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5 text-sm">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Sähköposti
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                    placeholder="nimi@yritys.fi"
                  />
                </div>

                <div className="space-y-1.5 text-sm">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Puhelin
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                    placeholder="Puhelinnumero"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5 text-sm">
                  <label
                    htmlFor="type"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Kiinnostuksen kohde
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                  >
                    <option value="">Valitse aihe</option>
                    <option>Auton yliteippaus</option>
                    <option>Tummennukset</option>
                    <option>Sisäpuhdistus</option>
                    <option>Graafinen suunnittelu</option>
                    <option>Kiinteistöt</option>
                    <option>Vaatepainatukset</option>
                  </select>
                </div>

                {/* Tiedoston liittäminen */}
                <div className="space-y-1.5 text-sm">
                  <label
                    htmlFor="attachment"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Liitä tiedosto (valinnainen)
                  </label>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept="image/*,application/pdf"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 file:mr-3 file:rounded-lg file:border-0 file:bg-amber-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-950 hover:file:bg-amber-400"
                  />
                  <p className="text-[11px] text-slate-400">
                    Voit liittää kuvan, luonnoksen tai PDF-tiedoston, joka auttaa
                    hahmottamaan kohdetta.
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 text-sm">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Kerro kohteesta ja toiveista
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                  placeholder="Kuvaile lyhyesti mitä tarvitset: tarra autoihin, painatukset vaatteisiin, koko, määrä, toivottu tyyli..."
                />
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-relaxed text-slate-400">
                  Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä
                  tarjouksen ja lisäkysymysten kanssa.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
                >
                  Lähetä tarjouspyyntö
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>
    </>
  );
}
