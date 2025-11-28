import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meus Projetos
            </h2>
            <div className="w-12 h-1 bg-accent rounded" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-40 md:h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-accent/40 text-4xl md:text-5xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 md:py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status Badge */}
                  {project.status && (
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Demo Button */}
                  {project.demoUrl && (
                    <Button
                      asChild
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2 text-xs md:text-sm py-2 md:py-2"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                  {!project.demoUrl && (
                    <div className="text-xs text-muted-foreground italic text-center py-2">
                      Projeto Backend
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-secondary/5 border border-border rounded-lg text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-4">
              Estes são alguns dos meus projetos mais recentes. Explore os deploys para ver as aplicações em ação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
