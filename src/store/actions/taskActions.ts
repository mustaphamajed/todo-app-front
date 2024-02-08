import Api from "../../Api/Api";
import { STORAGE, getData } from "../../utils/storage";
import { taskActionTypes } from "../actionTypes/taskTypes";

export const fetchTasks = () => async (dispatch: any) => {
  try {
    console.log("first");
    dispatch({ type: taskActionTypes.FETCH_TASKS_LOADING });
    const token = await getData(STORAGE.accessToken);
    console.log(token);
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
    //   await storeData(STORAGE.accessToken, token);

    //   callback();
  } catch (error) {
    console.log(error);
    //   dispatch({
    //     type: userActionTypes.LOGIN_FAILURE,
    //   });
    //   showToast(
    //     "error",
    //     error.response.data.message,
    //     error.response.data.error
    //   );
  }
};
