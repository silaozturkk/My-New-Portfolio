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

    return (
        <header 
            className={`2xl:py-14 mt-8 z-50 sticky top-0 md:py-8 py-4 pt-4 md:pt-8 text-white text-2xl font-semibold flex flex-row justify-around items-center
                ${scrolled ? "bg-orange-100/80 shadow-lg rounded-b-2xl" : "bg-transparent"}
                `}
            >
            <h1 className="font-semibold lg:text-3xl bg-linear-to-r from-pink-800 via-pink-600 to-pink-900 bg-clip-text text-transparent"><a href="/">Sıla Öztürk</a></h1>  
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-pink-500"
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
            <nav className="md:hidden flex">

            </nav>
        </header>
    );
}
export default Header;