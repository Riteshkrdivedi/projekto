// utils/fetchUserData.ts
import connectMongoDB from "@/config/mongodb";
import User from "@/../models/User";
import Project from "@/../models/Project";

export async function POST(request: Request): Promise<Response> {
  await connectMongoDB();

  const { email } = await request.json(); // Destructure the email from the request body
  console.log("working here :", email);

  try {
    // const user = await User.findOne({ email }).populate("projects").exec();
    const user = await User.findOne({ email })
      .populate({ path: "projects", model: Project })
      .exec();
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
