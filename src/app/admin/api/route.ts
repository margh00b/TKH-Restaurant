import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: any) {
	const { username, password } = await request.json();
	const user = await prisma.user.findUnique({
		where: {
			username,
		},
	});
	
	if (user) {
		const isVerified = await compare(password, user.password);
		if (isVerified) {
			let response = NextResponse.json(
				{ message: "Logged in" },
				{ status: 200 }
			);

			const token = jwt.sign({ username }, process.env.JWT_SECRET ?? "");

			response.cookies.set({
				name: "token",
				value: token,
				httpOnly: true,
				sameSite: "lax",
			});

			return response;
		}
	}
	return NextResponse.json(
		{ message: "Invalid credentials" },
		{ status: 401 }
	);
}
