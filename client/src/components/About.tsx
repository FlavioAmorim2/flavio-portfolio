import { Briefcase, Code, Target } from "lucide-react";
import { about, education, languages } from "@/data/portfolio";

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Experiência",
      description: "2+ anos desenvolvendo soluções Full Stack em produção",
    },
    {
      icon: Code,
      title: "Especialidade",
      description: "Node.js, Java, React e arquitetura de sistemas escaláveis",
    },
    {
      icon: Target,
      title: "Foco",
      description: "Performance, segurança e experiência do usuário",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre Mim
            </h2>
            <div className="w-12 h-1 bg-accent rounded" />
          </div>

          {/* Main Bio */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 md:mb-16 max-w-3xl">
            {about.bio}
          </p>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="group p-6 md:p-8 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Educação
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="pb-4 border-b border-border last:border-b-0">
                    <h4 className="font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.school} ({edu.startYear} - {edu.endYear})
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Idiomas
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.language} className="pb-4 border-b border-border last:border-b-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-foreground">
                        {lang.language}
                      </h4>
                      <span className="text-sm font-medium text-accent">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-accent rounded-full h-2 transition-all duration-500"
                        style={{
                          width:
                            lang.level === "Nativo"
                              ? "100%"
                              : lang.level === "Intermediário"
                              ? "70%"
                              : "40%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
