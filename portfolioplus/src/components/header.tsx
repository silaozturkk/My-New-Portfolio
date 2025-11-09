"use client"
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="2xl:py-14 lg:py-16 py-8 text-white text-2xl font-semibold flex flex-row justify-around items-center">
            <h1 className="font-semibold text-3xl text-white"><a href="/">Sıla Öztürk</a></h1>  
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-pink-500"
            >
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button> 
            
            <nav className="hidden lg:flex flex-row gap-10">
                <a href="/" className="relative hover:text-pink-400 transition-colors duration-300 group">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/about" className="relative  hover:text-pink-400 transition-colors duration-300 group">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/project" className="relative  hover:text-pink-400 transition-colors duration-300 group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                <a href="/contact" className="relative hover:text-pink-400 transition-colors duration-300 group">
                    Contact Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </nav>
            <nav className="lg:hidden flex">

            </nav>
        </header>
    );
}
export default Header;