import { updateOrder, getOrders } from "@/redux/features/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useMemo, useState } from "react";
import { IoTime } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import { statusColorMap } from "@/utils/statusColors";

const OrderItem = ({ order, onClose }: { order: any; onClose: () => void }) => {
  const dispatch = useAppDispatch();
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

  const estimatedPickupTime = useMemo(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + makeTime);
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, [makeTime]);

  const handleUpdateStatus = async (status: string) => {
    await dispatch(updateOrder({ id: order.id, status, makeTime }));
    await dispatch(getOrders());
  };

  return (
    <div className="flex flex-col text-lg rounded-2xl items-center w-full h-full bg-gray-100 text-white shadow-2xl">
      <div
        className={`flex items-center justify-between rounded-2xl w-full p-5 ${
          statusColorMap[order.status] || "bg-gray-300"
        }`}
      >
        <button
          onClick={onClose}
          className=" bg-gray-700/70  text-white rounded-full h-8 w-8 flex items-center justify-center"
        >
          ✖
        </button>
        <div
          className={
            order.status !== "NEW" ? "flex-1 text-center" : "text-center"
          }
        >
          <div className="text-white/75 text-sm">
            {order.status} #{order.id}
          </div>
          <div>{order.name}</div>
        </div>
        {order.status !== "NEW" ? <div className="w-8"></div> : null}

        {order.status === "NEW" && (
          <div className={`flex items-center `}>
            <button
              onClick={() => setMakingTime((prevTime) => prevTime - 5)}
              className="h-10 w-10 flex items-center justify-center bg-white/30 shadow-xl rounded-full text-lg"
            >
              -5
            </button>
            <div className="flex flex-col items-center mx-2">
              <h1>Ready in</h1>
              <h1 className={`mx-2`}>{makeTime} mins</h1>
            </div>
            <button
              onClick={() => setMakingTime((prevTime) => prevTime + 5)}
              className="h-10 w-10 flex items-center justify-center bg-white/30 shadow-xl rounded-full text-lg"
            >
              +5
            </button>
          </div>
        )}
      </div>

      <div className="flex w-full text-black">
        <div className="flex flex-col w-[60%] px-5 py-2 shadow-lg items-center bg-white rounded-xl">
          {order.OrderItem?.map((item: any, index: any) => (
            <div key={index} className="flex w-full justify-between text-xl">
              <p className="text-bold">{item.quantity} x </p>
              <p className="font-semibold">{item.MenuItem?.title}</p>
              <p>
                $
                {(
                  parseFloat(item.MenuItem?.price) * parseInt(item.quantity, 10)
                ).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[40%] ml-5">
          <div className="px-5 py-2 shadow-lg mb-5  bg-white rounded-xl">
            <p className="flex items-center gap-2">
              <IoTime />
              Pickup at {estimatedPickupTime}
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
          <div className="px-5 py-2 shadow-lg bg-white rounded-xl">
            <p className="font-bold">Customer</p>
            <p>{order.name}</p>
            <p>{order.phone}</p>
          </div>
        </div>
      </div>

      {order.status !== "PICKED_UP" && (
        <div className="flex justify-between rounded-2xl w-full p-5 bg-white  mt-2">
          {order.status !== "READY" && (
            <button
              onClick={() => handleUpdateStatus("CANCELLED")}
              className="place-self-center shadow-lg border-gray-600 border-2 text-gray-600 bg-gray-100 text-lg py-2 px-6 rounded-2xl"
            >
              Cancel
            </button>
          )}

          {order.status === "ACCEPTED" && (
            <button
              onClick={() => handleUpdateStatus("READY")}
              className="place-self-center shadow-lg border-green-600 border-2 text-green-600 bg-green-100 text-lg py-2 px-6 rounded-2xl"
            >
              Ready for pickup
            </button>
          )}
          {order.status === "NEW" && (
            <button
              onClick={() => handleUpdateStatus("ACCEPTED")}
              className="place-self-center shadow-lg border-green-600 border-2 text-green-600 bg-green-100 text-lg py-2 px-6 rounded-2xl"
            >
              Confirm Order
            </button>
          )}
          {order.status === "READY" && (
            <button
              onClick={() => handleUpdateStatus("PICKED_UP")}
              className="place-self-end shadow-lg border-green-600 border-2 text-green-600 bg-green-100 text-lg py-2 px-6 rounded-2xl "
            >
              Picked Up
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderItem;
