import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Phone, MapPin } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Normally handle form submission here (EmailJS, API etc.)
        alert("Message sent successfully! (Demo)");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-slate-100/50 dark:bg-slate-900/20">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Get In <span className="text-gradient">Touch</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Have a project in mind or want to discuss backend architecture? Drop a message below and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 flex flex-col gap-6"
                    >
                        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-primary-500/50 transition-colors">
                            <div className="p-3 bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-xl">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                                <a href="mailto:arjunps665@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    arjunps665@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-primary-500/50 transition-colors">
                            <div className="p-3 bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                                <a href="tel:+918606165869" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    +91 8606165869
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-primary-500/50 transition-colors">
                            <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Location</h3>
                                <span className="text-slate-600 dark:text-slate-400">
                                    Irinjalakuda, Thrissur
                                </span>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-primary-500/50 transition-colors">
                            <div className="p-3 bg-slate-800/10 dark:bg-slate-100/10 text-slate-800 dark:text-slate-100 rounded-xl">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">GitHub</h3>
                                <a href="https://github.com/leARJU" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                    github.com/leARJU
                                </a>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-primary-500/50 transition-colors">
                            <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    linkedin.com/in/arjunps
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col gap-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 dark:text-white"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
