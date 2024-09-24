"use client";

import React, { use } from "react";
import StarBackground from "@/components/layout/StarBackground";
import { AiOutlineTeam } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { Rings, ThreeCircles, Triangle } from "react-loader-spinner";
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
  githubLink?: string; // Add the githubLink field
  liveLink?: string; // Add the liveLink field
  // Add other fields as necessary
}

const Projectspage = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const baseURL =
        //   process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        // console.log("base url for api call is : ", baseURL);
        const response = await axios.get("/api/projects");

        // const response = await axios.get("http://localhost:3000/api/projects");
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
  if (!projectData) {
    return (
      <p>
        <Rings
          color="white"
          wrapperClass="w-[100vw] h-[100vh]  flex justify-center items-center"
        />
      </p>
    );
  }

  return (
    <div className="h-fit  w-[98.8vw] p-5 pt-36">
      <StarBackground />
      <div className=" md:text-3xl md:font-bold text-xl font-semibold">
        All projects
      </div>
      <div className="">
        {projectData.map((p, index) => (
          <div
            key={index}
            className=" border   rounded-xl flex flex-col-reverse md:flex-row w-[80vw] mx-auto my-5 backdrop-blur-sm  justify-evenly h-fit md:h-[35vh]"
          >
            <div className=" w-11/12 md:mx-0 mx-auto  md:w-3/4">
              <div className=" h-3/4 ">
                <h1 className="w-fit p-2 m-1 md:my-3 md:text-xl font-semibold  text-lg">
                  {p.projectName}
                </h1>
                <p className="w-full mt-1 text-gray-400 text-sm md:text-base overflow-y-auto  md:mt-3 rounded-xl md:h-2/3 h-[11vh]  p-2 block border border-gray-700">
                  {p.description}
                </p>
              </div>
              <div className=" flex py-3 md:py-0 justify-start gap-3">
                <Button className="border border-gray-600 p-1  px-5   rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  <a href="">
                    <p className="hidden md:inline">Admin</p>
                    <FaUser className="inline " />
                  </a>
                </Button>
                <Button className="border border-gray-600 p-1  px-5  rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  <p className="hidden md:inline">Members</p>
                  <AiOutlineTeam className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1  px-5  rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  <a href={p.githubLink}>
                    <p className="hidden md:inline">Github</p>
                    <FaGithub className="inline " />
                  </a>
                </Button>

                <Button className="border border-gray-600 p-1 px-5   rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  <a href={p.liveLink}>
                    <p className="hidden md:inline">Live</p>
                    <MdArrowOutward className="inline ml-1" />
                  </a>
                </Button>
              </div>
            </div>
            <div className=" flex flex-col  justify-around ">
              <div
                className={`border p-1 px-2 bg-transparent flex ml-auto text-xs md:text-base my-1 md:my-0 rounded-full w-fit p.staus === "completed" ? bg-green-600 : bg-red-600`}
              >
                {p.status}
              </div>
              <div className="  border rounded-lg h-[23vh]  w-11/12  mx-auto md:w-56 md:h-56 ">
                <img
                  className="w-full h-full  object-fit-contain rounded-lg"
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
