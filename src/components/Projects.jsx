import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "News Summarizer",
            desc: "AI-powered application that uses NLP to condense long news articles into concise summaries.",
            tags: ["Python", "NLP", "Flask", "React"],
            links: { demo: "#", code: "#" },
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Scam Detection System",
            desc: "Machine Learning model designed to identify and flag fraudulent transactions and messages.",
            tags: ["Python", "Scikit-learn", "Pandas"],
            links: { demo: "#", code: "#" },
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Supermarket Website",
            desc: "Full-featured e-commerce platform with cart functionality, user auth, and payment integration.",
            tags: ["React", "Vite", "Tailwind", "Firebase"],
            links: { demo: "#", code: "#" },
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "Personal Diet System",
            desc: "Health tracking application allowing users to monitor calorie intake and plan meals.",
            tags: ["React Native", "Node.js", "MongoDB"],
            links: { demo: "#", code: "#" },
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Bus Booking System",
            desc: "Digital booking platform for inter-city bus travel with seat selection and scheduling.",
            tags: ["PHP", "MySQL", "Bootstrap"],
            links: { demo: "#", code: "#" },
            color: "from-indigo-500 to-violet-500"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">Some of my recent work</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Decorative Gradient Header */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                    <a href={project.links.code} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                                        GitHub <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        View All Projects <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
