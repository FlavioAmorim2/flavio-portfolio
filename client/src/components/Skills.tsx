import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Habilidades Técnicas
            </h2>
            <div className="w-12 h-1 bg-accent rounded" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-4">
                {/* Category Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {skillGroup.category}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 bg-accent/10 text-accent rounded-lg text-xs md:text-sm font-medium hover:bg-accent/20 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary/5 border border-border rounded-lg">
            <p className="text-sm md:text-base text-muted-foreground">
              Estou sempre aprendendo e explorando novas tecnologias para manter-me atualizado com as tendências do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
