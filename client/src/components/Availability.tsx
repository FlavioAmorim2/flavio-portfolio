import { Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Availability() {
  return (
    <section id="availability" className="py-16 md:py-20 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Como Posso Ajudar?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Estou disponível para trabalhar em ambos os modelos. Escolha o que melhor se encaixa com seu projeto ou necessidade.
            </p>
          </div>

          {/* Availability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* PJ / Freelancer */}
            <div className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-accent/50">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 md:w-14 h-12 md:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="w-6 md:w-7 h-6 md:h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Freelancer (PJ)
                </h3>

                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Perfeito para projetos pontuais, MVP, prototipagem rápida ou manutenção de sistemas. Trabalho com flexibilidade de horários e entrega ágil.
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Projetos pontuais e MVPs</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Flexibilidade de horários</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Entrega ágil e iterativa</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Suporte e manutenção</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm md:text-base"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>

            {/* CLT / Full-time */}
            <div className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:border-accent/50">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 md:w-14 h-12 md:h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-6 md:w-7 h-6 md:h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  CLT / Full-time
                </h3>

                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  Busco oportunidades de crescimento profissional em equipes dinâmicas. Comprometido com excelência técnica e desenvolvimento contínuo.
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Projetos de longo prazo</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Trabalho em equipe</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Desenvolvimento profissional</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">Benefícios e estabilidade</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 text-sm md:text-base"
                >
                  <a
                    href="https://www.linkedin.com/in/flavio-amorim/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-accent/5 border border-accent/20 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Pronto para começar?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Entre em contato comigo para discutir seu projeto ou oportunidade.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm md:text-base"
            >
              Iniciar Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
