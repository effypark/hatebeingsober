import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

const reducer = (state: any, action: PayloadAction<string>) => {
  return combineReducers({
    // [authSlice.name]: authSlice.reducer,
    // [orderSlice.name]: orderSlice.reducer,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
