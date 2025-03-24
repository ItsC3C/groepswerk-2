import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types";

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk<
  User,
  Pick<User, "name" | "email" | "password">
>("user/register", async (credentials, { rejectWithValue }) => {
  try {
    const payload = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
    };
    const { data } = await axios.post<User>(
      "https://gw2-v1-0-0.onrender.com/api/register",
      payload
    );
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message ?? err.message);
  }
});

export const loginUser = createAsyncThunk<
  User,
  Pick<User, "email" | "password">
>("user/login", async (credentials, { rejectWithValue }) => {
  try {
    const payload = {
      email: credentials.email,
      password: credentials.password,
    };
    const { data } = await axios.post<User>(
      "https://gw2-v1-0-0.onrender.com/api/login",
      payload
    );
    return data;
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message ?? err.message);
  }
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  localStorage.removeItem("user");
});

export const updateUser = createAsyncThunk<User, Partial<User>>(
  "user/update",
  async (updates, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch<User>(
        "https://gw2-v1-0-0.onrender.com/api/user",
        updates
      );
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message ?? err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload as string;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(payload));
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload as string;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
        state.error = null;
      })

      // UPDATE
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.user = payload;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(payload));
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload as string;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
