import MainHeader from "../../MainHeader";
import Image from "next/image";
import Link from "next/link";


export default function MeistaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
            {/* HERO – Meistä */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* Taustakuva */}
        <div className="absolute inset-0">
          <Image
            src="/services/wrap.point.musta.jpg" // sama kuva kuin ennen
            alt="Wrap Point studio ja tiimi hallissa"
            fill
            priority
            className="h-full w-full object-cover"
          />
          {/* Tummennus kuvon päälle */}
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="pointer-events-none absolute -right-10 top-1/4 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        </div>


        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] items-center">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-amber-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
                Meistä
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                Wrap Point on{" "}
                <span className="text-amber-300">auto- ja mainosteippausten studio,</span>{" "}
                jossa yksityiskohdat ratkaisevat.
              </h1>
              <p className="text-sm sm:text-base text-slate-200/85">
               Tänne sivulle laitetaan Wrap Pointin esittely ja vaikka enempi yhteystietoja kuten asentajien esittelyt yms.
              </p>
              <p className="text-sm sm:text-base text-slate-300/90">
                Rakennamme autoista, ikkunoista ja julkisivuista
                yhtenäisiä kokonaisuuksia. Meille tärkeintä on, että työ näyttää
                hyvältä ja kestää kauan joka olosuhteessa.
              </p>
            </div>

            {/* Kuva / mockup tiimistä tai hallista */}
            


          </div>
        </div>
      </section>

      {/* Arvot & tapa tehdä */}
      <section className="border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Miten me{" "}
                <span className="text-amber-300">teemme teippauksia?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300/90">
                Haluamme, että projekti on sinulle helppo: yksi yhteyshenkilö,
                selkeät ehdotukset ja rehellinen mielipide siitä, mikä toimii
                käytännössä. Emme tee teippauksia vain kuvan perusteella, vaan
                mietimme samalla huoltoa, kestävyyttä ja jälkiasennuksia.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Laadukkaat materiaalit",
                  desc: "Käytämme tunnettujen valmistajien kalvoja, jotka kestävät käyttöä ja säätä.",
                },
                {
                  title: "Tarkka viimeistely",
                  desc: "Leikkaukset, saumat ja yksityiskohdat tehdään huolellisesti – autoissa ja pinnoissa.",
                },
                {
                  title: "Yksi ilme, monta pintaa",
                  desc: "Auto, vaatteet, ikkunat ja julkisivu voidaan suunnitella yhdeksi kokonaisuudeksi.",
                },
                {
                  title: "Rehellinen hinnoittelu",
                  desc: "Tiedät etukäteen, mitä hinta sisältää ja mikä on realistinen aikataulu.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-sm shadow-black/40"
                >
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pieni "luvut" / luottamusta lisäävä osio */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Kenelle Wrap Point{" "}
                <span className="text-amber-300">sopii kumppaniksi?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300/90">
                Teemme töitä auto- ja motorsport-harrastajille, pienille ja
                keskisuurille yrityksille, sekä toimijoille, jotka haluavat
                oikeasti erottua – ei vain olla "ihan ok".
              </p>
              <p className="text-sm sm:text-base text-slate-300/90">
                Voimme aloittaa yhdestä autosta tai julkisivusta ja laajentaa
                myöhemmin muihin pintoihin. Tärkeintä on, että
                lopputulos näyttää siltä, että se voisi olla meidänkin
                portfoliokuvissamme.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-center shadow-xl shadow-black/40">
              <div>
                <p className="text-2xl sm:text-3xl font-semibold text-amber-300">
                  100+
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                  Teipattua autoa ja projektia
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold text-amber-300">
                  1 kumppani
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300/90">
                  Kaikki pinnat samasta paikasta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
