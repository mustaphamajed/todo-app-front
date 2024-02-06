import { StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../../styles/commonStyles";
import { StatsCard } from "../cards";

const StatContainer = () => {
  const stats = [
    { id: 1, label: "Overdue", count: 421 },
    { id: 2, label: "To Do", count: 81 },
    { id: 3, label: "Open", count: 72 },
    { id: 4, label: "Due Today", count: 51 },
  ];
  return (
    <View
      style={[
        commonStyles.w100,
        commonStyles.bgWhite,
        commonStyles.p20,
        commonStyles.br8,
        commonStyles.row,
        commonStyles.justifyAround,
        { elevation: 5 },
      ]}
    >
      {stats.map(({ count, id, label }) => {
        return <StatsCard key={id} count={count} label={label} />;
      })}
    </View>
  );
};

export default StatContainer;

const styles = StyleSheet.create({});
