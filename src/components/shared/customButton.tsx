import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
interface ButtonProps {
  text: string;
  onPress: () => void;
  isPrimary: boolean;
}

const CustomButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        commonStyles.w100,
        commonStyles.br8,
        commonStyles.my10,
        commonStyles.alignCenter,
        commonStyles.justifyCenter,
        props.isPrimary ? commonStyles.bgBlue : commonStyles.bgWhite,
        { height: 45 },
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          commonStyles.fs14,
          props.isPrimary ? commonStyles.textWhite : commonStyles.textBlack,
          { fontWeight: "500" },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
