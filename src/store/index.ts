import {combineReducers, configureStore} from '@reduxjs/toolkit';
import apiSlice from '../services/api.ts';
import {cartReducer} from './slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

export * from './slices/cart.slice';

const reducer = combineReducers({
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {key: 'root', storage: AsyncStorage, whitelist: ['cart']};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
