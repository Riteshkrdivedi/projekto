"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { GrFormNextLink, GrFormNext } from "react-icons/gr";

const UserDetailForm = () => {
  const { user } = useAuth();
  const router = useRouter();

  // Initialize form data with Firebase email
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    workplace: "",
    email: user?.email || "", // Autofill with Firebase email if available
    profilePicture: "",
    linkedIn: "",
    twitter: "",
    github: "",
    instagram: "",
    bio: "",
    skills: [],
    role: "developer", // Default value
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      ); // Adjust the endpoint if needed
      if (response.status === 201) {
        toast.success("User created successfully!");
        router.push("/profile"); // Adjust the route as necessary
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user. Please try again.");
    }
  };

  return (
    <form
      className="h-screen flex text-black justify-center pt-12 mx-auto flex-col gap-4 w-[95vw]"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <h1 className=" text-gray-500 text-3xl font-bold opacity-50">
          Basic Details <GrFormNext className="inline" />
        </h1>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-28 rounded-full ml-auto"
        >
          Save
          <GrFormNextLink className="inline ml-2 font-medium text-xl" />
        </button>
      </div>
      <div className=" w-full h-11/12 border border-gray-500 rounded-lg bg-gradient-to-tr from-[#151123] via-transparent to-[#120635de] grid grid-cols-3 text-white">
        <div className=" flex flex-col justify-around p-4">
          <input
            className=" border border-x-0 border-t-0 px-3 py-1 bg-transparent"
            type="text"
            name="profilePicture"
            placeholder="Profile Picture URL"
            value={formData.profilePicture}
            onChange={handleChange}
          />
          <div className=" flex flex-col ">
            <h2>Bio</h2>
            <textarea
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              name="bio"
              placeholder="I am an aspiring SDE "
              maxLength={150}
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col justify-top gap-4 p-2">
          <h1 className="text-purple-400 font-semibold text-xl">
            Personal Details
          </h1>
          <div className="border flex flex-col p-2 rounded-xl border-gray-700 justify-around">
            <h2>Usename</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="username"
              placeholder="unique121"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <h2>First Name</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="firstName"
              placeholder="john"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <h2>Last Name</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="lastName"
              placeholder="smith"
              value={formData.lastName}
              onChange={handleChange}
            />
            <h2>E-mail</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled // Email field should not be editable
            />
          </div>
          <h1 className="text-purple-400 font-semibold text-xl">
            Professional Details
          </h1>
          <div className="border flex flex-col p-2 rounded-xl border-gray-700 justify-around">
            <h2>College/Company Name</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="workplace"
              placeholder="for eg: Google"
              value={formData.workplace}
              onChange={handleChange}
            />
            <h2>Role</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="role"
              placeholder="for eg: Developer"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-4 p-2">
          <h1 className="text-purple-400 font-semibold text-xl">
            Social Media
          </h1>
          <div className=" border p-2 rounded-xl border-gray-700 flex flex-col">
            <h2>LinkedIn</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="linkedIn"
              placeholder="LinkedIn URL"
              value={formData.linkedIn}
              onChange={handleChange}
            />
            <h2>Twitter</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="twitter"
              placeholder="Twitter URL"
              value={formData.twitter}
              onChange={handleChange}
            />
            <h2>Github</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={formData.github}
              onChange={handleChange}
            />
            <h2>Instagram</h2>
            <input
              className=" border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="instagram"
              placeholder="Instagram URL"
              value={formData.instagram}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserDetailForm;
