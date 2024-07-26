import React from "react";
import "../app/globals.css";
import Button from "@/components/button";

const Navbar = () => {
  return (
    <div className="m-2 p-3 bg-transparent border-2 border-white ">
      <ul className="flex justify-between">
        <li>logo</li>
        <li>Home</li>
        <li>Search</li>
        <li>
          <Button className="mx-5 bg-purple-600 "> SignIN</Button>
        </li>
        <li>
          <Button className="mx-4 bg-zinc-700">SignUp</Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
