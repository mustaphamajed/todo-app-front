import { StyleSheet, Text, View } from "react-native";
import React from "react";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

const TaskCard = ({ item }: { item: any }) => {
  console.log(item);
  return (
    <View
      style={[
        commonStyles.p20,
        commonStyles.mx10,
        commonStyles.my10,
        commonStyles.br10,
        commonStyles.bgWhite,
        { elevation: 5, borderLeftWidth: 3, borderLeftColor: colors.blue },
      ]}
    >
      <View
        style={[
          commonStyles.row,
          commonStyles.justifyBetween,
          commonStyles.alignCenter,
          commonStyles.pb10,
        ]}
      >
        <Text
          style={[
            commonStyles.fs12,
            { color: "#CBD5E1", textTransform: "uppercase" },
          ]}
        >
          {item?.title}
        </Text>
        <View style={[commonStyles.row, commonStyles.alignCenter]}>
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: 50,
              backgroundColor: colors.blue,
              marginRight: 5,
            }}
          />
          <Text
            style={[
              commonStyles.fs12,
              { color: "#64748B", textTransform: "uppercase" },
            ]}
          >
            {item?.status}
          </Text>
        </View>
      </View>
      <View style={[commonStyles.pb10]}>
        <Text style={[commonStyles.fs16, { color: "#334155" }]}>
          {item?.description}
        </Text>
      </View>
      <View style={[commonStyles.row, commonStyles.alignCenter]}>
        <Text style={[commonStyles.fs14, { color: "#CBD5E1" }]}>For </Text>
        <Text> {item?.user?.firstname} </Text>
        <Text>{item?.user?.name}</Text>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
