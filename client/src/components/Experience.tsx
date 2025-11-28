import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experiência Profissional
            </h2>
            <div className="w-12 h-1 bg-accent rounded" />
          </div>

          {/* Timeline */}
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-border" />
                )}

                <div className="flex gap-4 md:gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground flex-shrink-0">
                      <Briefcase className="w-5 md:w-6 h-5 md:h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-card border border-border rounded-lg p-4 md:p-6 flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-semibold text-sm md:text-base">{exp.company}</p>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p className="capitalize">{exp.type}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1 md:space-y-2 mb-4">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-muted-foreground flex gap-2 md:gap-3 text-xs md:text-sm">
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 md:py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
