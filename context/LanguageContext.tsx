"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import idDict from "@/dictionaries/id.json";
import enDict from "@/dictionaries/en.json";

type Locale = "id" | "en";
type Dictionary = typeof idDict;

interface LanguageContextType {
  locale: Locale;
  setLocale: (lang: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const saved = localStorage.getItem("simple_island_lang") as Locale | null;
    if (saved === "id" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (lang: Locale) => {
    setLocaleState(lang);
    localStorage.setItem("simple_island_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = locale === "id" ? idDict : enDict;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
