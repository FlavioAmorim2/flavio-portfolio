import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import { SEOHead } from "@/components/SEOHead";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Availability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
