import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { supabase } from "@/utils/supabaseClient";

export async function POST(request: any) {
  const { username, password } = await request.json();
  const { data: user, error } = await supabase
    .from("User")
    .select("*")
    .eq("username", username)
    .single();

  if (error || !user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  if (user) {
    const isVerified = await compare(password, user.password);
    if (isVerified) {
      let response = NextResponse.json(
        { message: "Logged in" },
        { status: 200 }
      );

      const token = jwt.sign({ username }, process.env.JWT_SECRET ?? "");

      response.cookies.set({
        name: "token",
        value: token,
        httpOnly: true,
        sameSite: "lax",
      });

      return response;
    }
  }
  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
