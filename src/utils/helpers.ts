import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
  return passwordRegex.test(password);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
