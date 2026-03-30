import MainHeader from "../../MainHeader";
import Image from "next/image";

export const metadata = {
  title: "Ikkunatummennukset ja valojen tummennukset Vantaa | Wrap Point",
  description:
    "Wrap Point toteuttaa lasien ja valojen tummennukset Vantaalla. Ikkunakalvot alk. 99 €. UV-suoja, yksityisyys ja tyyli – pyydä tarjous!",
  alternates: {
    canonical: "https://www.wrappoint.fi/palvelut/ikkunakalvot",
  },
  openGraph: {
    title: "Ikkunatummennukset – Wrap Point Vantaa",
    description:
      "Lasien ja valojen tummennukset ammattitaidolla. Alk. 99 €. Pyydä tarjous.",
    url: "https://www.wrappoint.fi/palvelut/ikkunakalvot",
    siteName: "Wrap Point",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "https://www.wrappoint.fi/gallery/gtr-green.jpg",
        width: 1200,
        height: 630,
        alt: "Ikkunatummennukset – Wrap Point Vantaa",
      },
    ],
  },
};

export default function TummennuksetPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <MainHeader />

      {/* HERO – Tummennukset */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gallery/lasien_valojen.tummennus.webp
            "
            alt="Auton lasien tummennukset"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-[center_30%] opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl space-y-4 mt-12 md:mt-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Tummennukset
            </h1>
            <p className="mt-2 text-white text-sm font-semibold uppercase tracking-[0.2em]">
  Lasien ja valojen tummennukset autoon, <span className="text-amber-300">suojaa</span>, <span className="text-amber-300">tyyliä</span> ja <span className="text-amber-300">mukavuutta</span>.
</p>


            
          </div>
        </div>
      </section>

      

    {/* Hyödyt + vaihtoehdot */}
<section className="bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
    <div className="grid gap-8 md:grid-cols-2 md:items-start">

      {/* Tekstipuoli */}
      <div className="space-y-4 text-sm sm:text-base text-slate-300/90">

        {/* Otsikko kahdelle riville – sama tyyli kuin yliteippaus */}
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.6rem] font-semibold tracking-[0.05em] uppercase text-slate-50">
          Lasien <br />
          <span className="text-amber-300">tummennukset</span>
        </h2>

        <p>
           Lasien tummennus tuo tyylin lisäksi mukavuutta ja toiminnallisuutta. Se suojaa auton sisäpintoja sekä helpottaa pitämään sisätilat viileänä.
        </p>
        <p>✔ Vähemmän kuumuutta kesällä</p>
        <p>✔ Suoja haitalliselta UV-säteilyltä</p>
        <p>✔ Lisää yksityisyyttä ja ajomukavuutta</p>
        <p>✔ Tyylikkäämpi ulkonäkö heti</p>
        <p>
          Valikoimasta löytyy: 50%, 35%, 20%, 15% ja 5% kalvojen lisäksi myös erivärisiä sävykalvoja.
        </p>
      </div>

      {/* Kuvapuoli */}
      <div className="space-y-5 md:pl-4 lg:pl-8">
        <div className="relative h-80 sm:h-[22rem] md:h-[23rem] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900/70">
          <Image
            src="/gallery/ikkuna.tummennus.jpg"
            alt="Esimerkki tummennuksista"
            fill
             sizes="(max-width: 768px) 100vw, 50vw"   
              loading="lazy"  
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            Lasien tummennukset alk. 100€
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
     

      {/* Valojen tummennukset */}
<section className="bg-slate-950 border-t border-white/10">
  <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
    <div className="grid gap-8 md:grid-cols-2 md:items-start">

      {/* Kuvapuoli – vasemmalle */}
      <div className="space-y-5 md:pr-4 lg:pr-8">
        <div className="relative h-80 sm:h-[22rem] md:h-[23rem] w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-900/70">
          <Image
            src="/gallery/takavalo.tummennus.toyota.png"
            alt="Valojen tummennukset"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            Valojen tummennukset alk. 100€
          </div>
        </div>
      </div>

      {/* Tekstipuoli – oikealle */}
      <div className="space-y-4 text-sm sm:text-base text-slate-300/90">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[2.6rem] font-semibold tracking-[0.05em] uppercase text-slate-50">
          Valojen<br />
          <span className="text-amber-300">tummennukset</span>
        </h2>

        <p>
          Tummennetut valot antavat autolle aggressiivisemman ilmeen – juuri sopivalla tasolla sinun makuusi.
        </p>
        <p>✔ Suojaa kiveniskuilta ja naarmuilta</p>
        <p>✔ Estää UV-haalistumista</p>
        <p>✔ Säilyttää valojen kunnon pidempään</p>
        <p>✔ Poistettavissa ilman jälkiä</p>
        <p>
          Teemme tummennukset takavaloihin, ajovaloihin ja vilkkuihin.
          Valittavana useita sävyjä kevyestä sävystä täystummaan.
        </p>
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
            sizes="100vw"    
            loading="lazy"  
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
              Kerro auton merkki, malli ja vuosimalli sekä mitkä lasit/valot haluat
              tummennettavan. 
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

