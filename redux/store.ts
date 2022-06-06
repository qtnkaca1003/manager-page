import { configureStore } from "@reduxjs/toolkit";
import { changeSlice } from "./slices/changeTemplateSlice";
import { productSlice } from "./slices/productSlices";
import { userSlice } from "./slices/userSlices";
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    users: userSlice.reducer,
    addToken: userSlice.reducer,
    change: changeSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
