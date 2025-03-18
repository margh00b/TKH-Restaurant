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
    "NEW" | "ACCEPTED" | "PICKED_UP" | "CANCELLED",
    string
  > = {
    NEW: "New Orders",
    ACCEPTED: "In Progress",
    PICKED_UP: "Completed",
    CANCELLED: "Cancelled",
  };

  const categories = Object.keys(categoryMap) as Array<
    keyof typeof categoryMap
  >;

  return (
    <div className="flex justify-around items-center w-full h-20 px-4 mb-5 shadow-lg rounded-[17px] text-xl border-2 border-gray-100">
      <ul className="hidden md:flex px-10 flex-wrap">
        {categories.map((category) => {
          const orderCount = orders.filter(
            (order) => order.status === category
          ).length;
          return (
            <div
              key={category}
              onClick={() => {
                dispatch(setOrderCategoryState(category));
              }}
              className="flex items-center text-[#a9a9a9] duration-200 cursor-pointer"
            >
              <li
                className={`flex mx-[40px] py-[5px] hover:text-orange-500 ${
                  selectedCategory === category ? "text-orange-500" : ""
                }`}
              >
                {categoryMap[category]}
                <IconWithBadge icon={FaShoppingCart} badgeCount={orderCount} />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default OrdersNav;
