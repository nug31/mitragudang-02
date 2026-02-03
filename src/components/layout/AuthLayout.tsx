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

            <div className="w-full max-w-[450px] flex flex-col items-center relative z-10 animate-fade-in">
                {/* Simplified Top Branding */}
                <div className="flex flex-col items-center space-y-4 mb-8 text-center">
                    <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 transform transition-transform hover:scale-105 duration-300">
                        <LogIn className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {title}
                        </h1>
                        <p className="text-gray-400 text-sm font-medium tracking-wide">
                            Management System
                        </p>
                    </div>
                </div>

                {/* Main Content (Login/Register Card) */}
                <div className="w-full px-2">
                    {children}
                </div>

                {/* Simple Centered Footer */}
                <footer className="mt-12 flex flex-col items-center space-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Developed By</p>
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://jsnportofolio.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 rounded-lg transition-all"
                            title="Portfolio"
                        >
                            <Globe className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                        </a>
                        <a
                            href="https://instagram.com/j.s_nugroho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 hover:bg-pink-600/20 border border-white/10 rounded-lg transition-all"
                            title="Instagram"
                        >
                            <Instagram className="w-4 h-4 text-gray-400 hover:text-pink-500" />
                        </a>
                        <a
                            href="https://github.com/jsnugroho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                            title="GitHub"
                        >
                            <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AuthLayout;
