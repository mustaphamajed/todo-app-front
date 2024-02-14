import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../styles/commonStyles";
import { StatsCard } from "../cards";
import { MaterialIcons } from "@expo/vector-icons";
import { SelectBottomSheet } from "../bottomSheet";
import { timeframeData } from "../../utils/helpers";

const StatContainer = ({
  statistics,
  timeFrame,
  setTimeFrame,
}: {
  statistics: any;
  timeFrame: string;
  setTimeFrame: (timeFrame: string) => void;
}) => {
  const [openBottomModal, setOpenBottomModal] = useState<boolean>(false);
  const stats = [
    { id: 1, label: "Total", count: statistics?.total_tasks_count || 0 },
    {
      id: 2,
      label: "Completed",
      count: statistics?.completed_tasks_count || 0,
    },
    {
      id: 3,
      label: "Assigned",
      count: statistics?.total_assigned_tasks_count || 0,
    },
    {
      id: 4,
      label: "Average/h",
      count: Math.floor(statistics?.average_completion_time) || 0,
    },
  ];
  return (
    <View
      style={[
        commonStyles.w100,
        commonStyles.bgWhite,
        commonStyles.pb20,
        commonStyles.br8,

        { elevation: 5, paddingTop: 5 },
      ]}
    >
      <Pressable
        style={[
          commonStyles.row,
          commonStyles.alignCenter,
          commonStyles.mr10,
          { alignSelf: "flex-end", paddingBottom: 5 },
        ]}
        onPress={() => setOpenBottomModal(true)}
      >
        <Text style={[commonStyles.textMedium, commonStyles.fs14]}>
          {timeframeData.find((el) => el.value === timeFrame)?.label}
        </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </Pressable>
      <View style={[commonStyles.row, commonStyles.justifyAround]}>
        {stats.map(({ count, id, label }) => {
          return <StatsCard key={id} count={count} label={label} />;
        })}
      </View>
      <SelectBottomSheet
        openBottom={openBottomModal}
        setOpenBottomModal={() => {
          setOpenBottomModal(false);
        }}
        title={"Select time frame"}
        data={timeframeData.map(({ id, label, value }) => ({
          label: label,
          value: id,
        }))}
        handleSubmit={(value) => {
          const selected = timeframeData.find((el) => el.id === value)?.value;
          setTimeFrame(selected);
          setOpenBottomModal(false);
        }}
        selectedItem={1}
      />
    </View>
  );
};

export default StatContainer;

const styles = StyleSheet.create({});
