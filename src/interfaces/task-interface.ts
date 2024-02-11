export interface TaskState {
  loadingFetch: boolean;
  loadingAdd: boolean;
  tasks: Object[] | [];
}

export interface TaskFormData {
  title: string;
  description: string;
}
