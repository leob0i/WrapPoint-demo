import MainHeader from "../../MainHeader";
import Image from "next/image";


export const metadata = {
  title: "PPF-suojaus Vantaa – Auton maalipinnan suojaus | Wrap Point",
  description:
    "Wrap Point asentaa PPF-kalvon Vantaalla. Näkymätön suoja naarmuilta ja kiveniskuilta – saatavilla kiiltävänä, mattana ja eri väreissä. Pyydä tarjous!",
  alternates: {
    canonical: "https://www.wrappoint.fi/palvelut/ppf",
  },
  openGraph: {
    title: "PPF-suojaus – Wrap Point Vantaa",
    description:
      "PPF-kalvo suojaa maalipintaa naarmuilta ja kiveniskuilta huomaamattomasti. Saatavilla kiiltävänä, mattana ja eri väreissä.",
    url: "https://www.wrappoint.fi/palvelut/ppf",
    siteName: "Wrap Point",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "https://www.wrappoint.fi/gallery/ppf.webp",
        width: 1200,
        height: 630,
        alt: "PPF-suojaus – Wrap Point Vantaa",
      },
    ],
  },
};

export default function AutonSisapuhdistusPage() {
  return (
    <>
      <MainHeader />

      <main className="bg-slate-950 text-slate-50">
        {/* HERO – Auton sisäpuhdistus */}
        <section className="relative border-b border-white/10 overflow-hidden">
          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/ppf.webp"
              alt="Auton ppf-suojaus."
              fill
              priority
              sizes="100vw"   
              className="h-full w-full object-cover"
            />
            {/* Tumma overlay + liukuväri, että teksti erottuu */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
          </div>

          {/* Varsinainen sisältö */}
          <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28 md:pb-20 min-h-[60vh] flex flex-col justify-end">

            <div className="max-w-xl space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Suojateippaus eli{" "}
                <span className="text-amber-300">
                 PPF
                </span>

              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-lg">
                Kalvo suojaa ajoneuvoasi tien päällä. Se on paksumpi ja joustavampi kuin tavallinen teippi, sekä sen hydrofobinen pinta hylkii vettä ja likaa. Kalvo omaa myös "self healing" ominaisuuden.
              </p>
            </div>
          </div>
        </section>


         {/* Hyödyt + vaihtoehdot */}
        <section className="bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-start">
        
              {/* Tekstipuoli */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300/90">
        
                {/* Otsikko kahdelle riville – sama tyyli kuin yliteippaus */}
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.6rem] font-semibold tracking-[0.05em] uppercase text-slate-50">
                  <span className="text-amber-300">Suojaa</span> huomaamatta
                </h2>
        
                
                <p></p>PPF säilyttää maalipinnan täydellisenä ja näin ollen jälleenmyyntiarvokin säilyy parempana. PPF kalvo on lähes huomaamaton. Asennetaan tyypillisesti alueille jotka ovat alttiina kovalle rasitukselle (etupuskuri, konepelti, ajovalot, helmat)
                <br></br> <br></br>
                <p className="text-sm sm:text-base font-semibold text-amber-300">
                Saatavilla kiiltävänä ja mattana, läpinäkyvänä sekä eri väreissä.
              </p>
              </div>
        
              {/* Kuvapuoli */}
              <div className="space-y-5 md:pl-4 lg:pl-8">
                <div className="relative h-80 sm:h-[22rem] md:h-[23rem] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900/70">
                  <Image
                    src="/gallery/ppf.sivu.webp"
                    alt="Esimerkki PPF-kalvosta"
                    fill
                     sizes="(max-width: 768px) 100vw, 50vw"   
                      loading="lazy"  
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  
                </div>
              </div>
        
            </div>
          </div>
        </section>

        {/* Yhteydenottolomake */}
        <section className="relative bg-slate-950 py-16 md:py-20">
          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/bmw.lokari.webp"
              alt="Taustakuva auton sisäpuhdistuksesta."
              fill
               sizes="100vw"    
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Tumma overlay, että lomake erottuu */}
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4">
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Pyydä tarjous ajoneuvon{" "}
                <span className="text-amber-300">
                  suojauksesta
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                Kerro lyhyesti ajoneuvostasi ja toivotusta suojauksen tasosta.
                Voit mainita myös ajoneuvon merkin ja mallin. Palaamme sinulle
                mahdollisimman pian.
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
                    Aihe
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                  >
                    <option value="">Valitse aihe</option>
                    <option>Auton yliteippaus</option>
                    <option>Ikkunan tummennukset</option>
                    <option>Custom- ja mainos tarrat</option>
                    <option>PPF-suojaus</option>
                    
                    <option>Toimitilateippaukset ja ikkunateippaukset</option>

                    <option>Muu</option>
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
                  placeholder="Ajoneuvon tyyppi (henkilöauto, pakettiauto, muu), kunto ja toivottu puhdistuksen taso..."
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
