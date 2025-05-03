export const sendEmailNotif = async (order: any) => {
  try {
    const response = await fetch(`/restaurant/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        custName: order.name,
        orderId: order.id,
        newStatus: order.status,
        estimatedMakeTime: order.makeTime,
        toEmail: order.email,
      }),
    });

    if (!response.ok) throw new Error("Email failed to send");

    console.log(`✅ Email sent for Order ${order.id}`);
  } catch (error) {
    console.error(`❌ Error sending email for Order ${order.id}`, error);
  }
};
