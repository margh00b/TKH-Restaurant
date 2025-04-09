import menuItem from "@/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import type { PayloadAction } from "@reduxjs/toolkit";
import { supabase } from "@/utils/supabaseClient";

export interface IMenuState {
  items: menuItem[];
  loading?: boolean;
}

let initialState: IMenuState = {
  items: [],
  loading: false,
};

export const getMenuItems = createAsyncThunk(
  "menuItems/getMenuItems",
  async () => {
    const res = await fetch("/api/menu");
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch menu");
    return json.data;
  }
);

export const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenuItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(getMenuItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMenuItems.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = menuItemsSlice.actions;
export const menuItemReducer = menuItemsSlice.reducer;
