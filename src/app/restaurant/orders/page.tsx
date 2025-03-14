"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getOrders } from "@/redux/features/orderSlice";
import OrderItem from "@/app/restaurant/orders/OrderItem";

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
    <div className="flex flex-col items-center p-10 mt-2">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Orders Overview
        </h1>
            {orders.map((order: any) => (
                <OrderItem
                    key={order.id}
                    order={order}
                  />
            ))}
      </div>
    </div>
  );
};

export default Orders;
