"use client";

import { setOrderCategoryState } from "@/redux/features/selectedOrderCategorySlice";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import IconWithBadge from "../IconWithBadge";
import { FaShoppingCart } from "react-icons/fa";

const OrdersNav = () => {
  const dispatch = useDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.orderCategory.orderCategoryState
  );
  const orders = useAppSelector((state) => state.orders.orders);

  const categoryMap: Record<
    "NEW" | "ACCEPTED" | /* "READY" |  */"PICKED_UP",
    string
  > = {
    NEW: "New Orders",
    ACCEPTED: "In Progress",
    /* READY: "Ready", */
    PICKED_UP: "Completed",
  };

  const categories = Object.keys(categoryMap) as Array<
    keyof typeof categoryMap
  >;

  return (
    <div className="w-full px-2 py-3">
      <div className="flex w-full rounded-full shadow-md border border-gray-200 overflow-hidden">
        {categories.map((category) => {
          const orderCount = orders.filter(
            (order) => order.status === category
          ).length;

          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => dispatch(setOrderCategoryState(category))}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-all duration-200 
                ${
                  isSelected
                    ? "bg-orange-500 text-white"
                    : "bg-white text-[#7a7a7a]"
                } 
                `}
            >
              <span>{categoryMap[category]}</span>
              <span
                className={`w-6 h-6 text-xs rounded-full flex items-center justify-center font-semibold ${
                  isSelected
                    ? "bg-white text-black"
                    : "bg-gray-200 text-[#7a7a7a]"
                }`}
              >
                {orderCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default OrdersNav;
