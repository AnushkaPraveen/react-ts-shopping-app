import { configureStore,combineReducers } from '@reduxjs/toolkit';

import productSlice from './slices/productSlice';
import commonSlice from './slices/commonSlice';
// Combine your reducers
const rootReducer = combineReducers({
    product: productSlice.reducer,
    common: commonSlice.reducer,
    // Add more reducers if you have them
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;