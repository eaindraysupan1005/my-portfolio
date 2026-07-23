import { useState, useEffect } from 'react'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('')

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
                        Eaindray Su Pan
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setActive(link.href)}
                                    className={`relative text-sm font-medium transition-colors duration-200 group ${active === link.href ? 'text-accent' : 'text-textColor/70 hover:text-textColor'}`}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full" />
                                </a>
                            </li>
                        ))}

                    </ul>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg text-textColor/70 hover:text-textColor hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 flex flex-col justify-between">
                            <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden glass border-t border-primary/10">
                    <ul className="flex flex-col gap-1 p-4">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-3 rounded-lg text-textColor/70 hover:text-textColor hover:bg-white/5 transition-colors font-medium"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </nav>
    )
}
