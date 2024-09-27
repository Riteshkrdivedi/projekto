import connectMongoDB from "@/config/mongodb";
import User from "@/../models/User";
import Project from "@/../models/Project";
import axios from "axios";
import { NextResponse } from "next/server";

import mongoose from "mongoose";

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  console.log(projects);
  return new Response(JSON.stringify(projects), { status: 200 });
}

export async function POST(req: Request) {
  await connectMongoDB();
  try {
    const {
      projectName,
      description,
      techStack,
      createdBy,
      collaboratorUsernames,
      githubLink,
      liveLink,
      status,
      projectImage,
    } = await req.json();

    if (!projectName || !description || !techStack || !createdBy) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const owner = await User.findById(new mongoose.Types.ObjectId(createdBy));
    if (!owner) {
      return NextResponse.json(
        { success: false, message: "Owner not found" },
        { status: 404 }
      );
    }

    const collaborators = await User.find({
      username: { $in: collaboratorUsernames },
    });

    if (collaborators.length !== collaboratorUsernames.length) {
      const foundUsernames = collaborators.map(
        (collaborator) => collaborator.username
      );
      const missingUsernames = collaboratorUsernames.filter(
        (username: string) => !foundUsernames.includes(username)
      );

      return NextResponse.json(
        {
          success: false,
          message: `Collaborators not found: ${missingUsernames.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const newProject = new Project({
      projectName,
      description,
      techStack,
      createdBy: owner._id,
      teamMembers: collaborators.map((collaborator) => collaborator._id),
      githubLink,
      liveLink,
      status,
      projectImage,
    });
    console.log("yahaan tk shi h  :");

    const savedProject = await newProject.save();
    console.log("yahaan tk shi h -2  :");

    const adduserproject = await axios.patch(
      "http://localhost:3000/api/users/updateUserProjects",
      { userId: createdBy, projectId: savedProject._id }
    );
    console.log(adduserproject);
    const isupdated = (
      adduserproject.data as { success: boolean; isupdated: boolean }
    ).isupdated;
    // if (!isupdated) {
    //   console.log("nhi hua user pe update");
    //   return NextResponse.json(
    //     { success: false, message: "Error adding project to owner" },
    //     { status: 500 }
    //   );
    // }

    for (const collaborator of collaborators) {
      collaborator.projects.push(savedProject._id);
      await collaborator.save();
    }

    // Step 8: Send a success response
    return NextResponse.json({
      success: true,
      // project: {
      //   id: savedProject._id,
      //   projectName: savedProject.projectName,
      //   description: savedProject.description,
      //   techStack: savedProject.techStack,
      //   createdBy: owner.username,
      //   collaborators: collaborators.map((c) => c.username),
      //   githubLink: savedProject.githubLink,
      //   liveLink: savedProject.liveLink,
      //   status: savedProject.status,
      //   projectImage: savedProject.projectImage,
      // },
    });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { success: false, message: (error as Error).message || "Server error" },
      { status: 500 }
    );
  }
}

// export async function POST(request: Request): Promise<Response> {
//   await connectMongoDB();
//   const body = await request.json();
//   console.log(body);

//   try {
//     const project = await Project.create(body);
//     return new Response(JSON.stringify(project), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: (error as Error).message }), {
//       status: 400,
//     });
//   }
// }
