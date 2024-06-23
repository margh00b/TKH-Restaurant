"use client";
import MenuItems from "@/app/components/Menu/subcomponents/MenuItems/menuItems";
import { menuData } from "@/app/dummy/menu.dummy";
import { ordersData } from "@/app/dummy/orders.dummy";
import Image from "next/image";
import Button from "@/app/components/Button/button";
import { addItemToCart } from "@/redux/features/cartSlice";
import React, { useState } from "react";

const Orders = () => {
  const [visibleOrder, setVisibleOrder] = useState<number | null>(null);
  const [makingTime, setMakingTime] = useState<{ [key: number]: string }>({});
  const [orders, setOrders] = useState(ordersData);

  const toggleVisibility = (orderNo: number) => {
    setVisibleOrder((prev) => (prev === orderNo ? null : orderNo));
  };

  const handleMakingTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    orderNo: number,
  ) => {
    setMakingTime({ ...makingTime, [orderNo]: event.target.value });
  };

  const handleAcceptOrder = (orderNo: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderNo === orderNo
          ? {
              ...order,
              orderStatus: "Accepted",
              makingTime: makingTime[orderNo],
            }
          : order,
      ),
    );
    setVisibleOrder(null); // Hide the details after accepting the order
    setMakingTime((prev) => ({ ...prev, [orderNo]: "" })); // Clear the making time input
  };

  return (
    <div className={`flex justify-center p-10 mt-20`}>
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-5">New Orders</h1>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Order No.</th>
              <th className="py-2 px-4 border-b border-gray-200">Full Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Contact No</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Order Status
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Order Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Options</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.orderNo}>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {order.orderNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {order.fullName}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {order.contactNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {order.email}
                  </td>
                  <td
                    className={`py-2 px-4 border-b border-gray-200 ${
                      order.orderStatus === "Pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {order.orderStatus}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {order.orderDate}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => toggleVisibility(order.orderNo)}
                    >
                      View
                    </button>
                    <button className="text-red-600 hover:underline ml-2">
                      Cancel
                    </button>
                  </td>
                </tr>
                {visibleOrder === order.orderNo && (
                  <tr>
                    <td colSpan={7} className="border-b border-gray-200">
                      <div className="p-5 bg-gray-800 text-white transition-opacity duration-500">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex mb-3">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={70}
                              height={70}
                              className="object-contain h-[100%]"
                            />
                            <div className="flex flex-col justify-center min-w-[300px] mx-5">
                              <h1 className="text-xl">{item.title}</h1>
                            </div>
                          </div>
                        ))}
                        {order.orderStatus === "Accepted" && (
                          <p className="text-lg mt-2">
                            Making Time: {order.makingTime} minutes
                          </p>
                        )}
                        {order.orderStatus === "Pending" && (
                          <div className="mt-5">
                            <label className="block text-gray-400 mb-2">
                              Making Time (minutes):
                            </label>
                            <input
                              type="number"
                              value={makingTime[order.orderNo] || ""}
                              onChange={(e) =>
                                handleMakingTimeChange(e, order.orderNo)
                              }
                              className="p-2 rounded bg-gray-700 text-white"
                            />
                            <button
                              className="ml-4 p-2 bg-green-600 rounded text-white"
                              onClick={() => handleAcceptOrder(order.orderNo)}
                            >
                              Accept Order
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
