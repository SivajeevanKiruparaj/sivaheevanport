import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        Frontend: [
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Shadcn UI', level: 80 },
        ],
        Backend: [
            { name: 'Node.js', level: 75 },
            { name: 'PHP', level: 70 },
            { name: 'MySQL', level: 85 },
            { name: 'Firebase', level: 80 },
        ],
        "AI & ML": [
            { name: 'Python', level: 85 },
            { name: 'NLP', level: 70 },
            { name: 'TensorFlow', level: 60 },
            { name: 'Data Analysis', level: 75 },
        ],
        Design: [
            { name: 'Figma', level: 95 },
            { name: 'Adobe XD', level: 85 },
            { name: 'Wireframing', level: 90 },
            { name: 'Prototyping', level: 85 },
        ]
    };

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">Technologies I work with</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card p-6 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
                            <div className="space-y-6">
                                {items.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-slate-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
