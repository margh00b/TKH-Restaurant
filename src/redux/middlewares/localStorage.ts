import { Middleware } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart, toggleCart } from '../features/cartSlice';

const localStorageMiddleware : Middleware = (storeAPI) => (next) => (action : any) => {
  const result = next(action);

  const actionsToWatch = [addItemToCart.type, removeItemFromCart.type, toggleCart.type];

  if (actionsToWatch.includes(action.type)) {
    const state = storeAPI.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }

  return result;
};

export default localStorageMiddleware;
