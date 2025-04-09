import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  console.log(req.url, !token);
  if (!token) {
    if (req.nextUrl.pathname.startsWith("/api/orders")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/restaurant/admin", req.url));
  }
};
export const config = {
  matcher: [
    "/((?!api/(?!orders/).+|_next/static|_next/image|favicon.ico).*)",
    "/api/orders/:path",
  ],
};
