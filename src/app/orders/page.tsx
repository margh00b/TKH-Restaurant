"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getOrders } from "@/redux/features/orderSlice";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  const dispatch = useAppDispatch();
  const [visibleOrder, setVisibleOrder] = useState<number | null>(null);
  const orders = useAppSelector((state) => state.orders.orders);

  const toggleVisibility = (id: number) => {
    setVisibleOrder((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // Group orders by status
  const groupedOrders = orders.reduce((acc: any, order: any) => {
    const status = order.status;
    if (!acc[status]) acc[status] = [];
    acc[status].push(order);
    return acc;
  }, {});

  // Define the order of statuses as per the schema
  const orderedStatuses = ["PENDING", "ACCEPTED", "PICKED_UP", "CANCELLED"];

  return (
    <div className="flex flex-col items-center p-10 mt-20">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Orders Overview
        </h1>

        {orderedStatuses.map(
          (status) =>
            groupedOrders[status] && (
              <div
                key={status}
                className="mb-10 p-6 rounded-lg shadow-lg overflow-x-auto"
                style={{
                  backgroundColor:
                    status === "PENDING"
                      ? "#FFF3CD"
                      : status === "ACCEPTED"
                        ? "#D4EDDA"
                        : status === "PICKED_UP"
                          ? "#CCE5FF"
                          : "#F8D7DA",
                  borderLeft: `8px solid ${
                    status === "PENDING"
                      ? "#FFC107"
                      : status === "ACCEPTED"
                        ? "#28A745"
                        : status === "PICKED_UP"
                          ? "#007BFF"
                          : "#DC3545"
                  }`,
                }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                  {status
                    .replace("_", " ")
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
                  Orders
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Order No.
                        </th>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Full Name
                        </th>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Contact No
                        </th>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Email
                        </th>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Order Status
                        </th>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Order Date
                        </th>
                        <th className="py-3 px-5 text-left border-b border-gray-300">
                          Options
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedOrders[status].map((order: any) => (
                        <OrderItem
                          key={order.id}
                          order={order}
                          visibleOrder={visibleOrder}
                          toggleVisibility={toggleVisibility}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Orders;
