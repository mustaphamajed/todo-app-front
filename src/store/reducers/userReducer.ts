import { UserState } from "../../interfaces/user-interface";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  UserActionTypes,
} from "../actionTypes/userTypes";

const initialState = {
  loadingRegister: false,
  loadingLogin: false,
  user: null,
  error: null,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case REGISTER_LOADING:
      return { ...state, loadingRegister: true };
    case REGISTER_SUCCESS:
      return { ...state, loadingRegister: false, user: action.payload };
    case REGISTER_FAILURE:
      return {
        ...state,
        loadingRegister: false,
      };
    case LOGIN_LOADING:
      return { ...state, loadingLogin: true };
    case LOGIN_SUCCESS:
      return { ...state, loadingLogin: false };
    case LOGIN_FAILURE:
      return {
        ...state,
        loadingLogin: false,
      };
    default:
      return state;
  }
};
