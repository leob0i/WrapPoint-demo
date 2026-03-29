// app/palvelut/auton-yliteippaus/page.js
import MainHeader from "../../MainHeader";
import Image from "next/image";


export const metadata = {
  title: "Auton yliteippaus Vantaa – Henkilöauto, pakettiauto, tuning | Wrap Point",
  description:
    "Wrap Point toteuttaa auton yliteippaukset Vantaalla. Täysi yliteippaus alk. 1 899 €. Matta, kiiltävä, satin ja erikoisefektit – pyydä tarjous!",
  alternates: {
    canonical: "https://www.wrappoint.fi/palvelut/auton-yliteippaus",
  },
  openGraph: {
    title: "Auton yliteippaus – Wrap Point Vantaa",
    description:
      "Laadukkaat teippikalvot, ammattitaitoinen asennus. Täysi yliteippaus alk. 1 899 €. Pyydä tarjous.",
    url: "https://www.wrappoint.fi/palvelut/auton-yliteippaus",
    siteName: "Wrap Point",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "https://www.wrappoint.fi/gallery/bmw.lokari.webp",
        width: 1200,
        height: 630,
        alt: "Auton yliteippaus – Wrap Point Vantaa",
      },
    ],
  },
};

export default function AutonYliteippausPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-slate-50">
      {/* HEADER tulee globaalisti MainHeader-komponentista */}

      {/* UUSI VIDEO-HERO – normaali taustavideo vain tälle herolle */}
      <section className="relative overflow-hidden border-b border-white/10 bg-zinc-950">
        {/* Taustavideo */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/gallery/bmw.lokari.webp" // valinnainen placeholder-kuva
          >
            <source src="/services/hero2.mp4" type="video/mp4" />
          </video>

          {/* Tumma overlay, että teksti erottuu */}
          <div className="absolute inset-0 bg-zinc-950/70" />
        </div>

        {/* Hero-tekstit videon päällä */}
        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28 md:pb-20">
          
          <h1  className="mt-3 max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
  Auton{" "}
  <span className="text-amber-300">
    yliteippaus
  </span>
</h1>


          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
            Henkilöauton, pakettiauton tai muun ajoneuvon yliteippaus samasta paikasta. On kyse sitten yritysautosta, virka-autosta tai tuning-projektista, meiltä saat laadukkaan teippauksen ammattitaidolla.
          </p>
        </div>
      </section>



{/* HERO / JOHDANTO – vanha hero sisällöllisenä osiona videon alla */}
<section className="bg-zinc-950">
  {/* Varsinainen sisältö */}
   <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-12 md:pt-16 md:pb-14">


    {/* Otsikko – yhdelle riville, “sporttisempi” look */}
    {/* Grid – otsikko + teksti vasemmalla, kuvat oikealla samalta korkeudelta */}
<div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start">
  <div className="space-y-4 text-sm leading-relaxed text-slate-100 sm:text-base">

    {/* Otsikko kahdelle riville vasemmalle */}
    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.6rem] font-semibold tracking-[0.05em] uppercase">
  Muuta ulkonäköä
  <br />
  <span className="text-amber-300">Ja erotu joukosta</span>
</h2>

    <p>
          Auton yliteippaus on nopea ja kustannustehokas tapa vaihtaa auton
          ulkonäköä ilman pysyvää maalausta. Laadukkaat teippikalvot
          suojaavat alkuperäistä maalipintaa, tuovat uuden sävyn tai
          efektin ja voidaan tarvittaessa poistaa myöhemmin, kun haluat
          auton takaisin alkuperäiseen ilmeeseen vahingoittamatta alkuperäistä pintaa.
        </p>
        <p>
          Teemme yliteippaukset huolellisella esivalmistelulla ja
          ammattimaisella asennuksella. Oli kyseessä auto, moottoripyörä taikka vene, anna sille uusi ilme teippauksella!
          <br></br>
          <br></br> Valikoimassamme on satoja eri sävyjä laadukkaita materiaaleja. Voit valita yksivärisen pinnan
          (matta, kiiltävä, satin), erikoisefektit tai yrityksen
          brändivärit ja logot. Sivun alaosasta löydät suuntaa-antavan
          hinnaston ja lomakkeen tarkemman tarjouksen pyytämiseen.
        </p>

        

          
        
      </div>

      {/* Kuva / galleria – isompi pystysuunnassa */}
      <div className="space-y-5 md:pl-4 lg:pl-8">
        {/* Pääkuva */}
        <div className="relative h-80 sm:h-[22rem] md:h-[23rem] w-full overflow-hidden rounded-2xl border border-white/20 bg-zinc-900/70">
          <img
            src="/gallery/bmw.lokari.webp"
            alt="Auton yliteippaus – esimerkkiauto"
            loading="eager"
  decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          {/* Badge 1 */}
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-zinc-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
            Laadukkaat materiaalit
          </div>
        </div>

        {/* Pienet lisäkuvat */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl border border-white/20 bg-zinc-900/70">
            <img
              src="/gallery/bmw.sivu.tarra.png"
              alt="Yliteippauksen yksityiskohta"
              loading="eager"
  decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Badge 2 */}
            <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-zinc-950/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200">
              Yksilöllinen toteutus
            </div>
          </div>

          <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl border border-white/20 bg-zinc-900/70">
           <Image
  src="/gallery/pinkki.audi.lokari.webp"
  alt="Wrap Point – auton yliteippaus, pinkki Audi"
  fill
   sizes="(max-width: 768px) 50vw, 25vw"        
  loading="lazy"        
  className="h-full w-full object-cover"
  
