import { motion } from 'framer-motion';

const skillsData = [
    { name: 'Python', category: 'Language', color: 'bg-emerald-500' },
    { name: 'Django', category: 'Backend Framework', color: 'bg-primary-600' },
    { name: 'REST API', category: 'Backend API', color: 'bg-blue-500' },
    { name: 'MySQL', category: 'Database', color: 'bg-indigo-500' },
    { name: 'PostgreSQL', category: 'Database', color: 'bg-indigo-600' },
    { name: 'Celery', category: 'Task Queue', color: 'bg-teal-500' },
    { name: 'HTML & CSS', category: 'Frontend', color: 'bg-yellow-500' },
    { name: 'Bootstrap', category: 'CSS Framework', color: 'bg-purple-600' },
    { name: 'GitHub', category: 'Version Control', color: 'bg-orange-500' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise, focusing on python-based backend technologies, databases, and general web development skills.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-slate-200 dark:border-slate-800 text-center group cursor-default"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors`}>
                                <div className={`w-4 h-4 rounded-full ${skill.color} shadow-lg shadow-${skill.color}/50 animate-pulse`}></div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                                    {skill.name}
                                </h3>
                                <span className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full">
                                    {skill.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
