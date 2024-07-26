import Navbar from "../parts/Navbar";
import "./globals.css";
import Button from "@/components/button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to Projekto</h1>
        <Button className="bg-blue-500 px-8 text-white">hello</Button>
      </div>
    </div>
  );
}
