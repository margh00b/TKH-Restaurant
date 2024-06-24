import { Middleware } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart, toggleCart } from '../features/cartSlice';
import { setCookie } from 'cookies-next';

const localStorageMiddleware : Middleware = (storeAPI) => (next) => (action : any) => {
  const result = next(action);

  const actionsToWatch = [addItemToCart.type, removeItemFromCart.type, toggleCart.type];

  if (actionsToWatch.includes(action.type)) {
    const state = storeAPI.getState();
    setCookie('cart', JSON.stringify(state.cart), {
      maxAge: 30 * 24 * 60 * 60,
    });
  }

  return result;
};

export default localStorageMiddleware;
