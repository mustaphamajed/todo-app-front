export interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
  phone: string;
  firstname: string;
}

export interface UserState {
  loadingRegister: boolean;
  user: string | null;
  error: string | null;
}
