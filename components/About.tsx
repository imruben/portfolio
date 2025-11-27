"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Database, Cloud, Terminal } from "lucide-react";

const skills = [
    { name: "PHP / Symfony", icon: <Server className="w-5 h-5" /> },
    { name: "Golang", icon: <Terminal className="w-5 h-5" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    { name: "Kubernetes", icon: <Code2 className="w-5 h-5" /> },
    { name: "SQL / NoSQL", icon: <Database className="w-5 h-5" /> },
];

const languages = [
    { name: "Spanish", level: "Native" },
    { name: "Catalan", level: "Native" },
    { name: "English", level: "B1 (Professional)" },
    { name: "French", level: "B2" },
];

export function About() {
    return (
        <section id="about" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">01.</span> About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                I am a passionate Backend Developer with a strong focus on building scalable, high-performance applications.
                                My journey in software development has led me to specialize in <span className="text-foreground font-medium">PHP (Symfony)</span> and <span className="text-foreground font-medium">Golang</span>.
                            </p>
                            <p>
                                Beyond coding, I have extensive experience with cloud infrastructure, particularly <span className="text-foreground font-medium">AWS</span> and <span className="text-foreground font-medium">Kubernetes</span>, ensuring that the applications I build are not only functional but also robust and deployable.
                            </p>
                            <p>
                                I thrive in solving complex backend challenges and optimizing systems for efficiency.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-primary" />
                                    Technical Skills
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
                                        >
                                            <span className="text-primary">{skill.icon}</span>
                                            <span className="text-sm font-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-primary" />
                                    Languages
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.name}
                                            className="p-3 rounded-lg bg-secondary/50 border border-border"
                                        >
                                            <div className="font-medium text-foreground">{lang.name}</div>
                                            <div className="text-sm text-muted-foreground">{lang.level}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
