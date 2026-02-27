export const personalInfo = {
  name: "Hakan Sahin",
  title: "Software Developer",
  tagline: "Crafting modern web applications with passion, precision, and a global perspective",
  email: "Hakanshah71@gmail.com",
  phone: "+31 6 18977915",
  location: "Nijkerk, Netherlands",
  social: {
    linkedin: "https://www.linkedin.com/in/hakan-sahin-610b27114/",
    github: "",
  },
};

export const about = {
  description:
    "A solution-oriented professional with a unique blend of software development expertise and decades of international leadership experience. Having worked across 8 countries on 4 continents, I bring a global perspective to building modern web applications. Currently focused on .NET, Blazor, and Python development.",
  highlights: [
    { label: "Years of Experience", value: "25+" },
    { label: "Countries Worked In", value: "8" },
    { label: "Academic Publications", value: "2" },
    { label: "Languages Spoken", value: "4" },
  ],
};

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "featured" | "compact";
  description?: string;
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Developer Trainee",
    company: "CAMAS IT",
    location: "Harderwijk, Netherlands",
    period: "Sep 2025 — Mar 2026",
    type: "featured",
    description:
      "Intensive six-month professional training program in C# and Blazor, actively developing production code for a web application.",
    highlights: [
      "Built web application components using Blazor and .NET",
      "Applied object-oriented programming and component-based architecture",
      "Practiced modern software development principles and clean code",
      "Collaborated in a professional development environment using Git and Azure DevOps",
    ],
  },
  {
    title: "Director of HR & Legal Affairs",
    company: "Stichting Ishik Medical Education",
    location: "Dar es Salaam, Tanzania",
    period: "Jan 2021 — Oct 2021",
    type: "featured",
    description:
      "Led human resources and legal operations for an international medical education organization.",
    highlights: [
      "Managed residence and work permits for international employees",
      "Supervised legal procedures related to taxation and immigration",
      "Collaborated with local and international teams on business operations",
    ],
  },
  {
    title: "Technical Project Advisor",
    company: "Time to Help",
    location: "Dar es Salaam, Tanzania",
    period: "Jan 2020 — Mar 2020",
    type: "featured",
    description:
      "Provided technical advisory services and IT support at the organizational headquarters.",
    highlights: [
      "Advised on daily operations including project acquisitions",
      "Provided general IT support and oversaw administrative IT activities",
      "Facilitated cross-functional collaboration between departments",
    ],
  },
  {
    title: "School Director",
    company: "Feza Schools",
    location: "Dar es Salaam, Tanzania",
    period: "Jun 2018 — Jan 2020",
    type: "featured",
    description:
      "Led school operations, leveraging technology to improve educational outcomes.",
    highlights: [
      "Oversaw student registration, procurement, and school operations",
      "Coordinated recruitment and training of new staff",
      "Implemented technology solutions to enhance learning experiences",
    ],
  },
  {
    title: "Deputy Director",
    company: "Feza Schools",
    location: "Dar es Salaam, Tanzania",
    period: "Jul 2016 — Jan 2018",
    type: "compact",
  },
  {
    title: "Mathematics Teacher",
    company: "Sarajevo College",
    location: "Sarajevo, Bosnia & Herzegovina",
    period: "Sep 2015 — Jun 2016",
    type: "compact",
  },
  {
    title: "Teaching Assistant",
    company: "International Burch University",
    location: "Sarajevo, Bosnia & Herzegovina",
    period: "Aug 2012 — Aug 2015",
    type: "compact",
  },
  {
    title: "Mathematics Teacher",
    company: "Sarajevo College",
    location: "Sarajevo, Bosnia & Herzegovina",
    period: "Sep 2011 — Jul 2012",
    type: "compact",
  },
  {
    title: "Mathematics Teacher",
    company: "Nureddin Zengi High School",
    location: "Hatay, Türkiye",
    period: "Jul 2008 — Jun 2011",
    type: "compact",
  },
  {
    title: "School Director",
    company: "Learnium Schools",
    location: "New Delhi, India",
    period: "Aug 2007 — Jun 2008",
    type: "compact",
  },
  {
    title: "Mathematics Teacher",
    company: "Turgut Ozal Education Company",
    location: "Tirana, Albania",
    period: "Aug 2000 — Jun 2007",
    type: "compact",
  },
  {
    title: "Mathematics Teacher",
    company: "Turgut Ozal Turkmen-Turkish High School",
    location: "Ashgabat, Turkmenistan",
    period: "Dec 1997 — Jun 2000",
    type: "compact",
  },
  {
    title: "Mathematics Teacher",
    company: "Technical School Mongol Turk",
    location: "Ulaanbaatar, Mongolia",
    period: "Oct 1996 — Jul 1997",
    type: "compact",
  },
];

