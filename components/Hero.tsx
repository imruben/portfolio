"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center md:justify-start gap-2 mb-6 text-primary font-mono"
                        >
                            <Terminal className="w-5 h-5" />
                            <span>Hello, World! I am</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        >
                            Ruben Peñaranda
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-4xl text-muted-foreground mb-8 font-light"
                        >
                            Backend Developer Expert in <span className="text-foreground font-medium">PHP Symfony</span> & <span className="text-foreground font-medium">Golang</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0"
                        >
                            I build robust, scalable systems and solve complex problems.
                            Currently working at <span className="text-foreground font-medium">Mytheresa</span>.
                            Passionate about AWS, Kubernetes, and clean code.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4 justify-center md:justify-start"
                        >
                            <Link
                                href="#projects"
                                className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 shrink-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-2xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary bg-secondary/50">
                            {/* Placeholder for user image */}
                            <img
                                src="/me.png"
                                alt="Ruben Peñaranda"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
