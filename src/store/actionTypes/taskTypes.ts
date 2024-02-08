export const FETCH_TASKS_LOADING = "FETCH_TASKS_LOADING";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export enum taskActionTypes {
  FETCH_TASKS_LOADING = "FETCH_TASKS_LOADING",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",
}

interface LoadingFetchAction {
  type: typeof taskActionTypes.FETCH_TASKS_LOADING;
}

interface FetchSuccessAction {
  type: typeof taskActionTypes.FETCH_TASKS_SUCCESS;
  payload: any;
}

interface FetchFailedAction {
  type: typeof taskActionTypes.FETCH_TASKS_FAILURE;
}

export type TaskActionTypes =
  | LoadingFetchAction
  | FetchSuccessAction
  | FetchFailedAction;
