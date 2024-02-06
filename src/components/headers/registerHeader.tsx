import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import commonStyles from "../../styles/commonStyles";
import { Arrowback, WhiteAppLogo } from "../../utils/icons";

const RegisterHeader = ({ onPress }: { onPress: () => void }) => {
  return (
    <View
      style={[
        commonStyles.alignCenter,
        commonStyles.pb20,

        {
          height: "25%",
          justifyContent: "flex-end",
          position: "relative",
        },
      ]}
    >
      <WhiteAppLogo />
      <Text
        style={[commonStyles.textWhite, commonStyles.fs20, commonStyles.pt10]}
      >
        Create an account
      </Text>
      <TouchableOpacity
        style={{ position: "absolute", right: 10, top: "50%" }}
        onPress={onPress}
      >
        <Arrowback />
      </TouchableOpacity>
    </View>
  );
};

export default RegisterHeader;

const styles = StyleSheet.create({});
