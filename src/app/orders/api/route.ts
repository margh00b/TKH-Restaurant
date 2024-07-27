import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: any) {
	const orders = await prisma.order.findMany({
		include: {
			items: true,
		},
	});

	return NextResponse.json(orders);
}
