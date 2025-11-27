// esim. src/app/mainosteippaus-custom-tarrat/page.js

import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function MainosteippausCustomTarratPage() {
  return (
    <>
      <MainHeader />

      <main className="bg-slate-950 text-slate-50">
        {/* HERO – Mainosteippaus ja custom tarrat */}
        <section className="relative border-b border-white/10 overflow-hidden">
          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/esimerkkiauto.jpg" // Taustakuva
              alt="Drifting-auto ja yritysauto custom mainosteippauksilla."
              fill
              priority
              className="h-full w-full object-cover"
            />
            {/* Tumma overlay + liukuväri, että teksti erottuu */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60" />
          </div>

          {/* Varsinainen sisältö */}
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <div className="max-w-xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Mainosteippaus · Custom tarrat
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Mainosteippaus ja{" "}
                <span className="text-amber-300">
                  custom tarrat autoihin
                </span>
                .
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-lg">
                Teemme näyttävät mainosteippaukset ja custom tarrat
                drifting-autoihin, yritysautoihin ja arkisiin ajoneuvoihin.
                Muutetaan autosi liikkuvaksi mainokseksi – tai näyttäväksi
                show-autoksi – juuri sinun tyylilläsi.
              </p>

              {/* Pienet myyntibulletit */}
              <div className="grid gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <p>
                    Custom liveryt drifting- ja kilpa-autoihin – sponsorilogot,
                    numerot, raidat ja koko kyljen grafiikat.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <p>
                    Yrityksen logot ja mainosviestit pakettiautoihin ja
                    huoltoautoihin – brändi näkyy joka ajokerralla.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <p>
                    Pienemmät custom tarrat tuunaamiseen: ikkunatarrat,
                    tuulilasin yläreunan banderollit, felgitarrat ja paljon
                    muuta.
                  </p>
                </div>
              </div>

              {/* CTA-napit */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/#yhteystiedot"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300"
                >
                  Pyydä tarjous
                </Link>

                <Link
                  href="/#galleria"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-950/60 px-6 py-2 text-sm font-medium text-slate-50 backdrop-blur-sm transition hover:border-amber-400 hover:text-amber-100"
                >
                  Katso referenssejä
                </Link>
              </div>

              {/* Pieni lisätakuu / luottoteksti */}
              <p className="pt-2 text-xs text-slate-400">
                Käytämme laadukkaita kalvoja ja ammattimaista asennustekniikkaa,
                jotta teippaus kestää katseet, pesut ja Suomen olosuhteet.
              </p>
            </div>
          </div>
        </section>

        {/* OSIO 1 – Mainokset autoihin + 3 kuvaa rivissä */}
        <section className="border-b border-white/10 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Tarvitsetko{" "}
                <span className="text-amber-300">
                  näyttävät mainokset yritysautoihin
                </span>
                ?
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Suunnittelemme ja toteutamme selkeät mainokset autoihin:
                yrityksen logo, värit, yhteystiedot ja tärkeimmät palvelut
                asetellaan niin, että viesti näkyy sekä liikenteessä että
                parkkipaikalla. Voimme toteuttaa kaiken yksinkertaisesta
                logotarrasta koko kyljen kattavaan mainospintaan.
              </p>
              <p className="text-sm sm:text-base text-slate-200">
                Teemme printit ja teippaukset{" "}
                <span className="font-semibold">
                  pakettiautoihin, huoltoautoihin, henkilöautoihin ja
                  peräkärryihin
                </span>{" "}
                – sama ilme voidaan tuoda myös takaluukkuun, oviin ja ikkunoihin.
                Voit tuoda valmiin logon tai rakennamme koko ulkoasun puolestasi.
              </p>
            </div>

            {/* 3 kuvaa rivissä – mainos / suunnittelu */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/services/carsticker.jpg" // VAIHDA omaan kuvaan
                  alt="Yritysauton kylkimainoksen luonnos."
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Selkeä mainos kylkeen – logo, palvelut ja yhteystiedot.
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/mainos-suunnittelu-2.jpg" // VAIHDA omaan kuvaan
                  alt="Mainoslayout pakettiauton kylkeen."
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Layout mietitään auton muotojen ja mittojen mukaan.
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/mainos-suunnittelu-3.jpg" // VAIHDA omaan kuvaan
                  alt="Valmis mainos valmiina tulostettavaksi teipille."
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Lopputuloksena tiedostot ja teippipinnat valmiina toteutukseen.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OSIO 2 – Teippaus autoihin + custom teippaukset + 3 kuvaa + suunnittelu/asennus/postitus */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Custom teippaukset{" "}
                <span className="text-amber-300">ralli-, drift- ja tuning-autoihin</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-200">
                Suunnittelemme ja toteutamme yksilölliset custom teippaukset
                ralliautoihin, drifting-autoihin, ratakilpureihin, tuning-projekteihin
                ja näyttelyautoihin. Voit tuoda valmiin idean tai rakentaa
                kanssamme kokonaan uuden liveryn – värit, raidat, numerot ja
                sponsorilogot mietitään auto ja käyttötarkoitus huomioiden.
              </p>

              <p className="text-sm sm:text-base text-slate-200">
                Custom-teippaus voi olla{" "}
                <span className="font-semibold">
                  pienemmistä yksityiskohdista koko auton kattavaan ulkoasuun
                </span>
                : kylkiteippaukset, numerot, raidat, ikkunatarrat, tuulilasin
                yläreunan banderollit ja pienemmät tarrasarjat esimerkiksi
                tiimille tai varaosalaatikoihin.
              </p>
            </div>

            {/* 3 kuvaa rivissä – autojen teippaukset */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/gtr-perse.jpg" // kuva1
                  alt="Yritysauton kylkiteippaus pysäköitynä."
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Yritysauto, jossa selkeä logo, palvelut ja yhteystiedot.
                </div>
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/esimerkkiauto.jpg" // kuva2
                  alt="Drifting-auto custom liveryllä."
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Drifting-tyylinen kokonaisuus – numerot, sponsorilogot ja raidat.
                </div>
              </div>

              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/jdm.jpg" // kuva3
                  alt="Auto, jossa tuulilasin banderolli ja pienemmät custom tarrat."
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Pienemmät custom tarrat: banderollit, ikkunatarrat ja yksityiskohdat.
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-400 max-w-3xl">
              Voit lähettää meille kuvia autosta, lyhyen kuvauksen toivotusta
              tyylistä ja logot / graafiset elementit – palaamme ehdotuksen ja
              tarjouksen kanssa. Toteutus voidaan hoitaa alusta loppuun meidän
              toimipisteellämme tai lähettämällä tarrat sinulle postitse.
            </p>
          </div>
        </section>

      {/* Yhteydenottolomake */}
<section className="relative bg-slate-950 py-16 md:py-20">
  {/* Taustakuva */}
  <div className="absolute inset-0">
    <Image
      src="/gallery/gtr-perse.jpg" // Taustakuva
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
        Pyydä tarjous{" "}
        <span className="text-amber-300">
          Mainosteippauksesta tai custom tarroista
        </span>
      </h2>
      <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
        Kerro lyhyesti kohteesta, mitoista ja toivotusta ratkaisusta.
        Voit mainita myös, onko sinulla valmiit aineistot vai tarvetta
        suunnittelulle – ja halutessasi voit liittää kuvan, luonnoksen
        tai PDF-tiedoston mukaan. Palaamme sinulle mahdollisimman pian.
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
          placeholder="Missä kyltti/banderolli sijaitsee, millaista näkyvyyttä haet, aikataulu, budjettiraami..."
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
