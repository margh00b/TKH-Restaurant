"use client";
import MenuItems from "@/app/components/Menu/subcomponents/MenuItems/menuItems";
import { menuData } from "@/app/dummy/menu.dummy";
import MenuNav from "@/app/components/Menu/subcomponents/MenuNavigation/menuNavigation";
import { menuCategoryData } from "@/app/dummy/menuCategories.dummy";
import { useAppSelector } from "@/redux/store";
const Menu = () => {
  const categoryState = useAppSelector((state) => state.menu.menuCategoryState);
  return (
    <div className="m-5">
      <MenuNav categories={menuCategoryData} />
      <div className="flex flex-wrap justify-evenly p-5  rounded-[30px] bg-[linear-gradient(24deg,var(--tw-gradient-stops))] from-[#2c2c2c] from-50% to-[#554d48]">
        {menuData
          .filter((menuItem) => menuItem.category === categoryState)
          .map((menuItem) => (
            <MenuItems key={menuItem.id} menuItem={menuItem} />
          ))}
      </div>
    </div>
  );
};
export default Menu;
