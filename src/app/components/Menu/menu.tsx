"use client";
import MenuItems from "@/app/components/Menu/subcomponents/MenuItems/menuItems";
import MenuNav from "@/app/components/Menu/subcomponents/MenuNavigation/menuNavigation";
import { menuCategoryData } from "@/app/dummy/menuCategories.dummy";
import { useAppSelector } from "@/redux/store";
const Menu = () => {
  const categoryState = useAppSelector((state) => state.menu.menuCategoryState);
  const menuData = useAppSelector((state) => state.menuItems.items);
  return (
    <div className="m-10">
      <h1 className="text-center text-4xl mb-5">Our Menu</h1>
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
