"use client";
import CartItems from "@/app/components/Cart/subcomponents/CartItems/cartItems";
import { useAppSelector } from "@/redux/store";
import Button from "@/app/components/Button/button";
import menuItem from "../components/Menu/subcomponents/MenuItems/menuItems.interface";
import { useEffect, useMemo } from "react";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCost = useMemo(() => 
    `$${cartItems.reduce((total, item: any) => 
      total +  parseFloat(item.price.replace('$', '')) * parseInt(item.quantity, 10), 0)}`,
    [cartItems]
  );
  return (
    <div className="flex justify-center p-10 mt-20">
      <div className={`flex flex-col top-20 bg-white p-4 w-2/3`}>
        <div className={`text-center`}>
          <h1 className="text-2xl">This is a Pick-up order</h1>
          <p className={`mx-10 my-5`}>
            You&apos;ll need to go to Tandoori Kabab Hut to pick up this order.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.847297969018!2d-113.965408!3d51.037441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b1c0749fc23%3A0x8295c036104a165c!2sTandoori%20Kabab%20Hut!5e0!3m2!1sen!2sca!4v1717361487892!5m2!1sen!2sca"
          width="100%"
          height="200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
        {cartItems.length === 0 && (
          <h1 className={`text-center pt-5`}>Cart is empty</h1>
        )}
        <div className="flex justify-between px-4 py-2 mt-4 bg-gray-100">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-xl font-bold">{totalCost}</span>
        </div>
        <form className="flex flex-col my-2 py-10 border-t-2 border-gray-200 text-xl">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="border-b-2 p-2 outline-0"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border-b-2 p-2 outline-0"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border-b-2 p-2 outline-0"
            required
          />
        </form>
        <span className={`flex justify-center my-2`}>
          <Button btnText={`Place Order`} />
        </span>
      </div>
    </div>
  );
};
export default Checkout;
