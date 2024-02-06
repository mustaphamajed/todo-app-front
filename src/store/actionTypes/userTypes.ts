export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export enum userActionTypes {
  REGISTER_LOADING = "REGISTER_LOADING",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
  LOGIN_LOADING = "LOGIN_LOADING",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
}

interface LoadingRegisterAction {
  type: typeof userActionTypes.REGISTER_LOADING;
}

interface RegisterSuccessAction {
  type: typeof userActionTypes.REGISTER_SUCCESS;
  payload: any;
}

interface RegisterFailedAction {
  type: typeof userActionTypes.REGISTER_FAILURE;
}

interface LoadingLoginAction {
  type: typeof userActionTypes.LOGIN_LOADING;
}

interface LoginSuccessAction {
  type: typeof userActionTypes.LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailedAction {
  type: typeof userActionTypes.LOGIN_FAILURE;
}

export type UserActionTypes =
  | LoadingRegisterAction
  | RegisterSuccessAction
  | RegisterFailedAction
  | LoadingLoginAction
  | LoginSuccessAction
  | LoginFailedAction;
