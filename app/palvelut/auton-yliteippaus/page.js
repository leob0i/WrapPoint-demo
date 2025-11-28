// app/palvelut/auton-yliteippaus/page.js
import MainHeader from "../../MainHeader";
import Image from "next/image";

export default function AutonYliteippausPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HEADER tulee globaalisti MainHeader-komponentista */}

      {/* UUSI VIDEO-HERO – normaali taustavideo vain tälle herolle */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        {/* Taustavideo */}
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/gallery/gtr-perse.jpg" // valinnainen placeholder-kuva
          >
            <source src="/services/hero2.mp4" type="video/mp4" />
          </video>

          {/* Tumma overlay, että teksti erottuu */}
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Hero-tekstit videon päällä */}
        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28 md:pb-20">
          
          <p className="mt-3 max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
  Auton{" "}
  <span className="text-amber-300">
    yliteippaus
  </span>
</p>


          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
            Henkilöauton, pakettiauton tai muun ajoneuvvon yliteippaus samasta paikasta. On kyse sitten yritysautosta, virka-autosta tai tuning-projektista, meiltä saat laadukkaan teippauksen ammattitaidolla.
          </p>
        </div>
      </section>



{/* HERO / JOHDANTO – vanha hero sisällöllisenä osiona videon alla */}
<section className="border-b border-white/10 bg-slate-950">
  {/* Varsinainen sisältö */}
   <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-12 md:pt-16 md:pb-14">


    {/* Otsikko – yhdelle riville, “sporttisempi” look */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.05em] uppercase md:whitespace-nowrap">
  MUUTA ULKONÄKÖÄ JA{" "}
  <span className="text-amber-300">EROTU JOUKOSTA</span>
</h1>



   

    {/* Leveämpi grid + isommat kuvat */}
    <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start">
      {/* Tekstipuoli – tiputetaan hieman alas jotta linja on sama kuvan kanssa */}
      <div className="space-y-4 text-sm leading-relaxed text-slate-100 sm:text-base md:pt-1.5 lg:pt-2">
        <p>
          Auton yliteippaus on nopea ja kustannustehokas tapa vaihtaa auton
          ulkonäköä ilman pysyvää maalausta. Laadukkaat teippikalvot
          suojaavat alkuperäistä maalipintaa, tuovat uuden sävyn tai
          efektin ja voidaan tarvittaessa poistaa myöhemmin, kun haluat
          auton takaisin alkuperäiseen ilmeeseen.
        </p>
        <p>
          Teemme yliteippaukset huolellisella esivalmistelulla ja
          ammattimaisella asennuksella. Voit valita yksivärisen pinnan
          (matta, kiiltävä, satin), erikoisefektit tai yrityksen
          brändivärit ja logot. Sivun alaosasta löydät suuntaa-antavan
          hinnaston ja lomakkeen tarkemman tarjouksen pyytämiseen.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm shadow-black/30">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
              Miksi valita yliteippaus?
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-100">
              <li>• Uusi väri ilman auton maalausta</li>
              <li>
                • Suojaa maalipintaa kiviltä, roiskeilta ja pieniltä
                naarmuilta
              </li>
              <li>• Poistettavissa tai vaihdettavissa myöhemmin</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm shadow-black/30">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
              Tyypillisiä kohteita
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-100">
              <li>• Henkilöautot ja pakettiautot</li>
              <li>• Työ- ja yritysautot</li>
              <li>• Brändätyt kuljetus- ja mainosautot</li>
              <li>• Tuning- ja näyttelyautot</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Kuva / galleria – isompi pystysuunnassa */}
      <div className="space-y-5 md:pl-4 lg:pl-8">
        {/* Pääkuva */}
        <div className="relative h-80 sm:h-[22rem] md:h-[23rem] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900/70">
          <img
            src="/services/yliteippaus.jpg"
            alt="Auton yliteippaus – esimerkkiauto"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          {/* Badge 1 */}
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
            Laadukkaat materiaalit
          </div>
        </div>

        {/* Pienet lisäkuvat */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl border border-white/20 bg-slate-900/70">
            <img
              src="/gallery/esimerkkiauto.jpg"
              alt="Yliteippauksen yksityiskohta"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Badge 2 */}
            <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200">
              Yksilöllinen toteutus
            </div>
          </div>

          <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl border border-white/20 bg-slate-900/70">
            <img
              src="/gallery/esimerkkiautokeltainen.jpg"
              alt="Toinen yliteippaus-esimerkki"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Badge 3 */}
            <div className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200">
              Laatutakuu
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="border-t border-white/10 bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-12">
    <div className="rounded-3xl border border-slate-700 bg-slate-900/85 px-6 py-8 md:px-8 md:py-10 shadow-[0_0_40px_rgba(15,23,42,0.75)]">
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
        TAATTU KESTÄVYYS
      </h2>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl text-slate-50">
        Laadukas teippaus ja oikein tehty esivalmistelu
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
        Ennen yliteippausta auto pestään ja puhdistetaan huolellisesti.
        Poistamme lian, rasvan ja mahdolliset vahajäämät, jotta kalvo
        tarttuu kunnolla ja pinta pysyy siistinä pitkään. Tarvittaessa
        irrotamme listoja ja pienempiä osia, jotta teippauksen reunat
        saadaan piiloon ja lopputulos näyttää mahdollisimman
        tehdasmaiselta.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
        Käytämme laadukkaita, valettavia teippikalvoja tunnetuilta
        valmistajilta. Oikein hoidettuna yliteippaus kestää useita
        vuosia ja suojaa auton maalipintaa samalla, kun ulkonäkö
        päivittyy nykyiseen tyyliin.
      </p>
    </div>
  </div>
