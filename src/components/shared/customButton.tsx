import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
interface ButtonProps {
  text: string;
  onPress: () => void;
  isPrimary: boolean;
  fullWidth?: boolean;
}

const CustomButton = (props: ButtonProps) => {
  const { fullWidth = true } = props;
  return (
    <TouchableOpacity
      style={[
        !fullWidth ? commonStyles.w45 : commonStyles.w100,
        commonStyles.br8,
        commonStyles.my10,
        commonStyles.alignCenter,
        commonStyles.justifyCenter,
        props.isPrimary ? commonStyles.bgBlue : commonStyles.bgWhite,
        !props.isPrimary && commonStyles.borderW1,
        { height: 45, borderColor: "#E2E8F0" },
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
