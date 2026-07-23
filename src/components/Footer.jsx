export default function Footer() {
    const year = new Date().getFullYear()
    const links = ['About', 'Projects', 'Skills', 'Contact']

    return (
        <footer className="border-t border-white/5 py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-textColor/40 text-sm">
                    © {year} <span className="gradient-text font-semibold">Eaindray Su Pan</span>. Crafted with passion❤️.
                </div>
                <nav className="flex gap-6">
                    {links.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm text-textColor/40 hover:text-textColor transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    )
}
