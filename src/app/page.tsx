import "./globals.css";

import StarBackground from "@/components/layout/StarBackground";
import HeroContent from "@/parts/HeroContent";
import Resources from "@/parts/Resources";

import Navbar from "../components/layout/Navbar";
import Community from "@/parts/Community";
import Projects from "@/parts/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className=" h-full w-full ">
      <Navbar />
      <StarBackground />
      <HeroContent />
      <Community />
      <Projects />
      <Resources />
      <Footer />
    </div>
  );
}
