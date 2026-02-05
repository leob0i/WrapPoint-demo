import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function TummennuksetPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <MainHeader />

      {/* HERO – Tummennukset */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/gtr-green.jpg"
            alt="Auton lasien tummennukset"
            fill
            priority
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex rounded-full bg-amber-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
              Tummennukset
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Viimeistelty ilme ja{" "}
              <span className="text-amber-300">mukavampi ajaminen</span> – nopealla
              asennuksella.
            </h1>

            <p className="text-sm sm:text-base text-slate-200/85">
              Tummennuskalvot lisäävät yksityisyyttä, vähentävät häikäisyä ja
              auttavat pitämään auton viileämpänä. Valitaan tummuus ja kalvotyyppi
              käyttötarpeen mukaan, ja lopputulos asennetaan siististi.
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

      

      {/* Hyödyt + vaihtoehdot */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] items-start">
            {/* Tekstipuoli */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Tummennukset, jotka{" "}
                <span className="text-amber-300">näyttävät hyvältä</span> ja
                tuntuvat arjessa.
              </h2>

              <p className="text-sm sm:text-base text-slate-300/90">
                Oli tavoite sitten hillitty “OEM-look”, selkeä näkösuoja tai
                häikäisyn vähentäminen, valitaan kalvo ja tummuus asteittain.
                Asennus tehdään huolellisesti, jotta reunoista tulee siistit ja
                lopputulos kestää.
              </p>

              {/* Luettavampi “hyödyt” -osuus (ei laatikkokortteja) */}
<div className="mt-6 space-y-6">
  <div className="space-y-2">
    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
      Mitä tummennuksilla saat
    </h3>
    <p className="text-sm sm:text-base text-slate-300/90">
      Valitaan kalvo ja tummuus auton tyylin sekä käyttötarpeen mukaan.
      Tavoite on aina sama: tasainen sävy, siistit reunat ja mukavampi ajaminen.
    </p>
  </div>

  <div className="space-y-4">
    <FeatureRow
      title="Suosituin: takasivulasit + takalasi"
      text="Kokonaisuus, joka lisää yksityisyyttä ja viimeistelee auton ilmeen heti. Sopii arkeen ja näyttää tehdasasenteiselta."
    />

    <FeatureRow
      title="Vähemmän häikäisyä, parempi mukavuus"
      text="Erityisesti kesällä ja matalassa auringossa tummennus auttaa – ajaminen tuntuu rauhallisemmalta ja matkustus miellyttävämmältä."
    />

    <FeatureRow
      title="Tummuusaste valitaan fiksusti"
      text="Hillitystä tummasta todella tummaan. Valitaan näyttävyyden ja käytön mukaan – ja pidetään kokonaisuus tyylikkäänä."
    />

    <FeatureRow
      title="Siisti viimeistely"
      text="Tarkka leikkaus, puhdas asennus ja huolellinen viimeistely – lopputulos on tasainen ja näyttää premiumilta."
    />
  </div>

  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 sm:p-5">
    <p className="text-sm sm:text-base text-slate-200/90">
      <span className="text-amber-300 font-semibold">Huom:</span>{" "}
      Kerro viestissä auton merkki, malli, vuosimalli ja mitkä lasit haluat
      (takasivut + takalasi / vain takalasi jne.). Saat nopeammin tarkan hinnan
      ja aikataulun.
    </p>
  </div>
</div>

            </div>

            {/* Kuvapuoli */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
                <Image
                  src="/porsche-orange.jpg"
                  alt="Esimerkki tummennuksista"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-200/90">
                    Lopputulos
                  </p>
                  <p className="text-sm sm:text-base text-slate-50">
                    Tasainen sävy, siistit reunat ja premium-fiilis.
                  </p>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300/90">
                <li>• Kalvon ja tummuuden valinta käyttötarpeen mukaan</li>
                <li>• Huolellinen puhdistus ja asennus (ei ilmakuplia)</li>
                <li>• Viimeistely niin, että reunoista tulee siistit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

      {/* Yhteydenottolomake */}
      <section id="yhteys" className="relative bg-slate-950 py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/services/lighttint.jpg"
            alt="Taustakuva tummennukset"
            fill
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pyydä tarjous{" "}
              <span className="text-amber-300">tummennuksista</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
              Kerro auton merkki, malli ja vuosimalli sekä mitkä lasit haluat
              tummennettavan. Voit myös mainita, haluatko hillityn vai tummemman
              lopputuloksen.
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
                  Voit liittää kuvan tai PDF:n (esim. auto/lasit), jos se helpottaa
                  arviota.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Kerro autosta ja toiveista
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
                placeholder="Esim. 'VW Golf 2018 – takasivulasit + takalasi. Hillitty tummennus, ei liian tumma.'"
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



function FeatureRow({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-amber-300/90" />
      <div className="space-y-1">
        <h4 className="text-base sm:text-lg font-semibold text-slate-50">
          {title}
        </h4>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300/90">
          {text}
        </p>
      </div>
    </div>
  );
}

