import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { taskReducer } from "./reducers/taskReducer";

const rootReducer = combineReducers({
  userReducer,
  taskReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;
export default store;
