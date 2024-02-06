import { UserState } from "../../interfaces/user-interface";
import {
  REGISTER_FAILURE,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  UserActionTypes,
} from "../actionTypes/userTypes";

const initialState = {
  loadingRegister: false,
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
        error: { error: action.payload.error, message: action.payload.message },
      };
    default:
      return state;
  }
};
