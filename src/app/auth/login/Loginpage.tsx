"use client";
import { useEffect } from "react";
import Blurcard from "@/components/BlurCard";
import React, { use, useState } from "react";
import { toast } from "react-toastify";
import Footer from "@/components/layout/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import connectMongoDB from "@/config/mongodb";
import {
  signInWithGithub,
  signInWithGoogle,
  signIn,
} from "../../../firebase/authservice";

import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

// page    starteddddddd................................................................................................................

const page = (): JSX.Element => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState("");

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await signIn(email, password);
      console.log("LOgged in", user);
      toast.success("Logged in successfully");
    } catch (error) {
      console.error(error);
      console.log("error in login");
      toast.error("please sign up first");
    }
  };

  useEffect(() => {
    const checkexisting = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/users/checkUser",
          { email: user.email }
        ); // Adjust the endpoint if needed
        const isNewUser = (response.data as { isNewUser: boolean }).isNewUser; // Assuming the response contains this information
        if (!isNewUser) {
          // toast.success("User created successfully!");
          console.log("old user");
          router.push("/profile"); // Adjust the route as necessary
        } else {
          console.log("new user");
          router.push("/registerProfileData");
        }
      } catch (error) {
        console.error("Error checking user:", error);
      }
    };

    // Run the checkUser function when the component mounts
    if (user) {
      checkexisting();
    }
  }, [user]);

  // actual return here  ...................................................................................................................

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
                <button
                  onClick={signInWithGoogle}
                  className="text-2xl px-4 border  rounded-full hover:bg-slate-200 hover:text-black hover:border-gray-900  py-4 h-fit w-fit bg-[#0C0424]"
                >
                  <FcGoogle />
                </button>
                <button
                  onClick={signInWithGithub}
                  className="text-2xl text-white px-4 border hover:bg-slate-200 hover:text-black hover:border-gray-900 py-4 h-fit w-fit  rounded-full bg-[#0C0424]"
                >
                  <FaGithub />
                </button>
              </div>

              <input
                type="email"
                value={email}
                required
                onChange={(e) => setemail(e.target.value)}
                placeholder="Username@gmail.com"
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                min={6}
                className="w-full md:w-2/4 p-2 bg-transparent text-white border-b border-white/50 focus:outline-none focus:border-white/70"
              />
              <button
                type="submit"
                className="w-full md:w-2/4  border p-2 bg-white/20 border-gray-500 hover:border-r-purple-700 text-white hover:bg-[#20143add] rounded-lg"
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

export default page;
