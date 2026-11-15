"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-black/[0.06] transition-colors">
      <nav
        aria-label="Global Navigation"
        className="max-w-[1024px] mx-auto px-6 h-12 flex items-center justify-end text-xs tracking-tight"
      >
        <div className="flex items-center gap-6">
          <div
            role="group"
            aria-label="Language Switcher"
            className="flex items-center gap-1.5 text-[#86868b]"
          >
            <button
              type="button"
              onClick={() => setLocale("id")}
              aria-pressed={locale === "id"}
              className={`cursor-pointer transition-colors px-1 py-0.5 ${
                locale === "id"
                  ? "text-[#1d1d1f] font-semibold"
                  : "hover:text-[#1d1d1f]"
              }`}
            >
              ID
            </button>
            <span aria-hidden="true" className="text-black/20">
              |
            </span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={`cursor-pointer transition-colors px-1 py-0.5 ${
                locale === "en"
                  ? "text-[#1d1d1f] font-semibold"
                  : "hover:text-[#1d1d1f]"
              }`}
            >
              ENG
            </button>
          </div>

          <a
            href="#download"
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white font-normal px-3 py-1 rounded-full transition-colors"
          >
            {t.nav.downloadLink}
          </a>
        </div>
      </nav>
    </header>
  );
}
