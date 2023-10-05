import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import productSlice from './slices/productSlice';
import commonSlice from './slices/commonSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';

// Combine your reducers
const rootReducer = combineReducers({
  product: productSlice.reducer,
  common: commonSlice.reducer,
  cart: cartSlice.reducer,
  user: userSlice.reducer,
  // Add more reducers if you have them
});

const middleware = [thunk];


export const store = configureStore({
  reducer: rootReducer,
  middleware
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;