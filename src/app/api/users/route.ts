import connectMongoDB from "../../../config/mongodb.js";
import User from "../../../../models/User.js";

export async function POST(request: Request): Promise<Response> {
  await connectMongoDB();
  const body = await request.json();
  console.log(body);
  try {
    const user = await User.create(body);
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    if ((error as any).code === 11000) {
      // This is the error code for duplicate key in MongoDB
      return new Response(
        JSON.stringify({ error: "Username or email already exists" }),
        {
          status: 409, // 409 Conflict
        }
      );
    }
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
    });
  }
}

export async function GET() {
  await connectMongoDB();
  const users = await User.find();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return new Response(JSON.stringify({ message: "User deleted" }), {
    status: 200,
  });
}
