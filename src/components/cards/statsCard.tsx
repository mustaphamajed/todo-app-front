import { StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../../styles/commonStyles";

interface StatProps {
  count: number;
  label: string;
}
const StatsCard = (props: StatProps) => {
  return (
    <View style={[commonStyles.justifyCenter, commonStyles.alignCenter]}>
      <Text>{props.count}</Text>
      <Text>{props.label}</Text>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({});
