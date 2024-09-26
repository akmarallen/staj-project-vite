import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserById, loginUser, logoutUser } from "../services/auth"; // Импорт функций из сервисов

interface AuthState {
  userId: string | null;
  role: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userId: null,
  role: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    const user = await loginUser(credentials);
    return user;
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (userId: string) => {
    const user = await getUserById(userId);
    return user;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await logoutUser();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    clearAuthState(state) {
      state.userId = null;
      state.role = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.id;
        state.role = action.payload.role;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка входа";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userId = action.payload.id;
        state.role = action.payload.role;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userId = null;
        state.role = null;
      });
  },
});

export const { setUserId, setRole, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
