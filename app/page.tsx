import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
