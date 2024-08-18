"use client";

import React from "react";
import Button from "../components/Button";

import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full flex justify-center mt-2 fixed top-2 z-50">
      <div className="w-4/5 h-[72px] rounded-3xl shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <img
              src="/Logo.svg"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[10px] text-3xl hidden md:block text-gray-300">
              Projekto
            </span>
          </a>

          <div className="w-[600px] h-full  flex-row items-center xl:flex md:visible hidden    justify-between md:mr-20">
            <div className="flex items-center  justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a
                href="#home"
                className="cursor-pointer hover:animate-bounce   hover:text-[#b49ee0]"
              >
                Home
              </a>
              <a
                href="#projects"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Projects
              </a>
              <a
                href="#community"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Community
              </a>
              <a
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Resources
              </a>
              {/* <a
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Price
              </a>
              <a
                href="#resoures"
                className="cursor-pointer hover:text-[#b49ee0] hover:animate-bounce"
              >
                Models
              </a> */}
            </div>
          </div>
          <div>
            <Button className=" text-gray-30 rounded-3xl md:block hidden px-6 hover:font-bold shadow-lg hover:bg-[#2A0E61]/50 hover:text-white bg-white transition-all">
              LogIn
            </Button>
          </div>
          <TiThMenu
            className="text-gray-300 text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`text-white absolute xl:hidden top-24 left-0 w-full h-screen bg-[#120926] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
              open ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "transform 0.3 ease , opacity 0.3 ease" }}
          >
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500  rounded-3xl py-3 text-2xl">
              <Button className=" text-gray-30 rounded-3xl w-2/3   shadow-lg shadow-[#2A0E61]/50 bg-[#2A0E61]/50">
                LogIn
              </Button>
            </li>
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              <a
                href="#home"
                className="cursor-pointer hover:animate-bounce   hover:text-[#b49ee0]"
              >
                Home
              </a>
            </li>
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              {" "}
              <a
                href="#projects"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Projects
              </a>
            </li>
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              {" "}
              <a
                href="#community"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Community
              </a>
            </li>
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              {" "}
              <a
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Resources
              </a>
            </li>
            {/* <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              {" "}
              <a
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Price
              </a>
            </li>
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              {" "}
              <a
                href="#resoures"
                className="cursor-pointer hover:text-[#b49ee0] hover:animate-bounce"
              >
                Models
              </a>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
