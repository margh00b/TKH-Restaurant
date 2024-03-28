"use client";
import { setMenuCategoryState } from "@/redux/features/selectedMenuCategorySlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";

const MenuNav = ({ categories }: { categories: string[] }) => {
  const dispatch = useDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.menu.menuCategoryState,
  );
  return (
    <div className="flex justify-around items-center w-full h-20 px-4 mb-5 shadow-lg rounded-[17px]">
      <ul className="hidden md:flex px-10 flex-wrap">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(setMenuCategoryState(category));
            }}
            className="flex items-center font-bold text-[#a9a9a9] duration-200 cursor-pointer"
          >
            <li
              key={category}
              className={`flex mx-[40px] py-[5px] hover:text-orange-500 ${
                selectedCategory === category ? "text-orange-500" : ""
              }`}
            >
              {category}
            </li>

            <span className=" ">{index < categories.length - 1 && " | "}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default MenuNav;
