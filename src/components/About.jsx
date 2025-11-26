import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Cpu, Gamepad2, TrendingUp, Dumbbell } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">
                            Bridging the gap between <span className="text-primary">Code</span> and <span className="text-secondary">Design</span>
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            I’m a passionate problem solver currently pursuing my <strong className="text-primary">MSc in Software Engineering</strong> at the University of Hertfordshire. With a background in UI/UX and a B.Sc. from the British College of Applied Studies, I specialize in building applications that not only work perfectly but look amazing too.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            My journey started with a curiosity for how things work, which led me to explore the depths of AI, Machine Learning, and Full-Stack Development. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-3xl text-primary mb-1">3+</h4>
                                <p className="text-sm text-slate-500">Years Experience</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <h4 className="font-bold text-3xl text-secondary mb-1">20+</h4>
                                <p className="text-sm text-slate-500">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { icon: <Code size={32} />, title: "Development", desc: "React, Node, Python", color: "text-blue-500" },
                            { icon: <User size={32} />, title: "UI/UX", desc: "Figma, Wireframing", color: "text-purple-500" },
                            { icon: <Cpu size={32} />, title: "AI / ML", desc: "NLP, TensorFlow", color: "text-emerald-500" },
                            { icon: <Gamepad2 size={32} />, title: "Hobbies", desc: "PUBG, Gym, Trading", color: "text-orange-500" },
                        ].map((item, index) => (
                            <div key={index} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                                <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                                <h4 className="font-bold mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
