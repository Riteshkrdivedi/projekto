import connectMongoDB from "@/config/mongodb";
import User from "@/../../models/User.js";
import { NextResponse } from "next/server";

import mongoose from "mongoose";

export async function PATCH(req: Request) {
  await connectMongoDB();

  try {
    const { userId, projectId } = await req.json();

    // Check if userId and projectId are provided
    if (!userId || !projectId) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find the user by ID and update their projects array
    const user = await User.findById(new mongoose.Types.ObjectId(userId));
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    console.log(user);
    // Add projectId to the user's projects array
    user.projects.push(projectId);
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Project added to user",
    });
  } catch (error) {
    console.error("Error updating user projects:", error);
    const errorMessage = (error as Error).message || "Server error";
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
