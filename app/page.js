// src/app/page.js TAI app/page.js
// Visual Wraps - etusivun layout, inspiroitunut restyling.fi-rakenteesta,
// mutta omilla teksteillä ja tyyleillä.

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* HERO-OSIO (etusivun yläosa) */}
      {/* HERO-OSIO (etusivun yläosa) videotaustalla */}
      <section
        id="etusivu"
        className="relative border-b border-white/5 overflow-hidden"
      >
        {/* Taustavideo */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/visualwrap-hero.mp4" type="video/mp4" />
        </video>

        {/* Tumma overlay että teksti erottuu */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Sisältö videon päällä */}
        <div className="relative mx-auto grid min-h-[520px] max-w-6xl gap-12 px-4 pt-24 pb-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:pt-32 md:pb-24">

          {/* Tekstit vasemmalla */}
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Auton suojaus & ulkonäkö
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Teemme autostasi näyttävän
              <span className="text-amber-300"> ja suojatun</span>.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
              Visual Wraps toteuttaa kivensuojakalvot, yliteippaukset, lasien
              tummennukset ja pinnoitteet huolellisesti. Tämä on demo-layout,
              johon kirjoitamme myöhemmin juuri sinun yrityksesi tekstit.
            </p>

            {/* Pieni “luottamus”-boksi, vähän kuin arvostelut */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-100">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2">
                <span className="text-lg">⭐</span>
                <div className="leading-tight">
                  <div className="font-semibold">Laadukas työnjälki</div>
                  <div className="text-[11px] text-slate-200/80">
                    Arvostelut ja referenssit lisätään tänne myöhemmin.
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.18em] text-slate-200/80">
                  Erikoistuminen
                </span>
                <span className="text-sm text-slate-50">
                  PPF, teippaukset, tummennukset & pinnoitteet
                </span>
              </div>
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

          {/* Oikean puolen “mockup”-boksi videon päällä 
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-amber-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-black/40 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-slate-100">
                <span className="font-medium">Visual Wraps — demo layout</span>
                <span className="rounded-full bg-green-500/40 px-2 py-0.5 text-[11px] text-green-100">
                  Online
                </span>
              </div>
              <div className="grid gap-4 px-5 pb-5 pt-4 md:grid-cols-[1.2fr_1fr]">
                <div className="space-y-3">
                  <div className="h-32 rounded-2xl bg-slate-900/60" />
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded-full bg-slate-400/70" />
                    <div className="h-3 w-2/3 rounded-full bg-slate-500/70" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-xl bg-slate-900/60" />
                    <div className="h-16 rounded-xl bg-slate-900/60" />
                    <div className="h-16 rounded-xl bg-slate-900/60" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-5 w-24 rounded-full bg-amber-400/90" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded-full bg-slate-400/70" />
                    <div className="h-3 w-5/6 rounded-full bg-slate-500/70" />
                    <div className="h-3 w-4/6 rounded-full bg-slate-600/70" />
                  </div>
                  <div className="h-20 rounded-2xl bg-slate-900/60" />
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </section>

            {/* PALVELUT-OSIO – mobiilissa horisontaalinen slider, desktopissa grid */}
      <section id="palvelut" className="bg-slate-950/90 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Palvelut
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Auton suojaus ja teippaus yhdestä paikasta.
            </h2>
            <p className="mt-3 text-sm text-slate-300 md:text-base">
              Teemme näyttävät yliteippaukset, kivensuojakalvot, lasien tummennukset
              ja pinnoitukset – räätälöitynä sinun autollesi ja budjetillesi.
            </p>
          </div>

          {/* Kortit: mobiilissa vaakaskrollattava rivi, md+: grid */}
          <div className="mt-8 -mx-4 px-4">
            <div
              className="
                flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory
                md:grid md:gap-6 md:overflow-visible md:snap-none
                md:grid-cols-2 lg:grid-cols-3
              "
            >
              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <ServiceCard
                  title="Auton yliteippaus"
                  description="Vaihda auton ilme täysin ilman maalausta. Laadukkaat kalvot, siisti työnjälki ja helposti purettava pinta."
                  imageSrc="/services/yliteippaus.jpg"
                  href="/palvelut/auton-yliteippaus"
                />
              </div>

              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <ServiceCard
                  title="Mainosteippaukset"
                  description="Näyttävät ja kestävät mainosteippaukset autoihin, pakettiautoihin ja ikkunoihin – muutetaan ajoneuvosi tehokkaaksi liikkuvaksi mainokseksi, joka jää mieleen."
                  imageSrc="/services/carsticker.jpg"
                />
              </div>

              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <ServiceCard
                  title="Kyltit ja banderollit"
                  description="Laadukkaat kyltit, opasteet ja banderollit yrityksen näkyvyyden lisäämiseen – sisä- ja ulkokäyttöön, kestävillä materiaaleilla."
                  imageSrc="/services/windowtint.jpg"
                />
              </div>

              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <ServiceCard
                  title="Vaatepainatukset"
                  description="Räätälöidyt vaatteiden painatukset yrityksille ja yksityisille – logot, tekstit ja grafiikat terävällä ja kestävällä jäljellä."
                  imageSrc="/services/vaatepainatus.jpg"
                />
              </div>

              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <ServiceCard
                  title="Toimitilateippaukset ja ikkunateippaukset"
                  description="Yrityksen tilojen ja näyteikkunoiden teippaukset – logot, brändielementit ja opasteet, jotka tuovat näkyvyyttä ja ammattimaisen ilmeen."
                  imageSrc="/services/Julkisivu.jpg"
                />
              </div>

              <div className="snap-start min-w-[80%] max-w-[80%] flex-shrink-0 md:min-w-0 md:max-w-none">
                <ServiceCard
                  title="Kuvan ja teippauksen suunnittelu"
                  description="Ammattitason suunnittelupalvelu – luomme näyttävät teippauskokonaisuudet ja valmiit grafiikat ajoneuvoihin, ikkunoihin ja mainospintoihin."
                  imageSrc="/services/kivenisku.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* MEISTÄ-OSIO */}
      <section id="meista" className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Visual Wraps lyhyesti
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Tähän tulee myöhemmin tarkempi “Meistä”-teksti: tarina,
                tausta, osaaminen ja arvot. Layout on rakennettu niin, että
                voit kirjoittaa pidemmän kuvauksen ilman että rakenne hajoaa.
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                Ajatuksena on sama kuin referenssisivulla: selkeä kokonaisuus,
                jossa asiakas ymmärtää miksi juuri sinun yrityksesi on
                turvallinen ja laadukas valinta auton suojaukseen ja
                ulkonäön parantamiseen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4">
                <div className="text-3xl">🎯</div>
                <div className="mt-2 text-sm font-semibold">
                  Laatu & viimeistelty työnjälki
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Tähän voit lisätä konkreettisia lupauksia, esim.
                  tarkastusprosessi, materiaalit ja tyytyväisyystakuu.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4">
                <div className="text-3xl">🕒</div>
                <div className="mt-2 text-sm font-semibold">
                  Selkeä aikataulu & yhteydenpito
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Kerro, miten pidät asiakkaan ajan tasalla työn etenemisestä.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4">
                <div className="text-3xl">🛡️</div>
                <div className="mt-2 text-sm font-semibold">
                  Huolella valitut kalvot ja pinnoitteet
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Tähän voidaan myöhemmin kirjoittaa brändit, takuut ja
                  sertifikaatit.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900 px-4 py-4">
                <div className="text-3xl">📍</div>
                <div className="mt-2 text-sm font-semibold">
                  Sijainti & toiminta-alue
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Kaupunki, alue ja miten asiakkaan on helpoin tuoda auto
                  paikalle.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIA, HINNASTO & YHTEYS – placeholderit nyt, tarkennetaan myöhemmin */}
      <section id="galleria" className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Galleria (tulee myöhemmin)
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            Tähän rakennetaan myöhemmin kuvakaruselli ja referenssikuvat
            autoista. Rakenne on jo valmiina, jotta lisäys on helppo.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img
                src="/gallery/esimerkkiauto.jpg"
                alt="Auton yliteippaus"
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img
                src="/gallery/esimerkkiautokeltainen.jpg"
                alt="Mainosteippaukset pakettiautoon"
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
              <img
                src="/gallery/billboard.jpg"
                alt="Ikkunateippaus yrityksen tiloihin"
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      <section id="hinnasto" className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Hinnasto (rakenne)
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            Tähän voidaan tehdä kortit eri palvelupaketeille (esim. perus,
            laaja, premium) tai ohjata suoraan tarjouspyyntöön.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="text-sm font-semibold">Perustyöt</div>
              <div className="mt-2 text-xs text-slate-400">
                Esim. yksittäiset tummennukset, pienet teippaukset. Täytetään
                tarkemmin myöhemmin.
              </div>
            </div>
            <div className="rounded-2xl border border-amber-500/40 bg-slate-900/80 p-5">
              <div className="text-sm font-semibold">Suojapaketit</div>
              <div className="mt-2 text-xs text-slate-400">
                PPF- ja pinnoitepaketit uusille autoille. Voidaan hinnoitella
                alkaen-hinnoin.
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="text-sm font-semibold">Räätälöidyt ratkaisut</div>
              <div className="mt-2 text-xs text-slate-400">
                Yritysautot, laajat kalvotukset ja kiinteistökohteet.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YHTEYDENOTTO / CTA – taustakuva + tumma overlay */}
      <section
        id="yhteys"
        className="relative bg-slate-950 overflow-hidden"
      >
        {/* Taustakuva */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/porsche-orange.jpg" // vaihda halutessasi
            alt="Auton yliteippaus – taustakuva yhteydenottoon"
            className="h-full w-full object-cover"
          />
          {/* Tumma sävy, että teksti erottuu */}
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Varsinainen sisältö */}
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Pyydä tarjous tai kysy lisää
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Tähän tulee myöhemmin oikeat yhteystiedot: puhelinnumero,
                sähköposti, osoite ja yhteydenottolomake. Nyt voit käyttää tätä
                pohjana rakenteelle.
              </p>
              <div className="space-y-1 text-sm text-slate-200">
                <div>Puhelin: 000 000 000</div>
                <div>Sähköposti: info@visualwraps.fi</div>
                <div>Osoite: Esimerkkikatu 1, 00100 Helsinki</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Nimi
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-amber-500/60 focus:ring-2"
                    placeholder="Etunimi Sukunimi"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Sähköposti
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-amber-500/60 focus:ring-2"
                    placeholder="sinä@esimerkki.fi"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                    Viesti
                  </label>
                  <textarea
                    className="min-h-[120px] w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-amber-500/60 focus:ring-2"
                    placeholder="Kerro autosta ja toivotusta työstä..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg hover:bg-amber-400"
                >
                  Lähetä viesti (ei vielä toimi)
                </button>
                <p className="text-[11px] text-slate-500">
                  Lomake on aluksi vain ulkoasua varten. Myöhemmin yhdistämme
                  sen backendille (esim. sähköposti tai oma API).
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Visual Wraps. Kaikki oikeudet pidätetään.</div>
          <div className="flex flex-wrap gap-3">
            <span>Layout rakennettu Next.js + Tailwindilla.</span>
            <span className="text-slate-600">Sisällöt päivitetään myöhemmin.</span>
          </div>
        </div>
      </footer>
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
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
            Palvelu
          </p>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Kuvaus + nappi */}
      <div className="flex flex-col gap-4 p-5">
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
