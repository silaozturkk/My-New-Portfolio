'use client';
import type { ElementType } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const { t } = useLanguage();
    const footerData = t.footer;
    const currentYear = new Date().getFullYear();
    const iconMap: Record<string, ElementType> = {
        github: FaGithub,
        linkedin: FaLinkedin,
    };

    return (
        <footer className="py-4 md:py-6 flex text-neutral-700 flex-wrap gap-3 justify-around items-center w-full border-t border-t-pink-500 bottom-0 text-[12px] md:text-base ">
            <p>{currentYear} © {footerData?.copyright}</p>
            <p className="flex items-center">
                {footerData?.buildText}
            </p>
            <div className="flex items-center gap-3">
                {footerData?.socialLinks?.map((link) => {
                    const Icon = iconMap[link.icon];
                    if (!Icon) return null;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-700 transition-colors"
                        >
                            <Icon aria-label={link.name} size={18} />
                        </a>
                    );
                })}
            </div>
        </footer>
    );
}
export default Footer;