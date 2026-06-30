export const site = {
  name: "Rubén Peñaranda",
  role: "Backend Developer",
  specialty: "Golang & PHP",
  location: "Barcelona, Spain",
  email: "rubenpenaranda21@gmail.com",
  githubUser: "imruben",
  github: "https://github.com/imruben",
  linkedin: "https://www.linkedin.com/in/ruben-pe%C3%B1aranda/",
  resumeUrl: "/resume.pdf",

  // Used for SEO canonical / Open Graph tags. Update with the real domain once deployed.
  url: "https://rubenpenaranda.dev",

  tagline:
    "PHP / Golang expert building scalable, high-performance systems. 4+ years of experience and a strong commitment to continuous learning.",

  description:
    "Rubén Peñaranda — Backend Developer specialized in Golang and PHP, building scalable, high-performance microservices and cloud infrastructure.",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
