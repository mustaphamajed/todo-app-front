import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
export default store;
