import React from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { signOut } from "../../firebase/authservice";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileCard = ({ className }: { className: string }) => {
  const { user } = useAuth();

  interface UserData {
    username: string;
    firstName: string;
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
        // console.log("user data for profilecard fetched");
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

  if (user) {
    return (
      <div>
        <div
          className={`w-[10vw] ${className} flex flex-col rounded-xl justify-evenly p-2 bg-[#0a0814e2] border-gray-900  h-[22vh] border fixed right-[7vw] top-20 `}
        >
          <div className=" flex  gap-2">
            <div className=" ">
              <img
                className="w-12 h-12 rounded-full"
                src={userData?.profilePicture || "/guestdp.jpeg"}
                alt="profile"
              />
            </div>
            <div className="">
              <p className=" font-semibold">{userData?.firstName}</p>
            </div>
          </div>
          <Link
            href="/profile"
            className="border mt-2 rounded-xl border-gray-800 text-gray-400 hover:bg-slate-200 hover:text-black flex justify-center w-full py-2"
          >
            My Profile
          </Link>

          <button
            className=" border mt-2 h  rounded-xl border-gray-800 text-gray-400 hover:text-white flex justify-center w-full py-2 hover:bg-red-500 "
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  } else {
    return <div className=""></div>;
  }
};

export default ProfileCard;
