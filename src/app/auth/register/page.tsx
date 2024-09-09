"use client";

import Blurcard from "@/components/BlurCard";
import React, { useState } from "react";
// import "../../app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  signInWithGoogle,
  signInWithGithub,
  signUp,
} from "../../../firebase/authservice";

import Link from "next/link";
import { Console } from "console";
import router from "next/router";

const page = () => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    // if (password.length < 6) {
    //   alert("Password should be atleast 6 characters long");
    //   return;
    // }
    e.preventDefault();
    try {
      const user = signUp(email, password);
      console.log("signed up", user);

      // console.log(username + "   " + email + "   " + password + "logged in");

      // router.push("/");
    } catch (error) {
      console.error(error);
    }
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
      <div className="relative   w-11/12 z-10 flex ml-4   md:ml-20 items-center justify-center md:pt-[7vh]  md:h-[100vh]">
        <Blurcard className=" w-full md:w-9/12 justify-center mt-[15vh] mb-[5vh] md:h[70vh]  h-[80vh]">
          <div className=" flex flex-row-reverse">
            <form
              onSubmit={handleSignUp}
              className="flex md:w-[40vw] flex-col  items-center gap-4"
            >
              <h1 className="md:ml-20  ml-5 text-5xl font-bold md:text-6xl w-fit bg-gradient-to-tr text-transparent bg-clip-text from-purple-50 md:pl-20  to-cyan-100">
                Create an Account{" "}
              </h1>
              <p className="text-gray-700 mb-2 font-medium">
                "Let's build something awesome! Join Projekto now."
              </p>
              <div className="flex justify-around gap-5 ">
                <button
                  onClick={signInWithGoogle}
                  className="text-2xl px-4 border hover:cursor-pointer   rounded-full hover:bg-slate-200 hover:text-black hover:border-gray-900  py-4 h-fit w-fit bg-[#0C0424]"
                >
                  <FcGoogle />
                </button>
                <button
                  onClick={signInWithGithub}
                  className="text-2xl px-4 border  text-white hover:bg-slate-200 hover:text-black hover:border-gray-900 py-4 h-fit w-fit  rounded-full bg-[#0C0424]"
                >
                  <FaGithub />
                </button>
              </div>
              <input
                type="username"
                required
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="username"
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="yourname@gmail.com"
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />
              <input
                type="password"
                value={password}
                required
                minLength={6}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />
              <button className="w-full md:w-2/4 border p-2 bg-white/20 border-gray-500 hover:border-r-purple-700 text-white hover:bg-[#20143add] rounded-lg">
                Signup
              </button>
              <p className="inline-block">or</p>
              <hr className="w-2/5 inline-block" />
              <p className="text-white ">Already a User ?</p>
              <Link href={"/auth/login"} className="w-[40vw] md:w-1/3 ">
                <button
                  type="submit"
                  className=" w-full border p-2 bg-[#0C0424] border-gray-500 hover:border-r-purple-700 text-gray-100 hover:bg-[#c9bee23a] rounded-lg"
                >
                  Login
                </button>
              </Link>
            </form>
            <div className="hidden md:block md:w-2/4">
              {" "}
              <img
                src="/auth-img.png"
                className=" w-[20vw]  mt-20 ml-32"
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

export default page;
