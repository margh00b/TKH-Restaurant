import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request: any) {
	const {cart, name, phone, email} = await request.json();

	if (!cart || !name || !phone || !email) {
		return NextResponse.json(
			{ message: "Invalid data" },
			{ status: 400 }
		);
	}

	await prisma.order.create({
		data: {
			items: {
				create: cart.map((item: any) => ({
					menuItemId: parseInt(item.id),
					quantity: parseInt(item.quantity),
					price: parseFloat(item.price),
				}))
			},
			name,
			phone,
			email,
		}
	});

	return NextResponse.json(
		{ message: "Order placed" },
		{ status: 200 }
	);
}
