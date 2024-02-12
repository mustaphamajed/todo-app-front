import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppNavigator } from "./src/navigations/appNavigator";
import { Provider } from "react-redux";
import store from "./src/store/store";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
const PoppingRegular = require("./src/fonts/Poppins-Regular.ttf");
const PoppingMedium = require("./src/fonts/Poppins-Medium.ttf");
const PoppingBold = require("./src/fonts/Poppins-SemiBold.ttf");
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": PoppingRegular,
    "Poppins-Medium": PoppingMedium,
    "Poppins-SemiBold": PoppingBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast bottomOffset={100} />
    </Provider>
  );
}
