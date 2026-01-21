"use client";
import { useLanguage } from "@/context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="relative flex w-20 h-9 items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
    >
      {/* Sliding pink pill */}
      <span
        className={`absolute h-7 w-9 rounded-full bg-pink-500 transition-all duration-300 ${
          lang === "en" ? "translate-x-1" : "translate-x-10"
        }`}
      />

      {/* Text */}
      <span
        className={`z-10 w-10 text-center text-sm font-semibold transition ${
          lang === "en" ? "text-white" : "text-neutral-500"
        }`}
      >
        EN
      </span>

      <span
        className={`z-10 w-10 text-center text-sm font-semibold transition ${
          lang === "tr" ? "text-white" : "text-neutral-500"
        }`}
      >
        TR
      </span>
    </button>
  );
};

export default LanguageToggle;
