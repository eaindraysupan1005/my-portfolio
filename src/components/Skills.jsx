import { useState, useEffect, useRef } from 'react'

const skills = {
    Frontend: [
        { name: 'HTML/CSS', icon: '🌐', level: 97 },
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'JavaScript', icon: '🔷', level: 90 },
        { name: 'Tailwind CSS', icon: '🎨', level: 80 },
        { name: 'TypeScript', icon: '🔷', level: 60 },
    ],
    Backend: [
        { name: 'REST APIs', icon: '🔗', level: 93 },
        { name: 'PostgreSQL', icon: '🐘', level: 70 },
        { name: 'Node.js', icon: '🟢', level: 70 },
        { name: 'FastAPI', icon: '🐍', level: 60 },
        { name: 'Spring Boot', icon: '🍃', level: 50 },
    ],
    Tools: [
        { name: 'Git / GitHub', icon: '🐙', level: 92 },
        { name: 'CI/CD', icon: '⚙️', level: 80 },
        { name: 'Docker', icon: '🐳', level: 75 },
        { name: 'Figma', icon: '🎭', level: 78 },
    ],
}

const proficiency = (level) => {
    if (level >= 85) return { label: 'Advanced', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/30' }
    if (level >= 60) return { label: 'Medium',   color: 'text-amber-500',  bg: 'bg-amber-500/10 border-amber-500/30'   }
    return             { label: 'Basic',    color: 'text-sky-400',    bg: 'bg-sky-400/10 border-sky-400/30'       }
}

function SkillItem({ skill }) {
    const p = proficiency(skill.level)
    return (
        <div className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="flex items-center gap-2.5">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium text-textColor/80 group-hover:text-textColor transition-colors">
                    {skill.name}
                </span>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${p.bg} ${p.color}`}>
                {p.label}
            </span>
        </div>
    )
}

// Card content shared between stack and grid renders
function SkillCardContent({ category, skillList, categoryColors, categoryIcons }) {
    return (
        <div className={`glass rounded-2xl p-6 bg-gradient-to-b ${categoryColors[category]} card-hover h-full`}>
            <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[category]}</span>
                <h3 className="text-lg font-bold text-textColor">{category}</h3>
            </div>
            <div className="flex flex-col gap-2">
                {skillList.map(skill => <SkillItem key={skill.name} skill={skill} />)}
            </div>
        </div>
    )
}

// phase: 'idle' → 'spreading' → 'fading' → 'grid'
export default function Skills() {
    const [phase, setPhase] = useState('idle')
    const sectionRef = useRef(null)

    const categoryColors = {
        Frontend: 'from-primary/20 to-primary/5 border-primary/20',
        Backend:  'from-accent/20 to-accent/5 border-accent/20',
        Tools:    'from-purple-500/20 to-purple-500/5 border-purple-500/20',
    }
    const categoryIcons = { Frontend: '🖥️', Backend: '⚙️', Tools: '🧰' }
    const cats  = Object.entries(skills)
    const total = cats.length              // 3

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            // On mobile skip straight to grid
            if (window.innerWidth < 768) { setPhase('grid'); observer.disconnect(); return }
            setPhase('spreading')
            setTimeout(() => setPhase('grid'), 1350)
            observer.disconnect()
        }, { threshold: 0.2 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Unused fixed width - we use relative % width now

    return (
        <section ref={sectionRef} id="skills" className="section-padding bg-grid">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                        🛠️ My Toolkit
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Skills &amp; <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-textColor/60 max-w-xl mx-auto">
                        My go-to stack for building fast, reliable, and clean web apps.
                    </p>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-5 mb-10 flex-wrap">
                    {[
                        { label: 'Advanced', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/30' },
                        { label: 'Medium',   color: 'text-amber-500',   bg: 'bg-amber-500/10 border-amber-500/30'    },
                        { label: 'Basic',    color: 'text-sky-400',     bg: 'bg-sky-400/10 border-sky-400/30'        },
                    ].map(({ label, color, bg }) => (
                        <div key={label} className="flex items-center gap-1.5">
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${bg} ${color}`}>{label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Stack / Spread phase ────────────────────────────── */}
                {phase !== 'grid' && (
                    <div style={{
                        position: 'relative',
                        overflow: 'visible',
                    }}>
                        {/* Ghost grid to force perfect container height */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8" style={{ visibility: 'hidden', pointerEvents: 'none' }}>
                            {cats.map(([category, skillList]) => (
                                <SkillCardContent
                                    key={`ghost-${category}`}
                                    category={category}
                                    skillList={skillList}
                                    categoryColors={categoryColors}
                                    categoryIcons={categoryIcons}
                                />
                            ))}
                        </div>

                        {cats.map(([category, skillList], i) => {
                            const offset    = i - (total - 1) / 2   // -1, 0, +1
                            const spreading = phase !== 'idle'

                            // Stacked: all cards at same center, with rotation + slight vertical offset
                            // Spread:  fan out horizontally
                            // calc(33.333% - 21.33px) matches 3 cols with 32px (sm:gap-8) gap
                            // 100% in tx refers to the card's own width.
                            const tx     = spreading ? `calc(-50% + ${offset} * calc(100% + 32px))` : '-50%'
                            const rotate = spreading ? '0deg' : `${offset * 8}deg`
                            const topPx  = spreading ? 0 : -Math.abs(offset) * 14  // back cards peek up
                            const delay  = Math.abs(offset) * 110  // centre reveals first

                            return (
                                <div key={category} style={{
                                    position:   'absolute',
                                    width:      'calc(33.333% - 21.33px)',
                                    left:       '50%',
                                    top:        `${topPx}px`,
                                    transform:  `translateX(${tx}) rotate(${rotate})`,
                                    transition: `transform 1.35s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                                                 top      1.35s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                                    zIndex:     total - Math.round(Math.abs(offset)),
                                    willChange: 'transform',
                                }}>
                                    <SkillCardContent
                                        category={category}
                                        skillList={skillList}
                                        categoryColors={categoryColors}
                                        categoryIcons={categoryIcons}
                                    />
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* ── Real grid (replaces the spread instantly) ───────── */}
                {phase === 'grid' && (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {cats.map(([category, skillList]) => (
                            <SkillCardContent
                                key={category}
                                category={category}
                                skillList={skillList}
                                categoryColors={categoryColors}
                                categoryIcons={categoryIcons}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}
