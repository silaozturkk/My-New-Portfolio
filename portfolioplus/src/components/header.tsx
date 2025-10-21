const Header = () => {
    return (
        <header className="px-4 flex flex-row justify-around bg-yellow-50">
            <h1>Sıla Öztürk</h1>
            <nav className="flex flex-row gap-4">
                <ul><a href="/">Home</a></ul>
                <ul><a href="/about">About Me</a></ul>
                <ul><a href="/education">Education</a></ul>
                <ul><a href="/experience">Experience</a></ul>
                <ul><a href="/projects">Projects</a></ul>
                <ul><a href="/contact">Contact</a></ul>
            </nav>
            
        </header>
    );
}
export default Header;