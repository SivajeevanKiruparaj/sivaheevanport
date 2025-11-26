import React from 'react';
import sivaImg from '../assets/siva.jpg';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-primary font-medium text-sm mb-6 border border-slate-200 dark:border-slate-700"
                    >
                        👋 Welcome to my portfolio
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Sivajeevan
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
                        Software Engineer & UI/UX Designer. I create intelligent, user-focused digital experiences using modern web technologies and AI.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 transition-all flex items-center gap-2"
                        >
                            Hire Me <ArrowRight size={20} />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                        >
                            View Resume <FileText size={20} />
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <span className="text-slate-500 dark:text-slate-400 font-medium">Follow me:</span>
                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={24} />, href: "https://github.com" },
                                { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
                                { icon: <Instagram size={24} />, href: "https://instagram.com" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Glowing Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-30 animate-spin-slow"></div>

                        {/* Image Container */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">

                            <img
                                src={sivaImg}
                                alt="Sivajeevan Kiruparaj"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -left-4 top-10 glass p-4 rounded-xl flex items-center gap-3 shadow-lg"
                        >
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                                <code className="font-bold">{'< />'}</code>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Developer</p>
                                <p className="font-bold text-sm">React Specialist</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                            className="absolute -right-4 bottom-20 glass p-4 rounded-xl flex items-center gap-3 shadow-lg"
                        >
                            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                                <span className="font-bold">UI</span>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Designer</p>
                                <p className="font-bold text-sm">Figma Expert</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