</section>


      {/* HINNASTO */}
      <section
        id="hinnasto"
        className="border-t border-white/10 bg-slate-950/90"
      >
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              HINNASTO
            </h2>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Suuntaa-antava hinnasto auton yliteippaukselle
            </h3>
            <p className="text-sm text-slate-200 sm:text-base">
              Alla olevat hinnat ovat{" "}
              <span className="font-semibold">
                suuntaa-antavia alkaen-hintoja
              </span>
              . Lopullinen hinta tarkentuu auton mallin, kunnon, värivalinnan ja
              teippauksen laajuuden mukaan.
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">
              Pyydä tarkka tarjous sivun alaosassa olevan lomakkeen kautta.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-white/15 bg-slate-900/70 p-4">
              <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
                Henkilöauto – täysi yliteippaus
              </h4>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Koko auton värinvaihto (ei sisällä oviaukkojen sisäpintoja).
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-300 sm:text-base">
                alk. 1&nbsp;800&nbsp;€ – 2&nbsp;400&nbsp;€
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/15 bg-slate-900/70 p-4">
              <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
                Pakettiauto / suurempi ajoneuvo
              </h4>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Työ- ja yritysautot, laajemmat pinnat ja mainospohjat.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-300 sm:text-base">
                alk. 2&nbsp;200&nbsp;€ – 3&nbsp;200&nbsp;€
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-white/15 bg-slate-900/70 p-4">
              <h4 className="text-sm font-semibold text-slate-50 sm:text-base">
                Osateippaus / tehosteet
              </h4>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                Katto, peilit, raidat, logot, listat ja muut yksityiskohdat.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-300 sm:text-base">
                alk. 250&nbsp;€ – 900&nbsp;€
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-400 sm:text-sm">
            Hinnat eivät ole lopullisia tarjouksia. Kerro meille tarkemmat
            tiedot autosta, niin laskemme sinulle tarkan kirjallisen tarjouksen.
          </p>
        </div>
      </section>

      {/* Yhteydenottolomake */}
      <section className="relative bg-slate-950 py-16 md:py-20">
        {/* Taustakuva */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/gtr-green.jpg" // Taustakuva
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
  );
}
