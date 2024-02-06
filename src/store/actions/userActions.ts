import Api from "../../Api/Api";
import { UserRegistrationData } from "../../interfaces/user-interface";
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
      showToast(
        "error",
        error.response.data.message,
        error.response.data.error
      );
      dispatch({
        type: userActionTypes.REGISTER_FAILURE,
        payload: {
          message: error.response.data.message,
          error: error.response.data.error,
        },
      });
    }
  };
