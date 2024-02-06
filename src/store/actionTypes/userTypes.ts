export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export enum userActionTypes {
  REGISTER_LOADING = "REGISTER_LOADING",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
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
  payload: {
    error: string;
    message: string;
  };
}

export type UserActionTypes =
  | LoadingRegisterAction
  | RegisterSuccessAction
  | RegisterFailedAction;
