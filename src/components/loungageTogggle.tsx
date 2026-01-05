"use client";
import { useState } from "react";

const LanguageToggle = () => {
  const [lang, setLang] = useState<"EN" | "TR">("EN");

  const toggleLang = () => {
    setLang(lang === "EN" ? "TR" : "EN");
  };

  return (
    <button
      onClick={toggleLang}
      className="relative flex w-20 h-9 items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
    >
      {/* Sliding pink pill */}
      <span
        className={`absolute h-7 w-9 rounded-full bg-pink-500 transition-all duration-300 ${
          lang === "EN" ? "translate-x-1" : "translate-x-10"
        }`}
      />

      {/* Text */}
      <span
        className={`z-10 w-10 text-center text-sm font-semibold transition ${
          lang === "EN" ? "text-white" : "text-white/40"
        }`}
      >
        EN
      </span>

      <span
        className={`z-10 w-10 text-center text-sm font-semibold transition ${
          lang === "TR" ? "text-white" : "text-white/40"
        }`}
      >
        TR
      </span>
    </button>
  );
};

export default LanguageToggle;
