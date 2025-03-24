import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  items: string[];
}

const loadWishlistFromLocalStorage = (): string[] => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const saveWishlistToLocalStorage = (wishlist: string[]) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const initialState: WishlistState = {
  items: loadWishlistFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<string>) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        saveWishlistToLocalStorage(state.items);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((id) => id !== action.payload);
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
