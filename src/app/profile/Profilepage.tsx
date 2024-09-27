"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { signOut } from "../../firebase/authservice";
import { Rings } from "react-loader-spinner";
import BlurCard from "@/components/BlurCard";
import Button from "@/components/Button";
import { FaGithub, FaTools } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { useUser } from "../../context/UserContext";
import { MdArrowOutward } from "react-icons/md";

import Link from "next/link";

const ProfilePage = () => {
  const { user } = useAuth();
  const { userData, loading } = useUser();
  const router = useRouter();
  interface Project {
    projectName: string;
    description?: string;
    githubLink?: string;
    liveLink?: string;
    status?: string;
    projectImage?: string;
  }
  console.log(userData);
  interface UserData {
    username: string;
    firstName?: string;
    bio?: string;
    profilePicture?: string; // Add other properties as needed
    projects?: {
      projectName: string;
      githubLink?: string;
      liveLink?: string;
      status?: string;
      projectImage?: string;
    }[];
  }

  if (!user) {
    router.push("/auth/login");
  }

  if (!user) {
    return (
      <p>
        <Rings
          color="white"
          wrapperClass="w-[98.50vw] h-[100vh]  flex justify-center items-center"
        />
      </p>
    );
  }

  // const [userData, setUserData] = useState<UserData | null>(null);
  // const [error, setError] = useState("");
  // useEffect(() => {
  //   if (!user) {
  //     router.push("auth/login");
  //   }
  // }, [user, router]);

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       // const baseURL =
  //       //   process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  //       // console.log("base url for api call is : ", baseURL);
  //       const response = await axios.post("/api/users/fetchUserData", {
  //         email: user.email,
  //       });
  //       if (response.data) {
  //         setUserData(response.data as UserData);
  //       }
  //       // console.log("user data is fetched", response.data);
  //     } catch (error) {
  //       console.log("error in fetching user data", error);
  //       console.error("Error checking user:", error);
  //     }
  //   };

  // // Run the checkUser function when the component mounts
  // if (user) {
  //   getUserData();
  // } else {
  //   router.push("auth/login");
  //   // }
  // }, [user]);

  return (
    <div className="relative w-full h-fit md:h-screen ">
      <div className="md:hidden absolute w-full h-full bg-gradient-to-tr from-[#03001417] via-[#2A0E61]/50 to-[#0e0d0d]"></div>
      <video
        className="absolute -z-10 top-0 md:block hidden left-0 w-full h-full object-cover"
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
                      {userData?.lastName}
                    </h1>
                    <p className="text-gray-400 text-sm">
                      {userData?.username}
                    </p>
                  </div>
                  <h3>{userData?.workplace}</h3>
                  <p>{userData?.role}r</p>
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
        <BlurCard className="w-full md:w-[70vw] md:overflow-y-auto  gap-4 flex flex-col p-2 pb-[5vh] md:h-[85vh] h-fit ">
          {userData && userData.projects && userData.projects.length > 0 ? (
            userData.projects.map((project: Project) => (
              <div
                key={project.projectName}
                className="border rounded-xl flex md:flex-row  flex-col-reverse justify-evenly h-fit md:h-[40%]"
              >
                <div className="w-11/12 md:mx-0 mx-auto md:w-3/4">
                  <div className="h-3/4">
                    <h1 className="w-fit md:my-2 p-2 m-1 text-lg md:text-xl font-semibold md:font-bold">
                      {project.projectName}
                    </h1>
                    <p className="w-full text-gray-400 text-sm md:text-base overflow-y-auto md:mt-3 rounded-xl md:h-2/3 h-[11vh] p-2 block border border-gray-70">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex py-4 md:pt-0 justify-start gap-3">
                    <Button className="border border-gray-600 p-1 px-5 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                      <p className="hidden md:inline">Members</p>
                      <AiOutlineTeam className="inline" />
                    </Button>
                    <Button className="border border-gray-600 p-1 px-5 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                      <Link href="{project.githubLink}">
                        <p className="hidden md:inline">Github</p>
                        <FaGithub className="inline" />
                      </Link>
                    </Button>
                    <Button className="border border-gray-600 p-1 px-5 rounded-xl hover:border-white text-white bg-[#0C0424]/60 hover:bg-transparent transition-all ease-in-out">
                      <Link href={"{project.liveLink}"}>
                        <p className="hidden md:inline">Live</p>
                        <MdArrowOutward className="inline ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col justify-around">
                  <div
                    className={`border p-1 px-2 md:my-0 my-1 md:text-base text-xs flex ml-auto rounded-full w-fit project.status===in progress ? bg-red-500: bg-green-500 `}
                  >
                    {project.status}
                  </div>
                  <div className="border rounded-lg h-[23vh] w-11/12 mx-auto md:w-48 md:h-48">
                    <img
                      className="w-full h-full rounded-lg object-cover"
                      src={project.projectImage || "/guestdp.jpeg"}
                      alt={project.projectName}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects to show.</p>
          )}
        </BlurCard>
      </div>
    </div>
  );
};

export default ProfilePage;
