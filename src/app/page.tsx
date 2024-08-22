import "./globals.css";

import StarBackground from "@/components/StarBackground";
import HeroContent from "@/components/HeroContent";
import Resources from "@/parts/Resources";

import Navbar from "../parts/Navbar";
import Community from "@/parts/Community";
import Projects from "@/parts/Projects";

// import dynamic from "next/dynamic";

// const Resources = dynamic(() => import("../parts/Resources"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className=" h-full w-full ">
      <Navbar />
      <StarBackground />
      <HeroContent />
      <Community />
      <Projects />
      <Resources />
    </div>
  );
}
