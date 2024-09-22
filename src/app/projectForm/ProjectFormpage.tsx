"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

const page = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
    projectImage: "",
    createdBy: user?.email || "", // Reference to the user
    teamMembers: [], // Array of user IDs
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
      if (response.status === 201) {
        toast.success("Project created successfully!");
        router.push("/projects");
        console.log("pushed to projects");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Error creating project. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" pt-40  p-4">
      <div className="mb-4">
        <label htmlFor="projectName" className="block text-lg font-medium">
          Project Name
        </label>
        <input
          className="w-full p-2 border rounded  bg-transparent "
          type="text"
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-lg font-medium">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 bg-transparent border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="techStack" className="block text-lg font-medium">
          Tech Stack (comma-separated)
        </label>
        <input
          type="text"
          id="techStack"
          name="techStack"
          value={formData.techStack}
          onChange={handleChange}
          required
          className="w-full p-2 bg-transparent border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="githubLink" className="block text-lg font-medium">
          GitHub Link (optional)
        </label>
        <input
          type="text"
          id="githubLink"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="liveLink" className="block text-lg font-medium">
          Live Project Link (optional)
        </label>
        <input
          type="text"
          id="liveLink"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor=" projectImage" className="block text-lg font-medium">
          projectImage
        </label>
        <input
          type="text"
          id="projectImage"
          name="projectImage"
          value={formData.projectImage}
          onChange={handleChange}
          className="w-full p-2 bg-transparent border rounded"
        />
      </div>
      <div className="mb-4 hidden">
        <label htmlFor="liveLink" className="block text-lg font-medium">
          createdBy
        </label>
        <input
          type="text"
          id="liveLink"
          name="liveLink"
          value={formData.createdBy}
          onChange={handleChange}
          className="w-full p-2 border bg-transparent rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="teamMembers" className="block text-lg font-medium">
          teamMembers
        </label>
        <input
          type="text"
          id="teamMembers"
          name="teamMembers"
          value={formData.teamMembers}
          onChange={handleChange}
          className="w-full p-2 border bg-transparent rounded"
        />
      </div>

      <button
        onClick={handleClick}
        disabled={isClicked}
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create Project
      </button>
    </form>
  );
};

export default page;
