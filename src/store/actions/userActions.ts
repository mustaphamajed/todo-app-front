import Api from "../../Api/Api";
import {
  LoginFormData,
  UserRegistrationData,
} from "../../interfaces/user-interface";
import { showToast } from "../../utils/helpers";
import { userActionTypes } from "../actionTypes/userTypes";

export const register =
  (userData: UserRegistrationData, callback: () => void) =>
  async (dispatch: any) => {
    try {
      dispatch({ type: userActionTypes.REGISTER_LOADING });
      const response = await Api.post("/register", userData);
      const user = response.data.user;
      dispatch({ type: userActionTypes.REGISTER_SUCCESS, payload: { user } });
      callback();
    } catch (error) {
      dispatch({
        type: userActionTypes.REGISTER_FAILURE,
      });
      showToast(
        "error",
        error.response.data.message,
        error.response.data.error
      );
    }
  };

export const login =
  (userData: LoginFormData, callback: () => void) => async (dispatch: any) => {
    try {
      dispatch({ type: userActionTypes.LOGIN_LOADING });
      const response = await Api.post("/login", userData);
      console.log({ response });
      const user = response.data.user;
      dispatch({ type: userActionTypes.LOGIN_SUCCESS, payload: { user } });
      callback();
    } catch (error) {
      dispatch({
        type: userActionTypes.LOGIN_FAILURE,
      });
      showToast(
        "error",
        error.response.data.message,
        error.response.data.error
      );
    }
  };
