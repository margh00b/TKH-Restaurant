import { supabase } from "@/utils/supabaseClient";
import router from "next/router";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, cartItems } = body;
    if (!cartItems || !name || !phone || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const { data: order, error: orderError } = await supabase
      .from("Order")
      .insert([{ name, phone, email }])
      .select("id")
      .single();
    if (orderError) {
      throw new Error(orderError.message);
    }

    const orderItems = cartItems.map((item: any) => ({
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

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error: any) {
    console.error("Error placing order:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
