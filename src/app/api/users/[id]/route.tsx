import connectMongoDB from "../../../../config/mongodb.js";
import User from "../../../../../models/User.js";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return new Response(JSON.stringify(user), { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongoDB();
  const body = await request.json();
  const user = await User.findByIdAndUpdate(id, body, { new: true });
  return new Response(JSON.stringify(user), { status: 200 });
}
