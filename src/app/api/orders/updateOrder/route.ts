import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";
export async function PUT(req: Request) {
  const { id, makeTime, status } = await req.json();
  try {
    if (!makeTime && !status) {
      throw new Error("Invalid request");
    }

    let sendData = {};

    if (status) {
      sendData = { status };
    }

    if (makeTime && status === "ACCEPTED") {
      sendData = {
        status,
        makeTime: String(makeTime),
      };
    }
    const { data: updatedOrder, error } = await supabase
      .from("Order")
      .update(sendData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(updatedOrder);
  } catch (error: any) {
    return NextResponse.error();
  }
}
