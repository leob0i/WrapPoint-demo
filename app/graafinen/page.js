import MainHeader from "../MainHeader";
import Image from "next/image";

export default function GraafinenSuunnitteluPage() {
  return (
    <>
      <MainHeader />

      <main className="bg-slate-950 text-slate-50">

        {/* HERO – Graafinen suunnittelu */}
        <section className="relative border-b border-white/10 overflow-hidden">
          {/* Taustakuva – ei koko sivun kokoinen */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/Halonen.jpg"
              alt="Graafinen suunnittelu – tarrat, teipit ja vaatepainatukset"
              fill
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/75" />
          </div>

          {/* Hero-sisältö – keskitetty, kohtuullinen korkeus */}
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28 flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 mb-4">
              Graafinen suunnittelu
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Graafinen suunnittelu
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200">
              Mitä vain mieleesi juolahtaa!
            </p>
          </div>
        </section>

        {/* OSIO 1 – Custom tarrat autoihin */}
        <section className="border-b border-white/10 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Custom tarrat{" "}
                <span className="text-amber-300">autoihin ja ajoneuvoihin</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Suunnittelemme ja valmistamme custom tarrat juuri sinun toiveidesi mukaan.
                Isot kylkitarrat, tuulilasin banderollit, sponsoritarrat ja pienet
                yksityiskohtia viimeistelevät tarrat – kaikki onnistuvat.
              </p>
              <p className="text-sm sm:text-base text-slate-200">
                Tarrat sopivat henkilöautoihin, pakettiautoihin, moottoripyöriin,
                drifting- ja kilpa-autoihin sekä muihin ajoneuvoihin. Voit tuoda valmiin
                kuvan tai ideoimme yhdessä sinulle sopivan ulkoasun.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/jdm.jpg"
                  alt="Custom tarrat autoon"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Pienet ja isot custom tarrat ajoneuvoihin.
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/gtr-perse.jpg"
                  alt="Tarrat ja kylkiteippaukset"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Kilpa- ja drifting-autoihin yksilölliset liveryt.
                </div>
              </div>

              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70">
                <Image
                  src="/gallery/esimerkkiauto.jpg"
                  alt="Custom teippaukset ja tarrat"
                  fill
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
                  Toteutamme kaikki toiveet yksityiskohtaisesti.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OSIO 2 – Mainokset ja vaatepainatukset */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Mainokset, custom teipit{" "}
                <span className="text-amber-300">ja vaatepainatukset</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Graafinen suunnittelumme kattaa laajasti erilaisia kokonaisuuksia:
                auton kylkeen isot mainostarrat, räätälöidyt custom teipit brändin
                mukaan sekä vaatepainatukset tiimeille, yrityksille ja tapahtumiin.
              </p>
              <p className="text-sm sm:text-base text-slate-200">
                Oli kyse sitten yksittäisestä tarrasta tai kokonaisesta
                brändi-ilmeestä – autamme ideoimisessa, suunnittelussa ja toteutuksessa.
                Lähetä meille idea tai luonnos, niin rakennetaan yhdessä toimiva kokonaisuus.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-2">
                <div className="text-2xl">🎨</div>
                <div className="font-semibold text-sm">Custom tarrat autoihin</div>
                <p className="text-xs text-slate-400">
                  Isot ja pienet tarrat, kylkitarrat, tuulilasin banderollit ja felgitarrat.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-2">
                <div className="text-2xl">📢</div>
                <div className="font-semibold text-sm">Mainokset ja teipit</div>
                <p className="text-xs text-slate-400">
                  Yrityksen logo, yhteystiedot ja mainokset suoraan auton kylkeen tai ikkunaan.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-2">
                <div className="text-2xl">👕</div>
                <div className="font-semibold text-sm">Vaatepainatukset</div>
                <p className="text-xs text-slate-400">
                  Painatukset tiimeille, yrityksille ja tapahtumiin – paidoista huppareihin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Yhteydenottolomake */}
        <section className="relative bg-slate-950 py-16 md:py-20">

          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/porsche-orange.jpg"
              alt="Taustakuva graafisesta suunnittelusta"
              fill
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4">
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Pyydä tarjous tai kysy lisää{" "}
                <span className="text-amber-300">
                  tarroista, teipeistä ja vaatepainatuksista
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                Kerro lyhyesti mitä haluat: custom tarra autoihin, mainos, vaatepainatus
                tai muu graafinen työ. Voit valita alta, mikä palvelu kiinnostaa eniten –
                ja halutessasi voit liittää kuvan, luonnoksen tai PDF-tiedoston mukaan.
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
                    <option>Custom tarrat autoihin</option>
                    <option>Mainosteippaukset</option>
                    <option>Vaatepainatukset</option>
                    <option>Kyltit ja banderollit</option>
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
                  placeholder="Kuvaile lyhyesti mitä tarvitset: tarra autoihin, painatukset vaatteisiin, koko, määrä, toivottu tyyli..."
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
