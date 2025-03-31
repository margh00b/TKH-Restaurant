"use client";
import MenuItems from "@/components/Menu/subcomponents/MenuItems/menuItems";
import MenuNav from "@/components/Menu/subcomponents/MenuNavigation/menuNavigation";
import { menuCategoryData } from "@/app/dummy/menuCategories.dummy";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getMenuItems } from "@/redux/features/menuSlice";
import MenuComp from "@/components/Menu/menucomp";
const Menu = () => {
  const categoryState = useAppSelector((state) => state.menu.menuCategoryState);
  const menuData = useAppSelector((state) => state.menuItems.items);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (menuData.length === 0) {
      dispatch(getMenuItems());
    }
  }, [dispatch, menuData.length]);

  return (
    <div className="mt-24">
      <MenuComp />
    </div>
  );
};
export default Menu;