export interface Skill {
  name: string;
  category: "programming" | "technical" | "professional" | "language";
  level?: number;
}

export const skills: Skill[] = [
  { name: "C#", category: "programming" },
  { name: ".NET", category: "programming" },
  { name: "Blazor", category: "programming" },
  { name: "Python", category: "programming" },
  { name: "Machine Learning", category: "programming" },
  { name: "Data Analysis", category: "programming" },

  { name: "System Administration", category: "technical" },
  { name: "Windows / Linux / macOS", category: "technical" },
  { name: "Cloud Computing", category: "technical" },
  { name: "PC Hardware", category: "technical" },
  { name: "MS Office Suite", category: "technical" },
  { name: "Digital Communication", category: "technical" },

  { name: "Leadership", category: "professional" },
  { name: "Problem Solving", category: "professional" },
  { name: "Analytical Thinking", category: "professional" },
  { name: "Project Management", category: "professional" },
  { name: "Customer-Oriented", category: "professional" },
  { name: "Creativity", category: "professional" },

  { name: "Turkish — Native", category: "language" },
  { name: "English — Advanced", category: "language" },
  { name: "Dutch — Advanced (NT2 B1)", category: "language" },
  { name: "Bosnian — Conversational", category: "language" },
];

export const skillCategories = [
  { key: "programming" as const, label: "Development", icon: "code" },
  { key: "technical" as const, label: "Technical", icon: "server" },
  { key: "professional" as const, label: "Professional", icon: "users" },
  { key: "language" as const, label: "Languages", icon: "globe" },
];

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
}

export const education: Education[] = [
  {
    degree: "Master's Degree",
    field: "Information Technology",
    institution: "International Burch University",
    location: "Sarajevo, Bosnia & Herzegovina",
  },
  {
    degree: "Bachelor's Degree",
    field: "Mathematics Education",
    institution: "Marmara University",
    location: "Istanbul, Türkiye",
  },
];

export const certifications = [
  "Data Scientist: Machine Learning Specialist",
  "Foundations of Cloud Computing",
  "Python 3 Advanced",
];

export interface Publication {
  title: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title:
      "Classification of cardiotocogram data to anticipate fetal risks using machine learning techniques",
    url: "https://www.sciencedirect.com/science/article/pii/S1568494615002653",
  },
  {
    title:
      "Classification of fetal condition based on cardiotocogram recordings using ANN and simple logistics",
    url: "https://www.academia.edu/download/30881847/Volume_2.pdf",
  },
];

export const projects = [
  {
    title: "Camas V2 — Enterprise Web Application",
    description:
      "Contributing to a modern enterprise web application built with Blazor and .NET, applying clean architecture principles, component-based development, and comprehensive testing.",
    tags: ["C#", ".NET", "Blazor", "Entity Framework"],
    link: "",
    image: "/images/project-camas.png",
  },
  {
    title: "Corporate Energy API",
    description:
      "A full-stack energy management application built with .NET and Blazor, featuring REST API endpoints for corporate energy consumption tracking, weather-based energy price analysis, and interactive dashboards.",
    tags: ["C#", ".NET", "Blazor", "REST API", "Python", "Data Analysis"],
    link: "https://github.com/Elcebir71/CorporateEnergyAPI",
    image: "/images/project-energy-api.png",
  },
  {
    title: "Fetal Risk Classification — ML Research",
    description:
      "Published research on machine learning techniques for classifying cardiotocogram data to predict fetal health risks, with papers in international journals.",
    tags: ["Python", "Machine Learning", "Data Science", "Research"],
    link: "https://www.sciencedirect.com/science/article/pii/S1568494615002653",
    image: "/images/project-ml.png",
  },
];
