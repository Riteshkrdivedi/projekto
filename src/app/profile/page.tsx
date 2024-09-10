"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "../../firebase/authservice";
import { Rings, ThreeCircles, Triangle } from "react-loader-spinner";
import BlurCard from "@/components/BlurCard";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

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
      <div className="pt-[11vh] m-[2vh] gap-2 flex">
        <div className=" flex flex-col gap-3">
          <BlurCard className="w-full md:w-[30vw] justify-center p-2 pb-[5vh] md:h-[42vh] h-[80vh]">
            <div className=" border border-gray-700 rounded-xl flex flex-col gap-2">
              <div className=" h-36 gap-2 justify-stretch flex">
                <div className=" p-3 ">
                  {user.photoURL ? (
                    <img
                      className="w-[11vh] h-[11vh] rounded-full"
                      src={user.photoURL}
                      alt="profile"
                    />
                  ) : (
                    <img
                      className="w-[11vh] h-[11vh] rounded-full"
                      src="guestdp.jpeg"
                      alt="profile"
                    />
                  )}
                </div>
                <div className=" flex flex-col gap-2 pt-5 p-3">
                  <h1>Ritesh kumar Divedi</h1>
                  <h3>USICT(GGSIPU)</h3>
                  <p>web developer</p>
                </div>
              </div>
              <div className=" p-3 h-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, quae nostrum. Fuga fugit quas qui dolor voluptate,
                cupiditate eveniet ex!
              </div>
            </div>
          </BlurCard>
          <BlurCard className="w-full md:w-[30vw] justify-center p-2 pb-[5vh] md:h-[42vh] h-[80vh]">
            <p> skills</p>
            <button
              className=" -gray-500 p-3 border border-gray-700 rounded-2xl hover:bg-red-500 "
              onClick={signOut}
            >
              Sign Out
            </button>
          </BlurCard>
        </div>
        <BlurCard className="w-full md:w-[70vw] justify-center p-2 pb-[5vh] md:h-[85vh] h-[80vh]">
          projects
        </BlurCard>
      </div>
    </div>
  );
};

export default ProfilePage;
