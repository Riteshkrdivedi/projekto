"use client";

import React, { use } from "react";
import StarBackground from "@/components/layout/StarBackground";
import { AiOutlineTeam } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

import Button from "@/components/Button";
import { FaGithub, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
interface ProjectData {
  // Define the structure of your ProjectData here
  key: number;
  projectName: string;
  description: string;
  status: string;
  projectImage?: string; // Add the projectImage field
  // Add other fields as necessary
}

const Projectspage = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/projects");
        // console.log(response.data);
        if (response.data) {
          setProjectData(response.data as ProjectData[]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="h-fit w-screen p-5 pt-36">
      <StarBackground />
      <div className="">All Projects</div>
      <div className="">
        {projectData.map((p, index) => (
          <div
            key={index}
            className=" border   rounded-xl flex w-[80vw] mx-auto my-5 backdrop-blur-sm  justify-evenly h-[35vh]"
          >
            <div className="  w-3/4">
              <div className=" h-3/4">
                <h1 className="w-fit p-2 m-1">{p.projectName}</h1>
                <p className="w-full mt-3 rounded-xl h-2/3 p-2 block border border-gray-700">
                  {p.description}
                </p>
              </div>
              <div className=" flex pt-3 justify-start gap-3">
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Admin <FaUser className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Github <FaGithub className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Members <AiOutlineTeam className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Techstack
                  <VscTools className="inline ml-1" />
                </Button>
              </div>
            </div>
            <div className=" flex flex-col  justify-around ">
              <div className="  border p-1 px-2 flex ml-auto rounded-full w-fit ">
                status:{p.status}
              </div>
              <div className="  border rounded-lg   w-48 h-48 ">
                <img
                  className="w-full h-full"
                  src={
                    p.projectImage ||
                    "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/Project-Manager.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectspage;
