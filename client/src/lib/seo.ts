// SEO utilities and metadata

export const siteMetadata = {
  title: "Flavio Amorim - Desenvolvedor Full Stack",
  description: "Portfólio de Flavio Amorim, desenvolvedor Full Stack especializado em Node.js, Java e React. Veja meus projetos, experiência e habilidades técnicas.",
  url: "https://flavio-amorim.com",
  image: "https://flavio-amorim.com/og-image.png",
  author: "Flavio Matheus Amorim dos Reis",
  keywords: [
    "desenvolvedor",
    "full stack",
    "node.js",
    "react",
    "java",
    "typescript",
    "api rest",
    "portfólio",
    "desenvolvedor web",
    "backend",
    "frontend",
  ],
};

export const generateMetaTags = (page?: string) => {
  const title = page
    ? `${page} | ${siteMetadata.title}`
    : siteMetadata.title;

  return {
    title,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords.join(", "),
    og: {
      title,
      description: siteMetadata.description,
      image: siteMetadata.image,
      url: siteMetadata.url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteMetadata.description,
      image: siteMetadata.image,
    },
  };
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Flavio Matheus Amorim dos Reis",
  url: siteMetadata.url,
  image: siteMetadata.image,
  jobTitle: "Full Stack Developer",
  email: "flaviomatheus28013@gmail.com",
  sameAs: [
    "https://github.com/FlavioAmorim2",
    "https://www.linkedin.com/in/flavio-amorim/",
  ],
  description: siteMetadata.description,
};
