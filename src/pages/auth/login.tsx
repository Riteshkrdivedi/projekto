"use client";

import Blurcard from "@/components/BlurCard";
import React, { useState } from "react";
import "../../app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";

const login = () => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");

  const handlesubmit = () => {
    alert("handling");
  };

  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/blackhole.webm" type="video/mp4" />
      </video>
      <Navbar />
      <div className="relative   w-11/12 z-10 flex ml-5   md:ml-20 items-center justify-center md:pt-[7vh]  md:h-[100vh]">
        <Blurcard className=" w-full md:w-9/12 justify-center mt-[20vh] mb-[10vh]  h-[70vh]">
          <div className=" flex">
            <form
              onSubmit={handlesubmit}
              className="flex md:w-[40vw] flex-col ml-6 md:ml-0 items-center gap-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Welcome back!{" "}
                <p className="md:ml-20  ml-12 text-5xl md:text-6xl w-fit bg-gradient-to-tr text-transparent bg-clip-text from-purple-950  to-cyan-600">
                  creator!
                </p>
              </h1>
              <p className="text-gray-400 mb-2">Log in and get building...</p>
              <div className="flex justify-around gap-5 ">
                <AuthButton className="text-2xl  rounded-full hover:bg-slate-200 hover:text-black hover:border-gray-900  py-4 h-fit w-fit bg-[#0C0424]">
                  <FcGoogle />
                </AuthButton>
                <AuthButton className="text-2xl text-white hover:bg-slate-200 hover:text-black hover:border-gray-900 py-4 h-fit w-fit  rounded-full bg-[#0C0424]">
                  <FaGithub />
                </AuthButton>
              </div>

              <input
                type="email"
                value={email}
                required
                onChange={(e) => setemail(e.target.value)}
                placeholder="Username"
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />
              <button
                type="submit"
                className="w-full md:w-2/4 border p-2 bg-white/20 border-gray-500 hover:border-r-purple-700 text-white hover:bg-[#20143add] rounded-lg"
              >
                Login
              </button>
              <p className="inline-block">or</p>
              <hr className="w-2/5 inline-block" />
              <p className="text-white ">New User ?</p>
              <Link href={"/auth/register"} className="w-[40vw] md:w-1/3 ">
                <button className=" w-full border p-2 bg-[#0C0424] border-gray-500 hover:border-r-purple-700 text-gray-100 hover:bg-[#c9bee23a] rounded-lg">
                  Signup
                </button>
              </Link>
            </form>
            <div className="hidden md:block md:w-2/4">
              {" "}
              <img
                src="/auth-img.png"
                className=" w-[20vw]  mt-20 ml-11"
                alt=""
              />
            </div>
          </div>
        </Blurcard>
      </div>

      <Footer />
    </div>
  );
};

export default login;
