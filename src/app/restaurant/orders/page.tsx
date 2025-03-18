"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getOrders } from "@/redux/features/orderSlice";
import OrderItem from "@/app/restaurant/orders/OrderItem";
import OrderItemCollapsed from "./OrderItemCollapsed";

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

  return (
    <div className="flex flex-col min-h-screen p-10 mt-2">
      <div className="w-full">
        <h1 className="self-center text-3xl font-bold text-gray-800 mb-5">
          Orders Overview
        </h1>

        {visibleOrder === null ? (
          // Show collapsed grid of all orders
          <div className="grid grid-cols-3 gap-4 flex-1">
            {orders.map((order: any) => (
              <OrderItemCollapsed
                key={order.id}
                order={order}
                onView={() => toggleVisibility(order.id)}
              />
            ))}
          </div>
        ) : (
          // Show expanded order details
          <OrderItem
            order={orders.find((o) => o.id === visibleOrder)}
            onClose={() => setVisibleOrder(null)}
          />
        )}
      </div>
    </div>
  );
};
export default Orders;
