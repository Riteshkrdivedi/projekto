import React from "react";
import Card from "../components/Card";
import combg from "../public/com-bg.png";
// import img from "next";
import Button from "@/components/Button";
// import { motion } from "framer-motion";
// import { slideInFromLeft } from "../../utils/motion";
// import { slideInFromRight } from "../../utils/motion";
// import { slideInFromTop } from "../../utils/motion";

const Community = () => {
  return (
    <div
      className="w-full h-[100vh] flex my-24 mx-0   items-center justify-center  "
      // style={{
      //   backgroundImage: `url('/com-bg.png')`,
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      //   opacity: 0.9,
      // }}
    >
      <div className="  w-2/4  h-full">
        <Card className="h-5/6 my-28 w-full bg-opacity-15 hover:shadow-[#2A0E61]/50  ">
          <div className="flex justify-evenly my-2">
            {" "}
            <img className="w-2/5 " src="/com-2.png" alt="community" />
            <img className="w-2/5" src="/com-1.png" alt="community" />
          </div>
          <div className=" flex justify-evenly my-10">
            <img className="w-2/5" src="/com-3.png" alt="community" />
            <img className="w-2/5" src="/com-4.png" alt="community" />
          </div>
        </Card>
      </div>
      <div className=" h-full text-gray-300 w-2/6  flex flex-col">
        <Card className="text-3xl w-80 h-44 font-semibold  px-4 my-32">
          <h2>
            Join a Thriving{" "}
            <div className="text-transparent bg-clip-text bg-gradient-to-r  from-green-900 to-green-200">
              Community
            </div>{" "}
            of Innovators 🚀
          </h2>
        </Card>

        <p className=" w-3/5 relative bottom-44 left-28">
          <img src="Tweet-community.png" className="w-fit" alt="tweet" />
        </p>
      </div>
      <div className="  h-full ">
        <h1 className="px-5 py-44 shadow-green-700/45 underline text-8xl vertical-text font-bold text-transparent bg-clip-text bg-gradient-to-t  from-cyan-400 to-green-800">
          Community
        </h1>
      </div>
    </div>
  );
};

export default Community;
