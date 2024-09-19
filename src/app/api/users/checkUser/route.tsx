import connectMongoDB from "@/config/mongodb";
import User from "../../../../../models/User";

export async function POST(request: Request): Promise<Response> {
  await connectMongoDB();

  const { email } = await request.json(); // Destructure the email from the request body
  console.log(email);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User found");
      return new Response(JSON.stringify({ isNewUser: false }), {
        status: 200,
      });
    } else {
      console.log("User not found");
      return new Response(JSON.stringify({ isNewUser: true }), {
        status: 201,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
    });
  }
}
