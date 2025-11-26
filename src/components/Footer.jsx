import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    © {new Date().getFullYear()} Sivajeevan Kiruparaj. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="https://github.com" className="text-slate-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" className="text-slate-400 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://instagram.com" className="text-slate-400 hover:text-primary transition-colors">
                        <Instagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
