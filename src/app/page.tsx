'use client';

import Menu from "@/app/components/Menu/menu";
import Deals from "@/app/components/Deals/deals";
import Footer from "@/app/components/Footer/footer";
import Hero from "@/app/components/Hero/hero";
import Reviews from "@/app/components/Reviews/reviews";
import Cart from "@/app/components/Cart/cart";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { initializeCart } from "@/redux/features/cartSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state) => state.cart.show);

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  return (
    <main>
      {showCart && <Cart />}
      <div className={``}>
        <Hero />
        <Deals />
        <Menu />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
}
