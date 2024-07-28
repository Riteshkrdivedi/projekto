import Image from "next/image";
import React from "react";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center fixed top-2 z-50">
      <div className="w-11/12 h-[72px] rounded-3xl shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="Logo.svg"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              PROJEKTO
            </span>
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">
                Home
              </a>
              <a href="#skills" className="cursor-pointer">
                Projects
              </a>
              <a href="#projects" className="cursor-pointer">
                Community
              </a>
              <a href="#projects" className="cursor-pointer">
                Resources
              </a>
            </div>
          </div>

          <div>
            <Button className=" text-gray-30 rounded-3xl shadow-lg shadow-[#2A0E61]/50 bg-[#d1d1d1]">
              LogIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
