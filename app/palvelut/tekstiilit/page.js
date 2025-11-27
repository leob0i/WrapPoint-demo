
import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function VaateteippauksetPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* UUSI HERO – vaate- ja merch-teippaukset */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* Taustakuva – vaihda omaan kuvaan */}
        <div className="absolute inset-0">
          <Image
            src="/services/vaateteippaus.jpg"
            alt="Visual Wraps vaateteippaukset ja merch"
            fill
            priority
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
        </div>

        {/* Hero-tekstit */}
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex rounded-full bg-amber-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Vaateteippaukset & merch
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Brändää tiimi, autot{" "}
              <span className="text-amber-300">ja vaatteet yhteen linjaan.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200/80">
              Teemme työvaatteisiin, huppareihin, paitoihin ja lippiksiin
              näyttävät merkinnät – samalla tarkkuudella kuin autoihin.
              Yhtenäinen ilme vahvistaa brändiä ja tekee tiimistäsi helposti
              tunnistettavan.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#yhteys"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/30 transition hover:bg-amber-200"
              >
                Pyydä tarjous vaatteista
              </a>
              <p className="text-xs sm:text-sm text-slate-300/80">
                Nopein arvio syntyy, kun lähetät logosi ja tiedot vaatteista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitä voimme teipata */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Vaatteet, joissa brändi{" "}
                <span className="text-amber-300">näkyy ja tuntuu laadukkaalta.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300/90">
                Valitsemme materiaalit ja tarrat käyttötarkoituksen mukaan – olipa
                kyseessä messut, myyntitiimi, huoltoauto tai drift-tiimi.
                Pidämme huolen, että merkinnät kestävät käyttöä ja toistuvat
                samoina eri vaatteissa.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Työvaatteet",
                    desc: "Haalarit, takit, huomioliivit ja huoltohenkilökunnan vaatteet.",
                  },
                  {
                    title: "Tiimivaatteet",
                    desc: "Drifting- ja kilpatiimit, sponsorilogot ja numerot.",
                  },
                  {
                    title: "Lippikset & pipot",
                    desc: "Tyylikäs logo päähineisiin – myyntiin tai omaan käyttöön.",
                  },
                  {
                    title: "Hupparit & t-paidat",
                    desc: "Merch- ja myyntimallit yrityksille ja tapahtumiin.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-sm shadow-black/40"
                  >
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Pienet & suuret erät
              </p>
              <h3 className="text-lg font-semibold text-slate-50">
                Yhdestä tiimistä koko yritykseen
              </h3>
              <p className="text-sm text-slate-300/90">
                Hoidamme sekä pienet promo-erät että isommat vaatekokonaisuudet.
                Voimme myös toistaa samaa pohjaa autoissa, ikkunoissa ja
                työvaatteissa – yksi ilme, monta pintaa.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>• Apua vaatemallien valinnassa</li>
                <li>• Logot tarvittaessa vektoroituna</li>
                <li>• Selkeä hinnoittelu ja toimitusaikataulu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prosessi + pieni kuvagalleria */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] items-start">
            {/* Prosessi */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Näin vaateteippaus etenee
              </h2>
              <ol className="space-y-4 text-sm text-slate-200/90">
                <li>
                  <span className="font-semibold text-amber-300">
                    1. Yhteys & ideointi
                  </span>
                  <br />
                  Lähetä logo, määrä ja vaatemallit – katsotaan yhdessä
                  sopivin toteutustapa.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">
                    2. Vedos & hyväksyntä
                  </span>
                  <br />
                  Teemme selkeän vedoksen, jossa näet logojen paikat ja koot
                  ennen tuotantoa.
                </li>
                <li>
                  <span className="font-semibold text-amber-300">
                    3. Tuotanto & toimitus
                  </span>
                  <br />
                  Valmistamme ja toimitamme valmiit vaatteet sovitussa
                  aikataulussa.
                </li>
              </ol>
            </div>

            {/* Kuvagalleria (placeholdereita, vaihda omiin) */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src="/gallery/vaate-1.jpg"
                  alt="Brändätyt työvaatteet"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src="/gallery/vaate-2.jpg"
                  alt="Hupparit ja tiimivaatteet"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-40 sm:h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:col-span-2">
                <Image
                  src="/gallery/vaate-3.jpg"
                  alt="Visual Wraps vaateteippaus esimerkki"
                  fill
                  className="h-full w-full object-cover"
                />
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
            src="/gallery/porsche-orange.jpg" // Taustakuva
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
                teippauksista, tarroista ja kylteistä
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
              Kerro lyhyesti autosta, tilasta tai muusta kohteesta sekä toivotusta
              ratkaisusta. Voit valita alta, mikä palvelu kiinnostaa eniten – ja
              halutessasi voit liittää kuvan, luonnoksen tai PDF-tiedoston mukaan.
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
