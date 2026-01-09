import { NextResponse } from "next/server";

export function middleware(request) {
  // Example middleware that logs the request URL
//   console.log("Middleware triggered for URL:", request.url);    

//   return NextResponse.redirect(new URL('/login', request.url));
}

// Next.js middleware to log requests and redirect to /login
// You can expand this middleware to include authentication checks or other logic
// based on your application's requirements.
// export const config = {
//   matcher: ['/topics/:path*'], // Apply middleware to /topics and its subpaths
// };