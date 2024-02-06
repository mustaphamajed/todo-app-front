import { UserState } from "../../interfaces/user-interface";
import { REGISTER_LOADING, UserActionTypes } from "../actionTypes/userTypes";

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
    default:
      return state;
  }
};
