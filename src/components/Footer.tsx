import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 mb-2">
                            Arjun PS
                        </h3>
                        <p className="text-slate-400 max-w-sm">
                            Python Developer passionate about building robust, scalable logic and APIs.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/arjunps665"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:arjunps665@gmail.com"
                            className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>&copy; {currentYear} Arjun PS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
