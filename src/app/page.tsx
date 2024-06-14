'use client';

import Menu from "@/app/components/Menu/menu";
import Deals from "@/app/components/Deals/deals";
import Footer from "@/app/components/Footer/footer";
import Hero from "@/app/components/Hero/hero";
import Reviews from "@/app/components/Reviews/reviews";
import Cart from "@/app/components/Cart/cart";
import { useAppSelector } from "@/redux/store";

export default function Home() {
  const showCart = useAppSelector((state) => state.cart.show);

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
