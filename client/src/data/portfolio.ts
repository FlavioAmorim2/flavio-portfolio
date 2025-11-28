// Portfolio Data - Structured information from CV and GitHub

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  image?: string;
  status?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: "full-time" | "freelance" | "volunteer";
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "Hexatech Engenharia integrada LTDA",
    title: "Hexatech Engenharia integrada LTDA",
    description: "Site de alta perfomance focado na experiência do usuário e no SEO.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Email.js"],
    demoUrl: "https://www.hexatech.com.br/",
    status: "Completo",
  },
  {
    id: "investment-calculator",
    title: "Calculadora de Investimentos",
    description: "Aplicação interativa para cálculo e simulação de investimentos. Interface intuitiva com gráficos em tempo real e análise de cenários financeiros.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://investment-calculator-rjlqteghe-flavioamorim2s-projects.vercel.app",
    status: "Completo",
  },
  {
    id: "want-to-watch",
    title: "Want To Watch",
    description: "Aplicação para gerenciar listas de filmes e séries a assistir. Integração com APIs de cinema, recomendações personalizadas e interface moderna.",
    technologies: ["React", "TypeScript", "API Integration", "Tailwind CSS"],
    demoUrl: "https://want-to-watch-fwvg50afl-flavioamorim2s-projects.vercel.app",
    status: "Completo",
  },
  // {
  //   id: "ts-api",
  //   title: "TS API",
  //   description: "API RESTful escalável desenvolvida com Node.js, Express e TypeScript. Implementação de arquitetura robusta com validações e controle de acesso.",
  //   technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "REST API"],
  //   status: "Completo",
  // },
  // {
  //   id: "frontend-ts-api",
  //   title: "Frontend TS API",
  //   description: "Interface frontend desenvolvida em React e TypeScript para consumir a TS API. Foco em usabilidade e responsividade.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Axios"],
  //   status: "Completo",
  // },
  // {
  //   id: "amigo-secreto",
  //   title: "Amigo Secreto",
  //   description: "Aplicação Full Stack para gerenciamento de sorteios de amigo secreto. Implementação de lógica de negócios e interface interativa.",
  //   technologies: ["JavaScript", "HTML", "CSS", "Lógica de Algoritmos"],
  //   status: "Completo",
  // },
];

export const experiences: Experience[] = [
  {
    id: "hexatech",
    title: "Desenvolvedor Full Stack",
    company: "Hexatech Engenharia Integrada",
    type: "freelance",
    startDate: "Março/2025",
    endDate: "Outubro/2025",
    description: [
      "Criação de estrutura escalável e responsiva, com foco em usabilidade e conversão.",
      "Implementação de meta tags dinâmicas (React Helmet / Helmet Async) e otimização de 100 palavras-chave para ranqueamento no Google.",
      "Aplicação de técnicas de pré-renderização e renderização no servidor (SSR) para melhorar indexação orgânica.",
      "Integração com Google Search Console e boas práticas de Core Web Vitals (carregamento rápido e acessibilidade).",
      "Deploy otimizado em Vercel, com versionamento no GitHub e SEO auditado via Lighthouse.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "SEO", "SSR", "Vercel", "Google Search Console"],
  },
  {
    id: "ong-taniguchiana",
    title: "Desenvolvedor Web Full Stack",
    company: "ONG Taniguchiana",
    type: "volunteer",
    startDate: "Junho/2024",
    endDate: "Julho/2025",
    description: [
      "Planejamento e desenvolvimento da arquitetura completa do site institucional da ONG, atuando desde o back-end até o front-end.",
      "Implementação de uma API RESTful utilizando Node.js, Express e TypeScript, garantindo escalabilidade e organização do código.",
      "Modelagem e integração de banco de dados relacional (PostgreSQL), com controle de acesso seguro e validações robustas.",
      "Integração de serviços externos via APIs (ex: envio de e-mails automáticos, formulários de contato e dashboards).",
    ],
    technologies: ["Node.js", "Express", "TypeScript", "React", "PostgreSQL", "REST API", "Email Integration"],
  },
];

export const skills: Skill[] = [
  {
    category: "Backend",
    items: ["Node.js", "Express", "Java", "Spring", "Python", "Django", "REST API", "GraphQL"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "NoSQL"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Nginx", "Git", "GitHub", "Google Cloud Platform", "Vercel"],
  },
  {
    category: "Visão Computacional & ML",
    items: ["OpenCV", "TensorFlow", "Keras", "Pydicom"],
  },
  {
    category: "Testes & Qualidade",
    items: ["Jest", "Testing Library", "Lighthouse"],
  },
];

export const about = {
  name: "Flavio Matheus Amorim dos Reis",
  title: "Desenvolvedor Full Stack",
  location: "Rio de Janeiro - Brasil",
  email: "flaviomatheus28013@gmail.com",
  phone: "(21) 98262-0537",
  bio: "Desenvolvedor Full Stack especializado em Node.js, Java e React, com experiência na construção de APIs escaláveis, aplicações web modernas e integração de sistemas. Proficiente em TypeScript, bancos de dados SQL/NoSQL e cloud computing. Disponível para projetos PJ (freelancer) e oportunidades CLT.",
  summary: "Com experiência em desenvolvimento Full Stack, crio soluções digitais escaláveis e otimizadas. Minha expertise abrange desde a arquitetura de APIs robustas até interfaces responsivas, sempre com foco em performance, segurança e experiência do usuário. Disponível para trabalhar como freelancer (PJ) ou em regime CLT.",
  availability: "Disponível para PJ (Freelancer) e CLT",
};

export const education = [
  {
    degree: "Ciência da Computação",
    school: "Universidade Estácio de Sá",
    startYear: 2023,
    endYear: 2027,
  },
];

export const certifications = [
  "Full Stack (HTML, CSS, JavaScript, TypeScript, Jest) – Udemy",
  "Java | Spring (OO, UML, JavaFX, JPA, Hibernate, SQL) – Udemy",
  "Python | Django (em andamento) - Udemy",
  "Inglês (em andamento) – Yes Idiomas",
];

export const languages = [
  { language: "Português", level: "Nativo" },
  { language: "Espanhol", level: "Básico" },
  { language: "Inglês", level: "Intermediário" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/flavio-amorim/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/FlavioAmorim2",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:flaviomatheus28013@gmail.com",
    icon: "mail",
  },
];
