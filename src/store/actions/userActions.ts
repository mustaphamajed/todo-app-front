import api from "../../Api/api";
import { UserRegistrationData } from "../../interfaces/user-interface";
import { userActionTypes } from "../actionTypes/userTypes";

export const register =
  (userData: UserRegistrationData) => async (dispatch: any) => {
    try {
      dispatch(userActionTypes.REGISTER_LOADING);

      const response = await api.post("/register", userData);

      const user = response;
      console.log(user);
      dispatch({ type: userActionTypes.REGISTER_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: userActionTypes.REGISTER_FAILURE });
    }
  };
