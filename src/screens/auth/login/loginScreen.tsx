import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import commonStyles from "../../../styles/commonStyles";
import { CustomInput } from "../../../components/form";
import {
  CustomButton,
  ScreenContainer,
  SocialMediaButton,
} from "../../../components/shared";
import { FacebookIcon, GoogleIcon } from "../../../utils/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoot } from "../../../interfaces/navigation-interface";
import { ROUTE_NAMES } from "../../../utils/routes";

const LoginScreen = () => {
  const navigation = useNavigation<NavigationRoot>();
  return (
    <ScreenContainer>
      <ImageBackground
        source={require("../../../../assets/background.jpg")}
        style={[commonStyles.flex1, commonStyles.justifyCenter]}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Image
            source={require("../../../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <CustomInput
            field="email"
            label="E-mail"
            placeholder="test@gmail.com"
          />
          <CustomInput
            field="password"
            label="Password"
            placeholder="********"
          />
          <View style={{ alignSelf: "flex-end" }}>
            <Text> Forgot Your Password?</Text>
          </View>
          <CustomButton
            text="Login"
            onPress={() => console.log("first")}
            isPrimary={true}
          />
          <CustomButton
            text="Create an account"
            onPress={() => navigation.navigate(ROUTE_NAMES.AUTH_STACK.REGISTER)}
            isPrimary={false}
          />

          <View
            style={[
              commonStyles.row,
              commonStyles.justifyBetween,
              commonStyles.pt20,
            ]}
          >
            <SocialMediaButton text="Google" logo={<GoogleIcon />} />
            <SocialMediaButton text="Facebook" logo={<FacebookIcon />} />
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
