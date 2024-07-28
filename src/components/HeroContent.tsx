"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/motion";
import { slideInFromRight } from "../../utils/motion";
import { slideInFromTop } from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] w-36 "
        >
          <SparklesIcon className="text-[#d8d3e9] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[#d8d3e9]  border py-1 bg-gradient-to-r from-purple-500 to-cyan-700 rounded-2xl border-[#7042f88b] text-[13px]">
            We are Opensource
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-8xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span className="text-2xl font-medium">
            Unleash the Power of Collaboration
          </span>
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Build Projects{" "}
            </span>
            Together
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          "Projekto connects engineers, developers, and innovators to create and
          collaborate on groundbreaking software and hardware projects in
          real-time."
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Button className=" text-gray-30 py-2 rounded-2xl shadow-lg shadow-[#2A0E61]/50 bg-[#2A0E61]">
            Get Started
          </Button>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* apna  3d robot laga dunga  */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;