/>
            {/* Badge 3 */}
            <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-zinc-950/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200">
              Laatutakuu
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* YKSITYISKOHDAT-SECTION */}
      <section className="bg-zinc-950">
  <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">

        {/* 2 kuvaa – vasemmalla, vierekkäin */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-44 sm:h-48 overflow-hidden rounded-2xl border border-white/20 bg-zinc-900/70">
           <img
  src="/gallery/pinkki.teipatta.kahva.jpg"
  alt="Teipattu ovenkahva"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
/>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          </div>
          <div className="relative h-44 sm:h-48 overflow-hidden rounded-2xl border border-white/20 bg-zinc-900/70">
            <img
  src="/gallery/ovensisapinta.jpg"
  alt="Ovikarmin sisäpinta teipattuna"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
/>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          </div>
        </div>

        {/* Teksti – oikealla */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-100 sm:text-base md:pl-4 lg:pl-8">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.05em] uppercase">
            Huolella viimeistelty joka kohtaan
          </h2>
          <p>
            Teippaamme ovenkahvat ja muutkin yksityiskohdat huolella ja laadusta tinkimättä. Tarvittaessa teippaamme myös ovikarmien sisäpinnat omalla designillä.
          </p>
          <div className="mt-3 flex justify-end">
            <a
              href="/palvelut/galleria"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
            >
              Katso töitämme
            </a>
          </div>
        </div>

      </div>
  </div>
</section>

      


      {/* HINNASTO */}
      <section
        id="hinnasto"
        className="border-t border-white/10 bg-zinc-950/90"
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              HINNASTO
            </h2>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Suuntaa-antava hinnasto auton yliteippaukselle
            </h3>
            
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-white/15 bg-zinc-900/70 p-4">
              <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
                Henkilöauto – täysi yliteippaus
              </h4>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Koko auton yliteippaus 
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-300 sm:text-base">
                alk. 1&nbsp;899,00&nbsp;€
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/15 bg-zinc-900/70 p-4">
              <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
                Katon teippaus
              </h4>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Katon teippaus ammattitaidolla.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-300 sm:text-base">
                alk. 250&nbsp;€
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/15 bg-zinc-900/70 p-4">
              <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
                Chrome delete
              </h4>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Kromin poisto teippaamalla.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-300 sm:text-base">
                alk. 150&nbsp;€
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-400 sm:text-sm">
            Hinnat eivät ole lopullisia tarjouksia. Lopullinen hinta tarkentuu kohteesta ja toiveista riippuen. Kysy lisää!
          </p>
        </div>
      </section>

      {/* Yhteydenottolomake */}
      <section className="relative bg-zinc-950 py-16 md:py-20">
        {/* Taustakuva */}
        <div className="absolute inset-0">
          <Image
  src="/gallery/pinkki.audi.lokari.webp"
  alt="Wrap Point – auton yliteippaus Vantaa"  
  fill
  sizes="100vw"
  loading="lazy"
  className="h-full w-full object-cover"
  
/>
          {/* Tumma overlay, että lomake erottuu */}
          <div className="absolute inset-0 bg-zinc-950/80" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pyydä tarjous{" "}
              <span className="text-amber-300">
                Auton yliteippauksesta
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
              Kerro lyhyesti kohteesta, mitoista ja toivotusta ratkaisusta.
              Voit mainita myös, onko sinulla valmiit aineistot vai tarvetta
              suunnittelulle – ja halutessasi voit liittää kuvan, luonnoksen
              tai PDF-tiedoston mukaan. Palaamme sinulle mahdollisimman pian.
            </p>
          </div>

          <form className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-xl backdrop-blur">
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
                placeholder="Auton merkki ja malli, toivottu väri tai efekti, aikataulu ja budjettiraami ja aikataulu..."
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
