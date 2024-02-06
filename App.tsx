import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppNavigator } from "./src/navigations/appNavigator";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <Toast bottomOffset={100} />
    </Provider>
  );
}
