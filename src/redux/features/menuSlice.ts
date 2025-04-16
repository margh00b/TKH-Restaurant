import menuItem from "@/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const addMenuItems = createAsyncThunk(
  "menuItems/addMenuItems",
  async ({ id, title, description, category, price, image }: any) => {
    const res = await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, description, category, price, image }),
    });
    return res.json();
  }
);

export const updateMenuItems = createAsyncThunk(
  "menuItems/updateMenuItems",
  async ({ id, title, description, category, price, image }: any) => {
    const res = await fetch("/api/menu", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, description, category, price, image }),
    });
    return res.json();
  }
);

export const deleteMenuItems = createAsyncThunk(
  "menuItems/deleteMenuItems",
  async (id: number) => {
    const res = await fetch("/api/menu", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    return res.json();
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
    builder.addCase(updateMenuItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(updateMenuItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateMenuItems.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = menuItemsSlice.actions;
export const menuItemReducer = menuItemsSlice.reducer;
