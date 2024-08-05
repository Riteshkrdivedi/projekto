import "./globals.css";

import StarBackground from "@/components/StarBackground";
import HeroContent from "@/components/HeroContent";

import Navbar from "../parts/Navbar";
import Community from "@/parts/Community";

export default function Home() {
  return (
    <div className=" h-full w-full ">
      <Navbar />
      <StarBackground />
      <HeroContent />
      <Community />
    </div>
  );
}
