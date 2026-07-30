import { useState, useEffect, useRef } from 'react';

const projects = [
    {
        title: 'Mental Health Monitoring App',
        description: 'A full-stack mobile app for daily mood tracking, mental health assessment, and predictive analysis using machine learning.',
        cover: '/Mental_cover.jpg',
        team: '3-person team',
        bullets: [
            'Implemented JWT-based authentication and protected API routes',
            'Trained and integrated a logistic regression model for predictive mood analysis',
            'Designed PostgreSQL database schema for users, mood logs, and PHQ-9 records',
        ],
        details: {
            features: [
                'Daily mood check-in with emoji-based input',
                'Weekly PHQ-9 mental health assessment',
                'Email reminders and alert notifications',
                'Predictive mood analysis using machine learning',
                'Secure JWT-based user authentication',
                'Protected API routes for user data privacy',
            ],
            myTasks: [
                'Built JWT authentication system and protected API endpoints',
                'Developed email notification service for daily reminders and alerts',
                'Trained a logistic regression model on mood data for predictions',
                'Integrated the ML model into the FastAPI backend',
                'Designed PostgreSQL schema for users, mood logs, and PHQ-9 records',
                'Contributed to React Native screen development and UI integration',
            ],
            skillsLearned: [
                'JWT Authentication', 'FastAPI', 'PostgreSQL', 'scikit-learn',
                'Logistic Regression', 'Email Services', 'React Native', 'Python',
            ],
        },
        tags: ['React Native', 'FastAPI', 'PostgreSQL', 'JWT', 'Python', 'scikit-learn'],
        emoji: '🧠',
        color: 'from-indigo-500/20 to-indigo-500/5',
        border: 'border-indigo-500/20',
        accent: '#6366f1',
        github: 'https://github.com/kyuthin74/Lumora',
        live: '#',
    },
    {
        title: 'Eco Habits Tracker & Campaign Platform',
        description: 'A sustainability-focused mobile app encouraging users to build eco-friendly habits and join environmental campaigns.',
        cover: '/Eco_cover.jpg',
        team: '4-person team',
        bullets: [
            'Implemented Firebase Authentication for secure user login and registration',
            'Designed real-time habit tracking system using Firebase Realtime Database',
            'Built campaign participation and progress tracking features',

        ],
        details: {
            features: [
                'User authentication via Firebase Auth',
                'Real-time habit tracking with streaks and progress',
                'Environmental campaign browsing and participation',
                'Progress dashboards for individual and campaign goals',
                'Scalable NoSQL data model for habits and campaigns',
            ],
            myTasks: [
                'Implemented Firebase Authentication for login and registration',
                'Designed and built real-time habit tracking using Firebase Realtime Database',
                'Created campaign participation and progress tracking features',
                'Structured NoSQL data models for users, habits, and campaign records',
                'Developed responsive React Native UI components',
            ],
            skillsLearned: [
                'Firebase Auth', 'Firebase Realtime Database', 'React Native',
                'NoSQL Data Modeling', 'Real-time Sync', 'Mobile UI Design',
            ],
        },
        tags: ['React Native', 'Firebase Auth', 'Firebase Realtime Database'],
        emoji: '🌱',
        color: 'from-teal-500/20 to-teal-500/5',
        border: 'border-teal-500/20',
        accent: '#14b8a6',
        github: 'https://github.com/eaindraysupan1005/ecogo',
        live: 'https://play.google.com/store/apps/details?id=com.ecogo.v2&pcampaignid=web_share',
    },
    {
        title: 'Personal Finance Tracker',
        description: 'A full-stack finance management system for tracking income, expenses, budgets, and savings goals.',
        cover: '/Budget_cover.jpg',
        team: '5-person team',
        bullets: [
            'Developed RESTful APIs using Spring Boot for financial data management',
            'Designed relational database schema for transactions, budgets, and goals',
            'Integrated Supabase for secure cloud database and authentication support',
        ],
        details: {
            features: [
                'Income and expense tracking with categories',
                'Budget creation and monitoring',
                'Savings goal setting and progress tracking',
                'RESTful API for all financial operations',
                'Secure cloud database with Supabase',
                'Responsive dashboard with data visualization',
            ],
            myTasks: [
                'Built RESTful APIs with Spring Boot for all financial data operations',
                'Designed relational schema for transactions, budgets, and savings goals',
                'Integrated Supabase for cloud database and authentication',
                'Implemented full CRUD for income, expenses, and goal tracking',
                'Developed responsive React dashboard with charts and summaries',
            ],
            skillsLearned: [
                'Spring Boot', 'REST API Design', 'Supabase', 'PostgreSQL',
                'React', 'Data Visualization', 'Clean Architecture',
            ],
        },
        tags: ['React', 'Spring Boot', 'Supabase', 'REST API'],
        emoji: '💰',
        color: 'from-amber-500/20 to-amber-500/5',
        border: 'border-amber-500/20',
        accent: '#d97706',
        github: 'https://github.com/eaindraysupan1005/budget-bee',
        live: 'https://budgetbee.eaindraysupan.tech/',
    },
    // {
    //     title: 'Event & Ticketing Platform',
    //     description:
    //         'A role-based event management platform supporting attendees and organizers.',
    //         team: '4-person team',
    //     bullets: [
    //         'Implemented role-based access control for attendees and event organizers',
    //         'Built TypeScript-based React frontend with protected routes',
    //         'Developed ticket booking workflow with validation and data persistence',
    //     ],
    //     details: {
    //         features: [
    //             'Role-based access for attendees and organizers',
    //             'Event creation, editing, and management for organizers',
    //             'Ticket booking with validation and confirmation',
    //             'Protected routes based on user role',
    //             'Supabase-backed database for events and tickets',
    //         ],
    //         myTasks: [
    //             'Implemented role-based access control for attendees and organizers',
    //             'Designed RESTful APIs for event creation, ticket booking, and management',
    //             'Structured Supabase schema for users, events, and ticket records',
    //             'Built React frontend with TypeScript and protected role-based routes',
    //             'Developed the ticket booking workflow with data validation and persistence',
    //         ],
    //         skillsLearned: [
    //             'Role-Based Access Control', 'TypeScript', 'React', 'Supabase',
    //             'REST API Design', 'Protected Routes', 'Database Schema Design',
    //         ],
    //     },
    //     tags: ['React', 'TypeScript', 'Supabase', 'REST API'],
    //     emoji: '🎟️',
    //     color: 'from-blue-500/20 to-blue-500/5',
    //     border: 'border-blue-500/20',
    //     accent: '#3b82f6',
    //     github: 'https://github.com/eaindraysupan1005/tickora',
    //     live: 'https://tickora.eaindraysupan.tech/',
    // },
];

// ── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
    // Close on ESC
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    const { title, emoji, description, details, tags } = project;

    const Section = ({ label, icon, children }) => (
        <div>
            <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-textColor/80 uppercase tracking-widest mb-3">
                <span>{icon}</span> {label}
            </h4>
            {children}
        </div>
    );

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.6)' }}
            onClick={onClose}
        >
            <div
                className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border ${project.border} p-4 sm:p-7 flex flex-col gap-5 sm:gap-6 shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: `linear-gradient(to bottom, color-mix(in srgb, ${project.accent} 8%, var(--color-bg)), var(--color-bg))`,
                    boxShadow: `0 0 60px ${project.accent}30`,
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl sm:text-4xl">{emoji}</span>
                        <div>
                            <h3 className="text-sm sm:text-lg font-extrabold text-textColor leading-tight">{title}</h3>
                            <p className="text-xs sm:text-sm text-textColor/50 mt-0.5">{description}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="shrink-0 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-textColor/50 hover:text-textColor transition-colors border border-primary/20 hover:border-primary/40"
                        title="Close"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-primary/15" />

                {/* Features */}
                <Section label="Features" icon="✨">
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                        {details.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-textColor/70">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.accent + 'cc' }} />
                                {f}
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* My Tasks */}
                <Section label="My Tasks" icon="🛠️">
                    <ul className="space-y-2">
                        {details.myTasks.map((t, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-textColor/70">
                                <span className="shrink-0 font-bold text-xs mt-0.5 px-1.5 py-0.5 rounded" style={{ backgroundColor: project.accent + '22', color: project.accent }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Skills Learned */}
                <Section label="Skills Learned" icon="🎓">
                    <div className="flex flex-wrap gap-2">
                        {details.skillsLearned.map((s) => (
                            <span
                                key={s}
                                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold border"
                                style={{ borderColor: project.accent + '44', color: project.accent, backgroundColor: project.accent + '15' }}
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </Section>

            </div>
        </div>
    );
}

// ── Card content (shared between stack + grid renders) ──────────────────────
function ProjectCardContent({ project, onViewDetails }) {
    return (
        <div className={`glass rounded-2xl overflow-hidden flex flex-col bg-gradient-to-b ${project.color} border ${project.border} card-hover group h-full`}>
            {/* Cover image (or gradient placeholder for projects without a cover) */}
            <div className={`aspect-video w-full overflow-hidden bg-gradient-to-b ${project.color}`}>
                {project.cover && (
                    <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                )}
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                    <h3 className="text-base font-bold text-textColor mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
                    <p className="text-sm text-textColor/60 leading-relaxed">{project.description}</p>
                    {project.bullets && (
                        <ul className="mt-2 space-y-1">
                            {project.bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-sm text-textColor/60">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.accent + 'bb' }} />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium border"
                            style={{ borderColor: project.accent + '44', color: project.accent, backgroundColor: project.accent + '15' }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => onViewDetails(project)}
                    className="mt-auto w-full py-2 rounded-xl text-sm font-semibold border border-primary/30 hover:border-primary/60 bg-primary/8 hover:bg-primary/15 text-textColor/70 hover:text-textColor transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                    <svg className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                </button>
            </div>
        </div>
    );
}

// ── Section ───────────────────────────────────────────────────────────────────
// phase: 'idle' → 'spreading' → 'fading' → 'grid'
export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [phase, setPhase] = useState('idle');
    const sectionRef = useRef(null);

    const stackProjects = projects.slice(0, 3);  // first row only
    const extraProjects  = projects.slice(3);      // rest go below
    const stackTotal = stackProjects.length;        // 3

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            // Skip animation if not desktop (where 3-col grid is active)
            if (window.innerWidth < 1024) { setPhase('grid'); observer.disconnect(); return; }
            setPhase('spreading');
            setTimeout(() => setPhase('grid'), 1350);
            observer.disconnect();
        }, { threshold: 0.15 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Unused fixed width - we use relative % width now

    return (
        <section ref={sectionRef} id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                        🚀 Featured Work
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-textColor/60 max-w-xl mx-auto">
                        A selection of projects I've built — from production SaaS platforms to open-source tools.
                    </p>
                </div>

                {/* ── Stack / Spread phase ────────────────────────────────
                    Row 1: 3 spread cards (absolute on top of ghost grid).
                    Row 2+: any extra projects shown in a normal grid below.
                    Keeping the extra cards visible during the spread means
                    the container height matches the final grid → no jump. */}
                {phase !== 'grid' && (
                    <div>
                        <div style={{
                            position:   'relative',
                            overflow:   'visible',
                        }}>
                            {/* Ghost grid to force row 1 height */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ visibility: 'hidden', pointerEvents: 'none' }}>
                                {stackProjects.map(project => (
                                    <ProjectCardContent key={`ghost-${project.title}`} project={project} onViewDetails={() => {}} />
                                ))}
                            </div>

                            {stackProjects.map((project, i) => {
                                const offset    = i - (stackTotal - 1) / 2;  // -1, 0, +1
                                const spreading = phase !== 'idle';

                                // calc(33.333% - 16px) matches 3 columns with 24px (1.5rem) gap.
                                // 100% in tx refers to the card's own width.
                                const tx     = spreading ? `calc(-50% + ${offset} * calc(100% + 24px))` : '-50%';
                                const rotate = spreading ? '0deg' : `${offset * 8}deg`;
                                const topPx  = spreading ? 0 : -Math.abs(offset) * 14;
                                const delay  = Math.abs(offset) * 110;

                                return (
                                    <div key={project.title} style={{
                                        position:   'absolute',
                                        width:      'calc(33.333% - 16px)',
                                        left:       '50%',
                                        top:        `${topPx}px`,
                                        transform:  `translateX(${tx}) rotate(${rotate})`,
                                        transition: `transform 1.35s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                                                     top      1.35s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                                        zIndex:     stackTotal - Math.round(Math.abs(offset)),
                                        willChange: 'transform',
                                    }}>
                                        <ProjectCardContent project={project} onViewDetails={setSelectedProject} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Row 2+ — extra projects stay in normal flow so total
                            height matches the final grid (no layout shift). */}
                        {extraProjects.length > 0 && (
                            <>
                                <div style={{ height: '24px' }} />
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {extraProjects.map(project => (
                                        <ProjectCardContent key={project.title} project={project} onViewDetails={setSelectedProject} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* ── Real grid (replaces the spread instantly) ───────── */}
                {phase === 'grid' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <ProjectCardContent key={project.title} project={project} onViewDetails={setSelectedProject} />
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <a href="https://github.com/eaindraysupan1005" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200">
                        See all projects on GitHub
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
}
