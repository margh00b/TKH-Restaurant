import { supabase } from "@/utils/supabaseClient";
import { desc } from "framer-motion/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("MenuItem").select("*");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const { id, title, description, category, price, image } = await req.json();
  try {
    const { data, error } = await supabase
      .from("MenuItem")
      .insert({
        title: title,
        description: description,
        category: category,
        price: price,
        image: image,
      })
      .select()
      .single();
    if (error) throw new Error(error.message);
    return NextResponse.json({
      message: "Item added successfully",
      data,
    });
  } catch (error: any) {
    console.error("❌ Menu item sending failed:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { id, title, description, category, price, image } = await req.json();
  try {
    const { data, error } = await supabase
      .from("MenuItem")
      .update({
        title,
        description,
        category,
        price,
        image,
      })
      .eq("id", id)
      .select();

    if (error) throw new Error(error.message);
    return NextResponse.json({
      message: "Item updated successfully",
      data,
    });
  } catch (error: any) {
    console.error("❌ Update failed:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const { data, error } = await supabase
    .from("MenuItem")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return NextResponse.json({
    message: `Item with id: ${id} deleted successfully!`,
    data,
  });
}
