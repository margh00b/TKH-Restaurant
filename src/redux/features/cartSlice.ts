import menuItem from "@/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";

export interface ICartState {
  show: boolean;
  items: menuItem[];
  comingFromConfirmation: boolean;
}
let initialState: ICartState = {
  show: false,
  items: [],
  comingFromConfirmation: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.show = !state.show;
    },

    addItemToCart: (state, action: PayloadAction<menuItem>) => {
		
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else if (state.items[itemIndex]) {
        state.items[itemIndex].quantity =
          (state.items[itemIndex].quantity ?? 0) + 1;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<menuItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        return;
      } else if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else if (state.items[itemIndex]) {
        state.items[itemIndex].quantity =
          (state.items[itemIndex].quantity ?? 0) - 1;
      }
    },
    setCart(state, action) {
      if (action.payload.items && action.payload.show) {
        state.items = action.payload.items;
        state.show = action.payload.show;
      } else {
        state.items = [];
        state.show = false;
      }
    },
    setComingFromConfirmation: (state, action: PayloadAction<boolean>) => {
      state.comingFromConfirmation = action.payload;
    },
  },
});

export const initializeCart = () => (dispatch: any, getState: any) => {
  const savedCart = getCookie("cart");
  console.log("Saved Cart:", savedCart);
  const { comingFromConfirmation } = getState().cart;
  if (savedCart && comingFromConfirmation === false) {
    dispatch(setCart(JSON.parse(savedCart)));
    console.log("Parsed Cart:", JSON.parse(savedCart));
  }
};

export const {
  toggleCart,
  addItemToCart,
  removeItemFromCart,
  setCart,
  setComingFromConfirmation,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
