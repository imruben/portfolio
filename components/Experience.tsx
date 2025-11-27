"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Mytheresa",
        role: "Backend Developer",
        period: "February 2025 - Present",
        description: "Currently working as a Backend Developer, contributing to the development and maintenance of high-traffic e-commerce systems.",
        tech: ["PHP", "Symfony", "Golang", "AWS"],
    },
    {
        company: "Adnovation",
        role: "Backend Developer",
        period: "April 2023 - February 2025",
        description: "Developed modern PHP/Symfony projects including REST APIs, payment flows, and client data management. Implemented BDD/TDD testing, managed SQL/NoSQL (Mongo) databases, and ensured clean code architecture with Sentry monitoring. Worked in Agile (Kanban/Scrum) environments.",
        tech: ["PHP", "Symfony", "MySQL", "MongoDB", "TDD", "Docker"],
    },
    {
        company: "T-Innova",
        role: "Full Stack Developer",
        period: "March 2022 - March 2023",
        description: "Managed SQL databases and developed C# integrations for sports center management. Built a BackOffice web app with Laravel and React/Redux, maintained an intranet using PHP/JS, and handled direct client interactions.",
        tech: ["PHP", "Laravel", "React", "C#", "SQL"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-primary">02.</span> Experience
                    </h2>

                    <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-primary" />
                                        {exp.company}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mt-1 sm:mt-0">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="text-lg font-medium text-primary mb-2">{exp.role}</div>
                                <p className="text-muted-foreground mb-4 max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
