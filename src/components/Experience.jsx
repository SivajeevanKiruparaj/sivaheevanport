import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    const timeline = [
        {
            year: "2025 - Present",
            title: "MSc Software Engineering",
            org: "University of Hertfordshire",
            desc: "Specializing in advanced software development methodologies, cloud computing, and AI integration.",
            icon: <GraduationCap size={20} />,
            type: "education"
        },
        {
            year: "2024 - 2025",
            title: "B.Sc. (Hons) Software Engineering",
            org: "British College of Applied Studies",
            desc: "Graduated with honors. Focused on full-stack development and software architecture.",
            icon: <GraduationCap size={20} />,
            type: "education"
        },
        {
            year: "2023 - 2025",
            title: "Freelance UI/UX Designer",
            org: "Self-Employed",
            desc: "Designed user-centric interfaces for e-commerce platforms and mobile applications. Collaborated with clients to deliver high-fidelity prototypes.",
            icon: <Briefcase size={20} />,
            type: "work"
        },
        {
            year: "2022 - 2024",
            title: "HND Software Engineering",
            org: "British College of Applied Studies",
            desc: "Built a strong foundation in programming logic, database management, and web technologies.",
            icon: <GraduationCap size={20} />,
            type: "education"
        },
        {
            year: "2020 - 2021",
            title: "Computer Network Technician Trainee",
            org: "University of Jaffna",
            desc: "Gained hands-on experience in network infrastructure, troubleshooting, and system maintenance.",
            icon: <Briefcase size={20} />,
            type: "work"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Journey</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10"></div>

                                {/* Content Spacer for Desktop */}
                                <div className="hidden md:block w-1/2"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-medium text-primary mb-3">
                                            {item.icon} {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{item.org}</p>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
