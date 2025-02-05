"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { useUser } from "@/context/UserContext";
import { GrFormNext, GrFormNextLink } from "react-icons/gr";

const ProjectFormpage = () => {
  const { user } = useAuth();
  const { userData, loading } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
    projectImage: "",
    createdBy: userData?._id, // Reference to the user
    teamMembers: [], // Array of user IDs
    status: "in progress", // Default status
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Your click handler logic
    console.log("Button clicked!");
  };
  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/projects", formData);
      if (response.status === 200) {
        toast.success("Project created successfully!");
        router.push("/profile");
        console.log("pushed to projects");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Error creating project. Please try again.");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          projectImage: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      className="md:h-screen h-fit flex text-black justify-center pt-[15vh] md:pt-12 mx-auto flex-col gap-4 w-[95vw]"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <h1 className="text-gray-500 text-3xl font-bold opacity-50">
          Project Details <GrFormNext className="inline" />
        </h1>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-28 rounded-full ml-auto"
        >
          Create
          <GrFormNextLink className="inline ml-2 font-medium text-xl" />
        </button>
      </div>

      <div className="w-full md:h-11/12 h-fit border border-gray-500 md:py-10 rounded-lg bg-gradient-to-tr from-[#151123] via-transparent to-[#120635de] grid md:grid-cols-3 grid-cols-1 text-white">
        {/* Left Column: Project Image Upload */}
        <div className="flex flex-col justify-around  p-4">
          <div className="h-fit mx-auto  md:w-72 ">
            {formData.projectImage ? (
              <img src={formData.projectImage} alt="project" />
            ) : (
              <img
                src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/Project-Manager.jpg"
                alt="default"
              />
            )}
          </div>
          <input
            id="projectImage"
            className="border border-x-0 border-t-0 px-3 py-1 bg-transparent"
            type="file"
            name="projectImage"
            placeholder="Upload Project Image"
            onChange={handleImageUpload}
          />
          <div className="flex flex-col mt-4">
            <h2>Description</h2>
            <textarea
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              name="description"
              placeholder="Brief project description"
              maxLength={250}
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        {/* Middle Column: Basic Details */}
        <div className="flex flex-col justify-top gap-4 p-2">
          <h1 className="text-purple-400 font-semibold text-xl">
            Basic Details
          </h1>
          <div className="border flex flex-col p-2 rounded-xl border-gray-700">
            <h2>Project Name</h2>
            <input
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="projectName"
              placeholder="Project Name"
              value={formData.projectName}
              onChange={handleChange}
              required
            />

            <h2>Tech Stack</h2>
            <input
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="techStack"
              placeholder="e.g., React, Node.js"
              value={formData.techStack}
              onChange={handleChange}
              required
            />

            <h2>Status</h2>
            <select
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              name="status"
              value={formData.status}
              // onChange={handleChange}
              required
            >
              <option className="bg-blue-700" value="in progress">
                In Progress
              </option>
              <option className="bg-blue-700" value="completed">
                Completed
              </option>
              <option className="bg-blue-700" value="abandoned">
                Abandoned
              </option>
            </select>
          </div>

          <h1 className="text-purple-400 font-semibold text-xl">Links</h1>
          <div className="border flex flex-col p-2 rounded-xl border-gray-700">
            <h2>GitHub Link</h2>
            <input
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="url"
              name="githubLink"
              placeholder="GitHub Repository"
              value={formData.githubLink}
              onChange={handleChange}
            />

            <h2>Live Project Link</h2>
            <input
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="url"
              name="liveLink"
              placeholder="Live Project URL"
              value={formData.liveLink}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Right Column: Team Details */}
        <div className="flex flex-col gap-4 p-2">
          <h1 className="text-purple-400 font-semibold text-xl">
            Team Members
          </h1>
          <div className="border p-2 rounded-xl border-gray-700">
            <h2>Add Team Members</h2>
            <input
              className="border border-x-0 mt-3 mb-4 ml-3 border-t-0 px-3 py-1 bg-transparent"
              type="text"
              name="teamMembers"
              placeholder="Add user IDs"
              value={formData.teamMembers}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProjectFormpage;
