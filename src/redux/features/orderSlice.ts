import { supabase } from "@/utils/supabaseClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IOrderState {
  orders: any[];
  loading?: boolean;
}

let initialState: IOrderState = {
  orders: [],
  loading: false,
};

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const { data, error } = await supabase
    .from("Order")
    .select("*, OrderItem(*, MenuItem(*))");
  if (error) throw error;
  return data;
});

export const updateOrder = createAsyncThunk(
  "orders/acceptOrder",
  async ({ id, makeTime, status }: any) => {
    if (!makeTime && !status) {
      throw new Error("Invalid request");
    }

    let data = {};

    if (status) {
      data = { status };
    }

    if (makeTime && status === "ACCEPTED") {
      data = {
        status,
        makeTime: String(makeTime),
      };
    }

    const { data: updatedOrder, error } = await supabase
      .from("Order")
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return updatedOrder;
  }
);

export const getOrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
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

export const {} = getOrdersSlice.actions;
export const ordersReducer = getOrdersSlice.reducer;
