import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  console.log(`Pathname: ${pathname}, Token: ${token}`);

  const publicRoutes = ["/login", "/register"];

  if (publicRoutes.includes(pathname)) {
    console.log("Public route, allowing access");
    return NextResponse.next();
  }

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    console.log("Redirecting to /login");
    return NextResponse.redirect(url);
  }

  console.log("Authenticated request, allowing access");
  return NextResponse.next();
}

export const config = { matcher: ["/", "/save/:path*"] };
