import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

const TasksList = ({ tasks }: { tasks: any }) => {
  return (
    <View style={commonStyles.flex1}>
      <FlatList
        data={tasks}
        style={{ borderWidth: 1, height: 200 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Text style={{ color: colors.black }}>{item?.description}</Text>
          );
        }}
      />
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({});
