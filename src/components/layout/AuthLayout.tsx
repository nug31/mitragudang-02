import React, { ReactNode } from "react";
import { LogIn, Globe, Instagram, Github } from "lucide-react";
import { APP_NAME } from "../../config";

interface AuthLayoutProps {
    children: ReactNode;
    title?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    title = APP_NAME
}) => {
    return (
        <div className="min-h-screen bg-[#0a0f18] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Immersive Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0a0f18]"></div>

                {/* Animated Gradient Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px] animate-float"></div>

                {/* Bubbles/Particles Effect */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/5 rounded-full blur-sm animate-float pointer-events-none"
                        style={{
                            width: `${Math.random() * 40 + 10}px`,
                            height: `${Math.random() * 40 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.3
                        }}
                    ></div>
                ))}
            </div>

            <div className="w-full max-w-[1200px] flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center relative z-10">
                {/* Left Side: Branding/Intro (Desktop) / Top Branding (Mobile) */}
                <div className="flex flex-col justify-center space-y-6 text-white p-4 lg:p-8 animate-fade-in-up">
                    <div className="flex items-center space-x-3 stagger-1">
                        <div className="p-2 lg:p-3 bg-blue-600 rounded-xl lg:rounded-2xl shadow-lg shadow-blue-500/30">
                            <LogIn className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                        </div>
                        <h1 className="text-2xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {title}
                        </h1>
                    </div>

                    <div className="space-y-3 lg:space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight stagger-2">
                            Modern <br className="hidden lg:block" />
                            <span className="text-blue-500 whitespace-nowrap lg:whitespace-normal text-xl lg:text-5xl lg:inline-block">{APP_NAME} Management</span>
                        </h2>
                        <p className="text-gray-400 text-sm lg:text-lg max-w-md stagger-3 leading-relaxed">
                            Fast, professional, and precise asset tracking for your business.
                        </p>
                    </div>

                    {/* Branding Section (Desktop hidden on mobile, replaced by bottom section) */}
                    <div className="hidden lg:flex flex-col space-y-4 stagger-4 pt-4">
                        <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">Developed By</p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://jsnportofolio.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <Globe className="w-4 h-4 text-blue-400 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">My Portfolio</p>
                                    <p className="text-sm text-white font-medium">jsnportofolio.netlify.app</p>
                                </div>
                            </a>

                            <div className="flex items-center space-x-2">
                                <a
                                    href="https://instagram.com/j.s_nugroho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-600/50 transition-all group"
                                    title="Instagram"
                                >
                                    <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-500" />
                                </a>
                                <a
                                    href="https://github.com/jsnugroho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all group"
                                    title="GitHub"
                                >
                                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: content (Login/Register) */}
                <div className="flex justify-center items-center w-full px-2 lg:px-0">
                    {children}
                </div>

                {/* Mobile-only Branding/Contact (Bottom) */}
                <div className="lg:hidden flex flex-col items-center space-y-4 pt-8 pb-4 animate-fade-in-up stagger-5 border-t border-white/5 mt-4 w-full">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">Developed By</p>
                    <div className="flex flex-col items-center space-y-4">
                        <a
                            href="https://jsnportofolio.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 px-6 py-2 bg-white/5 rounded-full border border-white/10"
                        >
                            <Globe className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-white font-medium">jsnportofolio.netlify.app</span>
                        </a>
                        <div className="flex items-center space-x-6">
                            <a href="https://instagram.com/j.s_nugroho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/jsnugroho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
