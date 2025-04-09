import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("Order")
      .select("*, OrderItem(*, MenuItem(*))");
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
