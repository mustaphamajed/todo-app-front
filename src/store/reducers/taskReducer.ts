import { TaskState } from "../../interfaces/task-interface";
import {
  ADD_TASK_FAILURE,
  ADD_TASK_LOADING,
  ADD_TASK_SUCCESS,
  ASSIGN_TASK_FAILURE,
  ASSIGN_TASK_LOADING,
  ASSIGN_TASK_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  TaskActionTypes,
} from "../actionTypes/taskTypes";

const initialState = {
  loadingFetch: false,
  loadingAdd: false,
  loadingAssign: false,
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
    case FETCH_TASKS_FAILURE:
      return { ...state, loadingFetch: false };

    case ADD_TASK_LOADING:
      return { ...state, loadingAdd: true };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loadingAdd: false,
        tasks: [action.payload, ...state.tasks],
      };
    case ADD_TASK_FAILURE:
      return { ...state, loadingAdd: false };

    case ASSIGN_TASK_LOADING:
      return { ...state, loadingAssign: true };
    case ASSIGN_TASK_SUCCESS:
      return {
        ...state,
        loadingAssign: false,
        tasks: state.tasks.map((task) =>
          +task?.id === +action.payload?.id ? action.payload : task
        ),
      };
    case ASSIGN_TASK_FAILURE:
      return { ...state, loadingAssign: false };

    default:
      return state;
  }
};
