import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenContainer } from "../../../components/shared";
import commonStyles from "../../../styles/commonStyles";
import RegisterHeader from "../../../components/headers/registerHeader";
import { registerInput } from "../../../utils/statics";
import { CustomInput } from "../../../components/form";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoot } from "../../../interfaces/navigation-interface";

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationRoot>();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenContainer>
      <ImageBackground
        source={require("../../../../assets/bg-blue.png")}
        style={[commonStyles.flex1]}
        resizeMode="cover"
      >
        <RegisterHeader onPress={handleGoBack} />
        <View
          style={[commonStyles.bgWhite, commonStyles.flex1, commonStyles.p20]}
        >
          {registerInput.map(({ field, id, label, palaceholder }) => {
            return (
              <CustomInput
                field={field}
                label={label}
                placeholder={palaceholder}
                key={id}
              />
            );
          })}
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
