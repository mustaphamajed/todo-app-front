import Api from "../../Api/Api";
import {
  LoginFormData,
  UserRegistrationData,
} from "../../interfaces/user-interface";
import { showToast } from "../../utils/helpers";
import { STORAGE, deleteData, getData, storeData } from "../../utils/storage";
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

export const fetchCurrentUser = () => async (dispatch: any) => {
  try {
    const token = await getData(STORAGE.accessToken);
    dispatch({ type: userActionTypes.FETCH_USER_LOADING });
    const response = await Api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const user = response.data.user;
    dispatch({ type: userActionTypes.FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    await deleteData(STORAGE.accessToken);
    dispatch({
      type: userActionTypes.FETCH_USER_FAILURE,
    });
    showToast("error", error.response.data.message, error.response.data.error);
  }
};

export const fetchAllUsers = () => async (dispatch: any) => {
  try {
    const token = await getData(STORAGE.accessToken);
    dispatch({ type: userActionTypes.FETCH_USERS_LOADING });
    const response = await Api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const users = response.data.users;
    dispatch({ type: userActionTypes.FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({
      type: userActionTypes.FETCH_USERS_FAILURE,
    });
    showToast("error", "Error Fetching !", "Error fetching users !");
  }
};

export const fetchStatisctics =
  (timeframe: string) => async (dispatch: any) => {
    try {
      const token = await getData(STORAGE.accessToken);
      dispatch({ type: userActionTypes.FETCH_STATISTICS_SUCCESS });
      const response = await Api.get(`/statistics?timeframe=${timeframe}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const statistics = response.data;
      dispatch({
        type: userActionTypes.FETCH_STATISTICS_SUCCESS,
        payload: statistics,
      });
    } catch (error) {
      dispatch({
        type: userActionTypes.FETCH_STATISTICS_FAILURE,
      });
      showToast("error", "Error Fetching !", "Error fetching statistics !");
    }
  };
