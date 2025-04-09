import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("newOrderId");
    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }
    const { data: relatedOrderData, error } = await supabase
      .from("OrderItem")
      .select("*, MenuItem(*)")
      .eq("orderId", orderId);

    if (error) {
      console.error("Error fetching related order items: ", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(relatedOrderData);
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
