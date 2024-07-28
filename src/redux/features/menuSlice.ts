import menuItem from "@/app/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMenuState {
	items: menuItem[];
	loading?: boolean;
}

let initialState: IMenuState = {
	items: [],
	loading: false,
};

export const getMenuItems = createAsyncThunk("menuItems/getMenuItems", async () => {
	const response = await fetch("/menu/api");
	return response.json();
});

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
