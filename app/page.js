// app/page.js


import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Wrap Point – Auton teippaus, tummennukset ja kalvotukset | Vantaa",
  description:
    "Wrap Point toteuttaa autojen yliteippaukset, ikkunatummennukset, sisäpuhdistukset ja kiinteistökalvotukset Vantaalla. Pyydä tarjous – nopea vastaus.",
  keywords: [
    "auton teippaus Vantaa",
    "yliteippaus Helsinki",
    "ikkunatummennus",
    "PPF suojaus",
    "mainosteippaus",
    "auton kalvotus",
    "wrap Vantaa",
  ],
  alternates: {
    canonical: "https://www.wrappoint.fi/",
  },
  openGraph: {
    title: "Wrap Point – Auton teippaus ja kalvotukset Vantaalla",
    description:
      "Yliteippaukset, tummennukset, sisäpuhdistukset ja kiinteistökalvot – laadukkaat materiaalit, siisti viimeistely.",
    url: "https://www.wrappoint.fi/",
    siteName: "Wrap Point",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "https://www.wrappoint.fi/gallery/bmw.custom.jpg",
        width: 1200,
        height: 630,
        alt: "Wrap Point – auton teippaus Vantaalla",
      },
    ],
  },
};




export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Wrap Point",
      image: "https://www.wrappoint.fi/gallery/bmw.custom.jpg",
      url: "https://www.wrappoint.fi",
      telephone: "+358505315030",
      email: "info@wrappoint.fi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vantaa",
        addressCountry: "FI",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 60.2934,
        longitude: 25.0378,
      },
      priceRange: "€€",
      openingHoursSpecification: [],
    }),
  }}
/>

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
  src="/gallery/blurrattu.custom.bmw.webp"
  alt="Wrap Point – auton teippaus Vantaalla"
  className="absolute inset-0 h-full w-full object-cover"
  fetchPriority="high" 
  loading="eager"        
  decoding="async"
/>

        {/* Tumma overlay että teksti erottuu */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Sisältö videon päällä */}
        <div className="relative mx-auto flex flex-col justify-end min-h-[520px] max-w-6xl gap-12 px-4 pt-16 pb-10 md:grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:pt-32 md:pb-24">

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
{/*
<div className=”flex flex-wrap items-center gap-4 text-xs text-slate-100”>
  <a
    href=”#arvostelut”
    className=”flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 hover:border-amber-400 hover:bg-black/50 transition-colors”
  >
    <span className=”text-lg”>⭐</span>
    <div className=”leading-tight”>
      <div className=”font-semibold”>Laadukas työnjälki</div>
      <div className=”text-[11px] text-slate-200/80”>
        Lue arvostelujamme
      </div>
    </div>
  </a>
</div>
*/}


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
        Palvelut
      </h2>
      <p className="mt-3 text-sm text-slate-300 md:text-base">
        Tarjoamme monipuolisia ratkaisuja oli sitten kyseessä ajoneuvosi, kiinteistösi tai yrityksesi!
      </p>
    </div>

    {/* 5 korttia samalla rivillä (lg+) */}
    <div className="mt-10 grid gap-4 lg:grid-cols-5">
      <ServiceCard
        title="Teippaukset"
        description="Erotu joukosta! Anna ajoneuvollesi uusi ilme ja suojaa teippauksella."
        imageSrc="/gallery/bmw.lokari.webp"
        href="/palvelut/auton-yliteippaus"
      />

      <ServiceCard
        title="Tummennukset"
        description="Tyyliä ja suojaa autollesi! Lasien tummennus suojaa uv-säteiltä tuoden tyylikkään ulkonäön autollesi."
        imageSrc="/gallery/lasien_valojen.tummennus.webp"
        href="/palvelut/ikkunakalvot"
      />

      <ServiceCard
        title="PPF"
        description="Anna ajoneuvollesi sen ansaitsema suoja. Kiveniskukalvolla säilytät ajoneuvosi pinnan uudenveroisena."
        imageSrc="/gallery/ppf.webp"
        href="/palvelut/ppf"
      />

      <ServiceCard
        title="Kiinteistöön"
        description="Mukavuutta, turvaa ja tyyliä kiinteistöösi! Kiinteistökalvoilla energiatehokkuutta sekä yksityisyyttä, sisustusteipeillä kodin pinnat uusiksi."
        imageSrc="/gallery/ikkuna.peilikalvo.jpg"
        href="/palvelut/toimitila"
      />

      <ServiceCard
        title="Graafinen suunnittelu"
        description="Valmistamme tarroja toiveesi mukaan. Isot ja pienet tarrat, custom teipit."
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
           loading="lazy"
           decoding="async"
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
        <img
          src="/gallery/bmw.sivu.tarra.png"
          alt="Tuning-tarra BMW:ssä"
           loading="lazy"
           decoding="async"
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
        <img
          src="/gallery/toyota.tummennus.delete.webp"
          alt="Teipattu Toyota – auton teippaus"
           loading="lazy"
           decoding="async"
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
  src="/services/wrap.point.musta.jpg"
  alt="Wrap Point – auton teippaus ja tiimi"
  fill
  sizes="100vw"
  className="h-full w-full object-cover"
  loading="lazy"
/>
    <div className="absolute inset-0 bg-slate-950/80" /> {/* tumma overlay */}
  </div>

  {/* Varsinainen sisältö (täysin ennallaan + napit) */}
  <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="text-amber-400">Wrap Point</span> lyhyesti
        </h2>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          Tarjoamme monipuolisia ratkaisuja oli
          sitten kyseessä ajoneuvosi, kiinteistösi
          tai yrityksesi!
          Olemme vuonna 2024 perustettu yritys
          joka keskittyy ajoneuvojen sekä
          kiinteistöjen teippauksiin ja kalvotuksiin. Meiltä onnistuu myös isommatkin projektit suunnittelusta toteutukseen.
        </p>



        <p className="text-xl leading-relaxed text-white">
          Käytössämme ovat markkinoiden laadukkaimmat materiaalit!
        </p>

        <div className="flex items-center gap-3">
          <span className="text-xl text-amber-400">Seuraa meitä somessa!</span>
          <a
            href="https://www.instagram.com/wrappoint.fi"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 bg-white/5 text-amber-400 hover:border-amber-400 hover:text-amber-300"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@wrappoint.fi"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/40 bg-white/5 text-amber-400 hover:border-amber-400 hover:text-amber-300"
          >
            <svg viewBox="0 0 48 48" aria-hidden="true" className="h-6 w-6">
              <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" fill="currentColor" />
            </svg>
          </a>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">

  Y-tunnus: 3432572-7
 </p>
      </div>

      <div className="flex flex-col gap-5 mt-8 md:ml-auto">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Sijainti</p>
          <p className="mt-1 text-lg font-medium text-white">Vantaa</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Sähköposti</p>
          <p className="mt-1 text-lg font-medium text-white">info@wrappoint.fi</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">Puhelinnumero</p>
          <p className="mt-1 text-lg font-medium text-white">050 531 5030</p>
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
  </div>
</section>



 {/* Yhteydenottolomake */}
<section id="yhteys" className="relative bg-slate-950 py-16 md:py-20">

  {/* Taustakuva */}
  <div className="absolute inset-0">
    <Image
  src="/gallery/bmw.sivu.tarra.png"
  alt="Wrap Point – auton teippaus taustakuva"
  fill
  sizes="100vw"
  className="h-full w-full object-cover"
  loading="lazy"
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
            loading="lazy"          
            decoding="async"        
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
