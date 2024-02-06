export interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
  phone: string;
  firstname: string;
}

export interface UserState {
  loadingRegister: boolean;
  user: Object | null;
  error: Object | null;
}

export interface FormData {
  firstname: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}

export interface ValidationData {
  [key: string]: string;
}

export interface InputData {
  id: number;
  placeholder: string;
  type:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "visible-password";
  field: string;
  label: string;
}
