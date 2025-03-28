import { updateOrder, getOrders } from "@/redux/features/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { IoTime } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import Button from "@/components/Button/button";

const OrderItemCollapsed = ({
  order,
  onView,
}: {
  order: any;
  onView: () => void;
}) => {
  const dispatch = useAppDispatch();

  const [makeTime, setMakingTime] = useState(10);
  const totalQuantity = useMemo(
    () =>
      order.items.reduce(
        (total: any, item: any) => total + parseInt(item.quantity, 10),
        0
      ),
    [order.items]
  );

  const eta = useMemo(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + makeTime);
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, [makeTime]);

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
    <div className="flex flex-col text-lg rounded-2xl items-center h-[80vh]  bg-gray-100 text-white  shadow-2xl">
      <div className="flex justify-center rounded-2xl w-full p-5 bg-[#084a00]">
        <div className="flex flex-col items-center">
          <div className="text-white/75 text-sm">
            {order.status} #{order.id}
          </div>
          <div>{order.name}</div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full text-black">
        <div className="flex flex-col flex-grow w-full px-5 py-2 items-center bg-white  rounded-t-xl max-h-[30vh] overflow-y-auto">
          {order.items.map((item: any, index: any) => (
            <div key={index} className="flex w-full justify-between text-xl">
              <p className="text-bold">{item.quantity} x </p>
              <p className="font-semibold">{item.title}</p>
              <p>
                $
                {(parseFloat(item.price) * parseInt(item.quantity, 10)).toFixed(
                  2
                )}
              </p>
            </div>
          ))}
        </div>
        <hr className="h-0.5 border-t-0 bg-gray-300" />
        <div className="flex flex-col flex-grow w-full px-5 py-2 bg-white">
          <p className="flex items-center gap-2">
            <IoTime />
            Pickup at {eta}
          </p>
          <p className="flex items-center gap-2">
            <FaBowlFood />
            {totalQuantity} items
          </p>
          <p className="flex items-center gap-2">
            <FaUtensils />
            Include utensils
          </p>
        </div>
      </div>
      <hr className="h-0.5 border-t-0 bg-gray-300" />
      <div className="flex justify-center  rounded-b-xl w-full p-5 bg-white">
        <button
          onClick={onView}
          className="place-self-center shadow-lg bg-gray-300 text-black text-lg w-4/5 py-2 px-5 rounded-2xl"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default OrderItemCollapsed;
