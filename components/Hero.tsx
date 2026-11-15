"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-24 pb-16 md:pt-36 md:pb-24 px-6 bg-white"
    >
      <div className="max-w-[980px] mx-auto flex flex-col items-center">
        <div className="inline-flex flex-col items-end">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-[88px] font-semibold tracking-[-0.035em] leading-[1.04] text-center btn-shine"
          >
            {t.hero.title}
          </motion.h1>

          <div className="relative mt-2 sm:mt-3">
            <motion.button
              type="button"
              onClick={() => setShowPopup(!showPopup)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="cursor-pointer text-xs sm:text-sm md:text-base font-medium tracking-[-0.01em] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors focus:outline-none"
            >
              {t.hero.author}
            </motion.button>
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full mt-2 z-[99999] w-72 bg-white rounded-2xl p-4 shadow-md border border-black/[0.08] flex flex-col gap-3"
                >
                  <p className="text-xs font-medium text-[#1d1d1f] text-left">
                    ingin ikut berkontribusi?
                  </p>
                  <div className="flex items-center justify-between bg-[#f5f5f7] px-3 py-2 rounded-xl">
                    <img
                      src="/assets/logo_dana.webp"
                      alt="Logo DANA"
                      className="h-5 w-auto object-contain"
                    />
                    <span className="text-xs font-medium text-[#1d1d1f] tracking-tight">
                      083120996468
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-xl text-center text-lg sm:text-xl md:text-2xl font-normal tracking-[-0.015em] text-[#6e6e73] leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
}
