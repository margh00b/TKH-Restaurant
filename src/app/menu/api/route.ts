import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: any) {
	const menuItems = await prisma.menuItem.findMany();

	return NextResponse.json(menuItems);
}
