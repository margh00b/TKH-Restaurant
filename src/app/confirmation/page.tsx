"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import Button from "@/app/components/Button/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import OrderItem from "@/app/components/OrderItem";
import { getOrders } from "@/redux/features/orderSlice";

const OrderConfirmation = () => {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center p-10 mt-20">
      <div className={`flex flex-col top-20 bg-white p-4 w-2/3`}>
        <div className={`text-center`}>
          <h1 className="text-3xl font-bold">Order Confirmation</h1>
          <p className={`mx-10 my-5 text-lg`}>
            Thank you for your order! Your order has been successfully placed
          </p>
          <p className="mb-5 text-2xl text-orange-500">
            You will receive an email confirmation shortly
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.847297969018!2d-113.965408!3d51.037441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b1c0749fc23%3A0x8295c036104a165c!2sTandoori%20Kabab%20Hut!5e0!3m2!1sen!2sca!4v1717361487892!5m2!1sen!2sca"
          width="100%"
          height="200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          {/*Display order items like this pleasseeeee
          item      x(quantity)
          item      x(quantity)
          item      x(quantity)

          Total: {totalCost}
          */}
          <div className="flex justify-between px-4 py-2 mt-4 bg-gray-100">
            <span className="text-xl font-bold">Total:</span>
          </div>
        </div>
        <div className="flex justify-center my-6">
          <Button btnText="Return to Homepage" onClick={handleReturn} />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
