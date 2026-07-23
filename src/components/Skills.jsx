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
    if (level >= 60) return { label: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500/10 border-amber-500/30' }
    return { label: 'Basic', color: 'text-sky-400', bg: 'bg-sky-400/10    border-sky-400/30' }
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

export default function Skills() {
    const categoryColors = {
        Frontend: 'from-primary/20 to-primary/5 border-primary/20',
        Backend: 'from-accent/20 to-accent/5 border-accent/20',
        Tools: 'from-purple-500/20 to-purple-500/5 border-purple-500/20',
    }
    const categoryIcons = { Frontend: '🖥️', Backend: '⚙️', Tools: '🧰' }

    return (
        <section id="skills" className="section-padding bg-grid">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                        🛠️ My Toolkit
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-textColor/60 max-w-xl mx-auto">
                       My go-to stack for building fast, reliable, and clean web apps.
                    </p>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-5 mb-10 flex-wrap">
                    {[
                        { label: 'Advanced', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/30' },
                        { label: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500/10 border-amber-500/30' },
                        { label: 'Basic', color: 'text-sky-400', bg: 'bg-sky-400/10 border-sky-400/30' },
                    ].map(({ label, color, bg }) => (
                        <div key={label} className="flex items-center gap-1.5">
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${bg} ${color}`}>{label}</span>
                        </div>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div
                            key={category}
                            className={`glass rounded-2xl p-6 bg-gradient-to-b ${categoryColors[category]} card-hover`}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{categoryIcons[category]}</span>
                                <h3 className="text-lg font-bold text-textColor">{category}</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                {skillList.map(skill => (
                                    <SkillItem key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
