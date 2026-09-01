import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#050510] overflow-x-hidden">
      {/* Global background */}
      <div className="aurora-bg" />
      <BackgroundParticles />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>

    </main>
  );
}