import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(request: any) {
	const { searchParams } = request.nextUrl
    const { orderId } = Object.fromEntries(searchParams.entries())

	if(orderId) {
		const order = await prisma.order.findUnique({
			where: {
				id: parseInt(orderId),
			},
			include: {
				items: true,
			},
		});

		if(!order) {
			return NextResponse.json(
				{ message: "Order not found" },
				{ status: 404 }
			);
		}

		const itemPromises = order.items.map(async (item, index) => {
			const menuItem = await prisma.menuItem.findUnique({
				where: {
					id: item.menuItemId,
				},
			});
			order.items[index] = {
				...item,
				...menuItem,
			};
		});

		await Promise.all(itemPromises);

		return NextResponse.json(order);
	}

	const orders = await prisma.order.findMany({
		include: {
			items: true,
		},
	});

	const promises = orders.map(async (order) => {
		const itemPromises = order.items.map(async (item, index) => {
			const menuItem = await prisma.menuItem.findUnique({
				where: {
					id: item.menuItemId,
				},
			});
			order.items[index] = {
				...item,
				...menuItem,
			};
		});
		await Promise.all(itemPromises);
		return order;
	});

	await Promise.all(promises);

	return NextResponse.json(orders);
}

export async function PUT(request: any) {
	const { id, makeTime, status } = await request.json();

	let data = {};

	if(!makeTime && !status) {
		throw new Error("Invalid request");
	}

	if(makeTime && !(status === "ACCEPTED")) {
		throw new Error("Invalid request");
	}

	if(status) {
		data = {
			status,
		};
	}

	if(makeTime && status === "ACCEPTED") {
		data = {
			status,
			makeTime,
		};
	}

	const order = await prisma.order.update({
		where: {
			id,
		},
		data
	});

	return NextResponse.json(order);
}
