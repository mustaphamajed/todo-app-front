import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { AuthNavigator, AuthStackParamList } from "./authNavigator";
import { MainNavigator, MainStackParamList } from "./mainNavigator";
import { ROUTE_NAMES } from "../utils/routes";
import { STORAGE, getData } from "../utils/storage";
import { NavigationRoot } from "../interfaces/navigation-interface";
import { useAppDispatch } from "../utils/helpers";
import { fetchCurrentUser } from "../store/actions/userActions";
import * as SplashScreen from "expo-splash-screen";

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  main: NavigatorScreenParams<MainStackParamList>;
  splash: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const navigation = useNavigation<NavigationRoot>();
  const dispatch = useAppDispatch();
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await getData(STORAGE.accessToken);
        setToken(storedToken);
        if (storedToken) {
          dispatch(fetchCurrentUser());
          navigation.navigate(ROUTE_NAMES.STACK.MAIN, {
            screen: ROUTE_NAMES.MAIN_STACK.HOME,
          });
        } else {
          navigation.navigate(ROUTE_NAMES.STACK.AUTH, {
            screen: ROUTE_NAMES.AUTH_STACK.LOGIN,
          });
        }
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error("Error reading token from AsyncStorage:", error);
      }
    };

    checkToken();
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <RootStack.Screen
        name={ROUTE_NAMES.STACK.SPLASH}
        component={SplashScreen}
      /> */}
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
