import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IOrderCategoryState {
  orderCategoryState: string;
}

const initialState: IOrderCategoryState = {
  orderCategoryState: "NEW",
};

export const orderCategorySlice = createSlice({
  name: "orderCategory",
  initialState,
  reducers: {
    setOrderCategoryState: (state, action: PayloadAction<string>) => {
      state.orderCategoryState = action.payload;
    },
  },
});

export const { setOrderCategoryState } = orderCategorySlice.actions;
export const orderCategoryReducer = orderCategorySlice.reducer;
