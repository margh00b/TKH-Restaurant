"use client";
import Link from "next/link";
import LinkItem from "@/components/Navbar/navbarLinks.interface";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleCart } from "@/redux/features/cartSlice";
import IconWithBadge from "../IconWithBadge";
import { motion } from "framer-motion";
import { useHandleReturn } from "@/utils/useHandleReturn";
import { useRouter } from "next/router";

const Navbar = ({
  links,
  showCart = true,
}: {
  links: LinkItem[];
  showCart?: boolean;
}) => {
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cartOpen = useAppSelector((state) => state.cart.show);
  const cartItems = useAppSelector((state) => state.cart.items);
  const handleReturn = useHandleReturn();

  const totalCartItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <nav
      className={` fixed ${
        cartOpen ? "bg-white text-black" : "hero text-white"
      } z-[99] top-0 w-full h-20  px-6 flex items-center justify-between`}
    >
      {/* 📱 Mobile Menu Button */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className={`md:hidden ${
          navOpen ? "text-white" : "text-orange-500"
        } duration-300 z-50`}
      >
        {navOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* 🖥️ Desktop Navigation (Centered) */}
      <ul className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-medium">
        {links.map(({ id, link, name }) => (
          <li key={id} className="relative group">
            <Link
              href={link}
              onClick={handleReturn}
              className=" hover:text-orange-500 duration-200"
            >
              {name}
            </Link>
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      {/* 🛒 Cart Icon (Right Side) */}
      {showCart && (
        <motion.button
          className="cursor-pointer bg-orange-500 text-white px-4 pt-3 pb-1 rounded-full shadow-lg  hover:bg-orange-600 transition-all"
          onClick={() => dispatch(toggleCart())}
          animate={{ x: totalCartItems > 0 ? [0, -1, 1, -1, 1, 0] : 0 }}
          transition={{
            repeat: totalCartItems > 0 ? Infinity : 0,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <IconWithBadge icon={FaShoppingCart} badgeCount={totalCartItems} />
        </motion.button>
      )}

      {/* 📱 Mobile Navigation Menu */}
      {navOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-orange-500 to-orange-700 text-white flex flex-col items-center justify-center">
          <ul className="text-3xl space-y-6">
            {links.map(({ id, link, name }) => (
              <li key={id} className="hover:scale-110 duration-300">
                <Link href={link} onClick={() => setNavOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
