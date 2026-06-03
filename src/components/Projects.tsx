import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'GetAnyCars',
        description: 'A backend-only vehicle marketplace platform built with Django REST Framework. Features custom user roles, user-to-seller conversion with subscription-based access, and secure payment gateway integrations with plan usage enforcement.',
        tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT Authentication', 'Swagger', 'Payment Gateway Integration'],
        image: '/getanycars.png',
        github: '#',
        live: '#'
    },
    {
        title: 'Company Management System',
        description: 'A role-based company management portal with modules for employee registration, performance tracking, and project assignment. Features JWT-based login flows, salary management, and mailing systems with dynamic filters.',
        tech: ['Django', 'Django REST Framework', 'JavaScript', 'Bootstrap'],
        image: '/company_office.png',
        github: '#',
        live: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/20">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800 group hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-colors"
                        >
                            {/* Project Image */}
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <span className="text-5xl font-bold text-slate-300 dark:text-slate-700 uppercase tracking-widest opacity-50 transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
                                        {project.title.substring(0, 3)}
                                    </span>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
