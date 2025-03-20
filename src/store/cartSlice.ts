import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}
// load and save cart from local storage
const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ id: action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items); // Save cart to local storage
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items); // Save cart to local storage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart"); // clear cart from local storage
    },
  },

  // 🔴 api logica voor later😊
  // extraReducers: (builder) => {
  //   builder.addCase(fetchCart.fulfilled, (state, action) => {
  //     state.items = action.payload;
  //     saveCartToLocalStorage(action.payload);
  //   });
  // },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
