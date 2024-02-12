import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

const SelectCard = ({
  label,
  isSelected,
  onPress,
}: {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable
      style={[
        commonStyles.p10,
        commonStyles.my10,
        commonStyles.br8,

        {
          borderWidth: 1,
          backgroundColor: "#E2E8F0",
          borderColor: isSelected ? colors.blue : "#E2E8F0",
        },
      ]}
      onPress={onPress}
    >
      <Text style={[commonStyles.fs16, { color: colors.black }]}>{label}</Text>
    </Pressable>
  );
};

export default SelectCard;

const styles = StyleSheet.create({});
