"use client";

import { useState } from "react";

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
            <a href="#palvelut" className="transition-colors hover:text-amber-300">
              Palvelut
            </a>
            <a href="#galleria" className="transition-colors hover:text-amber-300">
              Galleria
            </a>
            <a href="#hinnasto" className="transition-colors hover:text-amber-300">
              Hinnasto
            </a>
            <a href="#meista" className="transition-colors hover:text-amber-300">
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
                className="h-full w-auto object-contain scale-[6.4] md:scale-[3.9]"
              />
            </div>
          </a>

          {/* OIKEA: some-ikonit + CTA-nappi */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 font-semibold uppercase tracking-[0.16em] hover:border-amber-400 hover:text-amber-300"
              >
                IG
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 font-semibold uppercase tracking-[0.16em] hover:border-amber-400 hover:text-amber-300"
              >
                TT
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
            <div className="relative flex h-8 w-24 items-center justify-center overflow-visible">
              <img
                src="/logo-visualwraps.png"
                alt="Visual Wraps logo"
                className="h-full w-auto object-contain scale-[1.9]"
              />
            </div>
          </a>

          {/* CTA oikealla – vie etusivun yhteysosioon */}
          <a
            href="/#yhteys"
            className="text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-300"
          >
            Pyydä tarjous
          </a>
        </div>

        {/* MOBIILI: avautuva valikko hampurilaisesta */}
        {mobileMenuOpen && (
          <nav className="mt-2 flex flex-col gap-1 pb-2 text-sm text-slate-100 md:hidden">
            {[
              { href: "/#etusivu", label: "Etusivu" },
              { href: "#palvelut", label: "Palvelut" },
              { href: "#galleria", label: "Galleria" },
              { href: "#hinnasto", label: "Hinnasto" },
              { href: "#meista", label: "Meistä" },
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
          </nav>
        )}
      </div>
    </header>
  );
}
