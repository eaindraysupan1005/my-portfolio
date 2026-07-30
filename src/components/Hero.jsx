import { useEffect, useState } from 'react'
import eaindrayPhoto from '../assets/EaindraySu.jpg'

export default function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(t)
    }, [])

    const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Engineer', 'Software Engineer']
    const [roleIdx, setRoleIdx] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        const currentRole = roles[roleIdx]
        if (typing) {
            if (displayed.length < currentRole.length) {
                const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60)
                return () => clearTimeout(t)
            } else {
                const t = setTimeout(() => setTyping(false), 1800)
                return () => clearTimeout(t)
            }
        } else {
            if (displayed.length > 0) {
                const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
                return () => clearTimeout(t)
            } else {
                setRoleIdx((roleIdx + 1) % roles.length)
                setTyping(true)
            }
        }
    }, [displayed, typing, roleIdx])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
            {/* Glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-24 pb-8 lg:pt-0 lg:pb-0">
                {/* Left - Text Content */}
                <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Available for Work
                    </div>

                    <h2 className="text-textColor/60 text-lg font-medium mb-2">Hello, I'm</h2>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4">
                        <span className="gradient-text">Eaindray Su Pan</span>
                    </h1>

                    <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
                        <span className="text-2xl sm:text-3xl font-bold text-textColor/80">
                            {displayed}
                            <span className="inline-block w-0.5 h-7 bg-accent ml-1 animate-pulse align-middle" />
                        </span>
                    </div>

                    <p className="text-textColor/60 text-md max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
                        Aspiring Full-Stack Developer and Software Engineering student with hands-on internship experience and a strong foundation in modern web technologies. I enjoy leading projects, solving real-world problems, and building scalable, user-focused applications.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-xl border border-primary/40 bg-primary/40 text-textColor font-semibold text-sm hover:bg-primary/60 hover:border-primary hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/Resume.pdf"
                            download="Eaindray_Su_Pan_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-xl border-2 border-primary/50 text-primary font-semibold text-sm hover:border-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            Resume
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 sm:gap-8 mt-10 justify-center lg:justify-start">
                        {[['1', 'Internship'], ['3', 'Projects'], ['4.0', 'Current GPAX']].map(([num, label]) => (
                            <div key={label} className="text-center lg:text-left">
                                <div className="text-2xl font-extrabold gradient-text">{num}</div>
                                <div className="text-textColor/50 text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Photo */}
                <div className={`flex-shrink-0 transition-all duration-700 delay-200 order-first lg:order-last ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative animate-float">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-0.5 scale-105 blur-[3px] opacity-30" />
                        <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                {/* Real photo */}
                                <img
                                    src={eaindrayPhoto}
                                    alt="Eaindray Su Pan"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold text-accent border border-accent/20 shadow-lg whitespace-nowrap">
                            <span>💡 Problem Solver</span>
                        </div>
                        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 glass rounded-xl px-2 py-1 sm:px-3 sm:py-2 text-xs font-semibold text-accent border border-accent/20 shadow-lg whitespace-nowrap">
                            <span>✨ Creative Thinker</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-textColor/30">
                <span className="text-xs">Scroll down</span>
                <div className="w-5 h-8 rounded-full border border-textColor/20 flex items-start justify-center pt-1">
                    <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
                </div>
            </div>
        </section>
    )
}
