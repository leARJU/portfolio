import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, Award, CheckCircle } from 'lucide-react';

const experiences = [
    {
        role: "Python Developer Intern",
        company: "Senscript Technologies Pvt Ltd",
        duration: "Mar 2025 – Feb 2026",
        highlights: [
            "Developed and maintained web applications using Python and Django, focusing on clean, modular code and proper MVC architecture.",
            "Built and consumed RESTful APIs for seamless frontend-backend communication and integrated third-party APIs where required.",
            "Created and managed relational databases using MySQL/PostgreSQL, including writing efficient queries and handling migrations.",
            "Utilized HTML, CSS, JavaScript for frontend integration and worked with Django templates to render dynamic content.",
            "Implemented user authentication and authorization using Django's built-in authentication system and JWT-based APIs.",
            "Used Git for version control, collaborated on team projects using GitHub, and participated in regular code reviews."
        ]
    },
    {
        role: "Python Developer Trainee",
        company: "Synnefo Solutions",
        duration: "Jun 2023 – Dec 2023",
        highlights: [
            "Attended daily stand-ups and sprint planning meetings, following Agile development practices in a team environment.",
            "Gained hands-on experience with Git/GitHub for version control, code review, and collaborative development.",
            "Contributed to internal tools and admin dashboards to streamline workflow using Django’s admin panel and custom views.",
            "Participated in database modeling and managed CRUD operations using PostgreSQL/MySQL with Django ORM."
        ]
    }
];

const certifications = [
    {
        title: "Python Backend Developer",
        institution: "Senscript Technologies Pvt. Ltd.",
        duration: "Mar 2025 – Feb 2026",
        desc: "Trained in Python backend development with Django REST Framework, building secure REST APIs and handling database integration."
    },
    {
        title: "Flutter App Developer",
        institution: "Luminar Technolab",
        duration: "Apr 2024 – Oct 2024",
        desc: "Trained in building cross-platform mobile applications using Flutter and Dart, focusing on UI design, API integration, state management, and deployment."
    },
    {
        title: "Python Full Stack Developer",
        institution: "Synnefo Solutions Pvt. Ltd.",
        duration: "Jun 2023 – Dec 2023",
        desc: "Covered Django, REST APIs, database management (MySQL/PostgreSQL), frontend integration (HTML, CSS, JavaScript), Git, and real-world project development."
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'certifications'>('experience');

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Journey & <span className="text-gradient">Credentials</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>

                    {/* Tab Toggles */}
                    <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                activeTab === 'experience'
                                    ? 'bg-white dark:bg-slate-700 text-primary-600 dark:text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                        >
                            <Briefcase size={16} />
                            Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('certifications')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                activeTab === 'certifications'
                                    ? 'bg-white dark:bg-slate-700 text-primary-600 dark:text-white shadow-md'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                        >
                            <Award size={16} />
                            Certifications
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'experience' ? (
                            <motion.div
                                key="experience-tab"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="relative border-l-2 border-primary-500/20 pl-8 ml-4 md:ml-6"
                            >
                                {experiences.map((exp, idx) => (
                                    <div key={idx} className="relative mb-12 last:mb-0">
                                        {/* Icon Dot */}
                                        <span className="absolute -left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/60 border-2 border-primary-500 text-primary-600 dark:text-primary-400 shadow-md">
                                            <Briefcase size={14} />
                                        </span>

                                        <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                        {exp.role}
                                                    </h3>
                                                    <h4 className="text-base font-semibold text-primary-600 dark:text-primary-400 mt-1">
                                                        {exp.company}
                                                    </h4>
                                                </div>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 self-start md:self-center">
                                                    <Calendar size={12} />
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            <ul className="space-y-2.5">
                                                {exp.highlights.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                                                        <CheckCircle size={16} className="text-primary-500 shrink-0 mt-1" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="certifications-tab"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="relative border-l-2 border-emerald-500/20 pl-8 ml-4 md:ml-6"
                            >
                                {certifications.map((cert, idx) => (
                                    <div key={idx} className="relative mb-10 last:mb-0">
                                        {/* Icon Dot */}
                                        <span className="absolute -left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/60 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-md">
                                            <Award size={14} />
                                        </span>

                                        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-md">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                                        {cert.title}
                                                    </h3>
                                                    <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                                                        {cert.institution}
                                                    </h4>
                                                </div>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 self-start sm:self-center">
                                                    <Calendar size={12} />
                                                    {cert.duration}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                                {cert.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Experience;
