import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import Toast from "react-native-toast-message";

export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
  return passwordRegex.test(password);
};

export const useAppDispatch: () => AppDispatch = useDispatch;

export const showToast = (type: string, text1: string, text2: string) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    position: "top",
  });
};

export const mapUsersData = (users: any) => {
  return users.map((user) => ({
    value: Number(user.id),
    label: user.firstname + " " + user.name,
  }));
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "active":
      return "blue";
    case "pending":
      return "#FFA500";
    case "completed":
      return "green";
    default:
      return "gray";
  }
};

export const timeframeData = [
  { id: 1, label: "Daily", value: "daily" },
  { id: 2, label: "Weekly", value: "weekly" },
  { id: 3, label: "Monthly", value: "monthly" },
];
