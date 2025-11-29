"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-border bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                    feel free to reach out!
                </p>

                <div className="flex justify-center gap-6 mb-12">
                    <Link
                        href="https://github.com/imruben"
                        target="_blank"
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        <FaGithub className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ruben-peñaranda/"
                        target="_blank"
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        <FaLinkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:rpenaranda.dev@gmail.com"
                        className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                        <Mail className="w-6 h-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground font-mono">
                    <p>
                        Designed & Built by{" "}
                        <Link
                            href="https://github.com/imruben"
                            target="_blank"
                            className="text-primary hover:underline"
                        >
                            @imruben
                        </Link>
                    </p>
                    <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
