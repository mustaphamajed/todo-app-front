import { InputData } from "../interfaces/user-interface";

export const registerInput: InputData[] = [
  {
    id: 1,
    field: "name",
    placeholder: "Doe",
    label: "Name",
    type: "default",
  },
  {
    id: 2,
    field: "firstname",
    placeholder: "John",
    label: "First name",
    type: "default",
  },
  {
    id: 3,
    field: "email",
    placeholder: "test@gmail.com",
    label: "E-mail",
    type: "email-address",
  },
  {
    id: 4,
    field: "phone",
    placeholder: "12345678",
    label: "Phone",
    type: "numeric",
  },
  {
    id: 5,
    field: "password",
    placeholder: "*******",
    label: "Password",
    type: "default",
  },
  {
    id: 6,
    field: "confirmPassword",
    placeholder: "*******",
    label: "Confirm password",
    type: "default",
  },
];

export const loginInput: InputData[] = [
  {
    id: 1,
    field: "email",
    placeholder: "test@gmail.com",
    label: "E-mail",
    type: "default",
  },

  {
    id: 2,
    field: "password",
    placeholder: "*******",
    label: "Password",
    type: "default",
  },
];
