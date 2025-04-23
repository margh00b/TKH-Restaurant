import React, { useMemo, useState } from "react";
import { IoTime } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";

const OrderItemCollapsed = ({
  order,
  onView,
}: {
  order: any;
  onView: () => void;
}) => {
  const [makeTime, setMakingTime] = useState(10);
  const totalQuantity = useMemo(
    () =>
      order.OrderItem && Array.isArray(order.OrderItem)
        ? order.OrderItem.reduce(
            (total: number, item: { quantity: string }) =>
              total + (parseInt(item.quantity, 10) || 0),
            0
          )
        : 0,
    [order.OrderItem]
  );

  const eta = useMemo(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + makeTime);
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, [makeTime]);

  return (
    <div className="flex flex-col text-lg rounded-2xl items-center h-[70vh]  bg-gray-100 text-white  shadow-2xl">
      <div
        className={
          "flex justify-center rounded-2xl w-full p-5" +
          " " +
          (order.status === "NEW"
            ? "bg-orange-500"
            : order.status === "ACCEPTED"
            ? "bg-[#177a0e]"
            : order.status === "READY"
            ? "bg-[#1a76ff]"
            : "bg-[#af1c1c]")
        }
      >
        <div className="flex flex-col items-center">
          <div className="text-white/75 text-sm">
            {order.status} #{order.id}
          </div>
          <div>{order.name}</div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-full text-black">
        <div className="flex flex-col flex-grow w-full px-5 py-2 items-center bg-white  rounded-t-xl max-h-[30vh] overflow-y-auto">
          {order.OrderItem &&
          Array.isArray(order.OrderItem) &&
          order.OrderItem.length > 0 ? (
            order.OrderItem.map((item: any, index: any) => (
              <div key={index} className="flex w-full justify-between text-xl">
                <p className="text-bold">{item.quantity} x </p>
                <p className="font-semibold truncate max-w-[60%]">
                  {item.MenuItem?.title}
                </p>
                <p>
                  $
                  {(
                    parseFloat(item.MenuItem?.price) *
                    parseInt(item.quantity, 10)
                  ).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p>No items in this order.</p>
          )}
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
