import connectMongoDB from "@/config/mongodb";
import User from "@/../models/User";
import Project from "@/../models/Project";

export async function POST(request: Request): Promise<Response> {
  await connectMongoDB();
  const body = await request.json();
  console.log(body);

  try {
    const project = await Project.create(body);
    return new Response(JSON.stringify(project), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 400,
    });
  }
}

export async function GET() {
  await connectMongoDB();
  const projects = await Project.find();
  console.log(projects);
  return new Response(JSON.stringify(projects), { status: 200 });
}
