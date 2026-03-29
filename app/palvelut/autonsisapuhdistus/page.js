import MainHeader from "../../MainHeader";
import Image from "next/image";


export const metadata = {
  title: "Auton sisäpuhdistus Vantaa – Henkilöauto ja pakettiauto | Wrap Point",
  description:
    "Wrap Point puhdistaa auton sisätilat Vantaalla. Sisäpuhdistus alk. 34,90 €. Kangas-, mokka- ja nahkaistuimet – pyydä tarjous!",
  alternates: {
    canonical: "https://www.wrappoint.fi/palvelut/autonsisapuhdistus",
  },
  openGraph: {
    title: "Auton sisäpuhdistus – Wrap Point Vantaa",
    description:
      "Sisäpuhdistus alk. 34,90 €. Henkilöauto, pakettiauto tai muu ajoneuvo – me hoidamme sen.",
    url: "https://www.wrappoint.fi/palvelut/autonsisapuhdistus",
    siteName: "Wrap Point",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "https://www.wrappoint.fi/gallery/bmw.etupenkit.2.webp",
        width: 1200,
        height: 630,
        alt: "Auton sisäpuhdistus – Wrap Point Vantaa",
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
              src="/gallery/bmw.etupenkit.2.webp"
              alt="Auton sisäpuhdistus."
              fill
              priority
              sizes="100vw"   
              className="h-full w-full object-cover"
            />
            {/* Tumma overlay + liukuväri, että teksti erottuu */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
          </div>

          {/* Varsinainen sisältö */}
          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">

            <div className="max-w-xl space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Anna itsellesi ripaus{" "}
                <span className="text-amber-300">
                 ajomukavuutta!
                </span>
                
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-lg">
                Oli sitten autosi ainoastaan imurointia vailla tai kuin
                pyörremyrskyn jäljiltä, me hoidamme sen. Pesemme myös sekä
                kangas-, mokka- ja nahkaistuimet.
              </p>

              <p className="text-sm sm:text-base text-slate-200 max-w-lg">
                Putsaamme kaikki kulkuneuvot, oli sitten kyseessä pakettiauto,
                henkilöauto taikka muu vehje! Me putsaamme sen kaikista
                epäpuhtaukista!
              </p>

              <p className="text-sm sm:text-base font-semibold text-amber-300">
                Auton sisäpuhdistus alk. 34,90€
              </p>

              
            </div>
          </div>
        </section>

        {/* Yhteydenottolomake */}
        <section className="relative bg-slate-950 py-16 md:py-20">
          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/bmw.sisa.ratti.webp"
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
                Pyydä tarjous{" "}
                <span className="text-amber-300">
                  sisäpuhdistuksesta
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                Kerro lyhyesti ajoneuvostasi ja toivotusta puhdistuksen tasosta.
                Voit mainita myös ajoneuvon tyyppi ja kunto – palaamme sinulle
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
                    <option>Auton sisäpuhdistus</option>
                    <option>Vaatepainatukset</option>
                    <option>Toimitilateippaukset ja ikkunateippaukset</option>
                    <option>Kuvan ja teippauksen suunnittelu</option>
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
