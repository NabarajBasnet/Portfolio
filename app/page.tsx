"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-10">
      <Navbar />
      <HeroSection onViewProjects={() => scrollTo("projects")} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
