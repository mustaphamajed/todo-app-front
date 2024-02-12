import Api from "../../Api/Api";
import { TaskFormData } from "../../interfaces/task-interface";
import { showToast } from "../../utils/helpers";
import { STORAGE, getData } from "../../utils/storage";
import { taskActionTypes } from "../actionTypes/taskTypes";

export const fetchTasks = () => async (dispatch: any) => {
  try {
    dispatch({ type: taskActionTypes.FETCH_TASKS_LOADING });
    const token = await getData(STORAGE.accessToken);
    const response = await Api.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const tasks = response.data.tasks;

    dispatch({
      type: taskActionTypes.FETCH_TASKS_SUCCESS,
      payload: tasks,
    });
  } catch (error) {
    dispatch({
      type: taskActionTypes.FETCH_TASKS_FAILURE,
    });
    showToast("error", "Error Fetch !", "Error fetching data !");
  }
};

export const createTask =
  (taskData: TaskFormData, callback: () => void) => async (dispatch: any) => {
    try {
      dispatch({ type: taskActionTypes.ADD_TASK_LOADING });
      const token = await getData(STORAGE.accessToken);
      const response = await Api.post("/tasks", taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const task = response.data.task;

      dispatch({
        type: taskActionTypes.ADD_TASK_SUCCESS,
        payload: task,
      });
      callback();
    } catch (error) {
      dispatch({
        type: taskActionTypes.ADD_TASK_FAILURE,
      });
      showToast("error", "Error Add !", "Error creating task !");
    }
  };

export const markAsCompleted = (taskId: string) => async (dispatch: any) => {
  try {
    dispatch({ type: taskActionTypes.UPDATE_TASK_LOADING });

    const token = await getData(STORAGE.accessToken);
    const response = await Api.put(`/tasks/markAsCompleted/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const task = response.data.task;
    console.log(task);
    dispatch({
      type: taskActionTypes.UPDATE_TASK_SUCCESS,
      payload: task,
    });
  } catch (error) {
    dispatch({
      type: taskActionTypes.UPDATE_TASK_FAILURE,
    });
    showToast("error", "Error Update status !", "Error updating status !");
  }
};

export const assignTaskToUser =
  (taskId: string, userId: number) => async (dispatch: any) => {
    try {
      dispatch({ type: taskActionTypes.UPDATE_TASK_LOADING });
      const token = await getData(STORAGE.accessToken);
      const response = await Api.put(
        `/tasks/assign/${taskId}`,
        {
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const task = response.data.task;
      dispatch({
        type: taskActionTypes.UPDATE_TASK_SUCCESS,
        payload: task,
      });
    } catch (error) {
      dispatch({
        type: taskActionTypes.UPDATE_TASK_FAILURE,
      });
      showToast("error", "Error Assign task !", "Error assign task !");
    }
  };
