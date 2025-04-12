import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  console.log(req.url, !token);

  if (req.url.includes("/api/orders") && !token) {
    return NextResponse.json(
      { message: "Unauthorized: Missing token from Middleware" },
      { status: 401 }
    );
  }

  if (
    !token &&
    req.url.includes("/restaurant/orders") &&
    req.url !== "/restaurant/admin"
  ) {
    const loginUrl = new URL("/restaurant/admin", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/api/orders/:path*", "/restaurant/orders", "/restaurant/:path*"],
};
