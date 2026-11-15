"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DownloadSection() {
  const { t } = useLanguage();

  return (
    <>
      <section
        id="download"
        aria-labelledby="download-heading"
        className="py-24 md:py-32 px-6 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mx-auto text-center flex flex-col items-center"
        >
          <h2
            id="download-heading"
            className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f]"
          >
            {t.download.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6e6e73] max-w-md leading-relaxed">
            {t.download.description}
          </p>

          <div className="mt-9">
            <a
              href="/assets/download/Simple Island_1.0.0_x64-setup.exe"
              download="Simple Island_1.0.0_x64-setup.exe"
              className="inline-flex items-center gap-2.5 bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] text-white text-base sm:text-[17px] font-medium px-7 py-3.5 rounded-full transition-all shadow-sm"
            >
              <Download className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
              <span>{t.download.buttonText}</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-[#86868b] tracking-tight">
            {t.download.versionInfo}
          </p>
        </motion.div>
      </section>

      <footer className="bg-[#f5f5f7] border-t border-black/[0.06] py-8 px-6">
        <div className="max-w-[980px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6e73]">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}