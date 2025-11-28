
import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function ToimitilatJaIkkunatPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO – toimitilat, ikkunat ja lasipinnat */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* Taustakuva – vaihda omaksi */}
        <div className="absolute inset-0">
          <Image
            src="/services/Julkisivu.jpg"
            alt="Visual Wraps toimitilateippaukset ja ikkunateippaukset"
            fill
            priority
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Hero-tekstit */}
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex rounded-full bg-amber-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Toimitilateippaukset & ikkunateipit
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Tee toimitiloista{" "}
              <span className="text-amber-300">
                näkyvä ja toimiva mainospinta.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200/85">
              Ikkunateippaukset, lasiseinät, neuvotteluhuoneet ja muut
              toimitilat muutetaan brändätyiksi pinnoiksi – samalla voidaan
              lisätä yksityisyyttä ja aurinkosuojaa.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#yhteys"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200"
              >
                Kysy tarjous toimitilaan
              </a>
              <p className="text-xs sm:text-sm text-slate-300/80">
                Voit liittää kuvan julkisivusta tai ikkunasta helpottamaan
                suunnittelua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tyypilliset kohteet */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] items-start">
            {/* Tekstipuoli */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Näkyvyyttä ulospäin,{" "}
                <span className="text-amber-300">rauhaa sisälle.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300/90">
                Toimitilateippaukset yhdistävät mainonnan ja käytännöllisyyden.
                Saamme lasipinnat näyttämään kiinnostavilta, samalla kun
                huoneisiin saadaan yksityisyyttä ja häikäisyä pois.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Liiketilojen ikkunat
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Liikkeen logot, kampanjateippaukset ja pysyvät
                    brändielementit julkisivuun.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Neuvotteluhuoneet
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Huurrekalvot, logot ja teippaukset, jotka estävät katseet
                    mutta päästävät valon läpi.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Sisätilojen lasiseinät
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Osasto- ja tiimijaot, huonenumeroinnit ja selkeät
                    kulkuopasteet.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Aurinko- ja suojakalvot
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Lämpöä ja häikäisyä vähentävät kalvot työpisteiden
                    ikkunoihin ja näyttöjen taakse.
                  </p>
                </div>
              </div>
            </div>

            {/* Kuvapuoli / esimerkkilayout */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
                <Image
                  src="/services/Julkisivu.jpg"
                  alt="Esimerkki toimitilateippauksesta"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-200/90">
                    Esimerkki toteutuksesta
                  </p>
                  <p className="text-sm sm:text-base text-slate-50">
                    Brändätty julkisivu, joka erottuu kadulta ja ohjaa asiakkaat
                    oikeaan paikkaan.
                  </p>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300/90">
                <li>• Suunnittelu logojen, värien ja kampanjoiden mukaan</li>
                <li>• Toteutus kohteessa tai valmiina teippisarjana</li>
                <li>• Mahdollisuus helposti vaihdettaviin kampanjapintoihin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            {/* Yhteydenottolomake */}
      <section className="relative bg-slate-950 py-16 md:py-20">
        {/* Taustakuva */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/rautaranta.avif" // Taustakuva
            alt="Taustakuva kylteistä ja banderolleista."
            fill
            className="h-full w-full object-cover"
          />
          {/* Tumma overlay, että lomake erottuu */}
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
      
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pyydä tarjous tai kysy lisää{" "}
              <span className="text-amber-300">
                toimitila- ja ikkunateippauksista
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
              Kerro lyhyesti toimitiloista, julkisivusta tai ikkunapinnoista sekä
              toivotusta ratkaisusta. Voit valita alta, mikä palvelu kiinnostaa
              eniten – ja halutessasi voit liittää kuvan ikkunasta, lasiseinästä
              tai julkisivusta helpottamaan suunnittelua. Palaamme sinulle
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
                  Kiinnostuksen kohde
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                >
                  <option value="">Valitse aihe</option>
                  <option>Auton yliteippaus</option>
                  <option>Mainosteippaukset</option>
                  <option>Custom tarrat</option>
                  <option>Kyltit ja banderollit</option>
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
                placeholder="Kuvaile lyhyesti kohde (auto, liiketila, kyltti tms.), toivottu lopputulos, aikataulu ja budjettiraami..."
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
  );
}
