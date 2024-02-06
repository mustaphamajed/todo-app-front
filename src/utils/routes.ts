export const ROUTE_NAMES = {
  STACK: {
    MAIN: "main",
    AUTH: "auth",
  },
  AUTH_STACK: {
    LOGIN: "login",
    REGISTER: "register",
  },
  MAIN_STACK: {
    HOME: "home",
  },
} as const;

export type RouteName = keyof typeof ROUTE_NAMES;
