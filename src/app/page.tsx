import "./globals.css";

import StarBackground from "@/components/StarBackground";
import HeroContent from "@/components/HeroContent";
import Resources from "@/parts/Resources";

import Navbar from "../parts/Navbar";
import Community from "@/parts/Community";
import Projects from "@/parts/Projects";
import Footer from "@/parts/Footer";

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
