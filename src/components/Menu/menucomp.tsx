"use client";

import MenuNav from "@/components/Menu/subcomponents/MenuNavigation/menuNavigation";
import { menuCategoryData } from "@/app/dummy/menuCategories.dummy";
import { useAppSelector } from "@/redux/store";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import SkeletonLoader from "../skeletonLoader/skeletonLoader";

const LazyMenuItems = lazy(
  () => import("@/components/Menu/subcomponents/MenuItems/menuItems")
);
const MenuComp = () => {
  const categoryState = useAppSelector((state) => state.menu.menuCategoryState);
  const menuData = useAppSelector((state) => state.menuItems.items);
  return (
    <div id="menu" className="my-10 mx-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-w-[250px]"
      >
        <h1 className="text-center text-4xl mb-5">Our Menu</h1>
        <MenuNav categories={menuCategoryData} />

        <div className="flex flex-wrap justify-evenly p-5  rounded-[30px] bg-[linear-gradient(24deg,var(--tw-gradient-stops))] from-[#2c2c2c] from-50% to-[#554d48]">
          {menuData
            .filter((menuItem) => menuItem.category === categoryState)
            .map((menuItem) => (
              <Suspense fallback={<SkeletonLoader />} key={menuItem.id}>
                <LazyMenuItems key={menuItem.id} menuItem={menuItem} />
              </Suspense>
            ))}
        </div>
      </motion.div>
    </div>
  );
};
export default MenuComp;
