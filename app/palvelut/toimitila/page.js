import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function KiinteistokalvotPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <MainHeader />

      {/* HERO – kiinteistökalvot */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services/Julkisivu.jpg"
            alt="Kiinteistökalvot lasipinnoille ja ikkunoihin"
            fill
            priority
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex rounded-full bg-amber-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Kiinteistökalvot
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Lasipinnoista{" "}
              <span className="text-amber-300">toimivammat, siistimmät</span>{" "}
              ja turvallisemmat.
            </h1>

            <p className="text-sm sm:text-base text-slate-200/85">
              Toteutamme kaikki kiinteistöön liittyvät kalvotukset:
              näkösuojat, mainokset, aurinkosuojat, turvakalvot, sisustus- ja
              brändikalvotukset sekä opasteet lasipinnoille. Ratkaisu valitaan
              aina kohteen ja käyttötarpeen mukaan.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#yhteys"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200"
              >
                Kysy tarjous
              </Link>

              
            </div>
          </div>
        </div>
      </section>

      {/* Ratkaisutyypit / kohteet */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Näkösuoja,{" "}
                <span className="text-amber-300">aurinkosuoja</span> ja{" "}
                <span className="text-amber-300">turva</span> – yhdellä
                viimeistelyllä.
              </h2>

              <p className="text-sm sm:text-base text-slate-300/90">
                Kiinteistökalvot ovat fiksu tapa parantaa tilojen mukavuutta ja
                ulkonäköä ilman isoja remontteja. Saat enemmän yksityisyyttä,
                vähemmän häikäisyä ja paremman ilmeen – ja tarvittaessa myös
                lisäturvaa lasipinnoille.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Näkösuojakalvot
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Huurre-, kuvio- ja design-kalvot neuvotteluhuoneisiin,
                    toimistoihin, porraskäytäviin ja koteihin – valoa
                    hukkaamatta.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Aurinkosuojakalvot
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Häikäisy ja lämpökuorma alas: sopii erityisesti työpisteiden
                    ikkunoihin, näyttöjen taakse ja isoihin lasipintoihin.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Turva- ja suojakalvot
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Kalvot, jotka auttavat pitämään lasin kasassa rikkoutuessa ja
                    parantavat turvallisuutta esimerkiksi julkisivuissa ja
                    ovissa.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-black/30">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    Brändi & opasteet lasille
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    Logot, aukioloajat, kampanjat, huonenumeroinnit ja
                    kulkuopasteet – pysyvänä tai helposti vaihdettavana.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 sm:p-5">
                <p className="text-xs sm:text-sm text-slate-300/90">
                  <span className="text-amber-300 font-semibold">
                    Kohteita käytännössä kaikkiin tiloihin:
                  </span>{" "}
                  liiketilat ja näyteikkunat, toimistot, taloyhtiöt, julkiset
                  tilat, koulut/päiväkodit, porraskäytävät, lasiseinät, ovet ja
                  isot julkisivulasit.
                </p>
              </div>
            </div>

            {/* Kuvapuoli */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
                <Image
                  src="/services/Julkisivu.jpg"
                  alt="Esimerkki kiinteistökalvotuksesta"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-200/90">
                    Esimerkki toteutuksesta
                  </p>
                  <p className="text-sm sm:text-base text-slate-50">
                    Siisti ja yhtenäinen ilme, joka toimii arjessa – ja näyttää
                    ammattimaiselta ulospäin.
                  </p>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300/90">
                <li>• Kartoitus: mitä halutaan (näkösuoja / lämpö / turva / brändi)</li>
                <li>• Materiaalivalinta ja mitoitus kohteen mukaan</li>
                <li>• Asennus huolellisesti – lopputulos viimeistelty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Yhteydenottolomake */}
      <section id="yhteys" className="relative bg-slate-950 py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/gallery/rautaranta.avif"
            alt="Taustakuva – kiinteistökalvot ja lasipinnat"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pyydä tarjous tai kysy lisää{" "}
              <span className="text-amber-300">kiinteistökalvoista</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
              Kerro lyhyesti kohteesta (ikkunat, lasiseinät, ovet, näyteikkuna,
              julkisivu) ja toiveesta: näkösuoja, aurinkosuoja, turva, brändi tai
              opasteet. Voit halutessasi liittää kuvan helpottamaan arviota.
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
                  <option>Teippaukset</option>
                  <option>Tummennukset</option>
                  <option>Kiinteistökalvot</option>
                  <option>Muu</option>
                </select>
              </div>

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
                  Voit liittää kuvan, luonnoksen tai PDF:n (esim. mitat /
                  ikkunajako), joka auttaa arvioinnissa.
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
                placeholder="Esim. 'Toimiston neuvotteluhuoneeseen näkösuoja (huurre), 2 lasiseinää. Lisäksi häikäisyä vähentävä kalvo etelän puolen ikkunoihin.'"
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
