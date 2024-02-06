import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthNavigator, AuthStackParamList } from "./authNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE_NAMES } from "../utils/routes";
import { MainNavigator, MainStackParamList } from "./mainNavigator";

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  main: NavigatorScreenParams<MainStackParamList>;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={ROUTE_NAMES.STACK.AUTH}
        component={AuthNavigator}
      />
      <RootStack.Screen
        name={ROUTE_NAMES.STACK.MAIN}
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};
