import Api from "../../Api/Api";
import { UserRegistrationData } from "../../interfaces/user-interface";
import { userActionTypes } from "../actionTypes/userTypes";

export const register =
  (userData: UserRegistrationData) => async (dispatch: any) => {
    try {
      dispatch({ type: userActionTypes.REGISTER_LOADING });
      console.log("first");
      const response = await Api.post("/register", userData);
      console.log({ response });
      const user = response;
      dispatch({ type: userActionTypes.REGISTER_SUCCESS });
    } catch (error) {
      console.log(error);
      console.log(JSON.stringify(error));
      dispatch({ type: userActionTypes.REGISTER_FAILURE });
    }
  };
