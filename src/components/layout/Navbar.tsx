"use client";

import React from "react";
import Button from "../Button";

import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const { user } = useAuth();

  interface UserData {
    username: string;
    bio?: string;
    profilePicture?: string; // Add other properties as needed
  }
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/users/fetchUserData",
          { email: user.email }
        );
        if (response.data) {
          setUserData(response.data as UserData);
        }
        // console.log("user data for navbar fetched");
      } catch (error) {
        console.log("error in fetching user data", error);
        console.error("Error checking user:", error);
      }
    };

    // Run the checkUser function when the component mounts
    if (user) {
      getUserData();
    }
  }, [user]);

  return (
    <div className="w-full flex justify-center mt-2 fixed top-2 z-50">
      <div className="w-11/12 md:w-4/5 h-[72px] rounded-3xl shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <Link
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
          </Link>

          <div className="w-[600px] h-full  flex-row items-center xl:flex md:visible hidden    justify-between md:mr-20">
            <div className="flex items-center  justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <Link
                href="/"
                className="cursor-pointer hover:animate-pulse   hover:text-[#b49ee0]"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-pulse"
              >
                Projects
              </Link>
              <Link
                href="/community"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-pulse"
              >
                Community
              </Link>
              <Link
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-pulse"
              >
                Resources
              </Link>
              {/* <Link
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Price
              </Link>
              <Link
                href="#resoures"
                className="cursor-pointer hover:text-[#b49ee0] hover:animate-bounce"
              >
                Models
                
              </Link> */}
            </div>
            <ProfileCard className={`${showCard ? "hidden" : "block"}`} />
          </div>
          <div
            onMouseEnter={() => {
              setShowCard(!showCard);
            }}
            // onMouseLeave={() => {
            //   setShowCard(!showCard);
            // }}
          >
            {user ? (
              <div>
                <Link
                  href={"/profile"}
                  className=" border-red border w-[5vh]  hover:border-gray-50 text-gray-30 rounded-full md:block hidden  hover:font-bold shadow-lg    font-semibold bg-black transition-all"
                >
                  <img
                    className="w-[5vh] h-[5vh] rounded-full"
                    src={userData?.profilePicture || "/guestdp.jpeg"}
                    alt="profile"
                  />
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  href={"/auth/login"}
                  className=" border-black hover:border-gray-50 text-black text-gray-30 rounded-3xl md:block hidden px-6 hover:font-bold shadow-lg hover:bg-[#2A0E61]/50 hover:text-white py-2 font-semibold bg-white transition-all"
                >
                  LogIn
                </Link>
              </div>
            )}
          </div>
          <TiThMenu
            className="text-gray-300 text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`text-white absolute xl:hidden top-24 left-0 w-full h-screen bg-[#090516] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
              open ? "block" : "hidden"
            }`}
            style={{ transition: "transform 0.3 ease , opacity 0.3 ease" }}
          >
            <li className="w-full list-none  text-center hover:animate-pulse hover:text-purple-500  rounded-3xl py-3 text-2xl">
              <Button
                onClick={() => setOpen(false)}
                className="  text-gray-900 rounded-3xl w-2/3    shadow-lg  bg-[#c8c4d0]"
              >
                LogIn
              </Button>
            </li>
            <li className="w-full list-none text-center hover:animate-pulse hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              <Link
                onClick={() => setOpen(false)}
                href="/"
                className="cursor-pointer hover:animate-pulse   hover:text-[#b49ee0]"
              >
                Home
              </Link>
            </li>
            <li className="w-full list-none text-center hover:animate-pulse hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              <Link
                onClick={() => setOpen(false)}
                href="/projects"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-pulse"
              >
                Projects
              </Link>
            </li>
            <li className="w-full list-none text-center hover:animate-pulse hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              <Link
                onClick={() => setOpen(false)}
                href="/community"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-pulse"
              >
                Community
              </Link>
            </li>
            <li className="w-full list-none text-center hover:animate-pulse hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
              <Link
                onClick={() => setOpen(false)}
                href="/resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-pulse"
              >
                Resources
              </Link>
            </li>
            {/* <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
             
              <Link
                href="#resoures"
                className="cursor-pointer  hover:text-[#b49ee0] hover:animate-bounce"
              >
                Price
              </Link>
            </li>
            <li className="w-full list-none text-center hover:animate-bounce hover:text-purple-500 hover:bg-slate-700 rounded-3xl py-3 text-2xl">
             
              <Link
                href="#resoures"
                className="cursor-pointer hover:text-[#b49ee0] hover:animate-bounce"
              >
                Models
              </Link>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
