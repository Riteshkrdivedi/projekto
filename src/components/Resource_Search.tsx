"use client";

import React, { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import Link from "next/link";

const resources = [
  { name: "Python Crash Course", category: "Python" },
  { name: "Django for Beginners", category: "Python" },
  { name: "Next.js Guide", category: "Next.js" },
  { name: "React Best Practices", category: "Web Development" },
  { name: "Machine Learning Basics", category: "AI/ML" },
  { name: "Deep Learning with TensorFlow", category: "AI/ML" },
  { name: "JavaScript Fundamentals", category: "Web Development" },
  { name: "Full-Stack Development", category: "Web Development" },
];

const Resource_Search = () => {
  const [query, setQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState<typeof resources>(
    []
  );
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResources([]);
      setShowSuggestions(false);
    } else {
      const filtered = resources.filter(
        (resource) =>
          resource.name.toLowerCase().includes(value.toLowerCase()) ||
          resource.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResources(filtered);
      setShowSuggestions(filtered.length > 0);
    }
  };

  const handleSelect = (resourceName: string) => {
    setQuery(resourceName);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShowSuggestions(false);
    }
  };

  return (
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
                  onClick={() => handleSelect(resource.name)}
                >
                  {resource.name}{" "}
                  <span className="text-sm text-gray-500">
                    ({resource.category})
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
  );
};

export default Resource_Search;
