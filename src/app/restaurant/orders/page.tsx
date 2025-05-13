"use client";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getOrders,
  subscribeToOrderChanges,
} from "@/redux/features/orderSlice";
import OrderItem from "@/app/restaurant/orders/OrderItem";
import OrderItemCollapsed from "./OrderItemCollapsed";
import OrdersNav from "@/components/Ordersnavigation/ordersnav";
import { supabase } from "@/utils/supabaseClient";
import useSound from "use-sound";

const Orders = () => {
  const dispatch = useAppDispatch();
  const [visibleOrder, setVisibleOrder] = useState<number | null>(null);
  const orders = useAppSelector((state) => state.orders.orders);
  const [play] = useSound("/notification.mp3", { volume: 0.25 });

  const categoryState = useAppSelector(
    (state) => state.orderCategory.orderCategoryState
  );

  const toggleVisibility = (id: number) => {
    setVisibleOrder((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    dispatch(getOrders());
    const subscription = subscribeToOrderChanges(dispatch);

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [dispatch]);

  const prevOrderIdsRef = useRef<number[]>([]);

  useEffect(() => {
    const currentIds = orders.map((order) => order.id);
    const prevIds = prevOrderIdsRef.current;

    const newOrders = currentIds.filter((id) => !prevIds.includes(id));

    prevOrderIdsRef.current = currentIds;

    if (newOrders.length > 0) {
      let count = 0;
      const intervalRef = setInterval(() => {
        play();
        count++;
        if (count === 4) {
          clearInterval(intervalRef);
        }
      }, 2200);
      return () => clearInterval(intervalRef);
    }
  }, [orders, play]);

  return (
    <div
      className={`flex flex-col min-h-screen px-10 mt-2 ${
        visibleOrder === null ? "" : "justify-center"
      }`}
    >
      <div className="w-full">
        {visibleOrder === null ? <OrdersNav /> : null}
        {visibleOrder === null ? (
          <div className="grid grid-cols-3 gap-4 flex-1">
            {orders
              .filter((order) => order.status === categoryState)
              .sort((a, b) => b.id - a.id)
              .map((order: any) => (
                <OrderItemCollapsed
                  key={order.id}
                  order={order}
                  onView={() => toggleVisibility(order.id)}
                />
              ))}
          </div>
        ) : (
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
