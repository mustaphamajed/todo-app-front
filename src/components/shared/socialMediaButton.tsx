import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";
import commonStyles from "../../styles/commonStyles";
import { GoogleIcon } from "../../utils/icons";

interface SocialMediaButtonProps {
  logo: ReactNode;
  text: string;
}

const SocialMediaButton = (props: SocialMediaButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        commonStyles.bgWhite,
        commonStyles.w45,
        commonStyles.br8,
        commonStyles.alignCenter,
        commonStyles.justifyCenter,
        commonStyles.row,
        { height: 45 },
      ]}
    >
      {props.logo}
      <Text
        style={[
          commonStyles.textBlack,
          commonStyles.fs14,
          commonStyles.pl10,
          commonStyles.textMedium,
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({});
