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
      <Text
        style={[commonStyles.fs22, commonStyles.textBold, { color: "#030A26" }]}
      >
        {props.count}
      </Text>
      <Text
        style={[
          commonStyles.fs12,
          commonStyles.textMedium,
          { color: "#64748B" },
        ]}
      >
        {props.label}
      </Text>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({});
