import { LoginRequest } from "@/types/auth.type";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthSliceState {
  isAuthenticated: boolean;
  isInitialized: boolean;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  isInitialized: false,
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async (loginData: LoginRequest, thunkAPI: any) => {
    try {
    } catch (error: any) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const authSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<AuthSliceState>) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isInitialized = action.payload.isInitialized;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        if (action.payload.token) {
        } else {
        }
      })
      .addCase(userLogin.rejected, () => {});
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
