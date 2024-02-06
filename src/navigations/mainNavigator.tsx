import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTE_NAMES } from "../utils/routes";
import { HomeScreen } from "../screens/main";

export type MainStackParamList = {
  home: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name={ROUTE_NAMES.MAIN_STACK.HOME}
        component={HomeScreen}
      />
    </MainStack.Navigator>
  );
};
