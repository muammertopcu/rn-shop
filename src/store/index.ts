import {configureStore} from '@reduxjs/toolkit';
import apiSlice from '../services/api.ts';
import {cartReducer} from './slices';

export * from './slices/cart.slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
