import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
import axios from "axios";

export async function POST(request: any) {
  try {
    const { custName, orderId, newStatus, estimatedMakeTime, toEmail } =
      await request.json();
    console.log("Received request:", {
      custName,
      orderId,
      newStatus,
      estimatedMakeTime,
      toEmail,
    });

    const templateParams = {
      customer_name: custName,
      order_id: orderId,
      new_status: newStatus,
      est_makeTime: estimatedMakeTime,
      to_email: toEmail,
      title: "testing from server",
    };

    console.log("Template params:", templateParams);
    const emailData = {
      service_id: process.env.EMAILJS_SERVICE_ID!,
      template_id: process.env.EMAILJS_TEMPLATE_ID!,
      user_id: process.env.EMAILJS_PUBLIC_KEY!,
      template_params: templateParams,
      accessToken: process.env.EMAILJS_ACCESS_TOKEN,
    };
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      emailData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json({
      success: true,
      status: response.status,
      data: response.data,
    });
  } catch (error: any) {
    console.error(`❌ Failed to send email`, error.message);
    return NextResponse.json(
      { error: "Failed to send email", message: error.message },
      { status: 500 }
    );
  }
}
