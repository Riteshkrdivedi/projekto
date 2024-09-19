// utils/fetchUserData.ts
import connectMongoDB from "@/config/mongodb";
import User from "@/../models/User";

export async function POST(request: Request): Promise<Response> {
  await connectMongoDB();

  const { email } = await request.json(); // Destructure the email from the request body
  console.log(email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
