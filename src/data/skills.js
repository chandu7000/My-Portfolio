export const skillGroups = [
  {
    category: "Programming Languages",
    icon: "fa-solid fa-code",
    description: "Core languages I use for application development and problem solving.",
    skills: [
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Java", icon: "fa-brands fa-java" },
      { name: "Python", icon: "fa-brands fa-python" },
    ],
  },
  {
    category: "Frontend",
    icon: "fa-solid fa-display",
    description: "Responsive interface development with reusable, component-based UI patterns.",
    skills: [
      { name: "React.js", icon: "fa-brands fa-react" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    ],
  },
  {
    category: "Backend",
    icon: "fa-solid fa-server",
    description: "Backend foundations for building server-side application functionality and APIs.",
    skills: [
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express.js", icon: "fa-solid fa-route" },
      { name: "REST API Integration", icon: "fa-solid fa-plug" },
    ],
  },
  {
    category: "Databases",
    icon: "fa-solid fa-database",
    description: "Relational and document database technologies used across full-stack work.",
    skills: [
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "SQL", icon: "fa-solid fa-table" },
    ],
  },
  {
    category: "Tools & Version Control",
    icon: "fa-solid fa-screwdriver-wrench",
    description: "Development tooling and version-control workflow used to build and maintain projects.",
    skills: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "VS Code", icon: "fa-solid fa-code" },
      { name: "Notepad++", icon: "fa-solid fa-file-code" },
    ],
  },
  {
    category: "Cloud & Development Concepts",
    icon: "fa-solid fa-cloud",
    description: "Supporting concepts that shape maintainable, responsive, and practical web applications.",
    skills: [
      { name: "AWS Cloud Fundamentals", icon: "fa-brands fa-aws" },
      { name: "Responsive Design", icon: "fa-solid fa-mobile-screen-button" },
      { name: "Context API", icon: "fa-solid fa-diagram-project" },
      { name: "Component Architecture", icon: "fa-solid fa-cubes" },
      { name: "Accessibility", icon: "fa-solid fa-universal-access" },
    ],
  },
];

// Backward-compatible export for any older component that still imports `skills`.
export const skills = skillGroups.map((group) => ({
  category: group.category,
  list: group.skills.map((skill) => skill.name),
}));
