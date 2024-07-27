import { NextRequest, NextResponse } from 'next/server';

export const middleware = async(req: NextRequest) => {
	const token = req.cookies.get("token")?.value;
	console.log(req.url, !token);
	if (req.url.includes("/orders") && !token) {
		const response = NextResponse.redirect(new URL('/admin', req.url));

		return response;
	}

	return NextResponse.next();
};

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico).*)'
	]
};