import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/auth-slice";
import themeSlice from "./common/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export type RootStateApp = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootStateApp,
  unknown,
  Action
>;
