import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { about } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-secondary/10 -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-accent font-semibold text-xs md:text-sm uppercase tracking-widest">
                Bem-vindo ao meu portfólio
              </p>
              
              {/* Main Headline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-2">
                  Olá, sou
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight">
                  Flavio
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Desenvolvedor Full Stack
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {about.summary}
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">Disponível para PJ (Freelancer) e CLT</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button
                onClick={() => {
                  const element = document.querySelector("#availability");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2 px-6 py-6 text-base font-semibold"
              >
                Ver Disponibilidade
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector("#projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="px-6 py-6 text-base font-semibold border-2"
              >
                Ver Projetos
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/FlavioAmorim2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/flavio-amorim/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:flaviomatheus28013@gmail.com"
                className="p-3 bg-secondary rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-2xl" />
              
              {/* Inner Circle with Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center border-2 border-accent/20">
                  <div className="text-7xl font-bold text-accent/40">F</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-accent/10 rounded-lg border border-accent/20 animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-20 left-10 w-12 h-12 bg-accent/10 rounded-full border border-accent/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 right-0 w-20 h-20 bg-accent/5 rounded-lg border border-accent/20 animate-bounce" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
