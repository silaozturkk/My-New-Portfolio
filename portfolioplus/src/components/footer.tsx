const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-4 md:py-6 flex text-neutral-700  justify-around items-center w-full border-t border-t-pink-500 bottom-0 text-[12px] md:text-base ">
            <p>{currentYear} © All rights reserved.</p>
            <p className="flex items-center">
                Build with <span className="px-1  text-pink-500">&#9829;</span> by Sıla Öztürk
            </p>
           
        </footer>
    );
}
export default Footer;