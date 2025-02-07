"use client";

import React, { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Resource_sliders from "@/components/Resource_sliders";
import resources_all from "@/data/resources_all"; // Import your resources_all.js file

const Resource_Search = () => {
  const [query, setQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState(resources_all);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResources(resources_all); // Reset to all resources if query is empty
      setShowSuggestions(false);
    } else {
      const filtered = resources_all.filter(
        (resource) =>
          resource.title.toLowerCase().includes(value.toLowerCase()) ||
          resource.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResources(filtered);
      setShowSuggestions(filtered.length > 0);
    }
  };

  const handleSelect = (resource: string) => {
    // Type the parameter
    setQuery(resource.title); // Access name property of the resource object
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className=" ">
      <div className="flex justify-center">
        <div className="border flex rounded-lg justify-between px-5 w-[80vw] h-fit py-2 relative">
          <div className="text-4xl mr-10">
            <Link href="/">
              <FaHome />
            </Link>
          </div>
          <div className="w-full mx-4">
            <input
              type="text"
              placeholder="Search resources..."
              value={query}
              onChange={handleSearch}
              onKeyDown={handleKeyPress}
              className="w-full p-2 border bg-slate-800 rounded-lg focus:outline-none"
            />
            {showSuggestions && (
              <ul className="absolute bg-gray-600 border rounded-lg w-full mt-1 shadow-lg max-h-40 overflow-y-auto">
                {filteredResources.map((resource, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleSelect(resource.title)}
                  >
                    {resource.title}{" "}
                    <span className="text-sm text-gray-500">
                      ({resource.description})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="text-3xl">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="h-fit ">
        {" "}
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">web development</h2> */}
          <Resource_sliders />
        </div>
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">aiml</h2> */}
          <Resource_sliders />
        </div>
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">app development</h2> */}
          <Resource_sliders />
        </div>{" "}
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">app development</h2> */}
          <Resource_sliders />
        </div>{" "}
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">app development</h2> */}
          <Resource_sliders />
        </div>{" "}
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">app development</h2> */}
          <Resource_sliders />
        </div>{" "}
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">app development</h2> */}
          <Resource_sliders />
        </div>{" "}
        <div className=" mt-5">
          {/* <h2 className="text-2xl text-left ml-5 font-bold">app development</h2> */}
          <Resource_sliders />
        </div>{" "}
      </div>
    </div>
  );
};

export default Resource_Search;
