import React from "react";
import Card from "../components/Card";

const Community = () => {
  return (
    <div className="w-full h-[100vh] flex my-10   items-center justify-center ">
      <div className=" w-2/4 h-full">
        <Card className="h-5/6 my-28 w-full">img</Card>
      </div>
      <div className=" h-full text-gray-300 w-2/6  flex flex-col">
        <Card className="text-3xl font-semibold px-4 my-32">
          <h2>Join a Thriving Community of Innovators 🚀</h2>
          <Card className="m  p-12 text-lg">
            <p>
              Connect with passionate engineers, developers, and creators at
              Projekto. Collaborate on cutting-edge software 💻 and
              groundbreaking hardware projects 🔧. Share insights, grow
              together, and celebrate innovation! 🌟
            </p>
          </Card>
        </Card>
      </div>
      <div className="  h-full ">
        <h1 className="px-5 py-44 underline text-8xl vertical-text font-bold text-transparent bg-clip-text bg-gradient-to-t  from-cyan-400 to-green-800">
          Community
        </h1>
      </div>
    </div>
  );
};

export default Community;
