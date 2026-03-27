// app/page.js


import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">



      {/* HERO-OSIO (etusivun yläosa) videotaustalla */}
      <section
        id="etusivu"
        className="relative border-b border-white/5 overflow-hidden"
      >
        {/* Taustavideo – kommentoitu pois, asiakas lisää oman videonsa myöhemmin */}
{/*
<video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  poster="/gallery/esimerkkiauto.jpg"
>
  <source src="/visualwrap-hero.mp4" type="video/mp4" />
  <img
    src="/gallery/esimerkkiautokeltainen.jpg"
    alt="Wrap Point – auton teippaus"
    className="h-full w-full object-cover"
  />
</video>
*/}

{/* Väliaikainen hero-kuva */}
<img
  src="/gallery/bmw.custom.JPG"
  alt="Wrap Point – auton teippaus"
  className="absolute inset-0 h-full w-full object-cover"
/>

        {/* Tumma overlay että teksti erottuu */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Sisältö videon päällä */}
        <div className="relative mx-auto grid min-h-[520px] max-w-6xl gap-12 px-4 pt-32 pb-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:pt-32 md:pb-24">

          {/* Tekstit vasemmalla */}
          <div className="space-y-7">
           

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Teemme autostasi <span className="text-amber-400">näyttävän</span>
              {" "}ja <span className="text-amber-400">suojatun</span>.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
              Wrap Point toteuttaa yliteippaukset, mainosteipit,
              tummennukset ja kiinteistökalvot huolellisesti sekä näyttävästi.
            </p>

            {/* Pieni “luottamus”-boksi, vähän kuin arvostelut */}
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-100">
  <a
    href="#arvostelut"
    className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 hover:border-amber-400 hover:bg-black/50 transition-colors"
  >
    <span className="text-lg">⭐</span>
    <div className="leading-tight">
      <div className="font-semibold">Laadukas työnjälki</div>
      <div className="text-[11px] text-slate-200/80">
        Lue arvostelujamme
      </div>
    </div>
  </a>
