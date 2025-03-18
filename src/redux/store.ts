import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { menuCategoryReducer } from "./features/selectedMenuCategorySlice";
import { cartReducer } from "./features/cartSlice";
import { menuItemReducer } from "./features/menuSlice";
import localStorageMiddleware from './middlewares/localStorage';
import { ordersReducer } from "./features/orderSlice";
import { orderCategoryReducer } from "./features/selectedOrderCategorySlice";

export const store = configureStore({
  reducer: { menu: menuCategoryReducer, cart: cartReducer, menuItems: menuItemReducer, orders: ordersReducer, orderCategory: orderCategoryReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
