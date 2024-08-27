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
  const [makeTime, setMakingTime] = useState("");

  const handleAcceptOrder = async () => {
    await dispatch(updateOrder({ id: order.id, makeTime, status: "ACCEPTED" }));
    await dispatch(getOrders());
  };

  const handleCancelOrder = async () => {
    await dispatch(updateOrder({ id: order.id, status: "CANCELLED" }));
    await dispatch(getOrders());
  };

  const handleDeliveredOrder = async () => {
    await dispatch(updateOrder({ id: order.id, status: "PICKED_UP" }));
    await dispatch(getOrders());
  };

  return (
    <React.Fragment key={order.id}>
      <tr>
        <td className="py-2 px-4 border-b border-gray-200 text-sm">
          {order.id}
        </td>
        <td className="py-2 px-4 border-b border-gray-200 text-sm">
          {order.name}
        </td>
        <td className="py-2 px-4 border-b border-gray-200 text-sm">
          {order.phone}
        </td>
        <td className="py-2 px-4 border-b border-gray-200 text-sm">
          {order.email}
        </td>
        <td
          className={`py-2 px-4 border-b border-gray-200 text-sm ${
            order.status === "PENDING" ? "text-yellow-600" : "text-green-600"
          }`}
        >
          {order.status.replace("_", " ").toLowerCase()}
        </td>
        <td className="py-2 px-4 border-b border-gray-200 text-sm">
          {order.created_at}
        </td>
        <td className="py-2 px-4 border-b border-gray-200 text-sm">
          <div className="flex flex-wrap gap-2">
            <button
              className="text-blue-600 hover:underline text-xs sm:text-sm px-3 py-2 border border-blue-600 rounded"
              onClick={() => toggleVisibility(order.id)}
            >
              View
            </button>
            {order.status !== "PICKED_UP" && (
              <button
                className="text-red-600 hover:underline text-xs sm:text-sm px-3 py-2 border border-red-600 rounded"
                onClick={handleCancelOrder}
              >
                Cancel
              </button>
            )}
            {order.status === "ACCEPTED" && (
              <button
                className="text-green-900 hover:underline text-xs sm:text-sm px-3 py-2 border border-green-900 rounded"
                onClick={handleDeliveredOrder}
              >
                Delivered
              </button>
            )}
          </div>
        </td>
      </tr>
      {visibleOrder === order.id && (
        <tr>
          <td colSpan={7} className="border-b border-gray-200">
            <div className="p-3 bg-gray-800 text-white">
              {order.items.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="object-contain w-16 h-16 sm:w-20 sm:h-20"
                    />
                  </div>
                  <div className="flex-grow text-sm">
                    <h1 className="font-semibold text-base">{item.title}</h1>
                    <p className="text-gray-400">{item.description}</p>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
              {order.status === "ACCEPTED" && (
                <p className="mt-2 text-sm">
                  Making Time: {order.makeTime} minutes
                </p>
              )}
              {order.status === "PENDING" && (
                <div className="mt-2 flex flex-col sm:flex-row items-center gap-2">
                  <label className="block text-gray-400 text-sm mb-1">
                    Making Time (minutes):
                  </label>
                  <input
                    type="number"
                    value={makeTime}
                    onChange={(e) => setMakingTime(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white text-sm"
                  />
                  <button
                    className="p-2 bg-green-600 rounded text-white text-sm mt-2 sm:mt-0"
                    onClick={handleAcceptOrder}
                  >
                    Accept Order
                  </button>
                </div>
              )}
              {order.status === "CANCELLED" && (
                <p className="mt-2 text-sm">Order Cancelled</p>
              )}
              {order.status === "PICKED_UP" && (
                <p className="mt-2 text-sm">Order Delivered</p>
              )}
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default OrderItem;
