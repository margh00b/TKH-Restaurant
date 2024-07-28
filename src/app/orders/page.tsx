"use client";
import MenuItems from "@/app/components/Menu/subcomponents/MenuItems/menuItems";
import { menuData } from "@/app/dummy/menu.dummy";
import { ordersData } from "@/app/dummy/orders.dummy";
import Image from "next/image";
import Button from "@/app/components/Button/button";
import { addItemToCart } from "@/redux/features/cartSlice";
import React, { useEffect, useState } from "react";
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

  useEffect(()=>{
    dispatch(getOrders())
  }, [dispatch])

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
            {orders.map((order : any) => (
              <OrderItem
                key={order.orderNo}
                order={order}
                visibleOrder={visibleOrder}
                toggleVisibility={toggleVisibility}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
