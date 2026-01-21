'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

import enNavbar from "@/data/en-navbar.json";
import trNavbar from "@/data/tr-navbar.json";
import enHome from "@/data/en-home.json";
import trHome from "@/data/tr-home.json";
import enAbout from "@/data/en-about.json";
import trAbout from "@/data/tr-about.json";
import enContact from "@/data/en-contact.json";
import trContact from "@/data/tr-contact.json";
import enFooter from "@/data/en-footer.json";
import trFooter from "@/data/tr-footer.json";
import enProject from "@/data/en-project.json";
import trProject from "@/data/tr-project.json";

type SupportedLang = "en" | "tr";

type Translations = {
  navbar: typeof enNavbar;
  home: typeof enHome;
  about: typeof enAbout;
  contact: typeof enContact;
  footer: typeof enFooter;
  project: typeof enProject;
};

type LanguageContextValue = {
  lang: SupportedLang;
  t: Translations;
  toggleLang: () => void;
  setLang: (lang: SupportedLang) => void;
};

const translations: Record<SupportedLang, Translations> = {
  en: {
    navbar: enNavbar,
    home: enHome,
    about: enAbout,
    contact: enContact,
    footer: enFooter,
    project: enProject,
  },
  tr: {
    navbar: trNavbar,
    home: trHome,
    about: trAbout,
    contact: trContact,
    footer: trFooter,
    project: trProject,
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<SupportedLang>("en");

  // hydrate from localStorage on mount
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "tr" || stored === "en") {
      setLang(stored);
    }
  }, []);

  // keep html lang attribute and localStorage in sync
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setLang((prev) => (prev === "en" ? "tr" : "en")),
      setLang,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

