export interface TaskState {
  loadingFetch: boolean;
  loadingAdd: boolean;
  loadingAssign: boolean;
  tasks: Object[] | [];
}

export interface TaskFormData {
  title: string;
  description: string;
}
