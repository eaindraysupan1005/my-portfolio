import { useState } from 'react'
import emailjs from '@emailjs/browser'

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/eaindraysupan1005',
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/eaindray-su-pan/',
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
        ),
    },
    {
        label: 'Email',
        href: 'mailto:eaindraysupan@gmail.com',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        ),
    },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.send(
                'service_2et1sk7', // Replace with your Service ID
                'template_7yfymhj', // Replace with your Template ID
                {
                    name: form.name,
                    email: form.email,
                    title: form.subject,
                    message: form.message,
                },
                '4JMneQyqt5iWnhifW' // Replace with your Public Key
            );
            setSent(true)
            setForm({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                        📬 Get In Touch
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Let's <span className="gradient-text">Work Together</span>
                    </h2>
                    <p className="text-textColor/60 max-w-xl mx-auto">
                        Have an idea you want to build? Let’s chat. Drop me a line here or find me on social media.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
                    {/* Left - Info */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-textColor mb-4">Contact Info</h3>
                            <div className="flex flex-col gap-4">
                                {[
                                    ['📍', 'Location', 'Chiang Rai, Thailand, 57100'],
                                    ['📧', 'Email', 'eaindraysupan@gmail.com'],
                                    ['📱', 'Phone', '+66(0)96-803-0653'],
                                    ['💼', 'Status', 'Open to Internship Opportunities']
                                ].map(([icon, label, val]) => (
                                    <div key={label} className="flex items-center gap-3">
                                        <span className="text-xl">{icon}</span>
                                        <div>
                                            <div className="text-xs text-textColor/40">{label}</div>
                                            <div className="text-sm font-medium text-textColor/80">{val}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-base font-bold text-textColor mb-4">Find Me On</h3>
                            <div className="flex gap-3">
                                {socials.map(s => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        title={s.label}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center py-3 rounded-xl border border-primary/30 text-primary hover:text-textColor hover:border-primary/60 hover:bg-primary/10 transition-all duration-200"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="lg:col-span-3">
                        {sent ? (
                            <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-64 gap-4">
                                <span className="text-5xl">🎉</span>
                                <h3 className="text-2xl font-bold gradient-text">Message Sent!</h3>
                                <p className="text-textColor/60">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                                <button onClick={() => setSent(false)} className="mt-2 px-5 py-2 rounded-lg border border-primary/30 text-primary text-sm hover:bg-primary/10 transition-colors">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-8 flex flex-col gap-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                                        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                                    ].map(field => (
                                        <div key={field.name}>
                                            <label className="block text-xs font-semibold text-textColor/50 mb-2 uppercase tracking-wider">{field.label}</label>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={form[field.name]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/25 text-textColor text-sm placeholder-textColor/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-textColor/50 mb-2 uppercase tracking-wider">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/25 text-textColor text-sm placeholder-textColor/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-textColor/50 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-primary/25 text-textColor text-sm placeholder-textColor/30 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
