import React from "react";
import Card from "../../components/Card";
import combg from "../public/com-bg.png";
// import img from "next";
import Button from "@/components/Button";
// import { motion } from "framer-motion";
// import { slideInFromLeft } from "../../utils/motion";
// import { slideInFromRight } from "../../utils/motion";
// import { slideInFromTop } from "../../utils/motion";

const Community = () => (
  <div className="w-full h-fit md:h-[100vh] flex flex-col-reverse md:flex-row my-24 mx-0   items-center justify-center  ">
    <div className="   w-fit md:w-2/4  h-full">
      <Card className="h-fit hidden md:block md:h-5/6 my-7 md:my-28 w-full bg-opacity-15 hover:shadow-[#2A0E61]/50  ">
        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
          <img className="w-10/12 " src="/com-2.png" alt="community" />
          <img className="w-10/12" src="/com-1.png" alt="community" />

          <img className="w-10/12" src="/com-3.png" alt="community" />
          <img className="w-10/12" src="/com-4.png" alt="community" />
        </div>
      </Card>
      <div className=" block md:hidden flex-col  justify-center gap-5">
        <div className=" justify-center ml-14 mt-4">
          <img className="w-10/12 " src="/com-2.png" alt="community" />
        </div>
        <div className=" ml-14 mt-8">
          <img className="w-10/12" src="/com-1.png" alt="community" />
        </div>
      </div>
    </div>
    <div className=" h-full text-gray-300 w-full md:w-2/6  flex flex-col">
      <Card className="text-3xl w-80 h-44 font-semibold my-12  px-4 md:my-32">
        <h2>
          Join a Thriving{" "}
          <div className="text-transparent bg-clip-text bg-gradient-to-r  from-green-900 to-green-200">
            Community
          </div>{" "}
          of Innovators 🚀
        </h2>
      </Card>

      <p className=" w-4/5 md:w-3/5 relative bottom-20 md:bottom-44 left-16 md:left-28">
        <img src="Tweet-community.png" className="w-fit" alt="tweet" />
      </p>
    </div>
    <div className="h-fit md:h-[100vh]">
      <h1
        className={`text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-green-800 
    md:[writing-mode:vertical-rl] md:[transform:rotate(360deg)] 
    md:px-5 md:py-44 h-20 md:h-fit py-2`}
      >
        Community
      </h1>
    </div>
  </div>
);

export default Community;
