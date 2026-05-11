import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { BaseApi } from "../components/BaseApi";

const store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});
export default store;
