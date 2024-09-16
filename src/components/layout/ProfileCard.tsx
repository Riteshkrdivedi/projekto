import React from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { signOut } from "../../firebase/authservice";

import { useEffect } from "react";

const ProfileCard = ({ className }: { className: string }) => {
  const { user } = useAuth();
  if (user) {
    return (
      <div>
        <div
          className={`w-[10vw] ${className} flex flex-col rounded-xl justify-evenly p-2 bg-[#0a0814e2] border-gray-900  h-[22vh] border fixed right-[7vw] top-20 `}
        >
          <div className=" flex  gap-2">
            <div className=" ">
              {user.photoURL ? (
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt="profile"
                />
              ) : (
                <img
                  className="w-12 h-12  rounded-full"
                  src="guestdp.jpeg"
                  alt="profile"
                />
              )}
            </div>
            <div className="">
              {user ? (
                user.displayName ? (
                  <p className=" font-semibold">{user.displayName}</p>
                ) : (
                  <div className=" font-semibold">{user.email}</div>
                )
              ) : (
                <div>Guest</div>
              )}
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
