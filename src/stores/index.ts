import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./features";

export const store = () =>
  configureStore({
    reducer: {
      todo: todoListReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
