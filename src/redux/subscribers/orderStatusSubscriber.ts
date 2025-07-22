import { sendEmailNotif } from "@/utils/emailService";

export function orderStatusSubscriber(store: any) {
  let previousOrders = store.getState().orders.orders;

  store.subscribe(() => {
    const currentOrders = store.getState().orders.orders;

    currentOrders.forEach((order: any) => {
      const previousOrder = previousOrders.find((o: any) => o.id === order.id);
      if (previousOrder && previousOrder.status !== order.status) {
        console.log(
          `Order ${order.id} status changed: ${previousOrder.status} → ${order.status}`
        );
        if (order.status === "ACCEPTED" || order.status === "CANCELLED") {
          sendEmailNotif(order);
        }
      }
    });
    previousOrders = [...currentOrders];
  });
}
