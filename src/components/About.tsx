import { motion } from 'framer-motion';
import { Code2, Database, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/20">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-4"
                    >
                        About Me
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-emerald-400 rounded-2xl transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
                            <div className="glass-card rounded-2xl p-8 relative z-10 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Who I Am</h3>
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                    I am a certified Python Developer seeking challenging opportunities where I can fully use my skills for the organization. I thrive in environments that encourage professional growth and success, allowing me to leverage my backend expertise to solve complex engineering challenges.
                                </p>
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                    Equipped with a solid foundation in software logic, I specialize in web framework architectures (Django, REST API), scheduling tools (Celery), and database management. I bridge frontend integrations with robust backend systems.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="glass-card p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300 sm:col-span-2">
                            <Rocket size={32} className="text-primary-600 dark:text-primary-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Education</h3>
                            <p className="font-semibold text-slate-800 dark:text-slate-200">Bachelor of Computer Applications (BCA)</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Calicut University | Graduation: 2020 - 2023</p>
                        </div>

                        <div className="glass-card p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
                            <Code2 size={32} className="text-emerald-600 dark:text-emerald-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Focus</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Django, REST APIs, Celery, and database schema design.</p>
                        </div>

                        <div className="glass-card p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300">
                            <Database size={32} className="text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Languages</h3>
                            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                                <li><strong>English:</strong> Read, Write, Speak</li>
                                <li><strong>Malayalam:</strong> Read, Write, Speak</li>
                                <li><strong>Hindi:</strong> Read, Speak</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
