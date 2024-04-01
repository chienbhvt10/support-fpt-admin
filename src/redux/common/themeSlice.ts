import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  primary: string;
}

const initialState: ThemeState = {
  primary: "#001628",
};

const themeSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      state.primary = action.payload.primary;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
