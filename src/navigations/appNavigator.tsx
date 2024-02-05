import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthNavigator, AuthStackParamList } from "./authNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="auth" component={AuthNavigator} />
    </RootStack.Navigator>
  );
};
