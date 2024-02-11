export interface TaskState {
  loadingFetch: boolean;
  tasks: Object[] | [];
}

export interface TaskFormData {
  title: string;
  description: string;
}
