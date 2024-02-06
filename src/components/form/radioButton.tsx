import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";

const RadioButton = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <View style={[styles.radioButton, isChecked && styles.checked]}>
      {isChecked && <View style={styles.innerCircle} />}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#94A3B8",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: colors.white,
  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 100,
    backgroundColor: colors.blue,
  },
});
