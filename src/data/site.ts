export const site = {
  name: "Rubén Peñaranda",
  firstName: "Rubén",
  initials: "RP",
  role: "Backend Developer",
  specialty: "Golang & PHP",
  location: "Barcelona, Spain",
  email: "rubenpenaranda21@gmail.com",
  githubUser: "imruben",
  github: "https://github.com/imruben",
  linkedin: "https://www.linkedin.com/in/ruben-pe%C3%B1aranda/",
  resumeUrl: "/resume.pdf",

  // Current role context — recognizable recruiter signal.
  currentCompany: "LuxExperience",
  currentProduct: "Mytheresa",
  currentProductUrl: "https://www.mytheresa.com",

  // Used for SEO canonical / Open Graph tags. Update with the real domain once deployed.
  url: "https://rubenpenaranda.dev",

  headline: "I build scalable backends in Go & PHP.",

  tagline:
    "Backend engineer with 4+ years designing high-performance microservices and cloud infrastructure for high-traffic platforms — currently powering the backend behind Mytheresa.",

  description:
    "Rubén Peñaranda — Backend Developer specialized in Golang and PHP, building scalable, high-performance microservices and cloud infrastructure for high-traffic platforms like Mytheresa.",
} as const;

export interface Stat {
  /** Numeric value triggers a count-up animation; omit for text-only stats. */
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 3, suffix: "", label: "Companies shipped for" },
  { display: "Go · PHP", label: "Core stack" },
  { display: "Mytheresa", label: "Currently building" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
