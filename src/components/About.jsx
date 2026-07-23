import { useState } from 'react'

const timeline = [
    {
        year: 'July 2025 – September 2025',
        title: 'Web Developer Intern',
        company: 'GAO Tek Inc.',
        desc: [
            'Developed and customized WordPress websites for business clients.',
            'Improved website responsiveness and performance optimization.',
            'Assisted in debugging, deployment, and SEO optimization of websites.',
            'Gained teamwork and communication skills in a international environment.'
        ],
        certificate: '/Certificate.pdf',
    },
    {
        year: 'Professional Certificate',
        title: 'Google Data Analytics',
        company: 'Coursera / Google',
        desc: [
            'Learned data cleaning, analysis, and visualization techniques.',
            'Gained hands-on experience with SQL, R programming, and Tableau.',
            'Completed a capstone project demonstrating real-world data analysis skills.',
        ],
        certificate: '/GoogleCertificate.pdf',
    },
]

export default function About() {
    const [certOpen, setCertOpen] = useState(false)
    const [certUrl, setCertUrl] = useState('')
    const [certTitle, setCertTitle] = useState('')

    const openCert = (url, title) => {
        if (window.innerWidth < 768) {
            window.open(url, '_blank')
            return
        }
        setCertUrl(url)
        setCertTitle(title)
        setCertOpen(true)
    }

    const closeCert = () => {
        setCertOpen(false)
        setCertUrl('')
        setCertTitle('')
    }

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-4">
                        👤 About Me
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Who I <span className="gradient-text">Am</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left - Bio */}
                    <div>
                        <p className="text-textColor/70 text-md leading-relaxed mb-6">
                            I'm <span className="text-textColor font-semibold">Eaindray Su Pan</span>, an aspiring Full-Stack Developer and Software Engineering student with hands-on internship experience and a strong passion for modern web technologies. I enjoy <span className="text-accent font-semibold">leading projects, collaborating with teams,</span> and building applications that are both functional and user-friendly.
                        </p>
                        <p className="text-textColor/70 text-md leading-relaxed mb-8">
                            From frontend interfaces to backend logic, I focus on writing clean, scalable code and continuously improving my technical and leadership skills.
                        </p>

                        {/* Personal info grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {[
                                ['📍', 'Location', 'Chiang Rai, Thailand'],
                                ['📧', 'Email', 'eaindraychu32@gmail.com'],
                                ['🎓', 'Degree', 'B.Eng. Software Engineering'],
                                ['🌐', 'Languages', 'Burmese, English, Thai'],
                            ].map(([icon, key, val]) => (
                                <div key={key} className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/30 transition-colors">
                                    <span className="text-xl">{icon}</span>
                                    <div>
                                        <div className="text-xs text-textColor/40 mb-0.5">{key}</div>
                                        <div className="text-sm font-medium text-textColor/80">{val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Right - Timeline */}
                    <div>
                        <h3 className="text-xl font-bold text-textColor mb-8 flex items-center gap-2">
                            <span className="text-accent">💼</span> Experience & Certifications
                        </h3>
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

                            <div className="flex flex-col gap-8">
                                {timeline.map((item, i) => (
                                    <div key={i} className="relative pl-12">
                                        {/* Dot */}
                                        <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-background border-2 border-primary" />
                                        <div className="glass rounded-xl p-5 card-hover">
                                            <span className="text-xs font-semibold text-accent">{item.year}</span>
                                            <h4 className="text-base font-bold text-textColor mt-2">{item.title}</h4>
                                            <p className="text-xs text-primary font-medium mt-2 mb-3">{item.company}</p>

                                            {/* Bullet points */}
                                            <ul className="space-y-1.5 mb-4">
                                                {item.desc.map((point, j) => (
                                                    <li key={j} className="flex items-start gap-2 text-sm text-textColor/60 leading-relaxed">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* View Certificate button */}
                                            {item.certificate && (
                                                <button
                                                    onClick={() => openCert(item.certificate, `${item.title} - ${item.company}`)}
                                                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-accent/40 bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 hover:border-accent/60 transition-all duration-200"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    View Certificate
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center mt-8 gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Let's Connect
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Certificate Modal (desktop only) */}
            {certOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
                    onClick={closeCert}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[85vh] glass rounded-2xl overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                            <span className="text-sm font-semibold text-textColor flex items-center gap-2 min-w-0">
                                <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="truncate">{certTitle || 'Certificate'}</span>
                            </span>
                            <button
                                onClick={closeCert}
                                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-textColor/60 hover:text-textColor transition-all shrink-0"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* PDF Embed */}
                        <div className="flex-1 p-3 flex flex-col min-h-0">
                            <iframe
                                src={`${certUrl}#toolbar=0&navpanes=0`}
                                className="w-full flex-1 rounded-xl"
                                style={{ minHeight: '70vh' }}
                                title="Certificate"
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="flex justify-center gap-3 px-5 py-3 border-t border-white/10">
                            <a
                                href={certUrl}
                                download
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-accent/40 bg-accent/10 text-accent text-xs font-semibold hover:bg-accent/20 transition-all"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download
                            </a>
                            <button
                                onClick={closeCert}
                                className="inline-flex items-center px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-textColor/60 hover:text-textColor text-xs font-semibold transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </section>
    )
}
