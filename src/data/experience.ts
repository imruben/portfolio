export interface Role {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  arrangement?: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: "LuxExperience",
    title: "Backend Developer",
    start: "Feb 2025",
    end: "Present",
    location: "Barcelona, Spain",
    arrangement: "Hybrid",
    highlights: [
      "Design and build high-performance microservices in Go, integrated with a large-scale Symfony ecosystem.",
      "Orchestrate cloud infrastructure and deployments with Kubernetes, Helm, and AWS.",
      "Optimize the architecture of a high-traffic luxury-fashion e-commerce platform for reliability and scalability.",
    ],
  },
  {
    company: "adnovation",
    title: "Junior Backend Developer",
    start: "Apr 2023",
    end: "Feb 2025",
    location: "Barcelona, Spain",
    arrangement: "Hybrid",
    highlights: [
      "Built scalable web solutions with modern PHP and Symfony, handling complex payment flows and REST APIs.",
      "Applied Clean Architecture principles, ensuring quality through automated TDD/BDD and error monitoring with Sentry.",
      "Maintained data consistency across SQL and NoSQL (MongoDB) databases in an Agile (Scrum/Kanban) environment.",
    ],
  },
  {
    company: "T-Innova Ingeniería Aplicada, S.A.",
    title: "Intern Full-Stack Developer",
    start: "Mar 2022",
    end: "Mar 2023",
    location: "Castelldefels, Spain",
    highlights: [
      "Engineered a comprehensive BackOffice web application using Laravel and React.js/Redux.",
      "Maintained and integrated internal systems (Intranet, Sports Center Management) using C#, PHP, and front-end technologies.",
      "Tuned SQL database performance via stored procedures and handled direct client technical requirements.",
    ],
  },
];

export interface Education {
  school: string;
  program: string;
  period: string;
}

export const education: Education[] = [
  {
    school: "CEFP Núria",
    program: "Web Application Development (Higher Vocational Degree)",
    period: "2021 – 2023",
  },
];
