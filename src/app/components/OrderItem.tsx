// OrderItem.tsx
import { updateOrder, getOrders } from "@/redux/features/orderSlice";
import { useAppDispatch } from "@/redux/store";
import Image from "next/image";
import React, { useState } from "react";

interface OrderItemProps {
	order: any;
	visibleOrder: number | null;
	toggleVisibility: (id: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
	order,
	visibleOrder,
	toggleVisibility,
}) => {
	const dispatch = useAppDispatch();
	const [makeTime, setMakingTime] = useState('');

	const handleAcceptOrder = async () => {
		await dispatch(updateOrder({ id: order.id, makeTime, status: "ACCEPTED" }));
		await dispatch(getOrders());
	};

	const handleCancelOrder = async () => {
		await dispatch(updateOrder({ id: order.id, status: "CANCELLED" }));
		await dispatch(getOrders());
	}

	const handleDeliveredOrder = async () => {
		await dispatch(updateOrder({ id: order.id, status: "PICKED_UP" }));
		await dispatch(getOrders());
	}

	return (
		<React.Fragment key={order.id}>
			<tr>
				<td className="py-2 px-4 border-b border-gray-200">
					{order.id}
				</td>
				<td className="py-2 px-4 border-b border-gray-200">
					{order.name}
				</td>
				<td className="py-2 px-4 border-b border-gray-200">
					{order.phone}
				</td>
				<td className="py-2 px-4 border-b border-gray-200">
					{order.email}
				</td>
				<td
					className={`py-2 px-4 border-b border-gray-200 ${
						order.status === "PENDING"
							? "text-yellow-600"
							: "text-green-600"
					}`}
				>
					{order.status}
				</td>
				<td className="py-2 px-4 border-b border-gray-200">
					{order.created_at}
				</td>
				<td className="py-2 px-4 border-b border-gray-200">
					<button
						className="text-blue-600 hover:underline"
						onClick={() => toggleVisibility(order.id)}
					>
						View
					</button>
					{order.status !== "PICKED_UP" && <button className="text-red-600 hover:underline ml-2" onClick={handleCancelOrder}>
						Cancel
					</button>}
					{order.status === "ACCEPTED" && <button className="text-green-900 hover:underline ml-2" onClick={handleDeliveredOrder}>
						Delivered
					</button>}
				</td>
			</tr>
			{visibleOrder === order.id && (
				<tr>
					<td colSpan={7} className="border-b border-gray-200">
						<div className="p-5 bg-gray-800 text-white transition-opacity duration-500">
							{order.items.map((item: any, index: any) => (
								<div key={index} className="flex mb-3">
									<Image
										src={item.image}
										alt={item.title}
										width={70}
										height={70}
										className="object-contain h-[100%]"
									/>
									<div className="flex flex-col justify-center min-w-[300px] mx-5">
										<h1 className="text-xl">
											{item.title}
										</h1>
										<p className="text-gray-400">
											{item.description}
										</p>
										<p className="text-lg mt-2">
											${item.price}
										</p>
										<p className="text-lg mt-2">
											Quantity: {item.quantity}
										</p>
									</div>
								</div>
							))}
							{order.status === "ACCEPTED" && (
								<p className="text-lg mt-2">
									Making Time: {order.makeTime} minutes
								</p>
							)}
							{order.status === "PENDING" && (
								<div className="mt-5">
									<label className="block text-gray-400 mb-2">
										Making Time (minutes):
									</label>
									<input
										type="number"
										value={makeTime}
										onChange={(e) => {
											setMakingTime(e.target.value);
										}}
										className="p-2 rounded bg-gray-700 text-white"
									/>
									<button
										className="ml-4 p-2 bg-green-600 rounded text-white"
										onClick={handleAcceptOrder}
									>
										Accept Order
									</button>
								</div>
							)}
							{order.status === "CANCELLED" && (
								<p className="text-lg mt-2">
									Order Cancelled
								</p>
							)}
							{order.status === "PICKED_UP" && (
								<p className="text-lg mt-2">
									Order Delivered
								</p>
							)}
						</div>
					</td>
				</tr>
			)}
		</React.Fragment>
	);
};

export default OrderItem;
