"use client";

import CartItems from "@/components/Cart/subcomponents/CartItems/cartItems";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Button from "@/components/Button/button";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { setCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";

const Checkout = () => {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalCost = useMemo(
    () =>
      `$${cartItems
        .reduce(
          (total, item: any) =>
            total + parseFloat(item.price) * parseInt(item.quantity, 10),
          0
        )
        .toFixed(2)}`,
    [cartItems]
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlaceOrder = async () => {
    try {
      if (!cartItems || !name || !phone || !email) {
        throw new Error("Invalid data: Missing cart, name, phone, or email");
      }
      const { data: order, error: orderError } = await supabase
        .from("Order")
        .insert([{ name, phone, email }])
        .select("id")
        .single();
      if (orderError) {
        throw new Error(orderError.message);
      }

      const orderItems = cartItems.map((item) => ({
        menuItemId: item.id,
        quantity: item.quantity,
        price: item.price,
        orderId: order.id,
      }));

      const { error: orderItemsError } = await supabase
        .from("OrderItem")
        .insert(orderItems);

      if (orderItemsError) {
        throw new Error(orderItemsError.message);
      }

      // Clear the cart and reset the form fields after successful order placement
      dispatch(setCart({ items: [], show: false }));
      setName("");
      setPhone("");
      setEmail("");

      // Redirect to the confirmation page with the order ID
      router.push("/customer/confirmation?orderId=" + order.id);
    } catch (error: any) {
      console.error("Error placing order:", error.message || error);
      alert("Failed to place order: " + (error.message || error));
    }
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex justify-center p-10 mt-20">
      <div className="flex flex-col w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            This is a Pick-up Order
          </h1>
          <p className="text-gray-600 mt-2">
            You&apos;ll need to go to Tandoori Kabab Hut to pick up this order.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.847297969018!2d-113.965408!3d51.037441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b1c0749fc23%3A0x8295c036104a165c!2sTandoori%20Kabab%20Hut!5e0!3m2!1sen!2sca!4v1717361487892!5m2!1sen!2sca"
          width="100%"
          height="300"
          className="rounded-lg shadow-md mb-6"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItems key={item.id} item={item} />)
        ) : (
          <h1 className="text-center text-xl font-semibold text-gray-700">
            Your cart is empty
          </h1>
        )}
        <div className="flex justify-between items-center px-4 py-4 mt-6 bg-gray-100 rounded-lg shadow-sm">
          <span className="text-2xl font-bold text-gray-800">Total:</span>
          <span className="text-2xl font-bold text-green-600">{totalCost}</span>
        </div>
        <form className="flex flex-col space-y-4 mt-8">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="border-b-2 p-3 outline-none focus:border-green-500 transition-colors"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border-b-2 p-3 outline-none focus:border-green-500 transition-colors"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border-b-2 p-3 outline-none focus:border-green-500 transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
        <div className="flex justify-center mt-8 w-full py-3 text-xl">
          <Button btnText="Place Order" onClick={handlePlaceOrder} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
