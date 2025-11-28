import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16 md:mt-20">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">Flavio Amorim</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Desenvolvedor Full Stack especializado em Node.js, Java e React. Apaixonado por criar soluções escaláveis e otimizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projetos
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Conecte-se</h4>
            <div className="flex gap-3 md:gap-4">
              <a
                href="https://github.com/FlavioAmorim2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/flavio-amorim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:flaviomatheus28013@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 md:pt-8">
          <p className="text-center text-xs md:text-sm text-muted-foreground">
            © {currentYear} Flavio Amorim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
