"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ImageGallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  // Efek paralax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      aria-label={t.gallery.ariaLabel}
      className="py-16 md:py-24 bg-white px-6"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        <motion.figure
          style={{ y: yParallax }}
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full max-w-[1611px] aspect-[1611/901] rounded-[28px] bg-[#f5f5f7] overflow-hidden border border-black/[0.06] shadow-[0_20px_50px_rgb(0,0,0,0.06)]"
        >
          <img
            src="/assets/hud.webp"
            alt={t.gallery.captionPrefix}
            width={1611}
            height={901}
            draggable={false}
            className="w-full h-full object-cover select-none"
          />
          <figcaption className="sr-only">{t.gallery.captionPrefix}</figcaption>
        </motion.figure>
        <div className="w-full max-w-[1611px] flex justify-end mt-3 relative">
          <button
            type="button"
            onClick={() => setShowPopup(!showPopup)}
            className="cursor-pointer text-xs sm:text-sm font-medium tracking-[-0.01em] text-[#6e6e73] hover:text-[#1d1d1f] hover:underline transition-colors focus:outline-none"
          >
            Ingin ikut berkontribusi?
          </button>
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
    </section>
  );
}