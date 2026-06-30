export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Go", "PHP", "C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Symfony", "Laravel", "React", "Redux"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Kubernetes", "Helm", "AWS", "Docker"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Architecture & Practices",
    items: [
      "Microservices",
      "Clean Architecture",
      "REST APIs",
      "TDD / BDD",
      "Sentry",
      "Agile (Scrum / Kanban)",
    ],
  },
];
