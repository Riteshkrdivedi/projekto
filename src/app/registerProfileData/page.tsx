"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

const UserDetailForm = () => {
  const { user } = useAuth();
  const router = useRouter();

  // Initialize form data with Firebase email
  const [formData, setFormData] = useState({
    username: "",
    email: user?.email || "", // Autofill with Firebase email if available
    profilePicture: "",
    linkedIn: "",
    twitter: "",
    github: "",
    instagram: "",
    bio: "",
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
      className="h-screen flex text-black justify-center flex-col gap-4 w-64 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        disabled // Email field should not be editable
      />
      <input
        type="text"
        name="profilePicture"
        placeholder="Profile Picture URL"
        value={formData.profilePicture}
        onChange={handleChange}
      />
      <input
        type="text"
        name="linkedIn"
        placeholder="LinkedIn URL"
        value={formData.linkedIn}
        onChange={handleChange}
      />
      <input
        type="text"
        name="twitter"
        placeholder="Twitter URL"
        value={formData.twitter}
        onChange={handleChange}
      />
      <input
        type="text"
        name="github"
        placeholder="GitHub URL"
        value={formData.github}
        onChange={handleChange}
      />
      <input
        type="text"
        name="instagram"
        placeholder="Instagram URL"
        value={formData.instagram}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default UserDetailForm;
