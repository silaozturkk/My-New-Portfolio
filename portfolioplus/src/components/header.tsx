import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <header className=" py-6 text-neutral-500 text-xl font-semibold flex flex-row justify-around shadow-4xl border-b-2 border-red-400">
            <h1 className="text-2xl"><a href="/">Sıla Öztürk</a></h1>   
            
            <nav className="flex flex-row gap-4 text-lg">
                <a href="/" className="relative px-2 hover:text-red-500 transition-colors duration-300 group">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/about" className="relative px-2 hover:text-red-500 transition-colors duration-300 group">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/project" className="relative px-2 hover:text-red-500 transition-colors duration-300 group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/contact" className="relative px-2 hover:text-red-500 transition-colors duration-300 group">
                    Contact Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
            </nav>
        </header>
    );
}
export default Header;