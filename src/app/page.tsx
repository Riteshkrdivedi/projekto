import "./globals.css";

import StarBackground from "@/components/layout/StarBackground";
import HeroContent from "@/app/parts/HeroContent";
import Resources from "@/app/parts/Resources";

// import Navbar from "../components/layout/Navbar";
import Community from "@/app/parts/Community";
import Projects from "@/app/parts/Projects";
import Footer from "@/components/layout/Footer";
// import { AuthProvider } from "../context/AuthContext.js";

export default function Home() {
  return (
    <div className="">
      {/* <AuthProvider> */}{" "}
      <div className=" h-full w-full ">
        <StarBackground />
        <HeroContent />
        <Community />
        <Projects />
        <Resources />
        <Footer />
      </div>
      {/* </AuthProvider> */}
    </div>
  );
}
