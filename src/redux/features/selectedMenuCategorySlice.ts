import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IMenuCategoryState {
  menuCategoryState: string;
}

const initialState: IMenuCategoryState = {
  menuCategoryState: "CURRIES",
};

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategoryState: (state, action: PayloadAction<string>) => {
      state.menuCategoryState = action.payload;
    },
  },
});

export const { setMenuCategoryState } = menuCategorySlice.actions;
export const menuCategoryReducer = menuCategorySlice.reducer;
