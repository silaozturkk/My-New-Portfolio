const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-row justify-between px-44 py-4 text-neutral-600 text-center border-t-2 border-red-400 bottom-0 w-full">
            <p>© {currentYear} My Portfolio. All rights reserved.</p>
            <p className="text-fade-loop flex items-center">
                Build with <span className="px-1 text-2xl text-red-500">&#9829;</span> by Sıla Öztürk
            </p>
           
        </footer>
    );
}
export default Footer;