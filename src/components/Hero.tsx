import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Download, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 -right-64 w-96 h-96 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/30 text-primary-600 dark:text-primary-400 font-medium text-sm"
                    >
                        <Terminal size={16} />
                        <span>Hello, World! I am</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                    >
                        <span className="block text-slate-900 dark:text-white mb-2">Arjun PS</span>
                        <span className="text-gradient">Python Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Certified Python Developer skilled in building robust, scalable backend architectures using Python, Django, Celery, and relational databases.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            className="cursor-pointer flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
                        >
                            View Projects
                            <ArrowDown size={18} />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download="Arjun_PS_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
                        >
                            Download Resume
                            <Download size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
