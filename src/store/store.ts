import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import bundleReducer from "./bundleSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    products: productReducer,
    bundles: bundleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
