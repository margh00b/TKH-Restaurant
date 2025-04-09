import { supabase } from "@/utils/supabaseClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { body } from "framer-motion/client";

export interface IOrderState {
  orders: any[];
  loading?: boolean;
}

let initialState: IOrderState = {
  orders: [],
  loading: false,
};

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const res = await fetch("/api/orders/getOrders");
  if (!res.ok) throw new Error("Faield to fetch Orders!");
  return res.json();
});

export const updateOrder = createAsyncThunk(
  "orders/acceptOrder",
  async ({ id, makeTime, status }: any) => {
    const res = await fetch("/api/orders/updateOrder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, makeTime, status }),
    });
    if (!res.ok) throw new Error("Failed to update order.");
    return res.json();
  }
);

const subscribeToOrders = (dispatch: any) => {
  const subscription = supabase
    .channel("orders-channel")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "Order",
      },
      async (payload) => {
        const newOrder = payload.new;
        const res = await fetch(
          `/api/orders/subscription?newOrderId=${newOrder.id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!res.ok) {
          console.error("Error fetching related order data:", await res.json());
        } else {
          const relatedOrderData = await res.json();
          const fullOrder = { ...newOrder, OrderItem: relatedOrderData };
          dispatch(addOrder(fullOrder));
        }
      }
    )
    .subscribe();

  return subscription;
};

export const getOrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<any>) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.loading = false;
    });
    builder.addCase(getOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrders.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const subscribeToOrderChanges = (dispatch: any) => {
  return subscribeToOrders(dispatch);
};
export const { addOrder } = getOrdersSlice.actions;
export const ordersReducer = getOrdersSlice.reducer;
