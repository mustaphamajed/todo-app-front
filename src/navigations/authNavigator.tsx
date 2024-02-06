import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../screens/auth";
import { ROUTE_NAMES } from "../utils/routes";

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name={ROUTE_NAMES.AUTH_STACK.LOGIN}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name={ROUTE_NAMES.AUTH_STACK.REGISTER}
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};
