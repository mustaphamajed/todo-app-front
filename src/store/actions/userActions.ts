import Api from "../../Api/Api";
import {
  LoginFormData,
  UserRegistrationData,
} from "../../interfaces/user-interface";
import { showToast } from "../../utils/helpers";
import { STORAGE, getData, storeData } from "../../utils/storage";
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
      const user = response.data.user;
      const token = response.data.token;
      dispatch({ type: userActionTypes.LOGIN_SUCCESS, payload: { user } });
      await storeData(STORAGE.accessToken, token);

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