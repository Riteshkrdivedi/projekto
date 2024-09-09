"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "../../firebase/authservice";

const ProfilePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("auth/login");
    }
  }, [user, router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-[100vh] align-middle mt-72">
      <h1>WELCOME {user.displayName ? user.displayName : user.profile}</h1>
      <button className="border p-5 m-20" onClick={signOut}>
        Sign Out
      </button>
      <div className="">{user.photoURL}</div>
      <div className="">
        {/* Ensure the photoURL is properly rendered */}
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="User profile"
            className="w-[7vh] h-[7vh] rounded-full"
          />
        ) : (
          <div className="">No profile picture available</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
