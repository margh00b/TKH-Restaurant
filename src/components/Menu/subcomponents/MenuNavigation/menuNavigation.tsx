"use client";
import { setMenuCategoryState } from "@/redux/features/selectedMenuCategorySlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuNav = ({ categories }: { categories: string[] }) => {
  const dispatch = useDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.menu.menuCategoryState
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="flex justify-around items-center w-full h-20 mb-5 shadow-lg rounded-[17px] text-xl border-2 border-gray-100">
      {/* Mobile: Dropdown for category selection */}
      <div
        className="relative w-full md:hidden flex justify-center"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <button className="px-4 py-2 mx-4 rounded-lg text-orange-500">
          {selectedCategory.replace("_", " ")} ▼
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 mt-14 w-full bg-white shadow-lg rounded-b-lg border-b-4 border-orange-500"
            >
              {categories
                .filter((category) => category !== selectedCategory)
                .map((category) => (
                  <li
                    key={category}
                    onClick={() => {
                      dispatch(setMenuCategoryState(category));
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-gray-700"
                  >
                    {category.replace("_", " ")}
                  </li>
                ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* Desktop: Full category list */}
      <ul className="hidden md:flex px-10 flex-wrap">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(setMenuCategoryState(category));
            }}
            className="flex items-center text-[#a9a9a9] duration-200 cursor-pointer"
          >
            <li
              key={category}
              className={`flex mx-[40px] py-[5px] hover:text-orange-500 ${
                selectedCategory === category ? "text-orange-500" : ""
              }`}
            >
              {category.replace("_", " ")}
            </li>

            <span className=" ">{index < categories.length - 1 && " | "}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default MenuNav;
