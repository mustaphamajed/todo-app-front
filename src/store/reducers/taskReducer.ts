import { TaskState } from "../../interfaces/task-interface";
import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  TaskActionTypes,
} from "../actionTypes/taskTypes";

const initialState = {
  loadingFetch: false,
  tasks: [],
};

export const taskReducer = (
  state: TaskState = initialState,
  action: TaskActionTypes
): TaskState => {
  switch (action.type) {
    case FETCH_TASKS_LOADING:
      return { ...state, loadingFetch: true };
    case FETCH_TASKS_SUCCESS:
      return { ...state, loadingFetch: false, tasks: action.payload };

    default:
      return state;
  }
};