</div>


            {/* CTA-napit */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#yhteys"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg hover:bg-amber-300"
              >
                Pyydä tarjous
              </a>
              <a
                href="#palvelut"
                className="text-sm font-medium text-slate-50 underline-offset-4 hover:underline"
              >
                Katso palvelut
              </a>
            </div>
          </div>

        </div>
      </section>

           {/* PALVELUT-OSIO – 4 korttia, desktopissa samalla rivillä */}
<section id="palvelut" className="bg-slate-950/90 py-16">
  <div className="mx-auto max-w-6xl px-4">
    <div className="max-w-2xl">
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        Hemmottele autoasi
      </h2>
      <p className="mt-3 text-sm text-slate-300 md:text-base">
        Tarjoamme monipuolisia ratkaisuja oli sitten kyseessä ajoneuvosi, kiinteistösi tai vaikka yrityksesi!
      </p>
    </div>

    {/* 5 korttia samalla rivillä (lg+) */}
    <div className="mt-10 grid gap-4 lg:grid-cols-5">
      <ServiceCard
        title="Auton yliteippaus"
        description="Vaihda auton ilme täysin ilman maalausta. Laadukkaat kalvot ja siisti viimeistely."
        imageSrc="/gallery/bmw.lokari.webp"
        href="/palvelut/auton-yliteippaus"
      />

      <ServiceCard
        title="Ikkunakalvot ja tummennukset"
        description="Lasien ja valojen tummennukset tuovat suojaa, tyyliä ja näkyvyyttä."
        imageSrc="/gallery/gtr-green.jpg"
        href="/palvelut/ikkunakalvot"
      />

      <ServiceCard
        title="Auton sisäpuhdistus"
        description="Oli autosi ainoastaan imurointia vailla tai kun pyörremyrskyn jäljiltä, me putsaamme sen."
        imageSrc="/gallery/bmw.sisa.ratti.webp"
        href="/palvelut/autonsisapuhdistus"
      />

      <ServiceCard
        title="Kiinteistöön"
        description="Aurinkosuojakalvot, peilikalvot, murtosuojakalvot ja muut kiinteistö kalvot."
        imageSrc="/gallery/ikkuna.peilikalvo.jpg"
        href="/palvelut/toimitila"
      />

      <ServiceCard
        title="Graafinen suunnittelu"
        description="Valmistamme tarroja toiveesi mukaan. Isot ja pienet tarrat, custom teipit ja vaatepainatukset."
        imageSrc="/gallery/pikku.tarrat.jpg"
        href="/graafinen"
      />
    </div>
  </div>
</section>


   {/* GALLERIA, HINNASTO & YHTEYS – placeholderit nyt, tarkennetaan myöhemmin */}
<section id="galleria" className="border-b border-white/5 bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
      Galleria
    </h2>

    <div className="mt-6 grid gap-2 sm:grid-cols-3">
      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
        <img
          src="/gallery/bmw.custom.jokeri.webp"
          alt="Auton custom teippaus"
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
        <img
          src="/gallery/bmw.sivu.tarra.png"
          alt="Tuningi tarra bemarissa"
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
        <img
          src="/gallery/toyota.tummennus.delete.webp"
          alt="Teipattu tuning toyota"
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>

    {/* MOBIILI – nappi galleriasivulle osion loppuun */}
    <div className="mt-6 flex justify-center">


      <a
        href="/palvelut/galleria"
       className="inline-flex w-full md:w-auto items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300 hover:bg-amber-400/20"

      >
        Katso galleriamme
      </a>
    </div>
  </div>
</section>

       {/* MEISTÄ-OSIO */}
<section
  id="meista"
  className="relative border-b border-white/5 bg-slate-950 overflow-hidden"
>
  {/* Taustakuva + tumma overlay */}
  <div className="pointer-events-none absolute inset-0">
    <Image
      src="/services/wrap.point.musta.jpg" // taustakuva
      alt="Wrap Point – auton teippaus ja tiimi"
      fill
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-slate-950/80" /> {/* tumma overlay */}
  </div>

  {/* Varsinainen sisältö (täysin ennallaan + napit) */}
  <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Wrap Point lyhyesti
        </h2>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          Tarjoamme monipuolisia ratkaisuja oli
          sitten kyseessä ajoneuvosi, kiinteistösi
          tai vaikka yrityksesi!
          Olemme vuonna 2024 perustettu yritys
          joka keskittyy ajoneuvojen sekä
          kiinteistöjen teippauksiin ja kalvotuksiin.
        </p>
        <p className="text-xl leading-relaxed text-white">
          Käytössämme ovat markkinoiden laadukaimmat materiaalit.
        </p>

        {/* DESKTOP / TABLET -nappi tekstin jälkeen */}
        <div className="pt-2">
          <a
            href="/palvelut/meista"
            className="hidden md:inline-flex items-center rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300 hover:bg-amber-400/20"
          >
            Lue lisää meistä
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5 ml-auto mt-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Sijainti</p>
          <p className="mt-1 text-base font-medium text-white">Vantaa</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Sähköposti</p>
          <p className="mt-1 text-base font-medium text-white">info@wrappoint.fi</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Puhelinnumero</p>
          <p className="mt-1 text-base font-medium text-white">050 531 5030</p>
        </div>

        <Link
          href="https://wa.me/358505315030"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Avaa WhatsApp ja ota yhteyttä"
          className="group mt-2 inline-flex h-12 w-fit items-center gap-3 rounded-full bg-[#25D366] px-5 shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:bg-[#1EBE5D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 shrink-0 text-white"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              transform="translate(1.5 -0)"
              d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"
            />
            <path
              fill="currentColor"
              d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z"
            />
          </svg>
          <span className="flex flex-col leading-[1.05]">
            <span className="font-sans text-[15px] font-semibold tracking-tight text-white">
              WhatsApp
            </span>
            <span className="font-sans text-[13px] font-semibold tracking-tight text-white/95 tabular-nums">
              050 531 5030
            </span>
          </span>
        </Link>
      </div>

    </div>

    {/* MOBIILI – nappi meistä-osion loppuun */}
    <div className="mt-6 md:hidden">
      <a
        href="/palvelut/meista"
        className="inline-flex w-full items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300 hover:bg-amber-400/20"
      >
        Lue lisää meistä
      </a>
    </div>
  </div>
</section>

          {/* ARVOSTELUT – scrollattavat kortit mobiilissa */}
      <section id="arvostelut" className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
              Arvostelut
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-50 md:text-4xl">
              Asiakkaat kertovat yhteistyöstä
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Tähän tuodaan myöhemmin oikeita palautteita Wrap Pointin
              tekemistä yliteippauksista, PPF-suojauksista, tummennuksista ja
              mainosteippauksista. Alla esimerkkejä siitä, miltä sisältö voi
              näyttää valmiina.
            </p>
          </div>

          <div className="mt-8 -mx-4 px-4">
            <div
              className="
                flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory
                md:grid md:gap-6 md:overflow-visible md:snap-none
                md:grid-cols-3
              "
            >
              {/* Arvostelu 1 */}
              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
                  <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm text-slate-200">
                    "Auton yliteippaus onnistui juuri niin kuin toivoin. Auto
                    näyttää nyt täysin uudelta ja viimeistely on todella siisti."
                  </p>
                  <div className="mt-4 text-xs font-semibold text-slate-200">
                    – Antti, BMW 5-sarja
                  </div>
                </div>
              </div>

              {/* Arvostelu 2 */}
              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
                  <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm text-slate-200">
                    "PPF-suojaus tehtiin uuteen autoon heti luovutuksen jälkeen.
                    Kivet ja pesujäljet eivät enää pelota, ja pinta on helppo
                    pitää puhtaana."
                  </p>
                  <div className="mt-4 text-xs font-semibold text-slate-200">
                    – Laura, Tesla Model Y
                  </div>
                </div>
              </div>

              {/* Arvostelu 3 */}
              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
                  <div className="mb-2 text-lg">⭐⭐⭐⭐⭐</div>
                  <p className="text-sm text-slate-200">
                    "Yritysauton mainosteippaus saatiin tehtyä sovitussa
                    aikataulussa. Auto toimii nyt liikkuvana mainoksena ja
                    ilme sopii brändiin täydellisesti."
                  </p>
                  <div className="mt-4 text-xs font-semibold text-slate-200">
                    – Jari, yritysasiakas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 {/* Yhteydenottolomake */}
<section id="yhteys" className="relative bg-slate-950 py-16 md:py-20">

  {/* Taustakuva */}
  <div className="absolute inset-0">
    <Image
      src="/gallery/bmw.sivu.tarra.png" // Taustakuva
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

//palvelukortti-komponentti
function ServiceCard({ title, description, imageSrc, href }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg">
      {/* Kuva + otsikko overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-slate-800" />
        )}

        {/* Tumma gradient kuvan päällä */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Teksti kuvan alareunaan */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Kuvaus + nappi */}
      <div className="flex flex-col gap-4 p-6">
        <p className="text-sm leading-relaxed text-slate-200">
          {description}
        </p>

        {href ? (
          <a
            href={href}
            className="inline-flex w-fit items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-50 transition hover:bg-slate-800/80 hover:border-slate-500"
          >
            Lue lisää
            <span className="ml-2">→</span>
          </a>
        ) : (
          <button
            type="button"
            className="inline-flex w-fit items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-50 transition hover:bg-slate-800/80 hover:border-slate-500"
          >
            Lue lisää
            <span className="ml-2">→</span>
          </button>
        )}
      </div>
    </div>
  );
}
