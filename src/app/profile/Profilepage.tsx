"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { signOut } from "../../firebase/authservice";
import { Rings, ThreeCircles, Triangle } from "react-loader-spinner";
import BlurCard from "@/components/BlurCard";
import Button from "@/components/Button";
import { FaGithub, FaTools } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import axios from "axios";
import { MdArrowOutward } from "react-icons/md";
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
  // useEffect(() => {
  //   if (!user) {
  //     router.push("auth/login");
  //   }
  // }, [user, router]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const baseURL =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        console.log("base url for api call is : ", baseURL);
        const response = await axios.post(
          `${baseURL}/api/users/fetchUserData`,
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
    } else {
      router.push("auth/login");
    }
  }, [user]);

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
      <div className="pt-[11vh] m-[2vh] mt-0 gap-2 flex flex-col md:flex-row">
        <div className=" flex flex-col gap-3">
          <BlurCard className="w-full md:w-[30vw] justify-center p-2 pb-[5vh] md:h-[42vh] h-fit">
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
          <BlurCard className="w-full md:w-[30vw] justify-center p-2 pb-[5vh] md:h-[42vh] h-fit">
            <p> skills</p>

            <button
              className=" -gray-500 p-3 border border-gray-700 rounded-2xl hover:bg-red-500 "
              onClick={() => router.push("registerProfileData")}
            >
              user details page
            </button>
          </BlurCard>
        </div>
        <BlurCard className="w-full md:w-[70vw]  p-2 pb-[5vh] md:h-[85vh] h-fit ">
          <div className=" border  rounded-xl flex md:flex-row flex-col-reverse  justify-evenly h-fit md:h-[40%]">
            <div className=" w-11/12 md:mx-0 mx-auto md:w-3/4">
              <div className="  h-3/4">
                <h1 className="w-fit md:my-2 p-2 m-1 text-lg md:text-xl font-semibold md:font-bold">
                  Project Name
                </h1>
                <p className="w-full  text-gray-400 text-sm md:text-base   overflow-y-auto  md:mt-3 rounded-xl md:h-2/3 h-[11vh]  p-2 block border border-gray-70">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt eaque distinctio quaerat, amet commodi fuga. Eum
                  placeat maxime a provident.
                </p>
              </div>
              <div className=" flex  py-4 md:pt-0 justify-start gap-3">
                <Button className="border border-gray-600 p-1  px-5  rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  <p className="hidden md:inline">Members</p>
                  <AiOutlineTeam className="inline " />
                </Button>
                <Button className="border border-gray-600 p-1  px-5  rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  {/* <a href={p.githubLink}> */}
                  <p className="hidden md:inline">Github</p>
                  <FaGithub className="inline " />
                  {/* </a> */}
                </Button>

                <Button className="border border-gray-600 p-1 px-5   rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                  {/* <a href={p.liveLink}> */}
                  <p className="hidden md:inline">Live</p>
                  <MdArrowOutward className="inline ml-1" />
                  {/* </a> */}
                </Button>
              </div>
            </div>
            <div className=" flex flex-col  justify-around ">
              <div className="  border p-1 px-2 md:my-0 my-1 md:text-base text-xs flex ml-auto rounded-full w-fit ">
                status
              </div>
              <div className="  border rounded-lg  h-[23vh] w-11/12 mx-auto md:w-48 md:h-48 ">
                <img
                  className="w-full h-full  rounded-lg object-cover"
                  src="/guestdp.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </BlurCard>
      </div>
    </div>
  );
};

export default ProfilePage;
