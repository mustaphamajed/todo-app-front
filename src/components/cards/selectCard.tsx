import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

const SelectCard = ({
  label,
  isSelected,
}: {
  label: string;
  isSelected: boolean;
}) => {
  return (
    <Pressable
      style={[
        commonStyles.p10,
        commonStyles.my10,
        commonStyles.br8,
        {
          borderWidth: 1,
          borderColor: isSelected ? colors.blue : colors.black,
        },
      ]}
    >
      <Text style={[commonStyles.fs16, { color: colors.black }]}>{label}</Text>
    </Pressable>
  );
};

export default SelectCard;

const styles = StyleSheet.create({});
