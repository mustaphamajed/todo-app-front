import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthNavigator, AuthStackParamList } from "./authNavigator";
import { MainNavigator, MainStackParamList } from "./mainNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ROUTE_NAMES } from "../utils/routes";
import { STORAGE, getData } from "../utils/storage";

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  main: NavigatorScreenParams<MainStackParamList>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await getData(STORAGE.accessToken);
        setToken(storedToken);
      } catch (error) {
        console.error("Error reading token from AsyncStorage:", error);
      }
    };

    checkToken();
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <RootStack.Screen
          name={ROUTE_NAMES.STACK.MAIN}
          component={MainNavigator}
        />
      ) : (
        <RootStack.Screen
          name={ROUTE_NAMES.STACK.AUTH}
          component={AuthNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};
