import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuth = pathname.startsWith("/auth");
  const isApi = pathname.startsWith("/api");
  if (isAuth || isApi) return NextResponse.next();

  const isProtected =
    pathname === "/" ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/checkin") ||
    pathname.startsWith("/attendance") ||
    pathname.startsWith("/leave") ||
    pathname.startsWith("/overtime") ||
    pathname.startsWith("/payslip") ||
    pathname.startsWith("/notifications") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/teamlead") ||
    pathname.startsWith("/hr");

  if (!isProtected) return NextResponse.next();

  const hasSession = req.cookies.get("hrms_session")?.value;
  if (!hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/checkin/:path*",
    "/attendance/:path*",
    "/leave/:path*",
    "/overtime/:path*",
    "/payslip/:path*",
    "/notifications/:path*",
    "/profile/:path*",
    "/teamlead/:path*",
    "/hr/:path*"
  ]
};
