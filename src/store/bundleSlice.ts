import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PokemonBundle } from "../types";
import axios from "axios";

interface BundleState {
  bundles: PokemonBundle[];
  status: "idle" | "loading" | "success" | "error";
}

const initialState: BundleState = {
  bundles: [],
  status: "idle",
};

export const fetchBundles = createAsyncThunk(
  "bundles/fetchBundles",
  async () => {
    const response = await axios.get<PokemonBundle[]>(
      "https://gw2-v1-0-0.onrender.com/api/bundles"
    );
    return response.data;
  }
);

const bundleSlice = createSlice({
  name: "bundles",
  initialState,
  reducers: {
    setBundles: (state, action: PayloadAction<PokemonBundle[]>) => {
      state.bundles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBundles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBundles.fulfilled, (state, action) => {
        state.status = "success";
        state.bundles = action.payload;
      })
      .addCase(fetchBundles.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setBundles } = bundleSlice.actions;
export default bundleSlice.reducer;
