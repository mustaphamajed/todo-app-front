export const FETCH_TASKS_LOADING = "FETCH_TASKS_LOADING";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const ADD_TASK_LOADING = "ADD_TASK_LOADING";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

export const UPDATE_TASK_LOADING = "UPDATE_TASK_LOADING";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";

export enum taskActionTypes {
  FETCH_TASKS_LOADING = "FETCH_TASKS_LOADING",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",
  ADD_TASK_LOADING = "ADD_TASK_LOADING",
  ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS",
  ADD_TASK_FAILURE = "ADD_TASK_FAILURE",
  UPDATE_TASK_LOADING = "UPDATE_TASK_LOADING",
  UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE",
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

interface LoadingAddAction {
  type: typeof taskActionTypes.ADD_TASK_LOADING;
}

interface AddSuccessAction {
  type: typeof taskActionTypes.ADD_TASK_SUCCESS;
  payload: any;
}

interface AddFailedAction {
  type: typeof taskActionTypes.ADD_TASK_FAILURE;
}

interface UpdateTaskLoading {
  type: typeof taskActionTypes.UPDATE_TASK_LOADING;
}

interface UpdateTaskSuccess {
  type: typeof taskActionTypes.UPDATE_TASK_SUCCESS;
  payload: any;
}

interface UpdateTaskFailed {
  type: typeof taskActionTypes.UPDATE_TASK_FAILURE;
}

export type TaskActionTypes =
  | LoadingFetchAction
  | FetchSuccessAction
  | FetchFailedAction
  | LoadingAddAction
  | AddSuccessAction
  | AddFailedAction
  | UpdateTaskFailed
  | UpdateTaskLoading
  | UpdateTaskSuccess;
