// app/Footer.js

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} Visual Wraps. Kaikki oikeudet pidätetään.
        </div>

        <div className="flex flex-wrap gap-3 sm:justify-end">
          <span className="text-slate-400">
            Näyttävät ja toimivat nettisivut –{" "}
            <a
              href="https://www.leodigital.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-200 hover:underline"
            >
              LeoDigital.fi
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
