"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  dictionaries,
  type Locale,
  type Dictionary,
} from "./dictionaries";

type Dict = (typeof dictionaries)["fr"] | (typeof dictionaries)["en"];

type LocaleContextValue = {
  locale: Locale;
  t: Dict;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "fr",
  t: dictionaries.fr,
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
