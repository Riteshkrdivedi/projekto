import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
// import img from "next/img";
import Jet3d from "../components/3d/Jet3D";

const Projects = () => {
  return (
    <div className="w-full flex flex-col  h-fit  md:h-[180vh] mt-44 ">
      <div className=" text-white mx-7 md:mx-20 ">
        <h2 className="text-5xl md:text-7xl w-3/4 font-bold ">
          Start Your Next Big
          <div className="bg-gradient-to-r w-fit mx-5 inline text-transparent bg-clip-text from-[#ff00cc] to-[#333399]">
            Idea
          </div>
          Here!
        </h2>
        <p className="text-lg text-gray-400 my-7">
          &quot;Stop Procastinating&quot; <br />
          Turn your ideas into Innovation
        </p>

        <Button className=" border rounded-2xl  shadow-[#2A0E61]/100 hover:bg-[#512c8a] ease-in transition-colors  border-[#7721aa]">
          Kickstart your project
        </Button>
      </div>

      <div className="flex flex-col md:flex-row my-24 md:my-10">
        <img
          className="w-[90vw] md:w-3/5 "
          src="/projects-code.png"
          alt="community"
        />
        <Card className=" h-96 p-6 w-[85vw] md:w-1/3 relative md:bottom-16 left-8 text-white ">
          <div className=" text-xl  text-purple-400 font-medium mb-5">
            Bring Your Ideas to Life 🌟
          </div>
          Projekto empowers you to turn your project ideas into reality. <br />
          Post your software 💻 or hardware 🔧 project ideas, list the skills
          you need, and attract the perfect team members. <br /> Whether
          you&apos;re looking to innovate, solve problems, or create something
          entirely new, Projekto provides the platform and tools to make it
          happen. <br />
          Collaborate in real-time, track progress, and showcase your
          achievements. <br /> <br /> Let&apos;s build something amazing
          together! 🚀
        </Card>
      </div>

      <div className="flex flex-col-reverse md:flex-row my-10">
        <Card className="h-80 md:h-56 p-6 w-[90vw] md:w-1/3 relative left-5  md:left-20 text-white ">
          <div className=" text-xl  text-cyan-600 font-medium mb-5">
            Hardware Projects 🔧
          </div>
          Innovate and create with hardware. Share your hardware project ideas,
          find skilled collaborators, and work together to bring your vision to
          life. <br /> From electronics to robotics, Projekto connects you with
          the expertise and tools you need for successful hardware development.
        </Card>
        <div className="z-20 w-[100vw] md:w-4/5  overflow-visible h-64  md:h-96">
          <Jet3d />
        </div>
      </div>
    </div>
  );
};

export default Projects;
