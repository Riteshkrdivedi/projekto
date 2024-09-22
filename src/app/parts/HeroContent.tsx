"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../utils/motion";
import { slideInFromRight } from "../../../utils/motion";
import { slideInFromTop } from "../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";
import Robot3d from "../../components/3d/Robot3d";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row   items-center justify-center px-5 md:px-20 mt-[21vh] md:mt-40 w-full "
    >
      <div className="h-[72vh] w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box  px-[7px] w-36 "
        >
          <a href="https://github.com/Riteshkrdivedi/projekto" target="_blank">
            <SparklesIcon className="text-[#d8d3e9] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[#d8d3e9] hover:shadow-[#2A0E61]/90 hover:border-[#2A0E61] border py-1 bg-gradient-to-r from-purple-500 to-cyan-700 rounded-2xl    border-[#7042f88b] text-[13px]">
              We are Opensource
            </h1>
          </a>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 md:mt-6 text-7xl md:text-8xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span className="text-2xl font-medium">
            Unleash the Power of Collaboration
          </span>
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Build Projects
            </span>
            Together
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          &quot;Projekto connects engineers, developers, and innovators to
          create and collaborate on groundbreaking software and hardware
          projects in real-time.&quot;
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary md:text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Button className=" text-gray-30 p-6  rounded-2xl shadow-lg text-xl transition-all shadow-[#2A0E61]/50 hover:bg-[#6f52df] border-x-2 border-[#8046f5]">
            <Link href="/projectForm">Get Started</Link>
          </Button>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:block sm:hidden hidden md:block h-full justify-center items-center"
      >
        <div className="z-20 overflow-visible flex align-bottom h-96">
          <Robot3d />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
