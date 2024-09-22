"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "../../firebase/authservice";
import { Rings, ThreeCircles, Triangle } from "react-loader-spinner";
import BlurCard from "@/components/BlurCard";
import Button from "@/components/Button";
import { FaGithub, FaTools } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import axios from "axios";
import { VscTools } from "react-icons/vsc";
// import { fetchUserData } from "@/../utils/fetchUserData";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  interface UserData {
    username: string;
    firstName?: string;
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
        // console.log("user data is fetched", response.data);
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

  useEffect(() => {
    if (!user) {
      router.push("auth/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <p>
        <Rings
          color="white"
          wrapperClass="w-[100vw] h-[100vh]  flex justify-center items-center"
        />
      </p>
    );
  }

  return (
    <div className="relative w-full h-screen ">
      <video
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="galaxybg.mp4" type="video/mp4" />
      </video>
      <div className="pt-[11vh] m-[2vh] mt-0 gap-2 flex">
        <div className=" flex flex-col gap-3">
          <BlurCard className="w-full md:w-[30vw] justify-center p-2 pb-[5vh] md:h-[42vh] h-[80vh]">
            <div className=" border border-gray-700 rounded-xl flex flex-col gap-2">
              <div className=" h-36 gap-2 justify-stretch flex">
                <div className=" p-3 ">
                  <img
                    className="w-[11vh] h-[11vh] rounded-full"
                    src={userData?.profilePicture || "/guestdp.jpeg"}
                    alt="profile"
                  />
                </div>
                <div className=" flex flex-col gap-2 pt-5 p-3">
                  <div className="">
                    <h1 className="text-xl font-medium">
                      {userData?.firstName}
                    </h1>
                    <p className="text-gray-400 text-sm">
                      {userData?.username}
                    </p>
                  </div>
                  <h3>USICT(GGSIPU)</h3>
                  <p>web developer</p>
                </div>
              </div>
              <div className=" p-3 h-40">{userData?.bio}</div>
            </div>
          </BlurCard>
          <BlurCard className="w-full md:w-[30vw] justify-center p-2 pb-[5vh] md:h-[42vh] h-[80vh]">
            <p> skills</p>

            <button
              className=" -gray-500 p-3 border border-gray-700 rounded-2xl hover:bg-red-500 "
              onClick={() => router.push("registerProfileData")}
            >
              user details page
            </button>
          </BlurCard>
        </div>
        <BlurCard className="w-full md:w-[70vw]  p-2 pb-[5vh] md:h-[85vh] h-[80vh]">
          <div className=" border  rounded-xl flex  justify-evenly h-[40%]">
            <div className="  w-3/4">
              <div className=" h-3/4">
                <h1 className="w-fit p-2 m-1">Project Name</h1>
                <p className="w-full mt-3 rounded-xl h-2/3 p-2 block border border-gray-700">
                  description
                </p>
              </div>
              <div className=" flex pt-3 justify-start gap-3">
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Github <FaGithub className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Members <AiOutlineTeam className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  Techstack
                  <VscTools className="inline ml-1" />
                </Button>
              </div>
            </div>
            <div className=" flex flex-col  justify-around ">
              <div className="  border p-1 px-2 flex ml-auto rounded-full w-fit ">
                status
              </div>
              <div className="  border rounded-lg  w-48 h-48 ">img</div>
            </div>
          </div>
        </BlurCard>
      </div>
    </div>
  );
};

export default ProfilePage;
