import { TaskState } from "../../interfaces/task-interface";
import { FETCH_TASKS_LOADING, TaskActionTypes } from "../actionTypes/taskTypes";

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

    default:
      return state;
  }
};
