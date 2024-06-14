import menuItem from "@/app/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  show: boolean;
  items: menuItem[];
}

const initialState: ICartState = {
  show: false,
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
	toggleCart: (state) => {
		state.show = !state.show;
	},
	addItemToCart: (state, action: PayloadAction<menuItem>) => {
		// check if item already exists in cart and increment quantity
		const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
		if (itemIndex === -1) {
			state.items.push({...action.payload, quantity: 1});
		} else if(state.items[itemIndex]) {
			state.items[itemIndex].quantity = (state.items[itemIndex].quantity ?? 0) + 1;
		}
	},
	removeItemFromCart: (state, action: PayloadAction<menuItem>) => {
		// check if item already exists in cart and decrement quantity
		const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
		if (itemIndex === -1) {
			return;
		} else if(state.items[itemIndex].quantity === 1) {
			state.items.splice(itemIndex, 1);
		} else if(state.items[itemIndex]) {
			state.items[itemIndex].quantity = (state.items[itemIndex].quantity ?? 0) - 1;
		}
	},
  },
});

export const { toggleCart, addItemToCart, removeItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
