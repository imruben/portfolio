"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
    {
        title: "FightClub",
        description: "A comprehensive platform for UFC fight results, fighter statistics, and event tracking. Built to provide real-time updates and detailed analytics for MMA enthusiasts.",
        tags: ["Next.js", "Tailwind CSS", "API Integration", "Analytics"],
        link: "https://fightclub.rubenpenaranda.com/",
        github: null,
        icon: <Trophy className="w-10 h-10 text-primary" />,
    },
    {
        title: "More Projects Coming Soon",
        description: "I am constantly working on new ideas and experiments. Stay tuned for more open-source contributions and personal projects.",
        tags: ["WIP", "Open Source", "Innovation"],
        link: null,
        github: "https://github.com/imruben",
        icon: <FaGithub className="w-10 h-10 text-muted-foreground" />,
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">03.</span> Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
                            >
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="mb-6 flex items-start justify-between">
                                        <div className="p-3 rounded-lg bg-secondary/50 text-primary">
                                            {project.icon}
                                        </div>
                                        <div className="flex gap-4">
                                            {project.github && (
                                                <Link
                                                    href={project.github}
                                                    target="_blank"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <FaGithub className="w-6 h-6" />
                                                </Link>
                                            )}
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <ExternalLink className="w-6 h-6" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
