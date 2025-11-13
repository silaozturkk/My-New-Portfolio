"use client"
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // hamburger menu acık oldugunda scroll u kapatmak için
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden"); // açıldıgında scrolu kapat
        } else {
            document.body.classList.remove("overflow-hidden"); // kapandıgında geri aç
        }

        return () => document.body.classList.remove("overflow-hidden"); // eğer component sayfadan kalkarsa diye açıkta tut
    }, [isMenuOpen]);


    return (
        <header 
            className={`2xl:mt-14 mt-8 z-50 sticky top-0 md:py-8 py-4 pt-4 md:pt-8 text-white text-2xl font-semibold flex flex-row justify-around items-center
                ${scrolled ? "bg-orange-100/90 shadow-lg rounded-b-2xl border-b-2 border-pink-700 md:border-pink-400" : "bg-transparent"}
                `}
            >
            <h1 className="font-semibold lg:text-3xl bg-linear-to-r from-pink-800 via-pink-600 to-pink-900 bg-clip-text text-transparent"><a href="/">Sıla Öztürk</a></h1>  
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-pink-700 z-20"
            >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button> 
            
            
            <nav className="hidden md:flex flex-row gap-5 lg:gap-10">
                <Link 
                    href="/" 
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/" ? "text-pink-400" : "text-white"}
                    `}
                >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    href="/about"
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/about" ? "text-pink-400" : "text-white"}
                    `}
                >
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    href="/project" 
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/project" ? "text-pink-400" : "text-white"}
                    `}
                >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <Link 
                    href="/contact" 
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/contact" ? "text-pink-400" : "text-white"}
                    `}
                >
                    Contact Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
            </nav>
            <nav className={`md:hidden fixed top-0 right-0 w-full max-w-xs h-full  bg-orange-100 shadow-2xl  flex flex-col items-center gap-8 pt-40 text-xl transition-transform duration-500 ${
                isMenuOpen ? "translate-x-0 " : "translate-x-full"}`
            }>

                <Link 
                    href="/" 
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/" ? "text-pink-400" : "text-white"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                    //secildikten sonra kapanması için
                >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    href="/about"
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/about" ? "text-pink-400" : "text-white"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                    
                >
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    href="/project" 
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/project" ? "text-pink-400" : "text-white"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>    
                <Link 
                    href="/contact" 
                    className={`relative hover:text-pink-400 transition-colors duration-300 group 
                        ${pathname==="/contact" ? "text-pink-400" : "text-white"}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
            </nav>
        </header>
    );
}
export default Header;