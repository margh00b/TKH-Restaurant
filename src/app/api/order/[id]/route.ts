import { supabase } from "@/utils/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id: orderId } = params;
  try {
    const { data: order, error } = await supabase
      .from("Order")
      .select("*, OrderItem(id, quantity, MenuItem(id, title, price))")
      .eq("id", orderId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Failed to fetch order:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
