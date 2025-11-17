// app/palvelut/auton-yliteippaus/page.js

export default function AutonYliteippausPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* YLÄVALIKKO – sama kuin etusivulla, linkit vie /-sivulle */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-blur:bg-slate-950/50">
        <div className="px-3 sm:px-4 lg:px-8 py-2 lg:py-3">
          {/* Desktop: vasen nav – keskellä logo – oikealla CTA + some */}
          <div className="hidden items-center md:flex">
            {/* VASEN: navigaatio */}
            <nav className="flex flex-1 items-center gap-6 text-sm text-slate-200 md:-ml-2 lg:-ml-4">
              <a
                href="/#etusivu"
                className="transition-colors hover:text-amber-300"
              >
                Etusivu
              </a>
              <a
                href="/#palvelut"
                className="transition-colors hover:text-amber-300"
              >
                Palvelut
              </a>
              <a
                href="/#galleria"
                className="transition-colors hover:text-amber-300"
              >
                Galleria
              </a>
              <a
                href="/#hinnasto"
                className="transition-colors hover:text-amber-300"
              >
                Hinnasto
              </a>
              <a
                href="/#meista"
                className="transition-colors hover:text-amber-300"
              >
                Meistä
              </a>
              <a
                href="/#yhteys"
                className="transition-colors hover:text-amber-300"
              >
                Yhteystiedot
              </a>
            </nav>

            {/* KESKI: iso logo */}
            <a
              href="/#etusivu"
              className="flex min-w-[80px] items-center justify-center px-4"
            >
              <div className="relative flex h-9 w-24 md:h-10 md:w-28 items-center justify-center overflow-visible">
                <img
                  src="/logo-visualwraps.png"
                  alt="Visual Wraps logo"
                  className="h-full w-auto object-contain scale-[6.9] md:scale-[4.1]"
                />
              </div>
            </a>

            {/* OIKEA: some + CTA */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:border-amber-400 hover:text-amber-300"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:border-amber-400 hover:text-amber-300"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M15.5 5.5c.6 1.1 1.6 2 2.8 2.4.3.1.6.2.9.2v2.2c-.5 0-1-.1-1.5-.2-.9-.3-1.7-.8-2.4-1.5v5.6c0 2.6-2.1 4.7-4.7 4.7S6 16.8 6 14.2 8.1 9.5 10.7 9.5c.3 0 .6 0 .9.1v2.3c-.3-.1-.6-.1-.9-.1-1.3 0-2.4 1.1-2.4 2.4S9.4 16.6 10.7 16.6s2.4-1.1 2.4-2.4V4.5h2.4v1z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              <a
                href="/#yhteys"
                className="rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-md transition-colors hover:bg-amber-400"
              >
                Pyydä tarjous
              </a>
            </div>
          </div>

          {/* Mobiili: logo + CTA-tekstilinkki */}
          <div className="flex items-center justify-between md:hidden">
            <a href="/#etusivu" className="flex items-center">
              <div className="relative flex h-8 w-24 items-center justify-center overflow-visible">
                <img
                  src="/logo-visualwraps.png"
                  alt="Visual Wraps logo"
                  className="h-full w-auto object-contain scale-[1.9]"
                />
              </div>
            </a>

            <a
              href="/#yhteys"
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300"
            >
              Pyydä tarjous
            </a>
          </div>
        </div>
      </header>

                  {/* HERO / JOHDANTO – taustakuva + tumma sävy */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        {/* Taustakuva */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/gallery/gtr-perse.jpg"
            alt="Auton yliteippaus – taustakuva"
            className="h-full w-full object-cover"
          />
          {/* Tumma overlay, jotta tekstit erottuvat */}
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Varsinainen sisältö */}
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-14">
          {/* Otsikko – yhdelle riville, “sporttisempi” look */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.05em] uppercase whitespace-nowrap">
            Auton yliteippaus
          </h1>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
            MUUTA ULKONÄKÖÄ JA EROTU JOUKOSTA
          </p>

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
                <div className="rounded-xl border border-white/15 bg-slate-950/70 p-4">
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

                <div className="rounded-xl border border-white/15 bg-slate-950/70 p-4">
                  <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Tyypillisiä kohteita
                  </h2>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-100">
                    <li>• Henkilöautot ja pakettiautot</li>
                    <li>• Työ- ja yritysautot</li>
                    <li>• Brändätyt kuljetus- ja mainosautot</li>
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
                <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                  Täysi yliteippaus
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
                </div>
                <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden rounded-xl border border-white/20 bg-slate-900/70">
                  <img
                    src="/gallery/esimerkkiautokeltainen.jpg"
                    alt="Toinen yliteippaus-esimerkki"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* TAATTU KESTÄVYYS */}
      <section className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            TAATTU KESTÄVYYS
          </h2>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Laadukas teippaus ja oikein tehty esivalmistelu
          </h3>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Ennen yliteippausta auto pestään ja puhdistetaan huolellisesti.
            Poistamme lian, rasvan ja mahdolliset vahajäämät, jotta kalvo
            tarttuu kunnolla ja pinta pysyy siistinä pitkään. Tarvittaessa
            irrotamme listoja ja pienempiä osia, jotta teippauksen reunat
            saadaan piiloon ja lopputulos näyttää mahdollisimman
            tehdasmaiselta.
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Käytämme laadukkaita, valettavia teippikalvoja tunnetuilta
            valmistajilta. Oikein hoidettuna yliteippaus kestää useita
            vuosia ja suojaa auton maalipintaa samalla, kun ulkonäkö
            päivittyy nykyiseen tyyliin.
          </p>
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

      {/* PYYDÄ TARJOUS – taustakuva + tumma overlay */}
      <section
        id="yhteys"
        className="relative border-t border-white/10 bg-slate-950 py-12 overflow-hidden"
      >
        {/* Taustakuva */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/gallery/esimerkkiautokeltainen.jpg"
            alt="Taustakuva auton yliteippauksesta"
            className="h-full w-full object-cover"
          />
          {/* Tumma overlay, joka sävyttää kuvan Visual Wraps -tyyliin */}
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        {/* Varsinainen sisältö */}
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mb-6 space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              PYYDÄ TARJOUS
            </h2>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pyydä tarjous auton yliteippauksesta
            </h3>
            <p className="text-sm text-slate-200 sm:text-base">
              Täytä alle autosi tiedot ja toiveet, niin palaamme sinulle
              tarjouksen ja aikatauluarvion kanssa. Tarjouspyyntö ei sido
              sinua mihinkään.
            </p>
          </div>

          <form
            className="grid gap-5 rounded-2xl border border-white/20 bg-slate-950/80 p-5 sm:p-6 backdrop-blur-sm"
            method="post"
            action="#"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-slate-100 sm:text-sm"
                >
                  Nimi *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                  placeholder="Etunimi ja sukunimi"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-100 sm:text-sm"
                >
                  Sähköposti *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                  placeholder="sinun@osoitteesi.fi"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-slate-100 sm:text-sm"
                >
                  Puhelin
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                  placeholder="+358..."
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="service"
                  className="text-xs font-medium text-slate-100 sm:text-sm"
                >
                  Toivottu palvelu
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                >
                  <option>Auton yliteippaus</option>
                  <option>Osateippaus / yksityiskohdat</option>
                  <option>Yritysauton brändäys</option>
                  <option>Muu teippaus</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="vehicle"
                  className="text-xs font-medium text-slate-100 sm:text-sm"
                >
                  Auton tiedot *
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  required
                  className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                  placeholder="Merkki, malli, vuosimalli (esim. BMW 3-sarja, 2018)"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="heardFrom"
                  className="text-xs font-medium text-slate-100 sm:text-sm"
                >
                  Mistä kuulit meistä?
                </label>
                <select
                  id="heardFrom"
                  name="heardFrom"
                  className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                >
                  <option>Google-haku</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Facebook</option>
                  <option>Kaverilta</option>
                  <option>Some-vaikuttajalta</option>
                  <option>Muu</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-slate-100 sm:text-sm"
              >
                Viesti / toiveet *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-white/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-amber-300 focus:ring focus:ring-amber-400/40"
                placeholder="Kerro toivotusta väristä, pinnasta (matta, kiiltävä, satin), mahdollisista grafiikoista sekä aikataulutoiveesta."
              />
            </div>

            <p className="text-xs text-slate-300 sm:text-sm">
              Ennen lopullista ajan sopimista voit tutustua peruutusehtoihin ja
              lisätietoihin. Tarjouspyyntö ei sido sinua mihinkään – palaamme
              ensin kirjallisella tarjouksella.
            </p>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full border border-amber-400/80 bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/30 transition hover:bg-amber-300 hover:border-amber-200 focus:outline-none focus:ring focus:ring-amber-400/50"
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

