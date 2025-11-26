import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // EmailJS integration would go here
        alert('Message sent! (This is a demo)');
        setFormState({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">Have a project in mind? Let's talk.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's build something amazing together</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            I'm currently available for freelance projects and open to full-time opportunities. If you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email</h4>
                                    <a href="mailto:sivajeevankiruparaje@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        sivajeevankiruparaje@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-secondary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Phone</h4>
                                    <p className="text-slate-600 dark:text-slate-300">+94 77 806 7354</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Location</h4>
                                    <p className="text-slate-600 dark:text-slate-300">Jaffna, Sri Lanka / Hertfordshire, UK</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 transition-all flex justify-center items-center gap-2"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
