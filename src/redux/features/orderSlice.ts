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
  const response = await fetch("/orders/api");
  return response.json();
});

export const updateOrder = createAsyncThunk(
  "orders/acceptOrder",
  async ({ id, makeTime, status }: any) => {
    const response = await fetch(`/orders/api`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, makeTime, status }),
    });
    return response.json();
  },
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
