import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { about } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:${about.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Vamos Conversar
            </h2>
            <div className="w-12 h-1 bg-accent rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Email</h4>
                  <a
                    href={`mailto:${about.email}`}
                    className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    {about.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Telefone</h4>
                  <a
                    href={`tel:${about.phone}`}
                    className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {about.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                    Localização
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{about.location}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-2 bg-card border border-border rounded-lg p-4 md:p-8 space-y-4 md:space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-semibold text-foreground mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs md:text-sm font-semibold text-foreground mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Assunto da mensagem"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-semibold text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-4 md:py-6 text-sm md:text-base font-semibold"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
