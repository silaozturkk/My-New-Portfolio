const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-row text-[12px] md:text-base justify-between md:px-44 px-6 py-4 text-neutral-600 text-center border-t-2 border-neutral-400 bottom-0 w-full">
            <p>{currentYear} © All rights reserved.</p>
            <p className="flex items-center">
                Build with <span className="px-1  text-pink-500">&#9829;</span> by Sıla Öztürk
            </p>
           
        </footer>
    );
}
export default Footer;