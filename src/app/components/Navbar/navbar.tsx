"use client";
import Link from "next/link";
import LinkItem from "@/app/components/Navbar/navbarLinks.interface";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ links }: { links: LinkItem[] }) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="absolute top-0 flex justify-around text-2xl items-center w-full h-20 px-4 shadow-lg">
      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-black border-b-2 border-transparent hover:border-b-2 hover:border-orange-500 hover:text-orange-500 duration-200"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden duration-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-300"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Navbar;
