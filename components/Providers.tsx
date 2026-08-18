"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionary, type Lang, type Dictionary } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const AppContext = createContext<Ctx | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider value={{ lang, setLang, t: dictionary[lang], theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de <Providers>");
  return ctx;
}
