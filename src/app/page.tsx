"use client";

import MenuComp from "@/components/Menu/menucomp";
import Deals from "@/components/Deals/deals";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/hero";
import Reviews from "@/components/Reviews/reviews";
import Cart from "@/components/Cart/cart";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { getMenuItems } from "@/redux/features/menuSlice";
import Navbar from "@/components/Navbar/navbar";
import { navbarLinks } from "@/components/Navbar/navbarLinks";
import { initializeCart } from "@/redux/features/cartSlice";

export default function Home() {
  const showCart = useAppSelector((state) => state.cart.show);
  const dispatch = useAppDispatch();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    }
  }, [initialRender]);

  useEffect(() => {
    dispatch(getMenuItems());
    dispatch(initializeCart());
    console.log("initializeCart dispatched");
  }, []);

  return (
    !initialRender && (
      <main>
        {showCart && <Cart />}
        <div className={``}>
          <Navbar links={navbarLinks} />
          <Hero />
          <Deals />
          <MenuComp />
          <Reviews />
          <Footer />
        </div>
      </main>
    )
  );
}
