import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="w-full h-[100vh] my-44 ">
      <div className=" text-white mx-20 ">
        <h2 className="text-7xl w-3/4 font-bold ">
          Start Your Next Big
          <div className="bg-gradient-to-r w-fit mx-5 inline text-transparent bg-clip-text from-[#ff00cc] to-[#333399]">
            Idea
          </div>
          Here!
        </h2>
        <p className="text-lg text-gray-400 my-7">
          "Stop Procastinating" <br />
          Turn your ideas into Innovation{" "}
        </p>

        <Button className=" border rounded-2xl shadow-violet-600 hover:bg-[#512c8a] ease-in transition-colors inset-3 border-[#7721aa]">
          Kickstart your project
        </Button>
      </div>

      <div className="flex my-10">
        <img className="w-3/5 " src="projects-code.png" alt="community" />
        <Card className=" h-96 p-8 w-1/3 relative bottom-16 left-8 text-white bg-slate-600">
          <div className=" text-xl text-purple-400 font-medium mb-5">
            Bring Your Ideas to Life 🌟
          </div>
          Projekto empowers you to turn your project ideas into reality. <br />{" "}
          Post your software 💻 or hardware 🔧 project ideas, list the skills
          you need, and attract the perfect team members. <br /> Whether you're
          looking to innovate, solve problems, or create something entirely new,
          Projekto provides the platform and tools to make it happen. <br />{" "}
          Collaborate in real-time, track progress, and showcase your
          achievements. <br /> <br /> Let's build something amazing together! 🚀
        </Card>
      </div>
    </div>
  );
};

export default Projects;
