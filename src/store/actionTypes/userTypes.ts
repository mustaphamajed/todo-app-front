export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const FETCH_USERS_LOADING = "FETCH_USERS_LOADING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export enum userActionTypes {
  REGISTER_LOADING = "REGISTER_LOADING",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
  LOGIN_LOADING = "LOGIN_LOADING",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  FETCH_USER_LOADING = "FETCH_USER_LOADING",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
  FETCH_USERS_LOADING = "FETCH_USERS_LOADING",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
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

interface LoadingFetchAction {
  type: typeof userActionTypes.FETCH_USER_LOADING;
}

interface FetchSuccessAction {
  type: typeof userActionTypes.FETCH_USER_SUCCESS;
  payload: any;
}

interface FetchFailedAction {
  type: typeof userActionTypes.FETCH_USER_FAILURE;
}

interface FetchUsersLoading {
  type: typeof userActionTypes.FETCH_USERS_LOADING;
}

interface FetchUsersSuccess {
  type: typeof userActionTypes.FETCH_USERS_SUCCESS;
  payload: any;
}

interface FetchUsersFailed {
  type: typeof userActionTypes.FETCH_USERS_FAILURE;
}

export type UserActionTypes =
  | LoadingRegisterAction
  | RegisterSuccessAction
  | RegisterFailedAction
  | LoadingLoginAction
  | LoginSuccessAction
  | LoginFailedAction
  | LoadingFetchAction
  | FetchSuccessAction
  | FetchFailedAction
  | FetchUsersLoading
  | FetchUsersSuccess
  | FetchUsersFailed;
