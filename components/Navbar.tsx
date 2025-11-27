"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Terminal className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-mono font-bold text-lg tracking-tight">
                        ruben.dev
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="h-4 w-px bg-border" />
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/imruben"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/ruben-pe%C3%B1aranda/"
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/cv.pdf"
                            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            <span>CV</span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-foreground py-2 border-b border-border/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-2">
                                <Link
                                    href="https://github.com/imruben"
                                    target="_blank"
                                    className="p-2 rounded-md bg-secondary text-secondary-foreground"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/ruben-pe%C3%B1aranda/"
                                    target="_blank"
                                    className="p-2 rounded-md bg-secondary text-secondary-foreground"
                                >
                                    <FaLinkedin className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/cv.pdf"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>Download CV</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
