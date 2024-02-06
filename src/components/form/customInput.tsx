import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

interface InputProps {
  label: string;
  placeholder: string;
  field: string;
}

const CustomInput = (props: InputProps) => {
  return (
    <View>
      <View style={[commonStyles.pb10]}>
        <Text style={[styles.label, commonStyles.fs14]}>{props.label}</Text>
      </View>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={colors.gray}
        style={[
          commonStyles.w100,
          commonStyles.bgWhite,
          commonStyles.mb20,
          commonStyles.br8,
          { height: 44 },
        ]}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    height: 44,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginBottom: 20,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    color: colors.black,
  },
});
