
import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";

export default function TarratPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO – Tarrat ja tarrasarjat */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* Taustakuva – voit vaihtaa oman kuvan tilalle */}
        <div className="absolute inset-0">
          <Image
            src="/services/tarrat.jpg" // vaihda omaan taustakuvaan jos haluat
            alt="Custom tarrat ja tarrasarjat Visual Wrapsilta"
            fill
            priority
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        {/* Hero-tekstit */}
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Palvelut / Tarrat
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Custom tarrat pienissä ja isoissa erissä
            </h1>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              Visual Wrapsilta saat myös <span className="font-medium">normaalit tarrat</span> –
              pienistä logo- ja infotarroista aina isoihin lattiatarroihin,
              varoitustarroihin ja messukokonaisuuksiin.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Teetämme tarrat joko pieninä erinä pientä tarpeeseen tai
              isommissa sarjoissa esimerkiksi <span className="font-medium">messuille,
              kampanjoihin ja myymälöihin</span>.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs sm:text-sm">
              <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-amber-200">
                Pienet &amp; isot tarrat
              </span>
              <span className="rounded-full border border-slate-500/60 bg-slate-900/60 px-3 py-1 text-slate-200">
                Lyhyet &amp; pitkät sarjat
              </span>
              <span className="rounded-full border border-slate-500/60 bg-slate-900/60 px-3 py-1 text-slate-200">
                Sisä- ja ulkokäyttöön
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OSIO – Mihin tarrat sopivat */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
            {/* Teksti */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Tarrat arkeen, messuille ja varoituksiin
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Tarrat ovat helppo tapa tuoda logo, viesti tai varoitus
                näkyviin siellä, missä sitä tarvitaan. Suunnittelemme ja
                toteutamme tarrat valmiiden aineistojen pohjalta tai
                autamme tarvittaessa myös ulkoasun kanssa.
              </p>
              <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Esimerkkejä
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Logotarrat tuotteisiin ja pakkauksiin</li>
                    <li>• Varoitus- ja ohjetarrat</li>
                    <li>• Messu- ja tapahtumatarrat</li>
                    <li>• Pienet infotarrat oviin ja pintoihin</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Eräkoot
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Pienet erät nopeaan tarpeeseen</li>
                    <li>• Isommat sarjat kampanjoihin</li>
                    <li>• Mahdollisuus useisiin kokoihin ja muotoihin</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pieni info-kortti */}
            <aside className="h-max rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Kiinnostuitko?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Kerro meille lyhyesti, <span className="font-medium">mihin
                tarvitset tarroja</span>, minkä kokoisia ja millaisia määriä.
                Saat selkeän tarjouksen ja ehdotuksen toteutustavasta.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Voit laittaa viestiä esimerkiksi WhatsAppilla tai yhteydenottolomakkeella –
                liitä mukaan logo tai referenssikuva, jos sellainen löytyy.
              </p>
            </aside>
          </div>
        </div>
      </section>

     {/* Yhteydenottolomake */}
<section className="relative bg-slate-950 py-16 md:py-20">
  {/* Taustakuva */}
  <div className="absolute inset-0">
    <Image
      src="/services/tarrat.jpg" // Taustakuva
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
          custom tarroista pieniin ja isoihin tarpeisiin
        </span>
      </h2>
      <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
        Kerro lyhyesti, mihin tarvitset tarroja ja minkälaisesta määrästä on
        kyse. Voit valita alta <span className="font-medium">“Custom tarrat”</span>{" "}
        tai muun aiheen – ja halutessasi liittää logon, esimerkkikuvan tai
        PDF-tiedoston mukaan. Toteutamme sekä pienet että suuret tarrasarjat
        esimerkiksi messuille, varoitus- ja infotarroiksi tai tuotteiden
        merkitsemiseen.
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
