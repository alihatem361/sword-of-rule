"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { getSiteCopy, type Language } from "@/lib/siteCopy";

const STORAGE_KEY = "sword-of-rule-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  isArabic: boolean;
  copy: ReturnType<typeof getSiteCopy>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  // Arabic is the default experience; only an explicit prior choice
  // (saved via the language switcher) opts out of it.
  if (typeof window === "undefined") return "ar";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ar") return saved;
  return "ar";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    setLanguage(getInitialLanguage());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    root.dataset.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isArabic: language === "ar",
      copy: getSiteCopy(language),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
