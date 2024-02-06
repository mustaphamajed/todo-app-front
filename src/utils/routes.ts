export const ROUTE_NAMES = {
  STACK: {
    MAIN: "Main",
    AUTH: "Auth",
  },
  AUTH_STACK: {
    LOGIN: "login",
    REGISTER: "register",
  },
} as const;

export type RouteName = keyof typeof ROUTE_NAMES;
