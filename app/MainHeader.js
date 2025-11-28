"use client";

import { useState } from "react";

// Pieni, neutraali Instagram-ikoni
function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
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
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

// Yksinkertainen nuottimainen TikTok-tyylinen ikoni
function TiktokIcon({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // FIXED → navbar leijuu koko ajan sisällön päällä
    // Tumma, hieman läpinäkyvä tausta videon päällä
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md backdrop-saturate-150">
      <div className="px-3 sm:px-4 lg:px-8 py-1.5 lg:py-2.5">
        {/* DESKTOP: vasen nav – keskellä logo – oikealla some + CTA */}
        <div className="hidden items-center md:flex">
          {/* VASEN: navigaatio – pienempi ja tiiviimpi teksti */}
          <nav className="flex flex-1 items-center gap-4 text-[11px] font-medium text-slate-200 md:text-xs">
            <a href="/#etusivu" className="transition-colors hover:text-amber-300">
              Etusivu
            </a>
            <a href="/#palvelut" className="transition-colors hover:text-amber-300">

              Palvelut
            </a>
            <a href="/palvelut/galleria" className="transition-colors hover:text-amber-300">

              Galleria
            </a>
            
           <a href="/palvelut/meista" className="transition-colors hover:text-amber-300">

              Meistä
            </a>
            <a href="#yhteys" className="transition-colors hover:text-amber-300">
              Yhteystiedot
            </a>
          </nav>

          {/* KESKI: logo-linkki etusivulle */}
          <a
            href="/#etusivu"
            className="flex min-w-[80px] items-center justify-center px-4"
          >
            <div className="relative flex h-8 w-24 md:h-9 md:w-28 items-center justify-center overflow-visible">
              <img
                src="/logo-visualwraps.png"
                alt="Visual Wraps logo"
                className="h-full w-auto object-contain scale-[7.5] md:scale-[4.6]"
              />
            </div>
          </a>

          {/* OIKEA: some-ikonit + CTA-nappi */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/visual.wraps/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 hover:border-amber-400 hover:text-amber-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.tiktok.com/@visual.wraps"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 hover:border-amber-400 hover:text-amber-300"
                aria-label="TikTok"
              >
                <TiktokIcon className="h-6.5 w-6.5" />
              </a>
            </div>

            <a
              href="/#yhteys"
              className="rounded-full bg-amber-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md transition-colors hover:bg-amber-400"
            >
              Pyydä tarjous
            </a>
          </div>
        </div>

        {/* MOBIILI: hampurilainen vasemmalla, logo keskellä, CTA oikealla */}
        <div className="flex items-center justify-between md:hidden">
          {/* Hampurilainen */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100"
            aria-label="Avaa valikko"
          >
            <span className="sr-only">Valikko</span>
            <div className="flex flex-col items-center justify-center gap-[4px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                  mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                  mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          {/* Logo keskellä – vie aina etusivun hero-osioon */}
          <a href="/#etusivu" className="flex items-center">
            <div className="relative flex h-10 w-32 items-center justify-center overflow-visible">

              <img
                src="/logo-visualwraps.png"
                alt="Visual Wraps logo"
                className="h-full w-auto object-contain scale-[3.2]"

              />
            </div>
          </a>

          
          {/* CTA oikealla – vie etusivun yhteysosioon */}
<a
  href="/#yhteys"
  className="text-[8px] font-semibold uppercase tracking-[0.16em] text-amber-300"
>
  Pyydä tarjous
</a>

        </div>

        {/* MOBIILI: avautuva valikko hampurilaisesta */}
        {mobileMenuOpen && (
          <nav className="mt-2 flex flex-col gap-1 pb-2 text-sm text-slate-100 md:hidden">
                {[
      { href: "/#etusivu", label: "Etusivu" },
      { href: "/#palvelut", label: "Palvelut" },
      { href: "/palvelut/galleria", label: "Galleria" },
      { href: "/palvelut/meista", label: "Meistä" },
      { href: "#yhteys", label: "Yhteystiedot" },
    ].map((item) => (

              <a
                key={item.href + item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-100/90 hover:bg-slate-800/80 hover:text-amber-300"
              >
                {item.label}
              </a>
            ))}

            {/* SOME-ikonit viimeiseksi, samalle riville – SAMAT KUIN EKA HEADER */}
            <div className="mt-2 flex items-center justify-start gap-2 pl-3">
  <a
    href="https://www.instagram.com/visual.wraps/"
    target="_blank"
    rel="noreferrer"
    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 hover:border-amber-400 hover:text-amber-300"
    aria-label="Instagram"
  >
    <InstagramIcon className="h-4 w-4" />
  </a>
  <a
    href="https://www.tiktok.com/@visual.wraps"
    target="_blank"
    rel="noreferrer"
    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 hover:border-amber-400 hover:text-amber-300"
    aria-label="TikTok"
  >
    <TiktokIcon className="h-4 w-4" />
  </a>
</div>

          </nav>
        )}
      </div>
    </header>
  );
}
