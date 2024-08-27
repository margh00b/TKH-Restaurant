"use client";

import Button from "@/app/components/Button/button";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const OrderConfirmation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<any>(null);

  const handleReturn = () => {
    router.push("/");
  };

  const getOrder = useCallback(async () => {
    try {
      const { data: order } = await axios.get(`/orders/api?orderId=${orderId}`);
      setOrder(order);
      console.log(order);
    } catch (error) {
      console.error("Failed to fetch order:", error);
    }
  }, [orderId]);

  const totalCost = useMemo(() => {
    if (!order || !order.items) return `$0.00`;
    return `$${order.items.reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2)}`;
  }, [order]);

  useEffect(() => {
    if (!orderId) {
      router.push("/");
    } else {
      getOrder();
    }
  }, [orderId, router, getOrder]);

  return (
    <div className="flex justify-center p-10 mt-20">
      <div className="flex flex-col top-20 bg-white p-4 w-2/3">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Order Confirmation</h1>
          <p className="mx-10 my-5 text-lg">
            Thank you for your order! Your order has been successfully placed.
          </p>
          <p className="mb-5 text-2xl text-orange-500">
            You will receive an email confirmation shortly.
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-4">
            {order?.items?.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Unit Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-4 py-4 mt-8 bg-gray-100 rounded-lg shadow-md">
            <span className="text-xl font-bold text-gray-800">Total Cost:</span>
            <span className="text-xl font-bold">{totalCost}</span>
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
