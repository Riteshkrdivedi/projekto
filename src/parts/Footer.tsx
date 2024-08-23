import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagramSquare, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-white border-gray-900 h-[60vh] w-full bg-[#010308e7]">
      <div className=" px-[10vw] py-[7vh] flex justify-around ">
        <div className="w-1/4">
          <p>
            <img src="./Logo.svg" alt="Logo" width={100} />
          </p>
          <h2 className="text-2xl my-5  font-semibold">Projekto</h2>
          <p className="text-gray-400">
            Projekto is a platform for engineers to share ideas, collaborate on
            software and hardware projects, and track progress.
          </p>
        </div>
        {/* ......... */}
        <div className="">
          <h2 className="text-3xl my-5  font-semibold">Connect</h2>
          <p className="flex text-lg text-gray-400  flex-col">
            <a href="" className="hover:text-blue-900  my-1">
              Feedback
            </a>
            <a href="" className="hover:text-blue-900  my-1">
              Contact Us
            </a>
            <a href="" className="hover:text-blue-900  my-1">
              About Projekto
            </a>
            <a href="" className="hover:text-blue-900  my-1">
              Contribute
            </a>
          </p>
        </div>
        <div className=" ">
          <h2 className="text-3xl my-5  font-semibold">Social</h2>
          <div className="flex text-3xl justify-evenly ">
            <a href="" className="hover:text-blue-900 mx-1">
              <AiOutlineLinkedin />
            </a>
            <a href="" className="hover:text-blue-900  mx-1">
              <FaInstagramSquare />
            </a>
            <a href="" className="hover:text-blue-900  mx-1">
              <FaDiscord />
            </a>
            <a href="" className="hover:text-blue-900  mx-1">
              {" "}
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>{" "}
      <p className="text-center mt-24">
        {" "}
        © 2024 Projekto. All rights reserved.Contribute on{" "}
        <a
          className="underline"
          href="https://github.com/Riteshkrdivedi/projekto"
          target="_blank"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default Footer;
