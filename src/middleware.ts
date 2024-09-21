// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

// Optional: This limits the middleware to specific routes or patterns
export const config = {
  matcher: ["/api/:path*"], // Apply to all routes (or modify as needed)
};
