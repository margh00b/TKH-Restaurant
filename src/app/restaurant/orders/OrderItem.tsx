import { updateOrder, getOrders } from "@/redux/features/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const OrderItem = ({order}:{order: any}) => {
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
    <div className="flex flex-col items-center w-full h-full text-white border-2 border-gray-400">
      <div className="w-full p-5 bg-green-700">
        <div className="text-white/75 text-sm">{order.status} #{order.id}</div>
        <div>{order.name}</div>
      </div>
      <div className="w-full text-black">{JSON.stringify(order)}</div>
    </div>

)};

export default OrderItem;
