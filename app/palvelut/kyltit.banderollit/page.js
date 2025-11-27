import MainHeader from "../../MainHeader";
import Image from "next/image";

export default function KyltitJaBanderollitPage() {
  return (
    <>
      <MainHeader />

      <main className="bg-slate-950 text-slate-50">
                {/* HERO – Kyltit ja banderollit */}
        <section className="relative border-b border-white/10 overflow-hidden">
          {/* Taustakuva */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/billboard.jpg" // ← Taustakuva
              alt="Esimerkki näyttävästä kyltistä ja banderollista."
              fill
              priority
              className="h-full w-full object-cover"
            />
            {/* Tumma overlay että tekstit erottuvat */}
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>

          {/* Varsinainen sisältö */}
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-16">
            <div className="space-y-4 md:flex-1">
              <p className="inline-flex rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-amber-300">
                Kyltit · Banderollit · Suurikokoinen tulostus
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Näyttävät kyltit ja banderollit,{" "}
                <span className="text-amber-300">jotka erottuvat</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-100 sm:text-base">
                Suunnittelemme ja toteutamme yrityksellesi kyltit, banderollit
                ja muut suurkuvamateriaalit, jotka tuovat brändisi esiin
                selkeästi – oli kyseessä julkisivu, tapahtuma tai kampanjanosto.
                Valitsemme kohteeseen kestävät materiaalit ja toimivan
                kiinnitystavan.
              </p>
            </div>
          </div>
        </section>


                {/* Käyttökohteet & ratkaisut */}
        <section className="border-b border-white/10 bg-slate-950/90">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-3 md:col-span-1">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Kyltit ja banderollit{" "}
                  <span className="text-amber-300">eri tilanteisiin</span>
                </h2>
                <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                  Oli tavoitteena pysyvä julkisivukyltti tai lyhytaikainen
                  kampanjabanderolli, suunnittelemme ratkaisun, joka toimii sekä
                  visuaalisesti että teknisesti – ilman &quot;päälle liimatun&quot;
                  näköä.
                </p>
              </div>

              <div className="grid gap-4 md:col-span-2 md:grid-cols-3">
                {/* Liiketilat & julkisivut */}
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg">
                  {/* Kuva + overlay */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src="/gallery/esimerkkiautokeltainen.jpg" // vaihda halutessasi omaan kuvaan
                      alt="Liiketilat ja julkisivut"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    {/* Tekstit kuvan alareunassa */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                        Käyttökohde
                      </p>
                      <h3 className="text-sm font-semibold text-white">
                        Liiketilat & julkisivut
                      </h3>
                    </div>
                  </div>

                  {/* Kuvaus */}
                  <div className="p-4 text-sm text-slate-100">
                    Pysyvät kyltit, valomainoskotelot ja yrityksen
                    sisäänkäynnin ilme, joka jää mieleen.
                  </div>
                </div>

                {/* Messut & tapahtumat */}
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg">
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src="/gallery/billboard.jpg" // vaihda halutessasi omaan kuvaan
                      alt="Messut ja tapahtumat"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                        Käyttökohde
                      </p>
                      <h3 className="text-sm font-semibold text-white">
                        Messut & tapahtumat
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 text-sm text-slate-100">
                    Rulla- ja ripustettavat banderollit, backwallit,
                    sponsorilogot ja selkeät opasteet.
                  </div>
                </div>

                {/* Rakennus- & työmaakyltit */}
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg">
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src="/gallery/esimerkkiauto.jpg" // vaihda halutessasi omaan kuvaan
                      alt="Rakennus- ja työmaakyltit"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">
                        Käyttökohde
                      </p>
                      <h3 className="text-sm font-semibold text-white">
                        Rakennus- & työmaakyltit
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 text-sm text-slate-100">
                    Sääolosuhteita kestävät työmaa- ja tonttikyltit, joissa
                    tärkeä tieto näkyy kauas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Miksi Visual Wraps? */}
        <section className="border-b border-white/10 bg-gradient-to-b from-slate-950 to-slate-900/80">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-3 md:col-span-1">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Miksi tilata{" "}
                  <span className="text-amber-300">meiltä?</span>
                </h2>
                <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
                  Autamme valitsemaan oikean materiaalin, näkyvyyden ja
                  kiinnitystavan, jotta ratkaisu toimii koko käyttöikänsä ajan –
                  eikä vain ensimmäiset viikot.
                </p>
              </div>

              <div className="grid gap-4 md:col-span-2 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-100">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Kestävät materiaalit
                  </div>
                  <p>
                    Säänkestävät vinyylit, mesh-banderollit, komposiittilevyt,
                    PVC- ja non-PVC-vaihtoehdot käyttökohteen mukaan.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-100">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Selkeä hinnoittelu
                  </div>
                  <p>
                    Hinta perustuu mittoihin, materiaaliin ja kiinnitystapaan –
                    kerromme kaiken avoimesti ennen aloittamista.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-100">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Suunnittelu & asennus
                  </div>
                  <p>
                    Tarvittaessa hoidamme koko prosessin luonnoksista valmiiseen
                    kylttiin ja asennukseen asti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Yhteydenottolomake */}
<section className="relative bg-slate-950 py-16 md:py-20">
  {/* Taustakuva */}
  <div className="absolute inset-0">
    <Image
      src="/gallery/billboard.jpg" // Taustakuva
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
          kylteistä tai banderolleista
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
